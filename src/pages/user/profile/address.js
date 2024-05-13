import React from "react";
import BuyerLayout from "@/components/layout/buyerLayout";

function Address() {
  return (
    <div>
      <p>Address</p>
    </div>
  );
}

Address.getLayout = (page) => (
  <BuyerLayout pageName="address">{page}</BuyerLayout>
);
export default Address;
