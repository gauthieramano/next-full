"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import PUBLIC_ENV from "@/lib/public-env";

const CONVEX = new ConvexReactClient(PUBLIC_ENV.CONVEX_URL);

type Props = { children: React.ReactNode };

export function ConvexClientProvider({ children }: Props) {
  return <ConvexProvider client={CONVEX}>{children}</ConvexProvider>;
}
