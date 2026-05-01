# Kekyaa Project Review & Feature Development Guide

## 1) Current project assessment

The current app is a clean React single-page marketing website composed from reusable sections and constants-driven content. It already has:

- Section-based landing structure (`Header`, `AboutUs`, `SpecialMenu`, `Gallery`, `Footer`).
- Responsive navigation with mobile menu overlay.
- Centralized menu/product data in `src/constants/data.js`.
- Social-driven order flow (good for early MVP).

### Biggest gaps before adding login

1. **No client-side routing**: the app is single-page and anchor-link based.
2. **No backend/API layer**: all data is static in frontend constants.
3. **No auth/session model**: login/register links are commented out in Navbar.
4. **No form validation/data persistence** for account or orders.

---

## 2) Recommended architecture for “login + more features”

For this project stage, keep React frontend and add a lightweight API + database.

### Suggested stack

- **Frontend**: Existing React app + React Router.
- **Backend API**: Node.js + Express (or Fastify).
- **Database**: PostgreSQL (good for orders/users).
- **Auth**: JWT with refresh-token rotation in HttpOnly cookies OR managed auth (Supabase/Firebase/Auth0).
- **Deployment**:
  - Frontend: Vercel/Netlify
  - API + DB: Railway/Render/Fly.io/Supabase

If you want fastest path: use **Supabase Auth + Postgres** and keep most backend logic simple.

---

## 3) Feature roadmap (priority order)

## Phase 0 — Foundations (do first)

- Add environment config (`.env`) and API base URL strategy.
- Add React Router pages (`/`, `/menu`, `/login`, `/account`, `/orders`).
- Add state management for user/session (Context or Redux Toolkit).

## Phase 1 — Authentication

- Login
- Register
- Forgot/reset password
- Logout
- Protected routes (`/account`, `/checkout`, `/orders`)

**Security essentials:**
- Hash passwords server-side (bcrypt/argon2)
- Validate inputs (zod/joi)
- Rate-limit auth endpoints
- Store tokens securely (HttpOnly cookie preferred)

## Phase 2 — Ordering system

- Replace static WhatsApp-only path with in-app order flow:
  - Cart
  - Delivery/Pickup options
  - Checkout form
  - Order confirmation
- Keep WhatsApp as optional final channel for manual confirmation.

## Phase 3 — Customer accounts

- Profile page (name, phone, address)
- Order history and reorder
- Saved cake preferences (size/flavor)

## Phase 4 — Admin features

- Admin login/roles
- Product/menu CRUD
- Order status management (pending, confirmed, baking, out-for-delivery, completed)
- Promo code management

---

## 4) Practical implementation plan for login

1. **Uncomment/add Login/Register nav links** and route to `/login` + `/register`.
2. Build `AuthContext` with:
   - `user`
   - `login()`
   - `register()`
   - `logout()`
   - `isAuthenticated`
3. Create auth pages and forms with client-side validation.
4. Build backend endpoints:
   - `POST /auth/register`
   - `POST /auth/login`
   - `POST /auth/logout`
   - `GET /auth/me`
5. Add protected-route wrapper.
6. On app load, call `/auth/me` to restore session.

---

## 5) Data model starter (minimum)

### `users`
- id (uuid)
- email (unique)
- password_hash
- full_name
- phone
- created_at

### `products`
- id
- title
- category
- size
- price
- image_url
- is_active

### `orders`
- id
- user_id (nullable for guest checkout)
- status
- total_amount
- delivery_type
- delivery_address
- notes
- created_at

### `order_items`
- id
- order_id
- product_id
- quantity
- unit_price

---

## 6) Codebase improvements to support scaling

- Move from `src/constants/data.js` static product data to API-driven fetching.
- Add API service layer (`src/services/api.js`) so components stay clean.
- Add form library + schema validation (React Hook Form + Zod).
- Add testing:
  - Unit tests for auth utilities
  - Component tests for login/register forms
  - Basic e2e flow for login + place order

---

## 7) Suggested next 2-week milestone

### Week 1
- Routing + auth UI + backend auth endpoints + DB schema.

### Week 2
- Cart + checkout + create order endpoint + “My Orders” page.

Deliverable at end of 2 weeks: authenticated user can log in and place a tracked order.

---

## 8) Immediate next tasks in this repo

1. Install and configure `react-router-dom`.
2. Add `pages/` directory (`Home`, `Login`, `Register`, `Account`).
3. Add `context/AuthContext.jsx`.
4. Add placeholder API client and `.env` docs.
5. Re-enable login/register links in Navbar.

