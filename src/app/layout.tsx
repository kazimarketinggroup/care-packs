import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Care Packs | Turn corporate goodwill into something a family can hold in their hands.",
  description:
    "Care Packs gives organisations a practical way to create measurable, hands-on impact. Your people build the packs. Councils, family hubs and food banks put them straight into the hands of families who need them.",
  icons: {
    icon: "/assets/icons/care-packs-header-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased selection:bg-[#ec008c] selection:text-white">
        {children}
      </body>
    </html>
  );
}
