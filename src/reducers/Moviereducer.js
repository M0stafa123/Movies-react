import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchMovies = createAsyncThunk(
  "Movies/fetchpopular",
  async ({ page = 1, id = null, search = null } = {}) => {
    let url;
    if (id) {
      url = `https://api.themoviedb.org/3/movie/${id}?api_key=9ca882c0d9271bac0450ebcb904575b0`;
    } else if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=9ca882c0d9271bac0450ebcb904575b0&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=9ca882c0d9271bac0450ebcb904575b0&page=${page}`;
    }
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return await data;
  }
);
const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    Movies: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = false;
      state.Movies = payload;
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});
export default moviesSlice.reducer;
