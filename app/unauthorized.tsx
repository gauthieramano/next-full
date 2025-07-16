import Error from "@/components/error";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROJ9CT > Unauthorized",
  description: "Error 401",
};

export default function UnauthorizedPage() {
  return <Error code={401} />;
}
