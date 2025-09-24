# NexOrganize Web Client

This is the Next.js web client for NexOrganize - a modern, cross-platform CRM for freelancers and agencies.

## Features

- **Client Management:** Store contacts, track communication, and manage relationships
- **Project & Task Tracking:** Organize projects, milestones, and tasks
- **Invoicing:** Create, send, and track invoices and payments
- **Dashboard:** Visual overview of your business activity
- **Authentication:** Secure login and signup system
- **Responsive Design:** Works on desktop and mobile devices

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with modern design
- **State Management:** React Context API
- **Authentication:** NextAuth.js (planned)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/           # App Router pages and layouts
├── components/    # Reusable UI components
├── lib/          # Utilities and configurations
├── types/        # TypeScript type definitions
└── styles/       # Global styles and Tailwind config
```

## Development

The app uses modern Next.js patterns:
- App Router for routing and layouts
- Server and Client Components
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality

## Deployment

The app is configured for deployment on Vercel and other modern platforms. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.