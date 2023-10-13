export interface Product {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  stock: number;
  total_sales: number;
}

export interface ProductCreate {
  name: string;
  description: string;
  price: string;
  category: string;
  image: null | String | File;
  stock: number;
  total_sales: number;
}


export interface ProductUpdate {
  description: string;
  price: string;
  category: string;
  stock: number;
  total_sales: number;
}

