import React, { useEffect, useState } from "react";
import SidebarChaza from "@/components/Chaza/SidebarChaza";
import OrderDashboard from "@/components/Chaza/OrderDashboard";
import styles from "@/styles/products.chaza.module.css";
import { useQuery } from "react-query";
import { getToken } from "../api/token";
import { getChaza } from "../api/chaza";
import Loading from "@/components/Loading";

function Products() {
 
  return (
    <div className={styles.home_chaza}>
      <SidebarChaza></SidebarChaza>
      <OrderDashboard></OrderDashboard>
    </div>
  );
}

export default Products;