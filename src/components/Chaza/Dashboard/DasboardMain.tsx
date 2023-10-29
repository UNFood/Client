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

            <div className={'$styles.boxRevenue ${styles.marginBottom30}'}>
                <button className={styles.viewReportButton}>View Report</button>
                <div>
                    <h2>Ganancias</h2>
                    <Revenue />
                </div>
        
                <div className={styles.box}>
                    <h2>Stock de tu chaza</h2>
                    <h5 className={styles.subtitlestock}>A tu chaza le quedan ...</h5>
                    <Stock/>
                </div>
                {/*
                
                <div className={styles.box}>
                    <h2>Top Selling Products</h2>
                    <TopSellingProducts />
                </div>

                <div className={styles.box}>
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

                
                */ }

            </div>
        </div>
    );
}

export default DashboardMain;
