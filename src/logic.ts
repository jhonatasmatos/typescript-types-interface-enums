import { orders, products } from "./data";
import { ID, OrderStatus } from "./types";

export function getOrderTotal(orderId: ID): number {
  const order = orders.find((order) => order.id === orderId);

  if (!order) return 0;

  const total = order.items.reduce(
    (total, item) => {
      // Find the product by productId in the items array
      // and calculate the total price based on the quantity (qty)
      const product = products.find((product) => product.id === item.productId);

      // If the product is not found, return the total as is
      // Otherwise, add the product's price multiplied by the quantity to the total
      return total + (product ? product.price * item.qty : 0);
    },
    0 // Initial total is 0
  );

  return parseFloat(total.toFixed(2)); // Return total as a number with two decimal places
}

export function updateOrderStatus(orderId: ID, status: OrderStatus): boolean {
  const order = orders.find((order) => order.id === orderId);

  if (!order) return false;

  // Check if the new status is a valid OrderStatus
  if (!Object.values(OrderStatus).includes(status as OrderStatus)) {
    return false;
  }

  // Update the order status
  order.status = status as OrderStatus;
  return true;
}
