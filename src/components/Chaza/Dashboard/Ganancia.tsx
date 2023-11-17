import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from '../../../styles/dashboard.module.css';
import {AiOutlineArrowUp} from "react-icons/ai";
import { ResponsiveContainer } from 'recharts';

// Datos actualizados con SemanaPasada y SemanaActual
const data = [
    {name: 'Empanada', SemanaPasada: 150, SemanaActual: 400},
    {name: 'Perro Caliente', SemanaPasada: 284, SemanaActual: 300},
    {name: 'Hamburguesa', SemanaPasada: 257, SemanaActual: 562},
    {name: 'Salchipapa', SemanaPasada: 460, SemanaActual: 289},
    {name: 'Gaseosa', SemanaPasada: 201, SemanaActual: 365},
    
];

const venta_mensual = "7852000"
const inicio_estadistica = '2023 - Agosto - 01 '
const fin_estadistica = '2023 - Octubre - 01'
const mejora_semanal = "7.5"

const RevenueChart: React.FC = () => {
    return (
        <div className={styles.revenueContainer}>
            <h2>Venta Total Mensual {venta_mensual.toLocaleString()}</h2>
            <p>
                <span className={styles.NotoolightText}> Desde </span>
                <strong>{inicio_estadistica.toLocaleString()}</strong>
                <span className={styles.NotoolightText}> Hasta </span>
                <strong> {fin_estadistica.toLocaleString()}</strong>
                
            </p>

            
            <p> 
            <AiOutlineArrowUp color="green" size={25} /> 
            <strong>{mejora_semanal.toLocaleString()} %</strong> 
            <span className={styles.lightText}> ganancias desde el último mes</span>
            </p>

            {/* Diagrama de barras */}
            <ResponsiveContainer width="100%" height={300}>
            <BarChart
                width={700}
                height={300}
                data={data}
                margin={{top: 20, right: 15, left: 0, bottom: 4}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="SemanaPasada" fill="#A63C6D" />
                <Bar dataKey="SemanaActual" fill="#550A2D" />
            </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RevenueChart;
