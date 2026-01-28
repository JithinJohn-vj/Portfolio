#!/usr/bin/env python3
"""
Generate a simple CV PDF without external dependencies.
Writes a minimal PDF with text using Helvetica.
"""

from __future__ import annotations

import os
import textwrap
from datetime import date


def _pdf_escape(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace("(", "\\(")
        .replace(")", "\\)")
        .replace("\r", "")
    )


def _wrap_lines(text: str, width: int) -> list[str]:
    lines: list[str] = []
    for para in text.split("\n"):
        para = para.rstrip()
        if not para:
            lines.append("")
            continue
        lines.extend(textwrap.wrap(para, width=width, break_long_words=False, break_on_hyphens=False))
    return lines


def build_pdf(pages: list[list[str]]) -> bytes:
    # PDF coordinates: origin bottom-left. We'll position text top-down.
    objects: list[bytes] = []

    def add_obj(content: bytes) -> int:
        objects.append(content)
        return len(objects)  # 1-based object numbers

    # 1) Catalog, 2) Pages, then page objects and content streams, plus font
    font_obj = add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    page_objs: list[int] = []
    content_objs: list[int] = []

    # Build each page content
    for page_lines in pages:
        # Layout constants
        left = 54  # 0.75"
        top = 792 - 54  # letter height 11" => 792pt
        font_size = 11
        leading = 14
        max_lines = int((top - 54) / leading)

        # Ensure within page
        page_lines = page_lines[:max_lines]

        # Start text object
        y = top
        parts = [b"BT", f"/F1 {font_size} Tf".encode("ascii")]
        parts.append(f"{left} {y} Td".encode("ascii"))
        for i, line in enumerate(page_lines):
            if i != 0:
                parts.append(f"0 {-leading} Td".encode("ascii"))
                y -= leading
            if line == "":
                continue
            parts.append(f"({_pdf_escape(line)}) Tj".encode("utf-8"))
        parts.append(b"ET")

        stream = b"\n".join(parts) + b"\n"
        content = b"<< /Length %d >>\nstream\n%s\nendstream" % (len(stream), stream)
        content_obj = add_obj(content)
        content_objs.append(content_obj)

        # Page object
        page = (
            b"<< /Type /Page /Parent 2 0 R "
            b"/MediaBox [0 0 612 792] "
            b"/Resources << /Font << /F1 %d 0 R >> >> "
            b"/Contents %d 0 R >>"
            % (font_obj, content_obj)
        )
        page_obj = add_obj(page)
        page_objs.append(page_obj)

    kids = b" ".join([f"{n} 0 R".encode("ascii") for n in page_objs])
    pages_obj = add_obj(b"<< /Type /Pages /Kids [ %s ] /Count %d >>" % (kids, len(page_objs)))
    # Insert Pages object as #2 by swapping: we built font first (#1), then contents/pages; easiest: enforce /Parent 2 0 R above is OK because we add pages_obj last but reference 2.
    # Fix by moving pages_obj to #2 and shifting references is complex; instead, build in correct order:
    # We'll rebuild with correct ordering below.
    raise RuntimeError("build_pdf should be called via build_pdf_correct_order")


