// components/Dashboard/DashboardMain.tsx

import React from 'react';
import Revenue from './Ganancia';
import SalesChart from './SalesChart';
import ProductsSoldPieChart from './ProductsSoldPieChart';
import Stock from './Stock';
import OrderHistory from './OrderHistory';
import TopSellingProducts from './TopSellingProducts';
import styles from '../../../styles/dashboard.module.css';
import SidebarChaza from '../../Chaza/SidebarChaza';

const DashboardMain: React.FC = () => {
    return (
        <div className={styles.container}>
            <SidebarChaza />

            <div className={styles.boxRevenue}>
                <div className={styles.header}>
                    <button>View Report</button>
                </div>
                <div>
                    <h2>Ganancias</h2>
                    <Revenue />
                    <div className={styles.headerRevenue}></div>
                </div>
            

                <div className={styles.box}>
                    <h2>Historial de Ordenes</h2>
                    <OrderHistory />
                    <div className={styles.divider}></div>
                    <button>Ver Reporte</button>
                </div>

                <div className={styles.line}></div>

                <div className={styles.box}>
                    <h2>Sales Chart</h2>
                    <SalesChart />
                </div>

                <div className={styles.box}>
                    <h2>Products Sold</h2>
                    <ProductsSoldPieChart />
                </div>

                <div className={styles.box}>
                    <h2>Stock</h2>
                    <Stock />
                </div>

                <div className={styles.box}>
                    <h2>Top Selling Products</h2>
                    <TopSellingProducts />
                </div>
            </div>
        </div>
    );
}

export default DashboardMain;
