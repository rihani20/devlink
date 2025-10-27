import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur DevLink 🚀</h1>
      <p className="text-lg text-gray-600">
        Crée ton profil et partage tes liens facilement.
      </p>
      <Link
        href="/profil"
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Commencer
      </Link>
    </main>
  );
}
