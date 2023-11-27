// components/Dashboard/ProductsSoldPieChart.tsx

import React from 'react';
// Importa las bibliotecas de gráficos que prefieras.
import '../../../styles/piechart.module.css';

export const ProductsSoldPieChart = () => {
  return (
    <div className="panel">
      <div className="element-columns">
        <div className="column">
          <div className="div">
            <div className="store-button">
              <div className="frame">
                <div className="text-wrapper">Administrar Chaza</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="frame">
                <div className="text-wrapper">Pedidos</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="frame">
                <div className="text-wrapper-2">Estadisticas chaza</div>
              </div>
            </div>
          </div>
          <div className="div">
            <img className="logounfoodobj-plus" alt="Logounfoodobj plus" src="logounfoodobj-plus-1.png" />
            <img className="logounfood" alt="Logounfood" src="logounfood-1-1.png" />
          </div>
        </div>
      </div>
      <div className="order-time">
        <div className="overlap">
          <div className="afternoon">
            <div className="ellipse" />
            <div className="text-wrapper-3">Juguetes Sexuales</div>
            <div className="text-wrapper-4">40%</div>
          </div>
          <div className="evening">
            <div className="ellipse-2" />
            <div className="text-wrapper-5">Comida rápida</div>
            <div className="text-wrapper-6">32%</div>
          </div>
          <div className="morning">
            <div className="ellipse-3" />
            <div className="text-wrapper-7">Cigarillos</div>
            <div className="text-wrapper-8">28%</div>
          </div>
        </div>
        <div className="chart">
          <div className="overlap-group">
            <div className="ellipse-4" />
            <img className="img" alt="Ellipse" src="ellipse-14.svg" />
            <img className="ellipse-5" alt="Ellipse" src="ellipse-12.svg" />
            <img className="ellipse-6" alt="Ellipse" src="ellipse-15.svg" />
          </div>
          
        </div>
        <button className="button">
          <div className="overlap-2">
            <div className="text-wrapper-9">View Report</div>
          </div>
        </button>
        <div className="order-info">1-6 Dec, 2020</div>
        <div className="title-data">Productos Vendidos</div>
      </div>
      <div className="most-ordered">
        <div className="title-data-2">Productos más vendidos</div>
        <p className="desc">Tu chaza esta onfire con estos productos..</p>
        <div className="group">
          <img className="line" alt="Line" src="line-25.svg" />
          <div className="group-2">
            <div className="group-3" />
            <div className="text">Fresh Salad Bowl</div>
            <div className="text-2">IDR 45.000</div>
          </div>
        </div>
        <div className="group-4">
          <img className="line" alt="Line" src="image.svg" />
          <div className="group-5" />
          <div className="text">Chicken Noodles</div>
          <div className="text-3">IDR 75.000</div>
        </div>
        <div className="group-6">
          <img className="line" alt="Line" src="line-25-2.svg" />
          <div className="group-7" />
          <div className="text-4">Smoothie Fruits</div>
          <div className="text-2">IDR 45.000</div>
        </div>
        <div className="group-8">
          <div className="group-9" />
          <div className="text-5">Hot Chicken Wings</div>
          <div className="text-6">IDR 45.000</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSoldPieChart;