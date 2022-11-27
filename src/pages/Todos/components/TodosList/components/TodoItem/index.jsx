import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../../../../../../slices/todosSlice';
import styled from 'styled-components';
import { formateDate } from '../../../../../../helpers';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Checkbox, List, Typography } from 'antd';

const { Item } = List

const TodoItem = ({completed, _id, description, updatedAt}) => {
    const dispatch = useDispatch()

    const toggleCheck = ({ target }) => {
        console.log(target.checked);
        dispatch(toggleComplete({id: _id, content: {completed: !completed}}))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(_id))
    }

    return ( 
        <StyledListItem onDoubleClick={toggleCheck}>
            <FlexBox>
                <Checkbox checked={completed} onChange={toggleCheck}  />
                <Typography.Text>{formateDate(new Date(updatedAt))}</Typography.Text>
            </FlexBox>
            <Typography.Title level={4}>{description} </Typography.Title>
            <Button shape='circle' danger icon={<DeleteOutlined />} onClick={handleDelete} />
        </StyledListItem>
     );
}

const StyledListItem = styled(Item)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FlexBox = styled.div`
    display: flex;
    align-items: center;
`
 
export default TodoItem;