import React from 'react';
import '../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { asynAuthUser } from '../states/auth/action';

function Login() {
  const [email, onEmailChange ] = useInput('hikma@gmail.com');
  const [ password, onPasswordChange ] = useInput('hikio010217');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onLogin = ({ email, password }) => {
    dispatch(asynAuthUser({ email, password }));
    navigate('/');
  }
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Qouraku</h1>
        <p>Tempat berbagi pengetahuan dan memahami dunia lebih baik</p>
      </div>
      <form>
        <div className="form-input">
          <span>Email</span>
          <input type="email" placeholder="Email anda" value={email} onChange={onEmailChange} />
        </div>
        <div className="form-input">
          <span>Kata Sandi</span>
          <input type="password" placeholder="Kata sandi Anda" value={password} onChange={onPasswordChange} />
        </div>
        <div className="submit">
          <span>
            Tidak punya Akun?
            {' '}
            <Link to="/register">Daftar akun</Link>
          </span>
          <button type="button" onClick={() => onLogin({ email, password })}>Masuk</button>
        </div>
      </form>
    </div>
  );
}

export default Login;