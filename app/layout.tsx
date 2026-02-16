import type { Metadata } from "next";
import { Geist, Geist_Mono, Antonio, Arvo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const antonio = Antonio({
  weight: "700", // Antonio usually looks good in bold for display
  variable: "--font-champion-gothic", // Keeping the variable name to minimize refactoring in other files
  subsets: ["latin"],
});

const arvo = Arvo({
  weight: ["400", "700"],
  variable: "--font-arvo",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portafolio",
  description: "Desarrollador Full Stack Junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonio.variable} ${arvo.variable} antialiased`}
      >
        {children}
      </body>


    </html>
  );
}
