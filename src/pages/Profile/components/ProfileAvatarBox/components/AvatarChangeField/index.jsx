import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAvatar, updateAvatar } from '../../../../../../slices/userSlice';


const AvatarChangeField = () => {
    const [avatar, setAvatar] = useState(null)
    const dispatch = useDispatch()

    function handleChange({ target }) {
        setAvatar(target.files[0])
    }
    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('avatar', avatar)
        dispatch(updateAvatar(formData))
        setAvatar(null)
    }
    return ( 
        <form onSubmit={handleSubmit} className='avatar-form'> 
            <label htmlFor="fileInput" className='file-lable'>
                <EditOutlined />
                <input 
                    id="fileInput" 
                    name='avatar' 
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                />
                {avatar && 
                    <>
                        <span className="imageName">{avatar.name}</span>
                        <button type='submit'>OK</button>
                    </>
                }
            </label>
        </form>
     );
}
 
export default AvatarChangeField;