import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <header className="bg-white shadow-md py-4">
          <nav className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-xl font-bold text-blue-600">DevLink</h1>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-600">
                Accueil
              </Link>
              <Link href="/profil" className="hover:text-blue-600">
                Profil
              </Link>
              <Link href="/liens" className="hover:text-blue-600">
                Liens
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-10">{children}</main>

        <footer className="bg-gray-100 text-center py-4 mt-10 text-gray-600">
          © {new Date().getFullYear()} DevLink. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}
