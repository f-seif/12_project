import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'sortSelect',
  initialState: {sortSelect: "Latest"},
  reducers: {

    changeSortSelect: (state, action) => {
      state.sortSelect = action.payload.sortSelect
    },

  },
})

// Action creators are generated for each case reducer function
export const { changeSortSelect } = sortSlice.actions

export default sortSlice.reducer
