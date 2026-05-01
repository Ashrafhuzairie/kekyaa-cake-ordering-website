import React, { useState } from 'react';
import { storage } from '../services/storage';

const AdminPage = () => {
  const [title, setTitle] = useState('Kek Batik Indulgence');
  const [price, setPrice] = useState('55');
  const [products, setProducts] = useState(storage.getProducts());

  const addProduct = () => {
    const next = [{ id: crypto.randomUUID(), title, price: Number(price), isActive: true }, ...products];
    setProducts(next);
    storage.saveProducts(next);
  };

  return (
    <main className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant">Admin Panel</h1>
        <p className="p__opensans">Phase 4: menu and promo management starter.</p>
        <div style={{ display: 'grid', gap: 10, maxWidth: 480 }}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product title" />
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
          <button className="custom__button" type="button" onClick={addProduct}>Add Product</button>
        </div>
        <ul style={{ marginTop: 20 }}>
          {products.map((product) => <li key={product.id} className="p__opensans">{product.title} - RM{product.price}</li>)}
          {!products.length && <li className="p__opensans">No admin products yet.</li>}
        </ul>
      </div>
    </main>
  );
};

export default AdminPage;
