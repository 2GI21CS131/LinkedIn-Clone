import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Invalid Credentials');
    }
  };

  return (
    <form onSubmit={onSubmit} className="auth-form"> {/* APPLYING THIS CLASS */}
      <h2>Login</h2>
      <div className="form-group"> {/* APPLYING THIS CLASS */}
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={onChange} required />
      </div>
      <div className="form-group"> {/* APPLYING THIS CLASS */}
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={onChange} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;