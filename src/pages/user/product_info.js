import React, { useState } from "react";
import BuyerLayout from "@/components/layout/buyerLayout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@/components/common/customComp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import LoginModal from "@/components/modals/loginModal";

function Product_Info() {
  const { data: session } = useSession();
  const [openModal, setOpenModal] = useState(false);
  const buyNowHandler = () => {
    if (session) {
      toast.success("Successful");
    } else {
      setOpenModal(true);
    }
  };
  return (
    <div className="product_info_div">
      <div className="product_left_div col-lg-5">
        <div className="w-50 m-auto" style={{ height: "60vh" }}>
          <img
            alt="product_info_img"
            src="/assets/hibiscus.jpg"
            className="w-100 h-100"
          />
        </div>
      </div>
      <div className="product_right_div  col-lg-6">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="m-0">Hibiscus Powder (500g)</h4>
          <FavoriteBorderIcon style={{ color: "grey", cursor: "pointer" }} />
        </div>
        <p className="mt-3 mb-0">
          <span style={{ fontSize: "26px", fontWeight: "600" }}>₹99</span>
          <span className="mx-2" style={{ textDecoration: "line-through" }}>
            ₹169
          </span>
          <b className="text-success mx-2">41% off</b>
        </p>
        <p
          className="mb-3 mt-0"
          style={{ fontSize: "14px", fontWeight: "600" }}>
          <span>Faster delivery by 11 PM Tomorrow</span> |{" "}
          <span
            className="text-secondary"
            style={{ textDecoration: "line-through" }}>
            Free₹70
          </span>
        </p>
        <b className="text-secondary">Seller</b>
        <p>7 days return</p>
        <b className="text-secondary">Description</b>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="d-flex justify-content-evenly align-items-center">
          <Button
            buttonText="Add to Cart"
            icon={<AddShoppingCartIcon />}
            eventHandler={buyNowHandler}
          />
          <Button
            buttonText="Buy Now"
            icon={<ShoppingBagIcon />}
            eventHandler={buyNowHandler}
          />
        </div>
      </div>
      {openModal && (
        <LoginModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
}

Product_Info.getLayout = (page) => (
  <BuyerLayout pageName="product_info">{page}</BuyerLayout>
);
export default Product_Info;
