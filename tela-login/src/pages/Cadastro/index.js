import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

import arrow from './images/arrow.png'

function Cadastro() {
    return (
        <div className='text-center' id='cadastro'>
            <h1 id='MainTitle'>Cadastro</h1>

            <div className="col-md-7 col-lg-8 d-flex justify-content-center" id='cadastro-usuario'>
                <form>
                    <div className="row g-3 justify-content-center" id='itensForm'>
                        <div className="col-7">
                            <input type="text" className="form-control" id="nome" placeholder="Nome" required />
                        </div>

                        <div className="col-7">
                            <input type="text" className="form-control" id="sobrenome" placeholder="Sobrenome" required />
                        </div>

                        <div className="col-7">
                            <input type="email" className="form-control" id="email" placeholder="seu@email.com" />
                        </div>

                        <div className="col-7">
                            <input type="password" className="form-control" id="password" placeholder="Senha" required />
                        </div>

                        <div className="col-7">
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmar senha" />
                        </div>

                        <div className="col-7">
                            <input type="date" className="form-control" id="birthday" placeholder='dataNascimento' required />
                        </div>
                    </div>
                </form>

                <button type='submit' className='btn btn-success'>Cadastrar</button>

                <div className='forReturn'>
                    <Link to="/"><img src={arrow} className='arrow' alt='Return' /></Link>
                </div>
            </div >
        </div >
    )
}

export default Cadastro
