import BuyerLayout from "@/components/layout/buyerLayout";
import React from "react";

function UserInfo() {
  return (
    <div>
      <p>Personal Information</p>
    </div>
  );
}

UserInfo.getLayout = (page) => (
  <BuyerLayout children={page} pageName="user_info" />
);
export default UserInfo;
