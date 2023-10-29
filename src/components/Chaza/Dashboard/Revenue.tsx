// Este componente muestra la informacion relacionada con los ingresos de la chaza
// components/Dashboard/Revenue.tsx

import React from 'react';
import styles from '../../styles/dashboard.module.css'; // Importa el archivo CSS

const Revenue: React.FC = () => {
    return (
        <div className={styles.revenueContainer}>
            <h2>IDR 7.852.000</h2>
            <p>Sales from 1- Dec, 2020</p>
            <p>7.2% vs last week</p>
        </div>
    );
}

export default Revenue;
