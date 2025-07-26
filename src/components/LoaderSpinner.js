"use client";

import React from "react";

export default function LoaderSpinner({ size = 2, color = "#dcab63", label }) {
  return (
    <div className="flex justify-center items-center w-full h-80 space-x-2">
      <svg
        className={`animate-spin h-20 w-20`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{ color }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      {label && <span className="text-gray-600 font-medium">{label}</span>}
    </div>
  );
}
