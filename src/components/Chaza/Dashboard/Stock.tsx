
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../pages/api/product';
import axios from 'axios';
import cookie from "js-cookie";


interface StockItem {
  id: number;
  product: string;
  quantity: number;
  color: string;
}
const baseSize = 100;
const scaleFactor = 0.5;

const calculateSize = (quantity: number): number => {
  return baseSize + (quantity * scaleFactor);
};

const stockData: StockItem[] = [
  { id: 1, product: 'Cigarrillos', quantity: 15, color: 'purple' },
  { id: 2, product: 'Hamburguesas', quantity: 120, color: 'orange' },
];


const renderCircle = (item: StockItem) => ( // Renderizar el circulo
  <div
    key={item.id}
    className="stock-item"
    style={{
      width: `${calculateSize(item.quantity)}px`,
      height: `${calculateSize(item.quantity)}px`,
      backgroundColor: item.color,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'white'
    }}
  >
    <span className="stock-quantity">{item.quantity}</span>
    <p className="stock-product">{item.product}</p>
  </div>
);

const Stock: React.FC = () => {
  return (
    <div className="stock-containerB">
      <div className="left-column">
        {renderCircle(stockData.find(item => item.product === 'Hamburguesas')!)} {}
        {renderCircle(stockData.find(item => item.product === 'Cigarrillos')!)} {}
      </div>
    </div>
  );
}

export default Stock;


/*
// Orders.tsx
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import OrderDashboard from "@/components/Chaza/OrderDashboard";
import SidebarChaza from "@/components/Chaza/SidebarChaza";
import Loading from "@/components/Loading";
import { getOrdersByChaza } from "../../../pages/api/order";
import { getToken } from "@/pages/api/token";
import styles from "@/styles/chaza.orderdashboard.module.css";

function Orders() {
  const [id, setId] = useState<string>("");

  const token = getToken()?.id;
  useEffect(() => {
    if (token) {
      setId(token);
    }
  }, [token]);

  const { status, error, data: orders } = useQuery({
    queryKey: ["getOrdersByChaza"],
    queryFn: () => (id !== "" ? getOrdersByChaza(id) : null),
    enabled: id !== "",
  });

  if (status === "loading") return <Loading />;
  if (status === "error") return <div>{JSON.stringify(error)}</div>;
  if (orders === null || orders === undefined) return <div>Error</div>;

  const data = [...orders.data].reverse();

  return (
    <div className={`${styles.home_chaza} h-100 w-100`}>
      <SidebarChaza />
      <OrderDashboard orders={data} />
    </div>
  );
}

export default Orders;
*/