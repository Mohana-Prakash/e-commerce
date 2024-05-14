import React from "react";
import BuyerLayout from "@/components/layout/buyerLayout";

function Cart() {
  return (
    <div>
      <p>Cart</p>
    </div>
  );
}

Cart.getLayout = (page) => <BuyerLayout pageName="cart">{page}</BuyerLayout>;
export default Cart;
