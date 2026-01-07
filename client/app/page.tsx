// app/page.tsx
"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Welcome to Judix Task App</h1>
        <p className="mb-6 text-gray-600">
          A Fullstack Task App with Next.js & Node.js
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
