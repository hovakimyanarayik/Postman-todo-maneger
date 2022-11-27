import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { getTodos } from '../../slices/todosSlice';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';
import { Divider } from 'antd';


const Todos = () => {
    const {user:{status: userStatus, authorizated}, todos: { todosList, status: todosStatus, count }} = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if(userStatus !== 'pending' && !authorizated) {
            navigate('/login')
        }
    })

    useEffect(() => {
        if(authorizated && !todosList){
            dispatch(getTodos())
        }
    }, [])

    if(todosStatus === 'pending'){
        return <LoadingSkeleton />
    }
    return (
        <div>
            <TodoForm />
            <Divider orientation="left">{count} TODOs</Divider>
            <TodosList list={todosList} />
        </div>
    )
}

export default Todos;