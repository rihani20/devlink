import React from "react";
import users from "@/app/data/users.json";
import ProfileCard from "../Components/ProfileCard";


export const metadata = {
  title: "Liste des utilisateurs | DevLink",
  description: "Découvrez tous les profils développeurs sur DevLink.",
};

export default function UsersPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-10 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">👥 Liste des utilisateurs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {users.map((user,index) => (
          <ProfileCard key={index} user={user} />
        ))}
      </div>
    </main>
  );
}
