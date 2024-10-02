import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import SessionProvidor from "@/utils/SessionProvider";
import { auth } from "@/auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ANGELSTA",
  description: "financial analysis platform",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvidor session={session}>
          <NavMenu session={session} />

          {children}
        </SessionProvidor>
      </body>
    </html>
  );
}
