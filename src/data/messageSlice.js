import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJsonData, postJsonData } from "../shared/utils/ApiUtitilities.js";

export const getAllChats = createAsyncThunk('getAllChats', () => {
    return getJsonData('/messages')
})

export const postChatMessage = createAsyncThunk('postMessage', (message) => {
    return postJsonData('/messages', message)
})



const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
    },
    extraReducers: (builder) => {

        builder.addCase(getAllChats.fulfilled, (state, action) => {
            state.messages = action.payload
        })

        builder.addCase(postChatMessage.pending, (state, action) => {
            console.log('sending', action.payload)
        })

        builder.addCase(postChatMessage.fulfilled, (state, action) => {
            state.messages = state.messages.filter(x => x.tempMessageId != action.payload.tempMessageId)
            state.messages.push(action.payload)
        })
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload)
        }
    }
})

export const { addMessage } = messagesSlice.actions;

export default messagesSlice;