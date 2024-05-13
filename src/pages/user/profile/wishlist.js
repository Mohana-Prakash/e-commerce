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
  <BuyerLayout children={page} pageName="wishlist" />
);
export default WishList;
