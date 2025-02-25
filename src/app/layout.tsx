import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MyHeader } from "./components/header";
import { MyFooter } from "./components/footer";
import { Providers } from "./providers";
import { configApp } from "../../ts/configApp";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: configApp.titleApp,
  description: "Ejemplo de un layout en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <MyHeader />
            <main className="flex-1 h-full pt-[20vh]">{children}</main>
            <MyFooter />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
