import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"], // Specify individual weights
  variable: "--font-montserrat",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Specify individual weights
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "ANGELSTA",
  description: "financial analysis platform",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default async function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfairDisplay.variable} antialiased`}
      >
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
