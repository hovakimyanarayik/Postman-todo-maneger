import React from 'react';
import styled from 'styled-components';
import InfoCardTitle from './components/InfoCardTitle';
import { Card, Typography } from 'antd';


const { Title } = Typography

const ProfileInfo = ({name, email, age}) => {
    return ( 
        <StyledCard title={<InfoCardTitle /> }>
            <StyledRow>
                <Title level={4}>Name</Title>
                {name}
            </StyledRow>
            <StyledRow>
                <Title level={4}>Age</Title>
                {age}
            </StyledRow>
            <StyledRow>
                <Title level={4}>Email</Title>
                {email}
            </StyledRow>
        </StyledCard>
     );
}

const StyledCard = styled(Card)`
    width: 100%;
    max-width: 500px;
`
const StyledRow = styled.div`
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightblue;
`
 
export default ProfileInfo;