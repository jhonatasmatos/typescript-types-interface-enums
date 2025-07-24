# Mini Order Manager

> A simple Node.js + TypeScript CLI script to practice Types, Interfaces, and Enums in one lesson.

## 🚀 Project Objective

- Apply **TypeScript Types**, **Interfaces**, and **Enums** in a functional example.  
- Run locally with `ts-node` (no build, CI, or additional tooling).  
- Push to GitHub with a concise `README.md`.

## 🎯 Features

**Primitive and Union Types**: Define a custom `ID` type that can be a `string` or `number`.

**Interfaces**:
  
 Model `Product` with `id` using `ID` type, `name` using `string`, `price` using `number` (price in USD)
  
 Model `User` with `id` using `ID` type, `name` using `string`, `email` using `string`
  
 Model `Order` with `id` using `ID` type, `userId` using `ID`, `items` using `{productId: ID, qty: number}[]`, `status` using `OrderStatus`

**Enums**: Use `OrderStatus` for order lifecycle.  

**Business Logic**:  
   `getOrderTotal(orderId: ID)`: Calculate total value of an order.  
   `updateOrderStatus(orderId: ID, status: OrderStatus)`: Update the status field of an order.

## 📦 Project Structure

```bash
mini-order-manager/
├─ src/
│  ├─ data.ts      # Mock data (products, users, orders)
│  ├─ types.ts     # Type aliases, interfaces, enums
│  ├─ logic.ts     # Business functions
│  └─ index.ts     # Entry point (CLI script)
├─ package.json
├─ tsconfig.json
└─ README.md
```

## 🔧 Prerequisites

- **Node.js** v18 or higher  
- **npm** (comes with Node.js)  
- **ts-node** & **TypeScript** (installed dev)

## 💻 Installation & Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/jhonatasmatos/mini-order-manager.git
   cd mini-order-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Initialize TypeScript:

   ```bash
   npx tsc --init
   ```

4. Verify `tsconfig.json` has at least:

   ```json
   {
     "compilerOptions": {
       "rootDir": "src",
       "strict": true
     }
   }
   ```

## ▶️ Running the Script

The script uses the mock data defined in `src/data.ts`:

By default, `src/index.ts` runs these functions:

```ts
import { getOrderTotal, updateOrderStatus } from "./logic";
import { OrderStatus } from "./types";

console.log("Total:", getOrderTotal(1));
updateOrderStatus(1, OrderStatus.Paid);
console.log("Status updated!");
```

Execute the CLI example with:

```bash
npx ts-node src/index.ts
```

You should see output similar to:

```bash
Total: 1250
Status updated!
```

## ✅ Validation Checklist

- [x] Created custom types, interfaces, and enums in `types.ts`.  
- [x] Used **union** and **tuple** types.  
- [x] Implemented business logic in `logic.ts`.  
- [x] README explains setup and usage clearly.  

## 📝 Next Steps (Optional)

- Extend `OrderStatus` with a new enum value and handle it in logic.  
- Add unit tests with **Vitest** or **Jest**.  
- Convert into a publishable NPM package.  

---
© 2025 Mini Order Manager. All rights reserved.
