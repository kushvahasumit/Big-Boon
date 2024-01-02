import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser : null,
        isFetching :false,
        error :false
        
    },

    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSucess:(state,action)=>{
            state.isFetching=true;
            state.currentUser = action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching=true;
            state.error = true;
        },

    }
})

export const {loginStart,loginSucess,loginFailure} = userSlice.actions;
export default userSlice.reducer;