import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todosService from "../../services/todos.service";


export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async function(_, { rejectWithValue }) {
        try {
            const {data} = await todosService.getAll()
            console.log(data);
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async function(content, { rejectWithValue }) {
        try {
            const { data } = await todosService.add({description: content})
            return data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const toggleComplete = createAsyncThunk(
    'todos/toggleComplete',
    async function({id, content}, { dispatch }) {
        dispatch(todosSlice.actions.toggleSync({id, content}))
        try {
            const { data } = await todosService.toggle(id, content)
            return data
        } catch (error) {
            dispatch(todosSlice.actions.toggleSync({id, content}))
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function(id) {
        try {
            await todosService.delete(id)
            return {id}
        } catch (error) {
            return error.message
        }
    }
)

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todosList: null,
        count: 0,
        status: null,
        error: null
    },
    reducers: {
        toggleSync: (state, { payload }) => {
            state.todosList.find(item => item._id === payload.id).completed = payload.content.completed
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.todosList = action.payload.data
                state.count = action.payload.count
                state.status = 'fulfilled'
                state.error = null
            })
            .addCase(getTodos.pending,(state) => {
                state.status = 'pending'
                state.error = null
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todosList.push(action.payload.data)
                state.count++
                state.error = null
            })
            .addCase(deleteTodo.fulfilled, (state, { payload }) => {
                state.todosList = state.todosList.filter(todo => todo._id !== payload.id)
                state.count--
            })
    }
})


export default todosSlice.reducer