import BuyerLayout from "@/components/layout/buyerLayout";
import React from "react";

function Contact() {
  return (
    <div>
      <p>Contact</p>
    </div>
  );
}

Contact.getLayout = (page) => (
  <BuyerLayout children={page} pageName="contact" />
);
export default Contact;
