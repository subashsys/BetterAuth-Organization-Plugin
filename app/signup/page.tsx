"use client";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import React, { useState } from "react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault();

    const { data, error } = await authClient.signUp.email({
    name: name, 
    email: email, 
    password: password,
}, {
        onRequest: (ctx) => {
            //sloading hudai cha
        },
        onSuccess: (ctx) => {
            redirect('/login')
        },
        onError: (ctx) => {
            alert(ctx.error.message);
        },
      

    }
  )}
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="max-w-sm mx-auto mt-16">
        <h1 className="text-xl font-semibold mb-6">Sign up</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" >Sign up</Button>
        </form>
        <p className="mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
