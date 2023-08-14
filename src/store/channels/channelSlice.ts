import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './channelService';

const initialState: any = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    tickets: [],
};

// Register user
export const getChannels = createAsyncThunk('get/channel', async (data: any, thunkAPI) => {
    try {
        return await userService.getChannels(data);
    } catch (err: any) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString;

        return thunkAPI.rejectWithValue(message);
    }
});

export const connectChannels = createAsyncThunk('connect/channel', async (data: any, thunkAPI) => {
    try {
        return await userService.connectChannels(data);
    } catch (err: any) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString;

        return thunkAPI.rejectWithValue(message);
    }
});
export const getConnectedTicket = createAsyncThunk('getConnected', async (data: any, thunkAPI) => {
    try {
        return await userService.getConnectedTicket();
    } catch (err: any) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString;

        return thunkAPI.rejectWithValue(message);
    }
});
// export const getConnectedTicketd = createAsyncThunk('getConnected/Ticket', async (thunkAPI) => {
//     try {
//         return await userService.getConnectedTicket();
//     } catch (err: any) {
//         const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString;

//         return thunkAPI.rejectWithValue(message);
//     }
// });
export const channelSlice = createSlice({
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
            .addCase(connectChannels.fulfilled, (state) => {
                state.isLoading = true;
            })
            .addCase(getChannels.fulfilled, (state, action) => {
                state.isLoading = true;
                console.log(action);
            })

            .addCase(getConnectedTicket.fulfilled, (state, action) => {
                state.isLoading = true;
                state.tickets = action.payload;
            });
    },
});

export default channelSlice.reducer;
export const { reset } = channelSlice.actions;
