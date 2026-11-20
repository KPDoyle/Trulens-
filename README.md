# Truelens — Confidence, built in.

A responsive Truelens design concept and working submission-management application, based on https://truelens.tech. Built with accessible HTML, CSS and native JavaScript modules. No build dependencies or API keys are required.

## Run and deploy

Requires Node.js 20 or later.

```sh
npm run dev
npm test
npm run build
```

Open http://localhost:4173. Vercel runs `npm run build` and serves `dist/`. The connected GitHub repository is the source of truth; pushes to the production branch deploy automatically through Vercel's Git integration.

## Working features

- Responsive public website, interactive workflow and audience selectors, and an assumption-based business value calculator.
- Portfolio overview and project creation, with separate registers for each project.
- Browser-local document uploads using IndexedDB (PDF, DOCX, XLSX, CSV, TXT, PNG, JPEG; 10 MB per file).
- Document owner, category and revision editing; original-file downloads and text/CSV preview.
- Project-aware searching and filtering.
- Illustrative evidence category map and deterministic category-presence checks. Missing categories generate deduplicated review actions.
- Manual review actions, priority, named owner, status and review notes. Resolution requires a recorded decision.
- Browser-local activity history; CSV exports for documents, review actions and activity.
- Printable HTML evidence reports and JSON metadata backups.
- Demo enquiries lead to the existing Truelens website's contact section.

## Scope and data handling

This application is a working local-first prototype. It is **not** connected to Truelens' production systems or an AI document-analysis service. Category checks do not read documents or determine regulatory compliance. The sample projects, findings and reviewers are illustrative. The evidence checklist is not exhaustive or authoritative. A qualified professional must determine applicable requirements and assess the underlying evidence.

Projects, document records, review actions and activity are persisted in localStorage. File binaries are persisted in IndexedDB. No shared authentication, cloud synchronisation, email delivery, payments or regulator submission is implemented. Data is specific to the browser and origin; clearing site storage removes it. JSON backups contain records only and are not importable through the interface; download original files separately. Browser-local history is editable and is not an immutable audit log.

External resources: Google Fonts (DM Sans / Manrope), an architectural photograph served by Unsplash, links to the original Truelens website and UK government guidance. No analytics are installed. The Truelens wordmark is rendered as text with a geometric icon. Featured organisation names reflect the original website; no new endorsements are asserted.

For a production multi-user release, connect authenticated server storage, role-based permissions, a configured analysis service with verified regulatory sources, monitored file handling, a durable audit trail, backups and a suitable privacy policy.
