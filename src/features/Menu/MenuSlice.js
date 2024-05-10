import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const MenuSlice =createSlice({
    name : 'menu' ,
    initialState : {
        products : [{id:1,item:"gggg"}],
        isSuccess : false ,
        isError : false,
        isLoading : false,
        message : ''
    } ,
    reducers : {},
    extraReducers : builder =>{

    builder 

    .addCase(fetchMenu.pending ,(state)=>{
        state.isLoading = true
        state.message = "Success"
    })
    .addCase(fetchMenu.fulfilled ,(state , action)=>{
        state.isLoading = false
        state.products = action.payload

    })
    .addCase(fetchMenu.rejected ,(state , action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = "Products can not be fatched!"
    })
    },
})

export default MenuSlice.reducer;


export const fetchMenu = createAsyncThunk("FETCH/MENU" , async()=>{
    const response = await axios.get('https://subway-s6qq.onrender.com/pizza')
    return response.data;
})