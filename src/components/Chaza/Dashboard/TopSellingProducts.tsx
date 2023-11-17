// components/Dashboard/TopSellingProducts.tsx

import React from 'react';
import styles from '../../../styles/TopSellingProducts.module.css';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string; // URL de la imagen del producto
};

// Datos simulados de productos más vendidos
const products: Product[] = [
  { id: 1, name: 'Fresh Salad Bowl', price: 45000, imageUrl: '/path/to/image1.jpg' },
  { id: 2, name: 'Chicken Noodles', price: 75000, imageUrl: '/path/to/image2.jpg' },
  // ... otros productos
];

const TopSellingProducts: React.FC = () => {
    return (
        <div className={styles.container}>
            <h3>Productos más vendidos</h3>
            <p>Tu chaza está onfire con estos productos...</p>
            <ul className={styles.productList}>
                {products.map((product) => (
                    <li key={product.id} className={styles.productItem}>
                        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                        <div className={styles.productDetails}>
                            <span className={styles.productName}>{product.name}</span>
                            <span className={styles.productPrice}>IDR {product.price.toLocaleString()}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopSellingProducts;
