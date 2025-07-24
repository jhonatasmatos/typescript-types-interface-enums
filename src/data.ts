import { Product, User, Order, OrderStatus } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 499.99,
  },
  {
    id: 3,
    name: "Tablet",
    price: 299.99,
  },
  {
    id: 4,
    name: "Desktop PC",
    price: 1000.0,
  },
  {
    id: 5,
    name: "Keyboard",
    price: 250.0,
  },
];

export const users: User[] = [
  {
    id: 1,
    email: "john@example.com",
    name: "John Doe",
  },
  {
    id: 2,
    email: "jane@example.com",
    name: "Jane Smith",
  },
];

export const orders: Order[] = [
  {
    id: 1,
    userId: 1,
    items: [
      { productId: 4, qty: 1 },
      { productId: 5, qty: 1 },
    ],
    status: OrderStatus.Pending,
  },
  {
    id: 2,
    userId: 1,
    items: [
      { productId: 1, qty: 2 },
      { productId: 2, qty: 1 },
    ],
    status: OrderStatus.Pending,
  },
  {
    id: 2,
    userId: 2,
    items: [{ productId: 3, qty: 1 }],
    status: OrderStatus.Paid,
  },
];
