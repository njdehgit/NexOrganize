import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexOrganize - CRM for Freelancers",
  description: "Modern, cross-platform CRM for freelancers and agencies. Manage clients, projects, tasks, and invoices—all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
