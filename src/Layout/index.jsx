import { Layout as LayoutAnt} from 'antd';
import { Content} from 'antd/es/layout/layout';
import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';


const Layout = ({ children }) => {
    return ( 
        <LayoutWrapper>
        <Header />
        <Content
          className="site-layout"
        >
          <ContentBox>
            {children}
          </ContentBox>
        </Content>
          <Footer />
      </LayoutWrapper>
     );
}

const LayoutWrapper = styled(LayoutAnt)`
  min-height: 100vh;
`



const ContentBox = styled(Content)`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  padding: 20px 0;
  margin-top: 64px;
  margin: 0 auto;
`
 
export default Layout;