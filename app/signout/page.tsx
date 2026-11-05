'use client'
import { authClient } from "../lib/auth-client";
import { Button } from "@/app/components/ui/button";
import { redirect } from "next/navigation";
 
 
 export default function Signout() {
  async function signout(){
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/login"); // redirect to login page
        },
      },
    });
  }

   return (
     <Button type="button" onClick={signout} variant="secondary">Signout</Button>
   )
 }
 
 
 