import BuyerLayout from "@/components/layout/buyerLayout";
import React from "react";

function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = (page) => (
  <BuyerLayout children={page} pageName="dashboard" />
);
export default Dashboard;
