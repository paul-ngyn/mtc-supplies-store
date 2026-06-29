# Maple Trade Corp — mapletradecorp.com

Brief 1-2 sentence description of what this site/project is and does.

## Tech Stack
- Frontend: React / Next.js
- Hosting: Vercel
- Email: Resend
- DNS/Domain: GoDaddy

## Getting Started

### Prerequisites
- Node.js version X
- npm/yarn/pnpm

### Installation
\`\`\`bash
git clone <repo-url>
cd mapletradecorp
npm install
\`\`\`

### Environment Variables
Create a `.env.local` file with:
\`\`\`
RESEND_API_KEY=
NEXT_PUBLIC_...=
\`\`\`
(Never commit real values — link to where to get/request these.)

### Running Locally
\`\`\`bash
npm run dev
\`\`\`

## Deployment
- Hosted on Vercel, auto-deploys from `main` branch
- Domain: mapletradecorp.com (GoDaddy DNS → Vercel)
- Note: receiving email is on `inbound.mapletradecorp.com` subdomain, not root — see DNS section

## DNS / Domain Notes
- A/CNAME records point to Vercel (see Vercel dashboard for current values)
- Root domain has live human inboxes — do NOT modify MX records on `@`
- Resend handles outbound sending + inbound on subdomain only

## Project Structure
\`\`\`
/pages or /app       — routes
/components          — UI components
/lib                 — utilities, API clients
\`\`\`

## Contributing / Notes
Anything team-specific — who to contact, known issues, etc.
