"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboadPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter()
  useEffect(() => {
    router.push("/dashboard/consult");
  });
  return <div>{children}</div>;
};

export default DashboadPage;
