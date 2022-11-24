import React, { useEffect } from 'react';
import {useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import LoadingSkeleton from '../../components/LoadingSkeleton';

const Todos = () => {
    const {status, authorizated} = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if(status && status !== 'pending' && !authorizated) {
            navigate('/login')
        }
    })

    if(status === null || status === 'pending') {
        return <LoadingSkeleton />
    }
    return (
        <div>todos</div>
    )
}

export default Todos;