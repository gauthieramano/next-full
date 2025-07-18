import ErrorDisplay from "@/components/error-display";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found | PROJ9CT",
  description: "Error 404",
};

export default function NotFound() {
  return <ErrorDisplay />;
}
