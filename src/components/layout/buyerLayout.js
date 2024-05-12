import Navbar from "@/components/navComp/navbar";
import React from "react";

const BuyerLayout = ({ children, noFooter }) => {
  return (
    <>
      <Navbar />
      <div className="px-4">{children}</div>
    </>
  );
};

export default BuyerLayout;
