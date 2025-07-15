"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import PUBLIC_ENV from "@/lib/public-env";

const CONVEX = new ConvexReactClient(PUBLIC_ENV.CONVEX_URL);

type Props = { children: React.ReactNode };

export function ConvexClientProvider({ children }: Props) {
  return (
    <ConvexProviderWithClerk client={CONVEX} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
