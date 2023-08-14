import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

const user = JSON.parse(localStorage.getItem('user') as string);
const token = localStorage.getItem('token');
const initialState: any = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    token: token ? token : null,
};

// Register user
export const register = createAsyncThunk('auth/register', async (user:any, thunkAPI) => {
    try {
        return await userService.register(user);
    } catch (err: any) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString;

        return thunkAPI.rejectWithValue(message);
    }
});
export const login = createAsyncThunk('user/login', async (user: any, thunkAPI) => {

    try {

        return await userService.login(user);
    } catch (err: any) {

        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString;

        return thunkAPI.rejectWithValue(message);
    }
});

export const getUserProfile = createAsyncThunk('users/profile', async (_, thunkAPI) => {
    try {
        return await userService.userProfile();
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const Logout = createAsyncThunk('user/logout', async () => {
    await userService.Logout();
});
export const validateResetPasswordToken = createAsyncThunk('users/profile', async (token: string, thunkAPI) => {
    try {
        return await userService.validateResetPasswordToken(token);
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action?.payload?.data?.user;
                state.token = action?.payload?.data?.accessToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.user = action.payload.data
            })
            .addCase(Logout.fulfilled, (state) => {
                state.user = null;
            });
    },
});

export default userSlice.reducer;
export const { reset } = userSlice.actions;
