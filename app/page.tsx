"use client";

import ErrorBoundary from "@/components/error-boundary";
import { Button } from "@/components/ui/button";
import UserBadge from "@/components/user-badge";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useUser();

  const name = user?.fullName || undefined;

  return (
    <div className="font-sans grid grid-cols-1 items-center justify-items-center min-h-screen p-8 sm:p-20">
      <div className="flex flex-col gap-8 items-center">
        <ErrorBoundary>
          <Authenticated>
            <div className="flex gap-3 items-center">
              <Button asChild>
                <Link href="/private/from-home">Private page</Link>
              </Button>
              <UserBadge name={name} />
              <UserButton />
            </div>
            <div>PRIVATE CONTENT</div>
          </Authenticated>

          <Unauthenticated>
            <ThrowByGA />
            <SignInButton>
              <Button>Sign in</Button>
            </SignInButton>
          </Unauthenticated>
        </ErrorBoundary>
      </div>
    </div>
  );
}

function ThrowByGA() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>({ nop: "" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (count === 1) {
        setData(null);
      }

      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <span>
      {count}
      {data.nop}
    </span>
  );
}
