'use client'
import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import Compteur from "../Components/Compteur";
import toast, { Toaster } from "react-hot-toast";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Mp() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<Omit<User, "id">>({ name: "", email: "" });
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  // Charger depuis localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
      setLoading(false);
    } else {
      // Si pas dans localStorage, charger depuis l'API
      async function fetchUsers() {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          if (!res.ok) throw new Error("Erreur lors du chargement");
          const data: User[] = await res.json();
          const initialUsers = data.slice(0, 5);
          setUsers(initialUsers);
          localStorage.setItem("users", JSON.stringify(initialUsers));
        } catch (e: any) {
          toast.error(e.message);
        } finally {
          setLoading(false);
        }
      }
      fetchUsers();
    }
  }, []);

  // Mettre à jour localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) {
      toast.error("Champs obligatoires");
      return;
    }

    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    const created: User = { id: newId, ...newUser };
    setUsers([...users, created]);
    setNewUser({ name: "", email: "" });
    toast.success("Utilisateur ajouté !");
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
    toast.success("Utilisateur supprimé !");
  };

  const updateUser = (id: number, updatedData: Partial<User>) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, ...updatedData } : u)));
    toast.success("Utilisateur modifié !");
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col items-center py-10 bg-gray-50 text-gray-900">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-3xl font-bold mb-6">👥 Gestion des utilisateurs</h1>

      {/* Formulaire d’ajout */}
      <form onSubmit={addUser} className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Nom"
          value={newUser.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewUser({ ...newUser, name: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewUser({ ...newUser, email: e.target.value })
          }
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ajouter
        </button>
      </form>

      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher par nom..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        className="border p-2 rounded mb-6 w-full max-w-md"
      />

      {/* Loader animé */}
      {loading && (
        <div className="flex justify-center items-center my-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {/* Liste */}
      {!loading && filteredUsers.length === 0 && (
        <p className="text-center text-gray-500">Aucun utilisateur trouvé</p>
      )}

      <div className="grid grid-cols-1 gap-4 w-full max-w-2xl">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center bg-white border p-4 rounded shadow-sm"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => updateUser(user.id, { name: user.name + " ✅" })}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
              >
                Modifier
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Compteur */}
      <div className="mt-10">
        <Compteur />
      </div>
    </main>
  );
}
