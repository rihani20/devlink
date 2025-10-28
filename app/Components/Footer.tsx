import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 text-gray-600">
      © {new Date().getFullYear()} DevLink. Tous droits réservés.
    </footer>
  );
}
