import { combineReducers } from "@reduxjs/toolkit";
import { aricleSlice } from "./article/article_slice";
const reducer = combineReducers({
  arcticle: aricleSlice.reducer,
});

export default reducer;
