import Navbar from "@/components/navbar";
import React from "react";

const BuyerLayout = ({ children, noFooter }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default BuyerLayout;
