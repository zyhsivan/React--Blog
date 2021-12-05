import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllArticle,
  getOneArticle,
  getOneTypeArticle,
} from "service/article/article";
import { timestampToTime } from "utils/timestamp_to_time";
interface I {
  listData: any[];
  onaArticle: any;
  typeArticle: any[];
}

export const fetchAllAricle = createAsyncThunk(
  "aricle/fetchAllAricle",
  async () => {
    const response: any = await getAllArticle();
    return response.data;
  }
);

export const fetchOneAricle = createAsyncThunk(
  "aricle/ fetchOneAricle",
  async (id: number) => {
    const response: any = await getOneArticle(+id);
    const fromTime = timestampToTime(+response.data[0].addTime);
    response.data[0].addTime = fromTime;
    return response.data[0];
  }
);

export const fetchOneTypeArticle = createAsyncThunk(
  "aricle/fetchOneTypeArticle",
  async (id: number) => {
    const response: any = await getOneTypeArticle(id);
    return response.data;
  }
);

const initialState: I = {
  listData: [],
  onaArticle: {},
  typeArticle: [1],
};

// Then, handle actions in your reducers:
export const aricleSlice = createSlice({
  name: "aricle",
  initialState,
  reducers: {
    normalData: (state, action) => {
      state.onaArticle = action.payload;
    },
    normalType: (state, action) => {
      state.typeArticle = action.payload;
    },
  },
  extraReducers: {
    [fetchAllAricle.fulfilled.type]: (state, action) => {
      state.listData = action.payload;
    },
    [fetchOneAricle.fulfilled.type]: (state, action) => {
      state.onaArticle = action.payload;
    },
    [fetchOneTypeArticle.fulfilled.type]: (state, action) => {
      state.typeArticle = action.payload;
    },
  },
});
