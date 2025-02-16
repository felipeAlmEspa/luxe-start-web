import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MyHeader } from "./components/header";
import { MyFooter } from "./components/footer";
import { Providers } from "./providers"; // Importa el nuevo Providers

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
            <main className="flex-1 p-4 mt-[60px]">{children}</main>{" "}
            {/* Ajusta mt según la altura de tu encabezado */}
            <MyFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
