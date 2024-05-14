import { dynamicRouteHandler } from "@/components/common/customComp";
import BuyerLayout from "@/components/layout/buyerLayout";
import React from "react";
import { useRouter } from "next/router";
function Dashboard() {
  const router = useRouter();
  let arr = [
    {
      image: "/assets/oil.png",
      name: "Oil",
      subText: "Min. 60% off",
    },
    {
      image: "/assets/hibiscus.jpg",
      name: "Hibiscus",
      subText: "Up to 80% off",
    },
    {
      image: "/assets/doll.jpg",
      name: "Dancing Doll",
      subText: "Under ₹999",
    },
  ];
  const productHandler = (name) => {
    let object = {
      product_name: name,
    };
    dynamicRouteHandler(router, "/user/product_list", object);
  };
  return (
    <div>
      <h5 className="mt-2 mb-4">Top Deals</h5>
      <div className="product_list_div">
        {arr.map((e) => {
          return (
            <div
              className="product_list"
              key={e.name}
              onClick={() => productHandler(e.name)}>
              <div className="w-50 m-auto" style={{ height: "20vh" }}>
                <img className="w-100 h-100" alt="product_img" src={e.image} />
              </div>
              <p className="text-center text-secondary mt-2 mb-0">
                <b>{e.name}</b>
              </p>
              <p className="text-center mb-1">
                <b>{e.subText}</b>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Dashboard.getLayout = (page) => (
  <BuyerLayout pageName="dashboard">{page}</BuyerLayout>
);
export default Dashboard;
