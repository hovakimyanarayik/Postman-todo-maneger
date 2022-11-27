import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../../slices/todosSlice';
import { CheckOutlined } from '@ant-design/icons';


const TodoForm = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(!value.trim()) return
        dispatch(addTodo(value))
        setValue('')
    }
    return ( 
        <Input.Group compact>
        <Input
          style={{
            width: 'calc(100% - 80px)',
          }}
          placeholder='Add TODO'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="primary" onClick={handleSubmit} icon={<CheckOutlined />}>Add</Button>
      </Input.Group>
    );
}
 
export default TodoForm;