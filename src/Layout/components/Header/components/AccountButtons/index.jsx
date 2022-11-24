import { Button } from 'antd';
import React from 'react';
import { LoginOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import userService from '../../../../../services/user.service';


const AccoutButtons = () => {
    const navigate = useNavigate()
    
    return ( 
        <div>
            <Button 
                type='primary' 
                ghost 
                color='green'
                icon={<LoginOutlined />}
                onClick={() => navigate('/login')}
            >
                Sign In / Up
            </Button>
        </div>
     );
}
 
export default AccoutButtons;