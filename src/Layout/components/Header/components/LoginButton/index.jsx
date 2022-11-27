import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons'


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