import React from "react";
import HeaderDefault from "@/components/Header";

const DashboadPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="main-dashboard">
      <HeaderDefault></HeaderDefault>
      <div>{children}</div>
    </main>
  );
};

export default DashboadPage;
