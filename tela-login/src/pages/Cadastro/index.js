import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import arrow from './images/arrow.png'

function Cadastro() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (evt) => {
        evt.preventDefault()
        setShow(!show);
    }

    return (
        <div className='text-center' id='cadastro'>
            <h1 id='MainTitle'>Cadastro</h1>

            <form>
                <div class='mb-3' id='inputEmail'>
                    <input
                        type='email'
                        placeholder='Endereço de e-mail'
                        class='form-control'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div class='mb-3' id='inputPassword'>
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

                <button type='submit' className='btn btn-success'>Cadastrar</button>
            </form>

            <div className='forReturn'>
            <Link to="/"><img src={arrow} className='arrow' alt='Return' /></Link>
            </div>
        </div>
    )
}

export default Cadastro
