import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROJ9CT",
  description: "Project: next-full",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
