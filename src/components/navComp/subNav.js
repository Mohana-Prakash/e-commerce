import React from "react";
import { useRouter } from "next/router";
import { dynamicRouteHandler } from "../common/customComp";
import { product_arr } from "../common/constant";

function SubNav() {
  const router = useRouter();

  const productHandler = (e) => {
    let object = {
      product_name: e,
    };
    dynamicRouteHandler(router, "/user/product_list", object);
  };

  return (
    <div className="d-flex w-25 m-auto">
      {product_arr.map((item, index) => (
        <div className="col" key={index}>
          <div className="dropdown image_menu_div">
            <div style={{ width: "100%", height: "10vh" }}>
              <img className="w-100 h-100" alt="product_img" src={item.image} />
            </div>
            <button
              className="btn dropdown-toggle"
              type="button"
              id={"dropdownMenuButton" + index}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <b>{item.name}</b>
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby={"dropdownMenuButton" + index}>
              {item.submenus.map((submenuItem, subIndex) => (
                <p
                  className="dropdown-item my-2"
                  key={subIndex}
                  onClick={() => productHandler(submenuItem)}>
                  {submenuItem}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubNav;
