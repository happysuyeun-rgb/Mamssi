import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마음,씨 이용약관",
  description: "마음,씨 서비스 이용약관",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
