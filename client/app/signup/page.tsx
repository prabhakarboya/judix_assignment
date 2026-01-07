// app/signup/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import API from "../utils/api";
import { useState } from "react";

type SignupForm = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const { register, handleSubmit } = useForm<SignupForm>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupForm) => {
    setLoading(true);
    try {
      const res = await API.post("/users/signup", data);
      localStorage.setItem("token", res.data.token);

      // Update Navbar immediately
      window.dispatchEvent(new Event("storage"));

      router.push("/dashboard");
    } catch (err: any) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          {...register("name")}
          placeholder="Name"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 mb-6 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
