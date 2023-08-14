import Axios from '../../api';

const getChannels = async (userData: any) => {
    const response = await Axios.get('/companies/providers/gmail', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const connectChannels = async (userData: any) => {
    const response = await Axios.post('/companies/providers/gmail', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};
const getConnectedTicket = async () => {
    const response = await Axios.get('/tickets/summary');
    return response.data;
};

const channelService = { getChannels, connectChannels, getConnectedTicket };
export default channelService;
