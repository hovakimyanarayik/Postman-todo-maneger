import React from 'react';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';


const LoginButton = () => {
    const navigate = useNavigate()
    
    return ( 
        <Button 
            type='link' 
            icon={<LoginOutlined />}
            onClick={() => navigate('/login')}
        >
            Sign In / Up
        </Button>
     );
}
 
export default LoginButton;