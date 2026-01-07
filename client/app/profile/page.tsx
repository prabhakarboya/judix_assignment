// app/profile/page.tsx
"use client";

import { useEffect, useState } from "react";
import API from "../utils/api"
import ProtectedRoute from "../components/ProtectedRoute";

type User = {
  name: string;
  email: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User>({ name: "", email: "" });
  const [loading, setLoading] = useState(true);

  // Fetch profile
  const fetchProfile = async () => {
    try {
      const res = await API.get("/users/profile");
      setUser(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // Update profile
  const updateProfile = async () => {
    try {
      await API.put("/users/profile", user);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <ProtectedRoute>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-8">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={updateProfile}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Update Profile
        </button>
      </div>
    </ProtectedRoute>
  );
}
