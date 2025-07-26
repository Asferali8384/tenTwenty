"use client";

import React from "react";

export default function LoaderSpinner({ size = 2, color = "#dcab63", label }) {
  return (
    <div className="flex justify-center items-center w-full h-80 space-x-2">
      {/* <svg
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
          strokeWidth="2"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg> */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
      .clock-loader * {
        stroke: #dcab63;
        fill: none;
        stroke-linecap: round;
        animation: draw-erase 5s ease-in-out infinite;
      }

      .clock-loader circle {
        stroke-width: 5;
        stroke-dasharray: 282;
        stroke-dashoffset: 282;
        animation-delay: 0s;
      }

      .clock-loader .hour {
        stroke-width: 4;
        stroke-dasharray: 25;
        stroke-dashoffset: 25;
        animation-delay: 0.5s;
      }

      .clock-loader .minute {
        stroke-width: 2;
        stroke-dasharray: 20;
        stroke-dashoffset: 20;
        animation-delay: 1s;
      }

      @keyframes draw-erase {
        0% {
          stroke-dashoffset: var(--dashoffset, 100%);
        }
        50% {
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dashoffset: var(--dashoffset, 100%);
        }
      }
    `}
        </style>

        <g className="clock-loader">
          {/* Outer circle */}
          <circle cx="50" cy="50" r="45" style={{ "--dashoffset": 282 }} />

          {/* Hour hand */}
          <line
            className="hour"
            x1="50"
            y1="50"
            x2="50"
            y2="25"
            style={{ "--dashoffset": 25 }}
          />

          {/* Minute hand */}
          <line
            className="minute"
            x1="50"
            y1="50"
            x2="70"
            y2="50"
            style={{ "--dashoffset": 20 }}
          />
        </g>
      </svg>

      {label && <span className="text-gray-600 font-medium">{label}</span>}
    </div>
  );
}
