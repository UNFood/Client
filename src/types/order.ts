export interface ProductsOrder {
  product: string;
  quantity: number;
}

export interface Order {
  _id: string;
  user: string;
  chaza: string;
  products: ProductsOrder[];
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrder {
  user: string;
  chaza: string;
  products: ProductsOrder[];
  total: number;
}

export interface UpdateOrder {
  _id: string;
  user: string;
  chaza: string;
  products: ProductsOrder[];
  state: string;
  time_to_delivery: string;
  total: number;
}
