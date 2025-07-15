"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "@/components/ui/button";
import UserBadge from "@/components/user-badge";

export default function Home() {
  const { user } = useUser();

  const name = user?.fullName || undefined;

  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 sm:p-20">
      <div className="flex flex-col gap-8 items-center">
        <Authenticated>
          <div className="flex gap-3 items-center">
            <UserBadge name={name} />
            <UserButton />
          </div>
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
