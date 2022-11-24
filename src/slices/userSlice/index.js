import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from '../../services/user.service'

export const getUser = createAsyncThunk(
    'user/getUser',
    async function (_, {rejectWithValue}) {
        try {
            const {data} = await userService.getMe()
            return data
        } catch (error) {
            return rejectWithValue(error?.message) 
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {},
        authorizated: false,
        status: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.authorizated = false
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.data = {...action.payload}
                state.authorizated = true
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
                state.authorizated = false
            })
    }
})


export default userSlice.reducer;