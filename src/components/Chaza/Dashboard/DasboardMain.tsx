// components/Dashboard/DashboardMain.tsx

import React from 'react';
import Revenue from './Ganancia';
import Stock from './Stock';
import OrderHistory from '../Dashboard/OrderHistory';
import TopSellingProducts from './TopSellingProducts';
import styles from '../../../styles/dashboard.module.css';
import SidebarChaza from '../../Chaza/SidebarChaza';

const DashboardMain: React.FC = () => {
    return (
        <div className={styles.container}>
            <SidebarChaza />

            <div className={`${styles.boxRevenue} ${styles.marginBottom30}`}>
                <button className={styles.viewReportButton}>View Report</button>
                <div>
                    <h2>Ganancias</h2>
                    <Revenue />
                </div>
                <div className={styles.line}></div>
                <div className={styles.flexContainer}> {/* Nuevo contenedor */}
                    <OrderHistory/>
                </div>
            </div>
                        {/* Nuevo componente de historial de órdenes */}
                        <div className={styles.orderHistoryContainer}>
                        <h2 style={{textAlign: "center"}}>Top productos vendidos</h2>

                <TopSellingProducts/>
                <h2 style={{textAlign: "center"}}>Stock de tu chaza</h2>
                    <h5 className={styles.subtitlestock}>A tu chaza le quedan ...</h5>
                    <Stock/>
            </div>
        </div>);

}

export default DashboardMain;