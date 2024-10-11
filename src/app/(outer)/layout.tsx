import React from "react";
import { Navbar } from "../layouts/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      {/* <ContactUsModalProvider> */}
      <Navbar />
      <div className="pt-[70px] lg:pt-[100px]">
        <div id="modal-root" />
      </div>
      {children}
    </div>
  );
}
