"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type User = {
  username: string;
  name: string;
  bio?: string;
};

// ✅ Définition du type des props du composant
type ProfileCardProps = {
  user: User;
};


 
export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <Link
      key={user.username}
      href={`/users/${user.username}`}
      className="block  shadow-md rounded-lg p-5 hover:shadow-xl transition border border-gray-100"
    >
      <div className="max-w-sm  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Image
          alt={user.name}
          className="w-20 h-20 rounded-full mx-auto mb-4"
          src="https://img.freepik.com/vecteurs-libre/illustration-du-jeune-homme-souriant_1308-174669.jpg?semt=ais_hybrid&w=740&q=80"
          width={250}
          height={250}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>dt
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-auto">
            {user.bio}
          </p>
          <Link
            href={`users/${user.username}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Voir le profil
          </Link>
        </div>
      </div>
    </Link>
  );
}
