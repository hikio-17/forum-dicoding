/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncReceiveUser } from '../states/users/action';
import InputRegister from '../components/InputRegister';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    if (password.length < 6) {
      alert('password harus lebih dari 6 karakter!');
      return;
    }
    dispatch(asyncReceiveUser({ name, email, password }));
    navigate('/login')
}
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Qouraku</h1>
        <p>Tempat berbagi pengetahuan dan memahami dunia lebih baik</p>
      </div>
      <InputRegister register={onRegister}/>
    </div>
  );
}

export default Register;