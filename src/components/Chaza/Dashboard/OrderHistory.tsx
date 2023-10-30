// Historial de pedidos
// components/Dashboard/OrderHistory.tsx

import React from 'react';
import styles from './OrderHistory.module.css';

const OrderHistory: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Historial de Ordenes</h2>
                <button>Ver Reporte</button>
            </div>
            <div className={styles.data}>
                <h1>2.568</h1>
                <p><span className={styles.decrease}>↓ 2.1%</span> vs última semana</p>
            </div>
            <div className={styles.chart}>
                {/* Aquí iría el gráfico */}
            </div>
            <div className={styles.legend}>
                <div className={styles.lastSixDays}>• Últimos 6 días</div>
                <div className={styles.lastWeek}>• Última semana</div>
            </div>
        </div>
    );
}

export default OrderHistory;
