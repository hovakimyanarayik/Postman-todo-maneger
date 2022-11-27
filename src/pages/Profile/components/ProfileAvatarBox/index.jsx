import React from 'react';
import { Typography } from 'antd';
import Avatar from '../../../../components/Avatar';
import styled from 'styled-components';
import AvatarChangeField from './components/AvatarChangeField';


const AvatarBox = ({ name }) => {
    return ( 
        <CustomAvatarBox>
            <Avatar size={200} />
            <AvatarChangeField />
            <Typography.Title level={2}>{name}</Typography.Title>
        </CustomAvatarBox>
     );
}

const CustomAvatarBox = styled.div`
    max-width: max-content;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
 
export default AvatarBox;