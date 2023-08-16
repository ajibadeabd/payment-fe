import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userConfigSlice from './user.store/userSlice';
import accountConfigSlice from './account.store/accountSlice';

const rootReducer = combineReducers({
    user: userConfigSlice,
    account: accountConfigSlice
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
