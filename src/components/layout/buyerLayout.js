import Navbar from "@/components/navComp/navbar";
import React from "react";
import Sidebar from "../navComp/sidebar";

const BuyerLayout = ({ children, pageName }) => {
  const width_boolean = pageName === "dashboard" || pageName === "contact";
  return (
    <>
      <Navbar />
      <div className="buyer_layout">
        {/* {pageName === "profile" && <Sidebar />} */}
        {!width_boolean && (
          <div style={{ width: !width_boolean && "23%" }}>
            <Sidebar />
          </div>
        )}
        <div
          style={{ width: width_boolean ? "100%" : "75%" }}
          className="children_div">
          {children}
        </div>
      </div>
    </>
  );
};

export default BuyerLayout;
