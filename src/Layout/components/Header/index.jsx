import React from 'react';
import { Header as HeaderAnt } from 'antd/es/layout/layout';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import AccoutButtons from './components/AccountButtons';


const Header = () => {

    return ( 
        <StyledHeader>
            <Navbar />
            <AccoutButtons />
        </StyledHeader>
     );
}


const StyledHeader = styled(HeaderAnt)`
    width: 100%;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    z-index: 100;
`
 
export default Header;