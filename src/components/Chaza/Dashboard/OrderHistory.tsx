import React from 'react';
import styles from '../../../styles/OrderHistory.module.css';
import { AiOutlineArrowDown } from "react-icons/ai";
import { Line } from 'react-chartjs-2';
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

// Datos para el AreaChart
const areaData = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
];

// Datos y opciones para el Line chart
// ... (sin cambios aquí)

const cantidad_ordenes = 234456;
const porcentaje_ventas = 2.1;
const ultima_encuesta = "último mes";

const OrderHistory: React.FC = () => {
    return (
        <div className={styles.orderHistoryContainer}>
            <div className={styles.header}>
                <h2><strong>Historial de Ordenes</strong></h2>
                <button>Ver Reporte</button>
            </div>
            
            <div className={styles.stats}>
                <h6><span className={styles.NooTooMuch}>Cantidad de ordenes desde {ultima_encuesta} </span>{cantidad_ordenes}</h6>
                <p>
                    <AiOutlineArrowDown color="red" size={20} />
                    <strong>{porcentaje_ventas}</strong> % vs {ultima_encuesta}
                </p>
            </div>
            
            {/* Gráfico AreaChart */}
            <ResponsiveContainer width="100%" aspect={4 / 3}>
                <AreaChart
                    data={areaData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="50%" stopColor="#A63C6D" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#550A2D" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area 
                        type="monotone" 
                        dataKey="Total" 
                        stroke="#550A2D" 
                        fillOpacity={1} 
                        fill="url(#total)" 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default OrderHistory;

