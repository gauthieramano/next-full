import ErrorDisplay from "@/components/error-display";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unauthorized | PROJ9CT",
  description: "Error 401",
};

export default function UnauthorizedPage() {
  return <ErrorDisplay code={401} />;
}
