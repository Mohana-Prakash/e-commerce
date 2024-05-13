import React from "react";
import BuyerLayout from "@/components/layout/buyerLayout";

function Notification() {
  return (
    <div>
      <p>Notifications</p>
    </div>
  );
}

Notification.getLayout = (page) => (
  <BuyerLayout pageName="notify">{page}</BuyerLayout>
);
export default Notification;
