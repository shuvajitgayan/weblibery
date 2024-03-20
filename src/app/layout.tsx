import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LogoBar from "@/components/logoBar/logoBar";
import ToastProvider from "@/components/toast/tost";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "weblibery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LogoBar/>
        {children}
        <ToastProvider/>
      </body>
    </html>
  );
}
