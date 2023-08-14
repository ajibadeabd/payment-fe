import { ProSidebarProvider } from "react-pro-sidebar";
import React, { useEffect } from "react";
import Routes from "./Routes";
import store, { IRootState } from './store/index';
import { toast } from 'react-toastify';
import { reset as userReset } from './store/user.store/userSlice';
import { reset } from './store/business.store/businessSlice';


import { Provider, useDispatch, useSelector } from 'react-redux';


function App() {
    const { message: userMessage, isError: errorStatus, isSuccess: isSuccessStatus } = useSelector((state: IRootState) => state.user);
    const dispatch = useDispatch();

  useEffect(() => {
    let messageResponse =  userMessage;
    if (messageResponse) {
        if (isSuccessStatus) {
            toast.success(messageResponse);
        } else {
            toast.error(messageResponse);
        }
        dispatch(userReset()); // Dispatch the reset action to clear the message
        dispatch(reset()); // Dispatch the reset action to clear the message
    }
}, [userMessage, isSuccessStatus, errorStatus, dispatch]);

  return (
    <ProSidebarProvider>
      <Routes />
    </ProSidebarProvider>

  );
}

export default App;
