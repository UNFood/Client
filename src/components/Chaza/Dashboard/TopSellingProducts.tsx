// components/Dashboard/TopSellingProducts.tsx

import React from 'react';
import styles from '../../../styles/TopSellingProducts.module.css';

type Product = {
  _id: string;
  name: string;
  total_sales: number; // Asumiendo que este campo indica el total de ventas
  image: string; // URL de la imagen del producto
};

// Simulando una función que obtendría los productos de alguna parte
// En tu caso, esta data vendría de tus productos, ya sea a través de props o de algún estado.
const getTopSellingProducts = (allProducts: Product[]): Product[] => {
  return allProducts.sort((a, b) => b.total_sales - a.total_sales).slice(0, 3);
};

function TopSellingProducts({ products }: { products: Product[] }) {
  // Obten los 3 productos más vendidos
  const topSellingProducts = getTopSellingProducts(products);

  return (
    <div className={styles.container}>
      <h3>Productos más vendidos</h3>
      <p>Tu chaza está onfire con estos productos...</p>
      <ul className={styles.productList}>
        {topSellingProducts.map((product) => (
          <li key={product._id} className={styles.productItem}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productDetails}>
              <span className={styles.productName}>{product.name}</span>
              <span className={styles.productPrice}>{product.total_sales}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopSellingProducts;