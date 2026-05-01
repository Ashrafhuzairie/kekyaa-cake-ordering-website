import React, { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { storage } from '../services/storage';

const OrdersPage = () => {
  const { user } = useAuth();
  const [note, setNote] = useState('Happy Birthday message');
  const [status, setStatus] = useState('pending');

  const orders = useMemo(() => storage.getOrders().filter((o) => o.userId === user.id), [user.id, status]);

  const createDemoOrder = () => {
    const all = storage.getOrders();
    const newOrder = {
      id: crypto.randomUUID(),
      userId: user.id,
      status,
      notes: note,
      totalAmount: 85,
      createdAt: new Date().toISOString(),
    };
    storage.saveOrders([newOrder, ...all]);
    setStatus('pending');
  };

  return (
    <main className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant">My Orders</h1>
        <p className="p__opensans">Phase 2 + 3: create and track your orders.</p>
        <div style={{ display: 'grid', gap: 10, maxWidth: 480 }}>
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Order note" />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">pending</option>
            <option value="confirmed">confirmed</option>
            <option value="baking">baking</option>
            <option value="completed">completed</option>
          </select>
          <button type="button" className="custom__button" onClick={createDemoOrder}>Create Demo Order</button>
        </div>
        <ul style={{ marginTop: 20 }}>
          {orders.map((order) => <li key={order.id} className="p__opensans">{order.status} - RM{order.totalAmount} - {order.notes}</li>)}
          {!orders.length && <li className="p__opensans">No orders yet.</li>}
        </ul>
      </div>
    </main>
  );
};

export default OrdersPage;
