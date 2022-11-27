import React, { useEffect } from 'react';
import { Avatar as AvatarAnt } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAvatar } from '../../slices/userSlice';

const Avatar = ({ size }) => {
    const {authorizated, avatar} = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if(authorizated) {
            dispatch(getAvatar())
        }
    }, [authorizated])

    if(avatar.url) {
        return <AvatarAnt src={avatar.url} size={size} />
    }
    return (
        <AvatarAnt size={size} icon={<UserOutlined />} />
    )
}
 
export default Avatar;