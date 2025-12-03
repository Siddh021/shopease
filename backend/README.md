# React E-Commerce Backend (sample)

This backend is a ready-to-run Node.js + Express API for the React E-Commerce front-end.

## Features
- Products CRUD
- User auth (register/login) with JWT
- Cart (per-user)
- Wishlist (per-user)
- Orders (create + list)
- Seed script to insert demo user + products

## Quick start
1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. `npm install`
3. `npm run seed` (optional) to seed demo data
4. `npm run dev` to start in development with nodemon
