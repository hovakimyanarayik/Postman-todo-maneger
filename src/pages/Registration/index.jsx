import React, { useEffect } from 'react';
import registrationFields from './registrationFormFields'
import FlexColumnCenterBox from '../../components/FlexColumnCenterBox';
import Form from '../../components/Form';
import { LoginOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import useAuthorization from '../../hooks/useAuthorization';
import LoadingSkeleton from '../../components/LoadingSkeleton';

const Registration = () => {
    const { handleSubmit, state: {authorizated, status} } = useAuthorization('register')
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
        <FlexColumnCenterBox title='Sign Up'>
            <Form 
                fields={registrationFields} 
                onSubmit={handleSubmit}
                buttonText='Sign Up'
                buttonIcon={<LoginOutlined />}
            />
            <Link to='/login'>Already have an account? Login</Link>
        </FlexColumnCenterBox>
     );
}

export default Registration;