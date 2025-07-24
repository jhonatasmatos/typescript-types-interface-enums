export type ID = string | number;

export interface Product {
  id: ID;
  name: string;
  price: number;
}

export interface User {
  id: ID;
  email: string;
  name: string;
}

export interface Order {
  id: ID;
  userId: ID;
  items: { productId: ID; qty: number }[];
  status: OrderStatus;
}

export enum OrderStatus {
  Pending = "PENDING",
  Paid = "PAID",
  Shipped = "SHIPPED",
}
