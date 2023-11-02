export interface Product {
  _id: String;
  name: String;
  name_chaza: String;
  description: String;
  price: Number;
  image: String;
  category: Number;
  stock: Number;
  total_sales: Number;
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
