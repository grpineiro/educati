import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'

import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import sunLogin from '../../images/sun.png'
import cloudLogin1 from '../../images/cloud.png'
import cloudLogin2 from '../../images/cloud.png'
import aboutLogin from '../../images/info.png'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)

  const handleClick = (evt) => {
    evt.preventDefault()
    setShow(!show);
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

      <form>
        <div className='mb-3' id='inputEmailLogin'>
          <MdEmail />
          <input
            type='email'
            placeholder='Endereço de e-mail'
            className='form-control-login'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-3' id='inputPasswordLogin'>
          <RiLockPasswordFill />
          <input
            type={show ? 'text' : 'password'}
            placeholder='Senha'
            className='form-control-login'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className='login-eye'>
            {show ? (
              <IoEyeOutline
                size={20}
                onClick={handleClick}
              />
            ) : (
              <IoEyeOffOutline
                size={20}
                onClick={handleClick}
              />
            )}
          </div>
        </div>

        <button type='submit' className='btn btn-outline-light'>Entrar</button>
        <Link to="/cadastrar"><button type='submit' className='btn btn-outline-light' id='cadastrar'>Cadastrar</button></Link>
        <Link to="/home"><button type='submit' className='btn btn-outline-light'>Convidado</button></Link>
      </form>

      <div className='forAbout'>
        <Link to="/sobre"><img src={aboutLogin} className='aboutLogin' alt='About' /></Link>
      </div>
    </div>
  )
}

export default Login