def build_pdf_correct_order(pages: list[list[str]]) -> bytes:
    objects: list[bytes] = []

    def add_obj(content: bytes) -> int:
        objects.append(content)
        return len(objects)

    # 1 Catalog placeholder, 2 Pages placeholder
    catalog_obj = add_obj(b"<< /Type /Catalog /Pages 2 0 R >>")
    assert catalog_obj == 1
    pages_obj_num = add_obj(b"<< >>")
    assert pages_obj_num == 2

    font_obj = add_obj(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    page_obj_nums: list[int] = []

    for page_lines in pages:
        left = 54
        top = 792 - 54
        font_size = 11
        leading = 14
        max_lines = int((top - 54) / leading)
        page_lines = page_lines[:max_lines]

        parts = [b"BT", f"/F1 {font_size} Tf".encode("ascii"), f"{left} {top} Td".encode("ascii")]
        for i, line in enumerate(page_lines):
            if i != 0:
                parts.append(f"0 {-leading} Td".encode("ascii"))
            if line == "":
                continue
            parts.append(f"({_pdf_escape(line)}) Tj".encode("utf-8"))
        parts.append(b"ET")

        stream = b"\n".join(parts) + b"\n"
        content = b"<< /Length %d >>\nstream\n%s\nendstream" % (len(stream), stream)
        content_obj = add_obj(content)

        page = (
            b"<< /Type /Page /Parent 2 0 R "
            b"/MediaBox [0 0 612 792] "
            b"/Resources << /Font << /F1 %d 0 R >> >> "
            b"/Contents %d 0 R >>"
            % (font_obj, content_obj)
        )
        page_obj = add_obj(page)
        page_obj_nums.append(page_obj)

    kids = b" ".join([f"{n} 0 R".encode("ascii") for n in page_obj_nums])
    pages_obj = b"<< /Type /Pages /Kids [ %s ] /Count %d >>" % (kids, len(page_obj_nums))
    objects[1] = pages_obj  # replace placeholder at obj #2

    # Build xref
    header = b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"
    offsets = [0]
    body = b""
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(header) + len(body))
        body += f"{i} 0 obj\n".encode("ascii") + obj + b"\nendobj\n"

    xref_offset = len(header) + len(body)
    xref = [b"xref\n", f"0 {len(objects)+1}\n".encode("ascii")]
    xref.append(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        xref.append(f"{off:010d} 00000 n \n".encode("ascii"))
    xref_bytes = b"".join(xref)

    trailer = (
        b"trailer\n"
        + b"<< "
        + f"/Size {len(objects)+1} /Root 1 0 R".encode("ascii")
        + b" >>\nstartxref\n"
        + f"{xref_offset}\n".encode("ascii")
        + b"%%EOF\n"
    )

    return header + body + xref_bytes + trailer


def main() -> None:
    name = "Jithin John"
    title = "Full Stack Developer"
    location = "Gothenburg, Sweden"
    email = "jithinjohnptr@gmail.com"
    phone = "+46 793493589"
    linkedin = "linkedin.com/in/jithin-john-dev"
    github = "github.com/JithinJohn-vj"

    summary = (
        "Versatile Full Stack Developer with 4+ years of experience building robust and scalable web applications. "
        "Strong in Python (Django/FastAPI) for backend development and React/Next.js for modern frontend experiences. "
        "Experienced with Docker, Kubernetes, GCP, and Terraform for cloud-native deployments."
    )

    skills = [
        "Python, Django, FastAPI, Flask",
        "React, Next.js, TypeScript, JavaScript",
        "REST APIs, Auth (JWT/OAuth), GraphQL (basic)",
        "PostgreSQL, MongoDB, MySQL, SQLite",
        "Docker, Kubernetes, GCP, AWS, Terraform, GitHub Actions",
    ]

    experience = [
        ("Fullstack Developer — Readymade AB (Skene, Sweden) | Sep 2025 – Present",
         [
             "Built and maintained responsive web applications with React and Next.js.",
             "Developed backend services and REST APIs using Python/Django.",
             "Improved performance with caching strategies, lazy loading, and Core Web Vitals optimizations.",
             "Set up CI/CD pipelines with GitHub Actions to automate lint/test/build and deployments.",
         ]),
        ("Fullstack Developer — LymData Labs Pvt. Ltd. (Remote) | Apr 2024 – Mar 2025",
         [
             "Designed UIs using React and Next.js; built SSR/SSG pages for SEO and performance.",
             "Integrated REST APIs using FastAPI and Django.",
             "Implemented microservices with Docker/Kubernetes; deployed on GCP; IaC with Terraform.",
         ]),
        ("Fullstack Developer — Softroniics Solutions (Calicut, India) | Jul 2023 – Mar 2024",
         [
             "Built e-commerce features with Django/FastAPI backend and React/Next.js frontend.",
             "Implemented secure auth (JWT/OAuth) and optimized PostgreSQL/MongoDB queries.",
         ]),
    ]

    education = [
        "Halmstad University, Sweden — Information Technology | 2021 – 2023",
        "University of Calicut, India — Master of Computer Applications (MCA) | 2016 – 2019",
        "University of Calicut, India — Bachelor of Computer Science (BSc) | 2013 – 2016",
    ]

    lines: list[str] = []
    lines.append(f"{name} — {title}")
    lines.append(f"{location} | {email} | {phone}")
    lines.append(f"LinkedIn: {linkedin} | GitHub: {github}")
    lines.append("")
    lines.append("PROFESSIONAL SUMMARY")
    lines.extend(_wrap_lines(summary, width=92))
    lines.append("")
    lines.append("TECHNICAL SKILLS")
    for s in skills:
        lines.extend(_wrap_lines(f"- {s}", width=92))
    lines.append("")
    lines.append("EXPERIENCE")
    for heading, bullets in experience:
        lines.append(heading)
        for b in bullets:
            lines.extend(_wrap_lines(f"  • {b}", width=92))
        lines.append("")
    lines.append("EDUCATION")
    for e in education:
        lines.append(f"- {e}")
    lines.append("")
    lines.append(f"Generated: {date.today().isoformat()}")

    # paginate roughly
    max_lines_per_page = 46
    pages: list[list[str]] = []
    for i in range(0, len(lines), max_lines_per_page):
        pages.append(lines[i : i + max_lines_per_page])

    pdf_bytes = build_pdf_correct_order(pages)

    out_path = os.path.join(os.path.dirname(__file__), "..", "public", "Jithin_John_CV.pdf")
    out_path = os.path.abspath(out_path)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "wb") as f:
        f.write(pdf_bytes)

    print(f"Wrote {out_path} ({len(pdf_bytes)} bytes)")


if __name__ == "__main__":
    main()



