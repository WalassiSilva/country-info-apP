import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Country Info App",
  description: "Knowing your country a bit better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`cn(${inter.className}, bg-[#176087] )`}>
        <div className=" text-center px-4 py-2"> <Logo /></div>
        <h1 className="text-3xl font-bold text-white text-center">
          Country Info App
        </h1>
        {children}
      </body>
    </html>
  );
}
