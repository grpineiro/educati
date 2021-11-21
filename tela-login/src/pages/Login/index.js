import React from 'react'
import './login.css'

import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

import sun from './images/sun.png'
import cloud1 from './images/cloud.png'
import cloud2 from './images/cloud.png'
import about from './images/info.png'

const Login = () => {
    return (
        <div className='login'>
            {/* Images */}
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
                    <input type='text' placeholder='Endereço de e-mail' required />
                </div>

                <div className='inputPassword'>
                    <RiLockPasswordFill />
                    <input type='password' placeholder='Senha' required />
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
