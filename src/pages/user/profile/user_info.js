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
  <BuyerLayout pageName="user_info">{page}</BuyerLayout>
);
export default UserInfo;
