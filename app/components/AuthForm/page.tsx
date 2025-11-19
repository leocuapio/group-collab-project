"use client";
import { supabase } from "@/app/utils/supabase/client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setisSignIn] = useState(false);

  async function signUpNewUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "/dashboard",
      },
    });

    if (error) {
      console.error("Error signing up:", error.message);
    }
    return data;
  }

  async function signInUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error signing in: ", error);
    }
    return data;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignIn) {
      await signInUser(email, password);
      router.push("/dashboard");
    } else {
      await signUpNewUser(email, password);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{isSignIn ? "Login Page" : "Sign Up Page"}</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>

      <button
        onClick={() => {
          setisSignIn(!isSignIn);
        }}
      >
        Switch to {isSignIn ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );
}
