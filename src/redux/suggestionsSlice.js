import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  moviesData: []
}

export const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {
    createMovie: (state, action) => {
      const newMovie = {
        id: Date.now(),
        poster_path: action.payload.poster_path,
        vote_average: action.payload.vote_average,
        title: action.payload.title,
      };
      state.moviesData.push(newMovie);
    },
    changeSelect: (state, action) => {
      state.select = action.payload.select
    }
  },
})

// Action creators are generated for each case reducer function
export const { createMovie } = suggestionsSlice.actions

export default suggestionsSlice.reducer
