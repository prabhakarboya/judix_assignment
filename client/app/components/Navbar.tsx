// app/components/Navbar.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  // Check token on mount
  useEffect(() => {
    const checkLogin = () => setIsLoggedIn(!!localStorage.getItem("token"));

    checkLogin();

    // Listen for token changes from login/signup/logout
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");

    // Trigger storage event for Navbar update
    window.dispatchEvent(new Event("storage"));
  };

  const goToProfile = () => router.push("/profile");

  // Avoid SSR mismatch
  if (isLoggedIn === null) return null;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center shadow-md">
      <h1
        className="font-bold text-xl cursor-pointer hover:text-gray-200"
        onClick={() => router.push(isLoggedIn ? "/dashboard" : "/login")}
      >
        Judix Task App
      </h1>

      <div className="space-x-3">
        {isLoggedIn ? (
          <>
            <button
              onClick={goToProfile}
              className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded transition"
            >
              Profile
            </button>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => router.push("/login")}
              className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded transition"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded transition"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
