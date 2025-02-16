import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MyHeader } from "./components/header";
import { MyFooter } from "./components/footer";
import { Providers } from "./providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi App con Layout",
  description: "Ejemplo de un layout en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <MyHeader />
            {/* <div className="w-full h-12 sm:h-0"></div> */}
            <main className="flex-1 p-4">{children}</main>
            <MyFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
