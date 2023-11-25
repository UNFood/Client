// Orders.tsx

import React, { useState, useEffect } from 'react';
import { getOrdersByChaza } from "../../../pages/api/order";
import { getToken } from "@/pages/api/token";
import { useQuery } from 'react-query';
import Loading from "@/components/Loading";
import styles from '../../../styles/OrderHistory.module.css';
import { Order } from "@/types/order";

import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


function OrdersEst() {
    console.log("Entro");
    
    const [id, setId] = useState<string>("");
    const token = getToken()?.id;
    useEffect(() => {
        if (token) {
            setId(token);
        }   
    }, [token]);
    
    console.log("id");
    const {
        status,
        error,
        data: orders,
    } = useQuery({queryKey:["getOrdersByChaza"],
    queryFn :() =>(id !== "" ? getOrdersByChaza(id):null),
    enabled: id !== "",
    });

    if (status === "loading") return <Loading></Loading>;
    if (status === "error") return <div>{JSON.stringify(error)}</div>;
    if (!orders || !Array.isArray(orders.data)) return <div>Error</div>;

    const data = [...orders.data].reverse();


    console.log("Data");
    console.log(data)

    /*

    
    console.log(orders);


    const areaData = transformOrderDataToAreaData(orders.data);
    
    const lastFiveOrders = orders.data.slice(0, 5);

    return (
        <div className={styles.orderHistoryContainer}>
            <h2> Historial de Órdenes</h2>
            <ResponsiveContainer width="100%" aspect={3.5 / 3}>
                <AreaChart
                    data={areaData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <XAxis dataKey="date" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>

            <div>

            </div>
        </div>
    );
}

function transformOrderDataToAreaData(orders: Order[]) {
    console.log("Entro v2");
    const ordersByMonth: { [key: string]: number } = {};

    orders.forEach(order => {
        const month = new Date(order.createdAt).toLocaleString('default', { month: 'long' });
        ordersByMonth[month] = (ordersByMonth[month] || 0) + 1;
    });

    console.log(ordersByMonth);  // Mueve el console.log aquí

    return Object.keys(ordersByMonth).map(month => ({
        date: month,
        count: ordersByMonth[month]
    }));

    */
}


export default OrdersEst;
