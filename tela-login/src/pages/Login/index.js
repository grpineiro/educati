import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './login.css'

import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import sun from './images/sun.png'
import cloud1 from './images/cloud.png'
import cloud2 from './images/cloud.png'
import about from './images/info.png'

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
            <div className='forSun'>
                <img src={sun} id='sun' alt='Sun' />
            </div>
            <div className='forCloud1'>
                <img src={cloud1} id='cloud1' alt='Cloud' />
            </div>
            <div className='forCloud2'>
                <img src={cloud2} id='cloud2' alt='Cloud' />
            </div>

            <h1 id='MainTitle'>EducaTI</h1>

            <form>
                <div class='mb-3' id='inputEmail'>
                    <MdEmail />
                    <input
                        type='email'
                        placeholder='Endereço de e-mail'
                        class='form-control'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div class='mb-3' id='inputPassword'>
                    <RiLockPasswordFill />
                    <input
                        type={show ? 'text' : 'password'}
                        placeholder='Senha'
                        class='form-control'
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
                <button type='submit' className='btn btn-outline-light'>Convidado</button>
            </form>

            <div className='forAbout'>
                <Link to="/sobre"><img src={about} className='about' alt='About' /></Link>
            </div>
        </div>
    )
}

export default Login
