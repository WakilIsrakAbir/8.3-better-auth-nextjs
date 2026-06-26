"use client"
import React from "react";
import { Link, Button } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";

const Navigation = () => {

    const { data, isPending } = useSession();

    if(isPending){
        return <div>Loading...</div>
    }

    console.log("Session data in Navbar:", data);

    const user = data?.user;

  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">ACME</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <div>
            {
                user ? (
                    <div className="flex gap-4">
                        <p> Welcome {user.name} !</p>
                        <button
                            onClick={() => signOut()}
                        >Sign Out</button>
                    </div>
                ) : (
                    <Link href="/auth/signin"><Button>Sign In</Button></Link>
                )
            }
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navigation;
