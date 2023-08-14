// import axios from 'axios';
import Axios from '../../api';

 

const register = async (userData: any) => {
    const response = await Axios.post('/api/sign_up', userData);

    
    return response.data;
};

const userProfile = async () => {
    const response = await Axios.get('/api/me');
    return response.data;
};
const login = async (userData: any) => {
    const response = await Axios.post('/api/sign_in', userData);
    if (response.data) {
        localStorage.setItem('access_token', response.data.data.access_token);
        localStorage.setItem('refresh_token', response.data.data.refresh_token);
    }
    return response.data;
};
const validateResetPasswordToken = async (token: string) => {
    const response = await Axios.get(`/auth/validate-reset-password-token/${token}`);
    return response.data;
};
const Logout = () => {
    localStorage.removeItem('user');
};
const userService = { register, validateResetPasswordToken, Logout, login, userProfile };
export default userService;
