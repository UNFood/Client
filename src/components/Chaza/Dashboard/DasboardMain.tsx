// components/Dashboard/DashboardMain.tsx

import React from 'react';
import Revenue from './Ganancia';
import Stock from './Stock';
import OrderHistory from '../Dashboard/OrderHistory';
import TopSellingProducts from './TopSellingProducts';
import styles from '../../../styles/dashboard.module.css';
import SidebarChaza from '../../Chaza/SidebarChaza';
import { stats } from '@/types/chaza';

function DashboardMain({stats}:{stats:stats}){
    
    return (
        <div className={styles.container}>
            <SidebarChaza />

            <div className={`${styles.boxRevenue} ${styles.marginBottom30}`}>
                <div>
                    <h2>Ganancias</h2>
                    <Revenue orders={stats.orders} /> 
                    
                </div>
                <div className={styles.line}></div>
                <OrderHistory orders={stats.orders}/>
                <div className={styles.flexContainer}> 
                </div>
            </div>
                
                <div className={styles.orderHistoryContainer}>
                <h2 style={{textAlign: "center",padding:'20px'}}>Top productos vendidos</h2>
                <TopSellingProducts/>
                <div className={styles.line}></div>
                <h2 style={{textAlign: "center",padding:'30px'}}>Stock de tu chaza</h2>
                <h5 className={styles.subtitlestock}>A tu chaza le quedan ...</h5>
                <Stock/>
            </div>
            
        </div>);

}

export default DashboardMain;