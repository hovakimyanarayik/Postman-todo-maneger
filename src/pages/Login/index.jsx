import React from 'react';
import { LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import FlexColumnCenterBox from '../../components/FlexColumnCenterBox';
import Form from '../../components/Form';
import loginFields from './loginFormFields';

const Login = () => {
    const handleLogin = (values) => {
        console.log(values);
    }
    return ( 
        <FlexColumnCenterBox title="Sign In"> 
            <Form 
                fields={loginFields} 
                onSubmit={handleLogin}
                buttonText='Login'
                buttonIcon={<LoginOutlined />}
            />
            <Link to='/registration'>Don't have an account yet? Sign Up</Link>
        </FlexColumnCenterBox>
     );
}
 
export default Login;