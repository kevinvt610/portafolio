import type { Metadata } from "next";
import { Geist, Geist_Mono, Antonio, Arvo, Anton, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const antonio = Antonio({
  weight: ["100", "700"], // Added 100 for thin variant
  variable: "--font-champion-gothic",
  subsets: ["latin"],
});

const arvo = Arvo({
  weight: ["400", "700"],
  variable: "--font-arvo",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonio.variable} ${arvo.variable} ${anton.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>


    </html>
  );
}
