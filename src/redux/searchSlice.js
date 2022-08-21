import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'searchTerm',
  initialState: {keyword:""},
  reducers: {

    search: (state, action) => {
      state.keyword = action.payload.keyword
    },

  },
})

// Action creators are generated for each case reducer function
export const { search } = searchSlice.actions

export default searchSlice.reducer
