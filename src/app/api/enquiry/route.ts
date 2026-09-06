import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";

const enquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  gradeInterest: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const submission = {
    ...parsed.data,
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (webhookUrl) {
    // Forward to a Google Apps Script Web App bound to a Sheet.
    // See README.md "Enquiry storage" section for the Apps Script snippet.
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
        redirect: "follow",
      });
      const text = await res.text();
      if (!res.ok) {
        console.error(
          `Google Sheet webhook returned ${res.status} ${res.statusText}. Body: ${text.slice(0, 500)}`
        );
      } else {
        console.log("[enquiry submission forwarded to Sheet webhook]", res.status, text.slice(0, 200));
      }
    } catch (err) {
      console.error("Failed to forward enquiry to Google Sheet webhook", err);
    }
  } else {
    // Local/dev fallback so the submission is verifiable without external
    // setup: appended to a JSON file readable from the repo, and logged.
    console.log("[enquiry submission]", submission);
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "submissions.local.json");
      await fs.mkdir(dataDir, { recursive: true });
      let existing: unknown[] = [];
      try {
        existing = JSON.parse(await fs.readFile(filePath, "utf-8"));
      } catch {
        existing = [];
      }
      existing.push(submission);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
    } catch (err) {
      // Read-only filesystem (e.g. Vercel serverless) - console log above
      // is still verifiable via the function logs.
      console.error("Could not persist to local file (expected on serverless):", err);
    }
  }

  return NextResponse.json({ ok: true });
}
