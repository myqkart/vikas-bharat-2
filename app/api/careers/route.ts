import { NextResponse } from "next/server";
import { getCareerRole } from "@/lib/careers";

export const runtime = "nodejs";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9]{10}$/;

function isResumeFile(file: File) {
  const name = file.name.toLowerCase();
  return (
    name.endsWith(".pdf") ||
    name.endsWith(".doc") ||
    name.endsWith(".docx") ||
    file.type === "application/pdf" ||
    file.type === "application/msword" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
}

function text(form: FormData, key: string) {
  return String(form.get(key) ?? "").trim();
}

export async function POST(request: Request) {
  const form = await request.formData();
  const name = text(form, "name");
  const phone = text(form, "phone");
  const email = text(form, "email");
  const location = text(form, "location");
  const experience = text(form, "experience");
  const role = text(form, "role");
  const resume = form.get("resume");

  if (!name || !phone || !email || !location || !experience || !role) {
    return NextResponse.json(
      { error: "Please fill name, phone, email, location, experience and role." },
      { status: 400 },
    );
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json(
      { error: "Enter a 10-digit mobile number." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }
  if (!getCareerRole(role)) {
    return NextResponse.json(
      { error: "Please choose a listed opening." },
      { status: 400 },
    );
  }
  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json(
      { error: "Please upload your resume." },
      { status: 400 },
    );
  }
  if (!isResumeFile(resume)) {
    return NextResponse.json(
      { error: "Resume must be a PDF, DOC or DOCX file." },
      { status: 400 },
    );
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json(
      { error: "Resume must be 5 MB or smaller." },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
