import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  select: "All"
}

export const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    changeSelect: (state, action) => {
      state.select = action.payload.select
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeSelect } = genresSlice.actions

export default genresSlice.reducer
