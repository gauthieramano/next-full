"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 sm:p-20">
      <div className="flex flex-col gap-8 items-center">
        <Authenticated>
          <UserButton />
          <div>PRIVATE CONTENT</div>
        </Authenticated>

        <Unauthenticated>
          <SignInButton>
            <Button>Sign in</Button>
          </SignInButton>
        </Unauthenticated>
      </div>
    </div>
  );
}
