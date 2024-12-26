'use client';

import './globals.css';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className="bg-gray-100 text-gray-800"
        style={{
          backgroundImage: `url('/pic3.jpg')`,
        }}
      >
        <header className="bg-blue-900 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <a href="/">Cats Dynamic Blog By UmmeFizza</a>
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-gray-300">Home</a>
              <a href="/about" className="hover:text-gray-300">About</a>
              <a href="/login" className="hover:text-gray-300">Login</a>
              <a href="/contact" className="hover:text-gray-300">Contact</a>
            </nav>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <span className="text-3xl">&times;</span> 
              ) : (
                <span className="text-3xl">&#9776;</span> 
              )}
            </button>
          </div>
          <div
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:hidden bg-blue-900 text-white w-full shadow-lg mt-2`}
          >
            <a href="/" className="block px-4 py-2 hover:bg-blue-100">Home</a>
            <a href="/about" className="block px-4 py-2 hover:bg-blue-100">About</a>
            <a href="/login" className="block px-4 py-2 hover:bg-blue-100">Login</a>
            <a href="/contact" className="block px-4 py-2 hover:bg-blue-100">Contact</a>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-6">{children}</main>
        <footer className="bg-blue-900 text-white py-4 mt-8">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-center text-2xl">&copy; 2024 Cats Nature Blog</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
