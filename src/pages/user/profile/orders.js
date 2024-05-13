import React from "react";
import BuyerLayout from "@/components/layout/buyerLayout";

function Orders() {
  return (
    <div>
      <p>Orders</p>
    </div>
  );
}

Orders.getLayout = (page) => (
  <BuyerLayout pageName="orders">{page}</BuyerLayout>
);
export default Orders;
