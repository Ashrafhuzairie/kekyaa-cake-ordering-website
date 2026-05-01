import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AccountPage = () => {
  const { user, logout, promoteAdmin } = useAuth();

  return (
    <main className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant">My Account</h1>
        <p className="p__opensans">Name: {user.fullName}</p>
        <p className="p__opensans">Email: {user.email}</p>
        <p className="p__opensans">Role: {user.role}</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
          <Link to="/orders" className="custom__button">My Orders</Link>
          <button type="button" className="custom__button" onClick={logout}>Logout</button>
          {user.role !== 'admin' && <button type="button" className="custom__button" onClick={promoteAdmin}>Become Admin (Demo)</button>}
        </div>
      </div>
    </main>
  );
};

export default AccountPage;
