import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

function InputRegister({ register }) {
   const [ name, onNameChange ] = useInput('');
   const [ email, onEmailChange ] = useInput('');
   const [ password, onPasswordChange ] = useInput('');
   return (
      <form>
        <div className="form-input">
          <span>Nama</span>
          <input type="text" placeholder="Nama anda" value={name} onChange={onNameChange} />
        </div>
        <div className="form-input">
          <span>Email</span>
          <input type="email" placeholder="Email anda" value={email} onChange={onEmailChange} />
        </div>
        <div className="form-input">
          <span>Kata Sandi</span>
          <input type="password" placeholder="Kata sandi Anda" value={password}  onChange={onPasswordChange}/>
        </div>
        <div className="submit">
          <span>
            Sudah punya Akun?
            {' '}
            <Link to="/login">Masuk</Link>
          </span>
          <button type='button' onClick={() => register({ name, email, password })}>Buat Akun</button>
        </div>
      </form>
   )
}

export default InputRegister;