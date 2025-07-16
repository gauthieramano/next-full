import Error from "@/components/error";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROJ9CT > Not Found",
  description: "Error 404",
};

export default function NotFound() {
  return <Error />;
}
