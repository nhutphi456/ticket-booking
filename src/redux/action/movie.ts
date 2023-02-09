import { movieApi } from "../../services/movie";

export const getMovieList = async ({ rejectWithValue }: any) => {
  try {
    const res = await movieApi.getList();
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
};