"use client";
import { useState } from "react";

export default function Compteur() {
    const [count, setCount] = useState(0);
    const buttonClass =
        "px-4 py-2 m-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition";
    return (
        <div className="flex flex-col items-center mt-10">
            <p className="text-xl font-semibold mb-4">Compteur : {count}</p>
            <div>
                <button
                    className={buttonClass}
                    onClick={() => setCount(prevCount => prevCount + 1)}
                >
                    Increment
                </button>
                <button
                    className={buttonClass}
                    onClick={() => setCount(prevCount => prevCount - 1)}
                >
                    Decrement
                </button>
                <button
                    className={buttonClass + " bg-red-500 hover:bg-red-600"}
                    onClick={() => setCount(0)}
                >
                    Réinitialiser
                </button>
            </div>
        </div>
    );
}
