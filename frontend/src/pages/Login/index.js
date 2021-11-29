import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'

import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import sunLogin from '../../images/sun.png'
import cloudLogin1 from '../../images/cloud.png'
import cloudLogin2 from '../../images/cloud.png'
import aboutLogin from '../../images/info.png'

import { UserContext } from '../../contexts/user.context'
import useForm from '../../hooks/useForm'

function Login() {
  const [{ values }, handleChange, handleSubmit] = useForm();
  const [show, setShow] = useState(false)
  let navigate = useNavigate();

  const { signIn, signGuest } = useContext(UserContext);

  function uploadData() {
    fetch('http://localhost:3333/auth/user', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => !!data.message ? alert(data.message) : signIn(data, () => navigate("/home")));
  }

  const handleClick = (evt) => {
    evt.preventDefault();
    uploadData();
  }

  return (
    <div className='text-center' id='login'>
      <div className='forSunLogin'>
        <img src={sunLogin} id='sunLogin' alt='Sun' />
      </div>
      <div className='forCloudLogin1'>
        <img src={cloudLogin1} id='cloudLogin1' alt='Cloud' />
      </div>
      <div className='forCloudLogin2'>
        <img src={cloudLogin2} id='cloudLogin2' alt='Cloud' />
      </div>

      <h1 id='loginTitle'>EducaTI</h1>

      <form onSubmit={handleSubmit(handleClick)}>
        <div className='mb-3' id='inputEmailLogin'>
          <MdEmail />
          <input
            type='email'
            placeholder='Endereço de e-mail'
            className='form-control-login'
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className='mb-3' id='inputPasswordLogin'>
          <RiLockPasswordFill />
          <input
            type={show ? 'text' : 'password'}
            placeholder='Senha'
            className='form-control-login'
            name="password"
            onChange={handleChange}
          />

          <div className='login-eye'>
            {show ? (
              <IoEyeOutline
                size={20}
                onClick={() => setShow(false)}
              />
            ) : (
              <IoEyeOffOutline
                size={20}
                onClick={() => setShow(true)}
              />
            )}
          </div>
        </div>

        <button onClick={handleClick} className='btn btn-outline-light'>Entrar</button>
        <Link to="/cadastrar"><button type='submit' className='btn btn-outline-light' id='cadastrar'>Cadastrar</button></Link>
        <button onClick={() => signGuest(() => navigate("/home"))} type='submit' className='btn btn-outline-light'>Convidado</button>
      </form>

      <div className='forAbout'>
        <Link to="/sobre"><img src={aboutLogin} className='aboutLogin' alt='About' /></Link>
      </div>
    </div>
  )
}

export default Login
