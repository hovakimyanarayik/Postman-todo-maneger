import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Avatar from '../../../../../components/Avatar';


const ProfileButton = () => {
    const navigate = useNavigate()
    return ( 
        <Button
            type='link'
            icon={<Avatar />}
            onClick={() =>  navigate('/profile')}
        >
            Profile
        </Button>
     );
}
 
export default ProfileButton;