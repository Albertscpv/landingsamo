import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Tkyo",
  description: "Agencia digital en busca de ayudar a los emprendedores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-inter">
        {children}
        <Footer />
      </body>
    </html>
  );
}
