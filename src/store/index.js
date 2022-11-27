import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'
import todosReducer from '../slices/todosSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        todos: todosReducer
    }
})