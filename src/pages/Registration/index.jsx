import React from 'react';
import registrationFields from './registrationFormFields'
import FlexColumnCenterBox from '../../components/FlexColumnCenterBox';
import Form from '../../components/Form';
import { LoginOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Registration = () => {

    const handleRegistration = (values) => {
        console.log(values);
    }

    return ( 
        <FlexColumnCenterBox title='Sign Up'>
            <Form 
                fields={registrationFields} 
                onSubmit={handleRegistration}
                buttonText='Sign Up'
                buttonIcon={<LoginOutlined />}
            />
            <Link to='/login'>Already have an account? Login</Link>
        </FlexColumnCenterBox>
     );
}
 
export default Registration;