import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";
import postReducer from "./postSlice";

export default configureStore({
	reducer: {
		comment: commentReducer,
		post: postReducer,
	},
});
