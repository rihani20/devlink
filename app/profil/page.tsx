import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
}

const data = await getData();

export default function Profil() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Profil : {data.name}</h1>
      <p>Email : {data.email}</p>
      <p>Ville : {data.address.city}</p>
    </div>
  );
}
