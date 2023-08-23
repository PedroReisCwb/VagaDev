import React, { HTMLAttributes } from "react";
import DefaultNavBar from "../components/navbar";

export default function LayoutDefault({
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <DefaultNavBar />
      {children}
    </>
  );
}
