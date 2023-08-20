import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import businessService from "./accountService";

const initialState: any = {
  users: [],
  allCompanies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  faqs: [],
  emailForwarderMessages: [],
  conversations: [],
  eachConversation: {},
  companyDetails: {},
  departments: [],
  Accounts: [],
  transactions: [],
  deposits: [],
  depositLink: "",
};

export const getAccountDashboard = createAsyncThunk(
  "user/login",
  async (_, thunkAPI) => {
    try {
      return await businessService.getAccountDashboard();
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getUsers = createAsyncThunk(
  "getUsers",
  async (user: number, thunkAPI) => {
    try {
      return await businessService.getBusinessUsers(user);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const filterBusinesses = createAsyncThunk(
  "admin/filterBusinesses",
  async (filterValue, thunkAPI) => {
    try {
      return filterValue;
      // return await businessService.getAllBusinesses(filterValue);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getDeposit = createAsyncThunk(
  "account/getDeposit",
  async ({ limit = 10, page = 1 }: any, thunkAPI) => {
    try {
      return await businessService.getDeposit({ limit: 10, page: 1 });
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const makeDeposit = createAsyncThunk(
  "account/makeDeposit",
  async (data: any, thunkAPI) => {
    try {
      return await businessService.makeDeposit(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateTicketStatus = createAsyncThunk(
  "ticket update",
  async (data: any, thunkAPI) => {
    try {
      return await businessService.updateTicketStatus(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getCompanyEmailForwarderConversation = createAsyncThunk(
  "companies/emailForwarderConversation",
  async (provider: string, thunkAPI) => {
    try {
      return await businessService.getCompanyEmailForwarderConversation(
        provider
      );
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
// export const getTicketSummary = createAsyncThunk('companies/getTicketSummary', async (provider: string, thunkAPI) => {
//     try {
//         return await businessService.getCompanyEmailForwarderConversation(provider);
//     } catch (error: any) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString;

//         return thunkAPI.rejectWithValue(message);
//     }
// });
// getTicketSummary;
export const updateCompanyFaq = createAsyncThunk(
  "update/companies / faqs",
  async (newKnowledgeBase: any, thunkAPI) => {
    try {
      return await businessService.updateCompanyFaq(newKnowledgeBase);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addCompanyFaq = createAsyncThunk(
  "add /companies / faqs",
  async (knowledgeBase: { knowledgeBase: any[] }, thunkAPI) => {
    try {
      return await businessService.addCompanyFaq(knowledgeBase);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCompanyFaq = createAsyncThunk(
  "delete each knowledgebase",
  async (knowledgeBaseId: string, thunkAPI) => {
    try {
      return await businessService.deleteCompanyFaq(knowledgeBaseId);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sendTicketResponse = createAsyncThunk(
  "sendTicketRedsponse",
  async (data: any, thunkAPI) => {
    try {
      return await businessService.sendTicketResponse(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const addDepartment = createAsyncThunk(
  "addDepartment",
  async (data: any, thunkAPI) => {
    try {
      return await businessService.addDepartment(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getDepartments = createAsyncThunk(
  "getDepartment",
  async (data, thunkAPI) => {
    try {
      return await businessService.getDepartment();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getConversations = createAsyncThunk(
  "get conversation",
  async (thunkAPI) => {
    try {
      return await businessService.getConversations();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      // return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getEachConversation = createAsyncThunk(
  "get each conversation",
  async (data: any, thunkAPI) => {
    try {
      return await businessService.getEachConversation(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "send message",
  async (data: any, thunkAPI) => {
    try {
      return await businessService.sendMessage(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const companyProfile = createAsyncThunk(
  "company profile",
  async (thunkAPI) => {
    try {
      return await businessService.companyProfile();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      // return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateCompanyAutoResponderStatus = createAsyncThunk(
  "update company auto response",
  async (status: boolean, thunkAPI) => {
    try {
      return await businessService.updateCompanyAutoResponderStatus(status);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateCompanyDetails = createAsyncThunk(
  "update company profile",
  async (data: any, thunkAPI) => {
    try {
      return await businessService.updateCompanyDetails(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateChatStatus = createAsyncThunk(
  "update user chat status",
  async (customerId: string, thunkAPI) => {
    try {
      return await businessService.updateChatStatus(customerId);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterBusinesses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(filterBusinesses.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.companies = action.payload.allCompanies.filter(
          (company: { status: string }) => {
            if (action.payload.status === "all") return company;
            return company.status === action.payload.status;
          }
        );
      })
      .addCase(filterBusinesses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAccountDashboard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAccountDashboard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAccountDashboard.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Accounts = action.payload.data.accounts;
        state.transactions = action.payload.data.transactions;

        console.log(action.payload.data);
      })

      .addCase(makeDeposit.fulfilled, (state, action: any) => {
        // state.isLoading = false;
        // state.isSuccess = true;
        // state.Accounts = action.payload.data.accounts;
        state.depositLink = action.payload.data;

        // console.log(action.payload.data);
      })

      .addCase(makeDeposit.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getUsers.pending, (state, action: any) => {
        // console.log(action.payload);
        // state.isLoading = false;
        // state.isSuccess = true;
      })
      .addCase(getUsers.rejected, (state, action: any) => {})
      .addCase(getUsers.fulfilled, (state, action: any) => {
        state.isLoading = false;

        state.users = action.payload.data.users;
      })
      .addCase(getDeposit.fulfilled, (state, action: any) => {
        state.isLoading = false;
        // console.log(action.payload.data);
        state.deposits= action.payload.data;
      })
      .addCase(updateCompanyFaq.fulfilled, (state, action: any) => {
        const response = action.payload.data;
        const updateData = {
          question: response?.title,
          answer: response?.content,
          knowledgebase_id: response?.knowledgebase_id,
          is_company_description: response?.is_company_description,
        };
        const index = state.faqs.findIndex(
          (faq: any) => faq?.knowledgebase_id === response?.knowledgebase_id
        );
        state.faqs = [
          ...state.faqs.slice(0, index), // elements before the updated object
          updateData, // updated object
          ...state.faqs.slice(index + 1), // elements after the updated object
        ];
        state.message = "Faq updated successfully";
        state.isSuccess = true;
      })
      .addCase(addCompanyFaq.fulfilled, (state, action: any) => {
        console.log(action.payload.data);
        state.faqs = [...state.faqs, action.payload.data?.[0]];
      })
      .addCase(
        getCompanyEmailForwarderConversation.fulfilled,
        (state, action: any) => {
          state.emailForwarderMessages = action.payload.data;
        }
      )
      .addCase(sendTicketResponse.fulfilled, (state, action: any) => {})
      .addCase(addDepartment.fulfilled, (state, action: any) => {
        state.message = "Department created successfully";
        state.isError = false;
        state.isSuccess = true;
        state.departments = [...state?.departments, action?.payload?.data?.[0]];
      })
      .addCase(getDepartments.fulfilled, (state, action: any) => {
        state.departments = action.payload.data;
      })
      .addCase(getConversations.fulfilled, (state, action: any) => {
        state.conversations = action.payload.data;
      })
      .addCase(getEachConversation.fulfilled, (state, action: any) => {
        // console.log(action.payload);
        state.eachConversation = action.payload;
      })
      .addCase(companyProfile.fulfilled, (state, action: any) => {
        state.companyDetails = action.payload.data;
      })
      .addCase(updateTicketStatus.fulfilled, (state, action: any) => {
        let response = action?.payload?.data;
        let hashMapIds = response.updatedRecordId.reduce(
          (store: any, id: number) => {
            store[`${id}`] = id;
            return store;
          },
          {}
        );
        state.emailForwarderMessages = [...state.emailForwarderMessages].map(
          (conversation) => {
            if (hashMapIds[conversation.id] == response.updatedRecordId) {
              if (response.type === "important") {
                conversation.important = !conversation?.important;
              } else {
                conversation.is_new = !conversation?.is_new;
              }
            }
            return conversation;
          }
        );
      })
      .addCase(updateChatStatus.fulfilled, (state, action: any) => {
        //   state.conversations =  state.conversations.pop();
      })

      .addCase(deleteCompanyFaq.fulfilled, (state, action: any) => {
        state.faqs = [...state.faqs].filter(
          (faq: any) =>
            faq?.knowledgebase_id != action.payload?.data?.knowledgeBaseId
        );
        state.message = "Faq deleted successfully";
        state.isError = false;
        state.isSuccess = true;
      });
  },
});

export default businessSlice.reducer;
export const { reset } = businessSlice.actions;
