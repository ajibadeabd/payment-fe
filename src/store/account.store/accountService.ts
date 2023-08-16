import Axios from '../../api';
import axios from 'axios';

const addBusinessUser = async (userData: any) => {
    const response = await Axios.post(`auth/register`, userData);
    return response.data;
};
const getBusinessUsers = async (companyId: any) => {
    const response = await Axios.get(`companies/profile?companyId=${companyId}`);
    return response.data;
};
const companyFaq = async () => {
    const response = await Axios.get(`companies/faqs/knowledge-base`);
    return response.data;
};
const updateCompanyFaq = async (data: any) => {
    const response = await Axios.put(`companies/faqs/knowledge-base`, data);
    return response.data;
};
const addCompanyFaq = async (data: any) => {
    const response = await Axios.post(`companies/faqs/knowledge-base`, data);
    return response.data;
};

const deleteCompanyFaq = async (id: any) => {
    const response = await Axios.delete(`companies/faqs/knowledge-base/${id}`);
    return response.data;
};

const getCompanyEmailForwarderConversation = async (provider: string) => {
    const response = await Axios.get(`tickets?provider=${provider}`);
    return response.data;
};
const sendTicketResponse = async (data: any) => {
    const response = await Axios.post(`tickets/response`, data);
    return response.data;
};
const addDepartment = async (data: any) => {
    const response = await Axios.put(`department`, data);
    return response.data;
};

const getDepartment = async () => {
    const response = await Axios.get(`department`);
    return response.data;
};

const getConversations = async () => {
    const response = await Axios.get(`chat/conversations`);
    return response.data;
};
const getEachConversation = async ({ identifier: customerId }: any) => {
    const response = await Axios.get(`chat/get-business-conversation/${customerId}`);

    return { messages: response.data?.data, identifier: customerId };
};

const sendMessage = async (payload: any) => {
    let data: any = {
        sender: payload.sender,
        content: payload.content,
    };
    if (payload.type) {
        data = { ...data, type: 'draft' };
    }
    const response = await Axios.post(`chat/send-chat/${payload.chatId}`, data);
    return response.data;
};
const companyProfile = async () => {
    const response = await Axios.get(`companies/details`);
    return response.data;
};
const updateCompanyAutoResponderStatus = async (status: boolean) => {
    const response = await Axios.patch(`companies`, {
        autoResponder: status,
    });
    return response.data;
};
const updateCompanyDetails = async (data: any) => {
    const response = await Axios.patch(`companies`, data);
    return response.data;
};
const updateChatStatus = async (customerId: string) => {
    const response = await Axios.post(`chat/status/${customerId}`);
    return response.data;
};
const updateTicketStatus = async (data: any) => {
    const response = await Axios.patch(`/tickets/status/${data.provider}/`, {
        type: data.type,
        ticketIds: data.ticketIds,
    });
    return response.data;
};

const getAccountDashboard = async () => {
    const response = await Axios.get('api/account/dashboard' );
    return response.data;
};
const userService = {
    updateChatStatus,
    updateTicketStatus,
    sendMessage,
    getDepartment,
    addCompanyFaq,
    updateCompanyDetails,
    updateCompanyAutoResponderStatus,
    getEachConversation,
    getConversations,
    addDepartment,
    sendTicketResponse,
    updateCompanyFaq,
    getCompanyEmailForwarderConversation,
    addBusinessUser,
    getBusinessUsers,
    companyFaq,
    deleteCompanyFaq,
    companyProfile,
    getAccountDashboard,
};
export default userService;
