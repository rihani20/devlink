import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-blue-600">DevLink</h1>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-800 hover:text-blue-600">
            Accueil
          </Link>
          <Link href="/profil" className="text-gray-800 hover:text-blue-600">
            Profil
          </Link>
          <Link href="/users" className="text-gray-800 hover:text-blue-600">
            Users
          </Link>
          <Link href="/liens" className="text-gray-800 hover:text-blue-600">
            Liens
          </Link>
        </div>
      </nav>
    </header>
  );
}
