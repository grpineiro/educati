import React, { useState } from 'react'
import './login.css'

import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

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
        <div className='login'>
            <div className='forSun'>
                <img src={sun} className='sun' alt="Sun" />
            </div>
            <div className='forCloud1'>
                <img src={cloud1} className='cloud1' alt="Cloud" />
            </div>
            <div className='forCloud2'>
                <img src={cloud2} className='cloud2' alt="Cloud" />
            </div>

            <h1 className='MainTitle'>EducaTI</h1>

            <div className='accessAccount'>
                <div className='inputEmail'>
                    <MdEmail />
                    <input
                        type='text'
                        placeholder='Endereço de e-mail'
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className='inputPassword'>
                    <RiLockPasswordFill />
                    <input
                        type={show ? "text" : "password"}
                        placeholder='Senha'
                        required
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

                <button type='submit'>Entrar</button>
                <button type='submit'>Registrar</button>
                <button type='submit'>Convidado</button>
            </div>

            <div className='forAbout'>
                <img src={about} className='about' alt="About" />
            </div>
        </div>
    )
}

export default Login
