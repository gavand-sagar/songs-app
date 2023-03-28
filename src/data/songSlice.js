import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJsonData } from "../shared/utils/ApiUtitilities.js";

export const getAllSongs = createAsyncThunk('getAllSongs', () => {
    return getJsonData('/songs')
})

export const getSongsForPage = createAsyncThunk('getSongsForPage', ({ pageNumber, size }) => {
    return getJsonData('/songs?pageNumber=' + pageNumber + '&itemsPerPage=' + size)
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
        total: 1,
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
            state.allSongs = action.payload  /// action.payload = response from api
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



        builder.addCase(getSongsForPage.pending, (state, action) => {
            state.loadingTheSongs = true
        })
        builder.addCase(getSongsForPage.fulfilled, (state, action) => {
            state.loadingTheSongs = false;
            state.allSongs = action.payload.items;
            state.total = action.payload.total
        })

    },

    reducers: {
        changeAllSongs: (state, action) => {
            state.allSongs = action.payload
        }
    }
})

export const { changeAllSongs } = songsSlice.actions;

export default songsSlice;