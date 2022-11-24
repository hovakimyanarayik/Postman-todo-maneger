import { Divider } from 'antd';
import Title from 'antd/es/typography/Title';
import styled from 'styled-components';


const FlexColumnCenterBox = ({children, title}) => {

    return (
        <Box>
            <Title 
                level={2}
                style={{alignSelf: 'start', margin: 0}}
            >
                {title}
            </Title>
            <Divider />
            {children}
        </Box>
    )
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default FlexColumnCenterBox;