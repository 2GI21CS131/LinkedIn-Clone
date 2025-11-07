import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error registering. User may already exist.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="auth-form"> {/* APPLYING THIS CLASS */}
      <h2>Register</h2>
      <div className="form-group"> {/* APPLYING THIS CLASS */}
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={onChange} required />
      </div>
      <div className="form-group"> {/* APPLYING THIS CLASS */}
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={onChange} required />
      </div>
      <div className="form-group"> {/* APPLYING THIS CLASS */}
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={onChange} required minLength="6" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;