import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userConfigSlice from './user.store/userSlice';
import businessConfigSlice from './business.store/businessSlice';
import channelConfigSlice from './channels/channelSlice';

const rootReducer = combineReducers({
    user: userConfigSlice,
    business: businessConfigSlice,
    channel: channelConfigSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
