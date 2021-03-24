import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk("comment/getComments", async (post) => {
	return await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then((res) => res.json())
})

export const commentSlice = createSlice({
	name: "comment",
	initialState: {
		post: null,
		list: [],
		status: null,
	},	
	reducers: {
		setPost: (state,action) => {
			console.log(action)
			state.post = action.payload
		}
	},
	extraReducers: {
		[getComments.pending]: (state,action) => void(state.status = "loading"),
		[getComments.fulfilled]: (state,action) => {
			state.list = action.payload
			state.status = "success"
		},
		[getComments.rejected]: (state,action) => void(state.status = "failed")
	}
});

export const { setPost } = commentSlice.actions
export const selectComments = state => state.comment.list
export const selectPost = state => state.comment.post
export default commentSlice.reducer;
