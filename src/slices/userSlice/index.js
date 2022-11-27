import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/user.service";
import { NotificationManager } from "react-notifications";


export const getUser = createAsyncThunk(
  "user/getUser",
  async function (_, { rejectWithValue }) {
    try {
      const { data } = await userService.getMe();
      return data;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);

export const authorization = createAsyncThunk(
  "user/authorization",
  async function ({ content, type }, { rejectWithValue }) {
    try {
      const { data } = await userService[type](content);
      localStorage.setItem("token", data.token);
      return data.user;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  },
);

export const getAvatar = createAsyncThunk(
  "user/getAvatar",
  async function (_, { getState }) {
    console.log('getavatar');
    const { user } = getState();
      const { request } = await userService.getAvatar(user.data._id);
      return request.responseURL;

  },
);

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async function (formData, { rejectWithValue }) {
    try {
      await userService.updateAvatar(formData);
      getAvatar()
    } catch (error) {
      return rejectWithValue('Updating avatar fiiled')
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {},
    avatar: {},
    authorizated: false,
    status: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.data = {};
      state.authorizated = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "pending";
        state.error = null;
        state.authorizated = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = { ...action.payload };
        state.authorizated = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        state.authorizated = false;
      })
      .addCase(authorization.pending, (state) => {
        state.status = "pending";
        state.error = null;
        state.authorizated = false;
      })
      .addCase(authorization.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = { ...action.payload };
        state.authorizated = true;
        NotificationManager.success('Successfully authorizated')
      })
      .addCase(authorization.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        state.authorizated = false;
      })
      .addCase(getAvatar.fulfilled, (state, action) => {
        state.avatar = {url: action.payload}
        state.error = null
      })
      .addCase(updateAvatar.fulfilled, (state) => {
        state.error = null
        NotificationManager.success('Avatar updated')
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.error = action.payload
      })
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
