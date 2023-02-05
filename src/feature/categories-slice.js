import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllCategories= createAsyncThunk("categories/fetchAll", async()=>{
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const result = await response.json()
    // console.log(result);
    return result

})

const categoriesSlice = createSlice({
    name:"categories",
    initialState:{
        value:[],
        loading:false,
    }, extraReducers:(builder)=>{
        builder.addCase(fetchAllCategories.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchAllCategories.fulfilled, (state,action)=>{
            state.value = action.payload;
            state.loading= false;
        })
    }
})

export default categoriesSlice.reducer