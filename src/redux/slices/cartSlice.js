import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState :[], // hold more than one item
    reducers:{
         //actions
        // function to add items into cart
        addToCart : (state , action)=>{
            state.push(action.payload)
        },
        //function to delete items from wishlist
        removeFromCart : (state , action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        //function to buy items from cart
        buyProdect : (state , action)=>{
            return state.filter(item=>item.id!=action.payload)
            
        },
        //function to buy all items from cart
        emptyCart : (state) =>{
            return state = []
        }
    }
    
})

export const {addToCart , removeFromCart , buyProdect , emptyCart} = cartSlice.actions

export default cartSlice.reducer