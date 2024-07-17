import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";



const inter = Inter({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
  variable: "--font-inter"

});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-darker-blue ${inter.variable}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
