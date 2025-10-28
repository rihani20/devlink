"use client"; // IMPORTANT : rend le composant Client

import React from "react";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  color?: "gray" | "red" | "blue" | "green";
  type?: "button" | "submit" | "reset";
};

export default function Button({
  label = "Click Here",
  onClick,
  color= "green",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-${color}-600 hover:bg-white hover:text-gray-500 text-white font-semibold mt-3 p-2`}
    >
      {label}
    </button>
  );
}
