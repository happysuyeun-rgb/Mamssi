import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마음,씨 개인정보처리방침",
  description: "마음,씨 서비스 개인정보처리방침",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
