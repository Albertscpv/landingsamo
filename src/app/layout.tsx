import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";



export const metadata: Metadata = {
  title: "Samo D",
  description: "Agencia Digital en busca de ayudar a los emprendedores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="">
        <div className="">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
