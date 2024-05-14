import Navbar from "@/components/navComp/navbar";
import React from "react";
import Sidebar from "../navComp/sidebar";
import SubNav from "../navComp/subNav";

const BuyerLayout = ({ children, pageName }) => {
  const width_boolean =
    pageName === "dashboard" ||
    pageName === "contact" ||
    pageName === "product_list" ||
    pageName === "product_info";
  console.log(pageName);
  return (
    <>
      <Navbar />

      <div style={{ margin: "1rem 2rem" }}>
        {/* {pageName === "profile" && <Sidebar />} */}
        {pageName !== "product_info" && (
          <div className="sub_nav_div">
            <SubNav />
          </div>
        )}
        <div className="buyer_layout">
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
      </div>
    </>
  );
};

export default BuyerLayout;
