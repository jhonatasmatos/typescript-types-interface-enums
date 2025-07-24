import { getOrderTotal, updateOrderStatus } from "./logic";
import { OrderStatus } from "./types";

console.log("Total: $", getOrderTotal(1));
updateOrderStatus(1, OrderStatus.Paid);
console.log("Status updated!");
