    // Stock de la tienda
    // components/Dashboard/Stock.tsx
    import React from 'react';

    const stockData = [
        { id: 1, product: 'Cigarrillos', quantity: 15, color: 'purple' },
        { id: 2, product: 'Hamburguesas', quantity: 120, color: 'orange' },

    ];
    
    const baseSize = 100;
    const scaleFactor = 0.5;
    
    const calculateSize = (quantity: number): number => {
        return baseSize + (quantity * scaleFactor);
    };
    
    const renderCircle = (item) => (
        <div 
            key={item.id} 
            className="stock-item" 
            style={{
                width: `${calculateSize(item.quantity)}px`, 
                height: `${calculateSize(item.quantity)}px`,
                backgroundColor: item.color,
                borderRadius: '50%', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white'
            }}
        >
            <span className="stock-quantity">{item.quantity}</span>
            <p className="stock-product">{item.product}</p>
        </div>
    );
    
    const Stock: React.FC = () => {
        return (
            <div className="stock-containerB">
                <div className="left-column">
                    {renderCircle(stockData.find(item => item.product === 'Hamburguesas'))}
                    {renderCircle(stockData.find(item => item.product === 'Cigarrillos'))}
                </div>

            </div>
        );
    }
    
    export default Stock;
    