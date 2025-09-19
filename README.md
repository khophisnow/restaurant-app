# 🍽️ Restaurant Management API

A complete backend system for managing restaurants, menus, orders, deliveries, employees, and payments.  
Built with **NestJS**, **TypeORM**, and **PostgreSQL**, the API is designed for multi-restaurant operations with support for customers, employees, drivers, and admins.

---

## 🚀 Features

- **Multi-Restaurant Support**  
  - Companies → Restaurants → Restaurant Settings  
- **User Management**  
  - Roles (customer, admin, driver, employee)  
  - Authentication & Authorization ready  
- **Menu & Categories**  
  - Menu items with categories  
  - Pricing, descriptions, timestamps  
- **Orders & Order Items**  
  - Create, update, and track orders  
  - Order types: pickup, delivery  
  - Status tracking (pending → confirmed → completed)  
- **Deliveries**  
  - Assign drivers  
  - Track delivery status  
- **Payments**  
  - Multiple methods (card, cash, mobile money)  
  - Transaction statuses  
- **Employees & HR**  
  - Employee profiles, salaries, hiring dates  
  - Salary withdrawals  
  - Employee requests (leave, equipment, advance)  
- **Reviews & Ratings**  
  - Customer feedback per order  

---

## 🏗️ Tech Stack

- **Backend Framework**: [NestJS](https://nestjs.com/)  
- **Database**: [PostgreSQL](https://www.postgresql.org/)  
- **ORM**: [TypeORM](https://typeorm.io/)  
- **Schema Design**: DBML (`dbdiagram.io` compatible)  

---

## 📂 Database Schema

Main entities:

- **Companies**
- **Restaurants** (linked to Companies)  
- **Restaurant Settings**  
- **Users & Roles**  
- **Menu & Categories**  
- **Orders & Order Items**  
- **Deliveries & Drivers**  
- **Payments**  
- **Employees, Salary Withdrawals, Employee Requests**  
- **Reviews**

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

| Method | Endpoint                     | Description               |
| ------ | ---------------------------- | ------------------------- |
| POST   | `/auth/register`             | Register a new user       |
| POST   | `/auth/login`                | Login and get a token     |
| GET    | `/restaurants`               | List all restaurants      |
| GET    | `/restaurants/:id/menu`      | Get menu for a restaurant |
| POST   | `/orders`                    | Place an order            |
| GET    | `/orders/:id`                | Get order details         |
| POST   | `/employees/:id/withdrawals` | Request salary withdrawal |
| GET    | `/reviews/:restaurantId`     | Get restaurant reviews    |

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
