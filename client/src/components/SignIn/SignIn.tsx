import React from 'react';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import SignInStyles from './SignIn.styles';
import { Link } from 'react-router-dom';
import ColorPalette from '../../utils/ColorPalette';

function SignIn(){
    const [visible, setVisible] = React.useState(true)
    return(
        <div style={SignInStyles.signIn}>
            <h1 style={SignInStyles.title}>Login</h1>
            <TextField type="username"></TextField>
            <TextField type="password"></TextField>
            <div style={SignInStyles.groupButtonAndForgotPassword}>
                <Button version="primary" style={SignInStyles.signInButton}>Entrar</Button>
                <Link style={SignInStyles.forgotPassword} to={"/"}>Esqueci minha senha</Link>
            </div>
            <h3 style={SignInStyles.signUpCall}>Não possui uma conta? <span onClick={() => {setVisible(false)}} style={{color: ColorPalette.orange, cursor: "pointer"}}>Registre-se</span></h3>
        </div>
    );
}

export default SignIn;