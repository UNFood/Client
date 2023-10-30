import { Product } from "./product";

export interface Location {
  type: string;
  coordinates: number[];
}

export interface Chaza {
  _id: string;
  owner: string;
  name: String;
  description: String;
  type: number;
  address: String;
  phone: String;
  products: Product[];
  score: number;
  image: String;
  payment_method: Number[];
  location: Location; 
}

export interface ChazaCreate {
  owner: string;
  name: String;
  description: String;
  type: number;
  address: String;
  phone: String;
  image: null | String | File;
  payment_method: Number[];
  location: Location;
}

export interface ChazaUpdate {
  owner: string;
  description: String;
  type: number;
  address: String;
  phone: String;
  payment_method: Number[];
  location: Location; 
}
