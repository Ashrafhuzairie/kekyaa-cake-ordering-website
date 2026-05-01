const USERS_KEY = 'kekyaa_users';
const ORDERS_KEY = 'kekyaa_orders';
const PRODUCTS_KEY = 'kekyaa_products';

const read = (key, fallback = []) => {
  const raw = window.localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const storage = {
  getUsers: () => read(USERS_KEY),
  saveUsers: (users) => write(USERS_KEY, users),
  getOrders: () => read(ORDERS_KEY),
  saveOrders: (orders) => write(ORDERS_KEY, orders),
  getProducts: () => read(PRODUCTS_KEY),
  saveProducts: (products) => write(PRODUCTS_KEY, products),
};
