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
  chaza_id: string;
  name: string;
  description: string;
  price: number;
  category: number;
  image: null | String | File;
  stock: number;
}

export interface ProductUpdate {
  description: string;
  price: string;
  category: string;
  stock: number;
  total_sales: number;
}
