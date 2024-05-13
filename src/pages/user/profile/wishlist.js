import React from "react";
import BuyerLayout from "@/components/layout/buyerLayout";

function WishList() {
  return (
    <div>
      <p>Wishlist</p>
    </div>
  );
}

WishList.getLayout = (page) => (
  <BuyerLayout pageName="wishlist">{page}</BuyerLayout>
);
export default WishList;
