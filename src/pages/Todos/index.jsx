import React, { useEffect } from 'react';
import {useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Todos = () => {
    const {status, authorizated} = useSelector(state => state.user)
    const navigate = useNavigate()


    useEffect(() => {
        if(status !== 'pending' && !authorizated) {
            navigate('/login')
        }
    })

    return (
        <div>todos</div>
    )
}

export default Todos;