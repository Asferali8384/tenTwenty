"use client";

import { useLoginMutation } from "@/reduxslice/authApi";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React, { useState, useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [loginUser] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await loginUser(formData).unwrap();

      console.log(response.user, "User Data");

      if (response.message === "Login successful") {
        localStorage.setItem("user", JSON.stringify(response.user));

        router.push("/dashboard");
      } else {
        console.log("Login failed");
        // useNotify({ message: "fail", variant: success, duration: 1000 });
        enqueueSnackbar("Hi", { autoHideDuration: 1000 });
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  useEffect(() => {
    if (submitted) {
      console.log(formData);
      setSubmitted(false);
    }
  }, [submitted]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-50 p-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded text-white font-semibold bg-blue-600 py-2 mt-2 hover:bg-blue-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <div
        className="w-full md:w-1/2 h-64 md:h-full hidden sm:block border-l-[5px] border-gray-200"
        style={{ backgroundColor: "#141311" }}
      >
        <img
          src="./assets/loginBanner.webp"
          alt="Login visual"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
