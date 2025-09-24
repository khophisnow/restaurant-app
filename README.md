
# 🍽️ Restaurant Management API

A modern backend system for managing restaurants, menus, orders, deliveries, inventory, and users.  
Built with **NestJS**, **TypeORM**, and **PostgreSQL**, this API is designed to support multiple user types including **admins (owners), chefs, drivers, and customers**.

---

## 🚀 Features

- **User Management**  
  - Users can be **admin, chef, driver, customer**  
  - Type-specific tables with extra info (e.g., `chefs`, `drivers`, `customers`)  
  - Authentication & Authorization ready  

- **Menu & Categories**  
  - Menu items linked to categories  
  - Pricing, descriptions, timestamps  

- **Orders & Order Items**  
  - Place, update, and track orders  
  - Order types: `pickup`, `delivery`  
  - Status tracking: `pending → confirmed → preparing → out_for_delivery → completed → cancelled`  

- **Prepared Orders**  
  - Chefs mark items as `not_ready` or `ready`  
  - Drivers pick up ready orders  

- **Inventory Management**  
  - Track quantities, units, and reorder levels  
  - Managed by chefs; admin/owner can monitor stock  

- **Deliveries**  
  - Assign drivers  
  - Track delivery status: `assigned`, `in_progress`, `delivered`  

- **Reviews & Ratings**  
  - Customers leave feedback per order  

---

## 🏗️ Tech Stack

- **Backend Framework**: [NestJS](https://nestjs.com/)  
- **Database**: [PostgreSQL](https://www.postgresql.org/)  
- **ORM**: [TypeORM](https://typeorm.io/)  
- **Schema Design**: DBML (`dbdiagram.io` compatible)  

---

## 📂 Database Schema

Main entities:

- **Users** (`users`) – base table for all user types  
- **Admins** (`admins`) – owner/admin of the restaurant  
- **Chefs** (`chefs`) – kitchen staff with specialty and hire date  
- **Drivers** (`drivers`) – delivery personnel with vehicle info  
- **Customers** (`customers`) – customer profiles with address  
- **Categories** (`categories`) – menu item categories  
- **Menu** (`menu`) – items linked to categories  
- **Inventory** (`inventory`) – tracks stock, quantities, reorder level, managed by chefs  
- **Orders** (`orders`) – placed by customers  
- **Order Items** (`order_items`) – items in each order  
- **Prepared Orders** (`prepared_orders`) – tracks readiness of each order item  
- **Deliveries** (`deliveries`) – tracks assigned driver and delivery status  
- **Reviews** (`reviews`) – customer feedback per order  

👉 See [`schema.dbml`](./schema.dbml) for full diagram.

---

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/restaurant-api.git
cd restaurant-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment

Create `.env` file:

```env
DATABASE_URL=postgres://user:password@localhost:5432/restaurantdb
PORT=3000
```

### 4. Run migrations

```bash
npm run typeorm migration:run
```

### 5. Start the server

```bash
npm run start:dev
```

---

## 📌 Example Endpoints

| Method | Endpoint                     | Description                 |
| ------ | ---------------------------- | --------------------------- |
| POST   | `/auth/register`             | Register a new user         |
| POST   | `/auth/login`                | Login and get a token       |
| GET    | `/menu`                      | List all menu items         |
| GET    | `/categories`                | List all categories         |
| GET    | `/orders/:id`                | Get order details           |
| POST   | `/orders`                    | Place an order              |
| GET    | `/prepared-orders`           | Get orders ready for pickup |
| POST   | `/deliveries/:id/assign`     | Assign a driver            |
| GET    | `/reviews/:userId`           | Get reviews by customer     |

---

## 🛠️ Development

- Run in watch mode:

```bash
npm run start:dev
```

- Run tests:

```bash
npm run test
```

---

## 📜 License

MIT License © 2025 [Your Name]
