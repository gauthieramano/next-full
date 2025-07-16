import type { Metadata } from "next";
import ErrorDisplay from "@/components/error-display";

export const metadata: Metadata = {
  title: "Not Found | PROJ9CT",
  description: "Error 404",
};

export default function NotFound() {
  return <ErrorDisplay />;
}
