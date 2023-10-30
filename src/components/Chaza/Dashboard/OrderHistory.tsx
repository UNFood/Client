// Historial de pedidos
// components/Dashboard/OrderHistory.tsx

import React from 'react';
import '../../../styles/OrderHistory.module.css';

const OrderHistory: React.FC = () => {
    return (
        <div className="orderHistoryContainer">
            <div className="header">
                <h2>Historial de Ordenes</h2>
                <button>Ver Reporte</button>
            </div>
            
            <div className="stats">
                <h1>2.568</h1>
                <p><span className="decrease">↓ 2.1%</span> vs última semana</p>
            </div>
            
            <div className="chart">
                {/* Aquí puedes integrar tu librería de gráficos, por ejemplo, Chart.js o D3.js */}
                Gráfico
            </div>
            
            <div className="legend">
                <span className="currentWeek">● Últimos 6 días</span>
                <span className="lastWeek">● Última semana</span>
            </div>
        </div>
    );
}

export default OrderHistory;
