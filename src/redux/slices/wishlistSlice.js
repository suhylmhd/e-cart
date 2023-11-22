import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name :'wishlist',
    initialState:[],//wishlist may have more tha one item
    reducers:{
        //actions
        // function to add items into wishlist array
        addToWishlist : (state  , action)=>{
            state.push(action.payload)
        },
        //function to delete items from wishlist
        removeFromWishlist : (state , action)=>{
            //filter returns a new array satisfying the condition. inorder to add  the new array into a state  we need to return it
            return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer