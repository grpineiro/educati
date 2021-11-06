import React from 'react'
import { Button, Container, TextField, Typography, withStyles } from '@material-ui/core'

function Login() {
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <div className="mt-3 md-5">  {/* mt = margin-top 1rem !important. md = margin: 3rem !important. (para telas pequenas = 3 e grandes = 5) */}
                    <div className="text-center"> {/* text-align: center !important */}
                        <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">TESTE</Typography> {/* mt = margin-top 1rem !important. font-weight: 400 !important */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default Login;