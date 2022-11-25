import React from 'react';
import { Header as HeaderAnt } from 'antd/es/layout/layout';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useSelector } from 'react-redux';


const Header = () => {
    const {authorizated} = useSelector(state => state.user)

    return ( 
        <StyledHeader>
            <Navbar />
            {authorizated ? <LogoutButton /> : <LoginButton />}
        </StyledHeader>
     );
}


const StyledHeader = styled(HeaderAnt)`
    width: 100%;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
`
 
export default Header;