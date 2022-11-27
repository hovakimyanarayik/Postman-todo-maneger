import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AvatarBox from './components/ProfileAvatarBox';
import ProfileInfo from './components/ProfileInfo';


const Profile = () => {
    const {authorizated, data} = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if(!authorizated) {
            navigate('/login')
        }
    }, [authorizated])
    return ( 
        <ProfileBox>
            <AvatarBox name={data.name} />
            <ProfileInfo {...data} />
        </ProfileBox>
     );
}

const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`
 
export default Profile;