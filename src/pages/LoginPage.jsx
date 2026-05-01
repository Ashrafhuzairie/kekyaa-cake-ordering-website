import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setError('');
    try {
      login(form);
      navigate('/account');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="app__bg app__wrapper section__padding" id="login">
      <form onSubmit={submit} className="app__wrapper_info" style={{ maxWidth: 420, margin: '0 auto' }}>
        <h1 className="headtext__cormorant">Login</h1>
        <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        {error && <p style={{ color: 'salmon' }}>{error}</p>}
        <button type="submit" className="custom__button">Sign In</button>
        <p className="p__opensans">No account? <Link to="/register">Register</Link></p>
      </form>
    </main>
  );
};

export default LoginPage;
