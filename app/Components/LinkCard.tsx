"use client";

import Link from "next/link";

type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="bg-blue-600 text-white p-3 rounded-lg text-center hover:bg-blue-700 transition"
    >
      {title}
    </Link>

    /*     <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition border border-gray-200 text-center group"
    >
      <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="text-gray-500 text-sm break-words">{url}</p>
    </a> */
  );
}
