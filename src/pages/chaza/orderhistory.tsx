
// Orders.tsx

import React, { useState, useEffect } from 'react';
import { getOrdersByChaza } from "../../app/";
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

}


export default OrdersEst;
