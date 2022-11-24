import { Button } from 'antd';
import React from 'react';
import { LoginOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';


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
                Login
            </Button>
        </div>
     );
}
 
export default AccoutButtons;