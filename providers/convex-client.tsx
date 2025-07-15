"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const CONVEX = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

type Props = { children: React.ReactNode };

export function ConvexClientProvider({ children }: Props) {
  return <ConvexProvider client={CONVEX}>{children}</ConvexProvider>;
}
