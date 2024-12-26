"use client";

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/blog");
    } else {
      alert("Invalid credentials! Use 'admin' and '1234'.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center"
    style={{
        backgroundImage: "url('/pic5.jpg')",
    }}>
    <a href="/" className="flex justify-left lg:left-96  text-blue-900">
        <FaArrowLeft className="mr-2" size={50} />
      </a>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <p className="text-gray-500 text-center mb-4">
          Please enter credentials to access the blog <br /> use: username: admin, password: 1234.
        </p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-6"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-900 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
