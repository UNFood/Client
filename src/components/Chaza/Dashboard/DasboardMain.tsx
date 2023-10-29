// components/Dashboard/DashboardMain.tsx

import React from 'react';
import Revenue from './Revenue';
import SalesChart from './SalesChart';
import ProductsSoldPieChart from './ProductsSoldPieChart';
import Stock from './Stock';
import OrderHistory from './OrderHistory';
import TopSellingProducts from './TopSellingProducts';

const DashboardMain: React.FC = () => {
    return (
        <div>
            <Revenue />
            <SalesChart />
            <ProductsSoldPieChart />
            <Stock />
            <OrderHistory />
            <TopSellingProducts />
        </div>
    );
}

export default DashboardMain;
