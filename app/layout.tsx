import type { Metadata } from "next";
import { Outfit, DM_Sans, Delicious_Handrawn } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const deliciousHandrawn = Delicious_Handrawn({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shubhankar Singh — Product Designer",
  description:
    "Portfolio of Shubhankar Singh, a product designer crafting intuitive digital products in fintech and consumer apps.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${deliciousHandrawn.variable}`}>
      <body className="bg-paper text-ink font-display antialiased">{children}</body>
    </html>
  );
}
