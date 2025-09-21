// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Pineapple", // This is the title in the browser tab
  description: "Your partner in healthy eating.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-start gap-24 p-8 md:p-24 bg-black">
          <div className="z-10 w-full max-w-5xl flex flex-col items-center gap-24">
            <Header />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}