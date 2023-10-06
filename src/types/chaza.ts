export interface Chaza {
  _id: string;
  owner: string;
  name: String;
  description: String;
  type: Number;
  address: String;
  phone: String;
  products: string[];
  score: Number;
  image: String;
  payment_method: Number[];
}

export interface ChazaCreate {
  owner: string;
  name: String;
  description: String;
  type: Number;
  address: String;
  phone: String;
  products: string[];
  score: Number;
  image: String;
  payment_method: Number[];
}

export interface ChazaUpdate {
  description: String;
  type: Number;
  address: String;
  phone: String;
  payment_method: Number[];
}
