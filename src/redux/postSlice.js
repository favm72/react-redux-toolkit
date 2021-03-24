import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
	return await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
})

export const postSlice = createSlice({
	name: "post",
	initialState: {
		list: [],
		status: null
	},
	// reducers: {
	// 	setPosts: (state, action) => {
	// 		state.data = action.payload.list;			
	// 	},
	// },
	extraReducers: {
		[getPosts.pending]: (state,action) => void(state.status = "loading"),
		[getPosts.fulfilled]: (state,action) => {
			state.list = action.payload
			state.status = "success"
		},
		[getPosts.rejected]: (state,action) => void(state.status = "failed")
	}
});


export const selectPosts = state => state.post.list
export default postSlice.reducer;
