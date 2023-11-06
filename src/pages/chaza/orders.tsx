import React from "react";
import OrderDashboard from "@/components/Chaza/OrderDashboard";
import SidebarChaza from "@/components/Chaza/SidebarChaza";
import styles from "@/styles/chaza.orderdashboard.module.css";

function Orders() {
  return (
    <div className={`${styles.home_chaza} h-100 w-100`}>
      <SidebarChaza></SidebarChaza>
      <OrderDashboard></OrderDashboard>
    </div>
  );
}

export default Orders;
