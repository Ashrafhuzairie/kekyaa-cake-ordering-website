import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setError('');
    try {
      register(form);
      navigate('/account');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="app__bg app__wrapper section__padding">
      <form onSubmit={submit} className="app__wrapper_info" style={{ maxWidth: 420, margin: '0 auto' }}>
        <h1 className="headtext__cormorant">Register</h1>
        <input placeholder="Full name" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
        <input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        <input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        {error && <p style={{ color: 'salmon' }}>{error}</p>}
        <button type="submit" className="custom__button">Create Account</button>
        <p className="p__opensans">Already have account? <Link to="/login">Login</Link></p>
      </form>
    </main>
  );
};

export default RegisterPage;
