import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import Link from "next/link";
import { unauthorized } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Private | PROJ9CT",
  description: "Project: next-full",
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Private({ params }: Props) {
  const user = await currentUser();

  if (!user) {
    unauthorized();
  }

  const date = new Date().toLocaleString("fr-FR");

  return (
    <div>
      <h2 className="text-3xl font-semibold">
        PRIVATE /{" "}
        <Suspense fallback={<Loading />}>
          <Id params={params} />
        </Suspense>
      </h2>
      <p>{date}</p>
      <p>{user?.fullName}</p>
      <Button asChild>
        <Link href="/" className="mt-8">
          Back to Home
        </Link>
      </Button>
    </div>
  );
}

async function Id({ params }: Props) {
  const { id } = await params;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <>{id}</>;
}

async function Loading() {
  return <span className="text-lg text-destructive">Loading…</span>;
}
