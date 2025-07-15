"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const CONVEX = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

type Props = { children: React.ReactNode };

export function ConvexClientProvider({ children }: Props) {
  return (
    <ConvexProviderWithClerk client={CONVEX} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
