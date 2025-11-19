"use client";
import { useRouter } from "next/navigation";
import DashTask from "../components/dashtask/page";
import { supabase } from "../utils/supabase/client";

export default function DashboardPage() {
  const router = useRouter();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    }
    // Optionally, redirect the user after sign-out
    router.push("/auth");
  }
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
      <DashTask />

      <button onClick={signOut}>Sign Out</button>
    </>
  );
}
