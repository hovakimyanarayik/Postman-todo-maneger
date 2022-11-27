import React from 'react';
import { List} from 'antd';
import TodoItem from './components/TodoItem';

const TodosList = ({list}) => {

    if(!list) return null
    return ( 
        <List
            bordered
            dataSource={list}
            renderItem={(item) => <TodoItem {...item} />}
      />
     );
}
 
export default TodosList;