import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';
import EditModal from '../EditModal';

const InfoCardTitle = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
    return ( 
        <Flex>
            About
            {/* <Button 
                shape='circle' 
                type='primary' 
                icon={<EditOutlined />} 
                onClick={showModal}
            /> */}
            {/* <EditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
        </Flex>
     );
}

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
 
export default InfoCardTitle;