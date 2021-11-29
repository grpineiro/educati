import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './cadastro.css'

import arrow from '../../images/arrow.png'

import useForm from '../../hooks/useForm';
import { UserContext } from '../../contexts/user.context'

function Cadastro() {
    const [{ values, loading }, handleChange, handleSubmit] = useForm();
    const { signIn } = useContext(UserContext);
    const navigate = useNavigate();

    function submitBody(evt) {
        // evt.preventDefault();
        console.log(values);
        uploadData();
    }

    function uploadData() {
        fetch('http://localhost:3333/create/user', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => !!data.message ? alert(data.message) : signIn(data, () => navigate("/home")))
    }

    return (
        <div className='text-center' id='cadastro'>
            <h1 id='cadastroTitle'>Cadastro</h1>

            <div className="col-md-7 col-lg-8 d-flex justify-content-center" id='cadastro-usuario'>
                <form onSubmit={handleSubmit(submitBody)}>
                    <div className="row g-3 justify-content-center" id='itensFormCadastro'>
                        <div className="col-7">
                            <input onChange={handleChange} type="text" className="form-control-cadastro" id="nomeCadastro" name="first_name" placeholder="Nome" required />
                        </div>

                        <div className="col-7">
                            <input onChange={handleChange} type="text" className="form-control-cadastro" id="sobrenomeCadastro" name="last_name" placeholder="Sobrenome" required />
                        </div>

                        <div className="col-7">
                            <input onChange={handleChange} type="email" className="form-control-cadastro" id="emailCadastro" name="email" placeholder="seu@email.com" />
                        </div>

                        <div className="col-7">
                            <input onChange={handleChange} type="password" className="form-control-cadastro" id="passwordCadastro" name="password" placeholder="Senha" required />
                        </div>

                        <div className="col-7">
                            <input type="password" className="form-control-cadastro" id="confirmPasswordCadastro" name="test" placeholder="Confirmar senha" />
                        </div>

                        <div className="col-7">
                            <input onChange={handleChange} type="date" className="form-control-cadastro" id="birthdayCadastro" name="birth" placeholder='Data de Nascimento' required />
                        </div>
                        <button type='submit' className='btnCadastro'>Cadastrar</button>
                    </div>
                </form>

                <div className='forReturn'>
                    <Link to="/"><img src={arrow} className='arrowCadastro' alt='Return' /></Link>
                </div>
            </div >
        </div >
    )
}

export default Cadastro
