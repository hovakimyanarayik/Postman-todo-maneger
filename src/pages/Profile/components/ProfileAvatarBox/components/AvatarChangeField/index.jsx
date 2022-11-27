import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getAvatar, updateAvatar } from '../../../../../../slices/userSlice';
import { EditOutlined } from '@ant-design/icons';


const AvatarChangeField = () => {
    const [avatar, setAvatar] = useState(null)
    const dispatch = useDispatch()

    function handleChange({ target }) {
        setAvatar(target.files[0])
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('avatar', avatar)
        await dispatch(updateAvatar(formData))
        setAvatar(null)
        await dispatch(getAvatar())
    }
    return ( 
        <AvatarChangeForm onSubmit={handleSubmit}> 
            <StyledLabel htmlFor="fileInput">
                <EditOutlined />
                <StyledInput 
                    id="fileInput" 
                    name='avatar' 
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                />
                {avatar && 
                    <>
                        <span>{avatar.name}</span>
                        <button type='submit'>OK</button>
                    </>
                }
            </StyledLabel>
        </AvatarChangeForm>
     );
}

const AvatarChangeForm = styled.form`
    align-self: flex-end;
`

const StyledLabel = styled.label`
    display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 2px 5px;
`

const StyledInput = styled.input`
      display: none;
`
 
export default AvatarChangeField;