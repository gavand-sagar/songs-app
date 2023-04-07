import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "./songSlice.js";
import userSlice from "./userSlice.js";
import messagesSlice from "./messageSlice.js";

export const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        user: userSlice.reducer,
        messages: messagesSlice.reducer
    }
})


