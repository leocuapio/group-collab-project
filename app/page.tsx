"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="px-4 py-2 bg-black text-white rounded-lg"
        onClick={() => router.push("/auth")}
      >
        Go to Login
      </button>
    </div>
  );
}
