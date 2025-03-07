import type { Metadata } from "next";
import { Toaster } from "sonner";
import { AuthProvider } from "@/components/providers/auth-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Azki Web Application",
  description: "Welcome to azki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <AuthProvider>
        <body>{children}</body>
        <Toaster position="top-right" expand richColors />
      </AuthProvider>
    </html>
  );
}
