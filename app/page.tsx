"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { ContactTable } from "@/components/contact-table";
import ErrorBoundary from "@/components/error-boundary";
import { Button } from "@/components/ui/button";
import UserBadge from "@/components/user-badge";

export default function Home() {
  const { user } = useUser();

  const name = user?.fullName || undefined;

  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 sm:p-20">
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
            <ContactForm />
            <ContactTable />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button>Sign in</Button>
            </SignInButton>
          </Unauthenticated>
        </ErrorBoundary>
      </div>
    </div>
  );
}
