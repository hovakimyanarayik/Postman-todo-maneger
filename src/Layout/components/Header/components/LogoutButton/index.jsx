import React from 'react';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { logout } from '../../../../../slices/userSlice';

const LogoutButton = () => {
    const dispatch = useDispatch()
    
    return ( 
        <Button 
            danger
            type="primary"
            icon={<LogoutOutlined />}
            onClick={() => {
                dispatch(logout())
            }}
        >
            Logout
        </Button>
     );
}
 
export default LogoutButton;