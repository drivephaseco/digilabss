# Bhansali Stainless — Stainless Steel Flanges Category Page

B2B product category page built for the Bhansali Stainless hiring assignment. Targets industrial buyers in Saudi Arabia, UAE, and the wider Middle East.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · React Hook Form + Zod

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

| Variable | Purpose | Required? |
|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID (e.g. `GTM-ABCD123`) | Optional — falls back to a placeholder ID |
| `GOOGLE_SHEET_WEBHOOK_URL` | Apps Script Web App URL that appends enquiry submissions to a Google Sheet | Optional — falls back to console log + local JSON file in dev |

## Enquiry storage (verifiable submission logging)

The enquiry form posts to `/api/enquiry` (`src/app/api/enquiry/route.ts`), which:

1. **If `GOOGLE_SHEET_WEBHOOK_URL` is set** — forwards the submission to a Google Apps Script Web App bound to a Sheet.
2. **Otherwise** — logs the submission to the server console (visible in Vercel function logs) and, when the filesystem is writable (local dev), appends it to `data/submissions.local.json` for easy inspection.

### Setting up the Google Sheet webhook

1. Create a Google Sheet with header row: `name | email | phone | gradeInterest | message | submittedAt`
2. Extensions → Apps Script, paste:
   ```javascript
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     sheet.appendRow([data.name, data.email, data.phone, data.gradeInterest, data.message || "", data.submittedAt]);
     return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
   }
   ```
3. Deploy → New deployment → Web app → Execute as "Me", access "Anyone"
4. Copy the deployment URL into `GOOGLE_SHEET_WEBHOOK_URL`

## Tracking

- GTM container loads in `src/app/layout.tsx`
- A mock GA4 `generate_lead` event fires into `dataLayer` on successful form submission (`src/lib/analytics.ts`) — wire a GA4 tag in GTM to pick it up
- A `contact_click` event fires on WhatsApp/quick-quote widget clicks

## Animations

- Hero content fades/slides in on load (`src/components/Hero.tsx`)
- Product overview feature cards fade in on scroll (`src/components/ProductOverview.tsx`)
- Grade selector cards lift + shadow on hover, scale down on tap (`src/components/GradeSelector.tsx`)
- Mobile menu animates open/closed height (`src/components/Header.tsx`)

## Deployment (Vercel)

```bash
npm i -g vercel
vercel
```

Set the environment variables above in the Vercel project settings, then redeploy.

## Performance notes

- Images served via `next/image` with `remotePatterns` allowing UX Pilot's asset storage — swap in final production imagery before launch
- Font loaded via `<link>` (not `next/font`) for portability across build environments
- No client-side libraries beyond Framer Motion + React Hook Form/Zod to keep bundle size and INP low
