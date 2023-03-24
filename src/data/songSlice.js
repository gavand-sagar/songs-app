import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'songs',
    initialState: {
        allSongs: []
    },
    reducers: {
        changeAllSongs: (state, action) => {
            state.allSongs = action.payload
        }
    }
})

export const { changeAllSongs } = songsSlice.actions;

export default songsSlice;