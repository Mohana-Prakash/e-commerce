import React, { useState } from "react";
import { useRouter } from "next/router";
import BuyerLayout from "@/components/layout/buyerLayout";
import { dynamicRouteHandler } from "@/components/common/customComp";
import Filter from "@/components/common/filter";

function Product_List() {
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("POPULARITY");

  const productHandler = () => {
    let object = {
      product_id: 1,
    };
    dynamicRouteHandler(router, "/user/product_info", object);
  };

  return (
    <div>
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />

      <div className="py-4">
        Product_List :{" "}
        <b
          onClick={() => productHandler()}
          style={{ textDecoration: "underline", cursor: "pointer" }}>
          {router.query.product_name}
        </b>{" "}
        data will be fetched here. {filterValue}
      </div>
    </div>
  );
}

Product_List.getLayout = (page) => (
  <BuyerLayout pageName="product_list">{page}</BuyerLayout>
);
export default Product_List;
