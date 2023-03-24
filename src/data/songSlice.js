import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJsonData } from "../shared/utils/ApiUtitilities.js";

export const getAllSongs = createAsyncThunk('getAllSongs', () => {
    return getJsonData('/songs')
})

export const getThoughts = createAsyncThunk('getThoughts', () => {
    return getJsonData('/thoughts')
})

export const getProducts = createAsyncThunk('getProducts', () => {
    return getJsonData('/products')
})


const songsSlice = createSlice({
    name: 'songs',
    initialState: {
        loadingTheSongs: false,
        allSongs: [],
        thoughts: [],
        products: []
    },
    extraReducers: (builder) => {

        //this is what should happen when server will send you response 
        // response will be available in (action.payload)
        builder.addCase(getAllSongs.pending, (state, action) => {
            state.loadingTheSongs = true;
        })

        //this is what should happen when server will send you response 
        // response will be available in (action.payload)
        builder.addCase(getAllSongs.fulfilled, (state, action) => {
            state.allSongs = action.payload
            state.loadingTheSongs = false;

        })


        //this is what should happen when server will send you response 
        // response will be available in (action.payload)
        builder.addCase(getThoughts.fulfilled, (state, action) => {
            state.thoughts = action.payload
        })


        //this is what should happen when server will send you response 
        // response will be available in (action.payload)
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })

    }
    // reducers: {
    //     changeAllSongs: (state, action) => {
    //         state.allSongs = action.payload
    //     }
    // }
})

// export const { changeAllSongs } = songsSlice.actions;

export default songsSlice;