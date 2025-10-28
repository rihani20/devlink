import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "DevLink",
  description: "Partage facilement tes liens de développeur avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
