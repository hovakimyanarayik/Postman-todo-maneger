import React, { useState } from 'react';
import styled from 'styled-components';

const InfoCardTitle = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
    return ( 
        <Flex>
            About
        </Flex>
     );
}

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
 
export default InfoCardTitle;