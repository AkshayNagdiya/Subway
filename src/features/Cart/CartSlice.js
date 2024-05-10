import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const CartSlice =createSlice({
    name : 'cart' ,
    initialState : {
        Cartitems : [],
    } ,
    reducers : {

        // add to cart 

        add: (state, action) => {

            const existingItem = state.Cartitems.find(
                (item) => item.id === action.payload.id
            )

            if (existingItem) {
                state.Cartitems = state.Cartitems.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
            } else {
                state.Cartitems = [action.payload, ...state.Cartitems]
            }
        },


        // Increase  in cart

        increase : (state,action) => {
            state.Cartitems = state.Cartitems.map((item) => item.id === action.payload.id ? {...item , qty:item.qty +1 } : item )
        },

        // Decrease in cart

        decrease : (state , action ) =>{
            state.Cartitems = state.Cartitems.map((item)=> item.id === action.payload.id  ? {...item , qty : item.qty - 1 } : item )
        },

        // Remove from cart 

        remove : (state,action) =>{
            return {
                ...state,
                Cartitems : state.Cartitems.filter((item)=> item.id !== action.payload)
            }
        },

        // Qunantity managemenet 

    },
})

export const {add , remove , increase , decrease}= CartSlice.actions;

export default CartSlice.reducer;