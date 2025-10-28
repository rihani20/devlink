import React from "react";
import users from "@/app/data/users.json";
import Link from "next/link";
import LinkCard from "./../../Components/LinkCard";

//THIS FDUNCTION PREDIFINI
export async function generateStaticParams() {
  return users.map((user) => ({ username: user.username }));
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const user = users.find((u) => u.username === username);

  if (!user) {
    return (
      <h1 className="text-center text-2xl mt-20">Utilisateur non trouvé 😢</h1>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
      <p className="text-gray-600 mb-6">{user.bio}</p>

      <div className="flex flex-col gap-3 w-full max-w-md">
        {user.links.map((link, index) => (
          <LinkCard key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </main>
  );
}
