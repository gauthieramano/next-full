import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import Link from "next/link";
import { unauthorized } from "next/navigation";
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

  const { id } = await params;

  const date = new Date().toLocaleString("fr-FR");

  return (
    <div className="font-sans grid grid-cols-1 items-center justify-items-center min-h-screen p-8 sm:p-20">
      <div>
        <h2 className="text-3xl font-semibold">PRIVATE / {id}</h2>
        <p>{date}</p>
        <p>{user?.fullName}</p>
        <Button asChild>
          <Link href="/" className="mt-8">
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
