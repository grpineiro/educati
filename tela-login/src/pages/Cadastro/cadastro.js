import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

import arrow from '../../images/arrow.png'

function Cadastro() {
    return (
        <div className='text-center' id='cadastro'>
            <h1 id='cadastroTitle'>Cadastro</h1>

            <div className="col-md-7 col-lg-8 d-flex justify-content-center" id='cadastro-usuario'>
                <form>
                    <div className="row g-3 justify-content-center" id='itensFormCadastro'>
                        <div className="col-7">
                            <input type="text" className="form-control-cadastro" id="nomeCadastro" placeholder="Nome" required />
                        </div>

                        <div className="col-7">
                            <input type="text" className="form-control-cadastro" id="sobrenomeCadastro" placeholder="Sobrenome" required />
                        </div>

                        <div className="col-7">
                            <input type="email" className="form-control-cadastro" id="emailCadastro" placeholder="seu@email.com" />
                        </div>

                        <div className="col-7">
                            <input type="password" className="form-control-cadastro" id="passwordCadastro" placeholder="Senha" required />
                        </div>

                        <div className="col-7">
                            <input type="password" className="form-control-cadastro" id="confirmPasswordCadastro" placeholder="Confirmar senha" />
                        </div>

                        <div className="col-7">
                            <input type="date" className="form-control-cadastro" id="birthdayCadastro" placeholder='Data de Nascimento' required />
                        </div>
                    </div>
                </form>

                <button type='submit' className='btnCadastro'>Cadastrar</button>

                <div className='forReturn'>
                    <Link to="/"><img src={arrow} className='arrowCadastro' alt='Return' /></Link>
                </div>
            </div >
        </div >
    )
}

export default Cadastro
