import { Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const { data} = useSelector(state => state.user)
    return ( 
        <Typography.Title>Welcome to TODOs App {data.name ?  data.name : ''}</Typography.Title>
     );
}

export default Home;