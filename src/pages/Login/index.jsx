import React, { useEffect } from 'react';
import { LoginOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import FlexColumnCenterBox from '../../components/FlexColumnCenterBox';
import Form from '../../components/Form';
import loginFields from './loginFormFields';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import useAuthorization from '../../hooks/useAuthorization';


const Login = () => {
    const { handleSubmit, state: {authorizated, status} } = useAuthorization('login')
    const navigate = useNavigate()

    useEffect(() => {
        if(authorizated) {
            navigate(-1, {replace: true})
        }
    }, [authorizated])

    if(status === 'pending') {
        return <LoadingSkeleton />
    }

    return ( 
        <FlexColumnCenterBox title="Sign In"> 
            <Form 
                fields={loginFields} 
                onSubmit={handleSubmit}
                buttonText='Login'
                buttonIcon={<LoginOutlined />}
            />
            <Link to='/registration'>Don't have an account yet? Sign Up</Link>
        </FlexColumnCenterBox>
     );
}

export default Login;