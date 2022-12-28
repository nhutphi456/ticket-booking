import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovieList } from "./action/movie";

interface MovieState {
  loading: boolean;
  data: any[];
}
const initialState: MovieState = {
  loading: false,
  data: [],
};

export const getMovieListAction = createAsyncThunk(
  "movie/getList",
  async (_, { rejectWithValue }) => await getMovieList({ rejectWithValue })
);
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovieListAction.pending.type]: (state) => {
      state.loading = true;
    },
    [getMovieListAction.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    },
    [getMovieListAction.rejected.type]: (state) => {
      state.loading = false;
      state.data = [];
    },
  },
});

export default movieSlice.reducer;
