import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'Sagar',
        email: 'sagar@trainitsolutions.com'
    },
    reducers: {
        changeUsername: (state, action) => {
            state.username = action.payload
        },
        changeToSagar: (state, action) => {
            state.username = "Sagar"
        }
    }

})

export const { changeUsername, changeToSagar } = userSlice.actions;
export default userSlice;