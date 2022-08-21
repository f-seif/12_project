import { createSlice } from '@reduxjs/toolkit';

export const rateSlice = createSlice({
  name: 'rate',
  initialState: {rateValue:0},
  reducers: {

    searchRate: (state, action) => {
      state.rateValue = action.payload.rateValue
    },

  },
})

// Action creators are generated for each case reducer function
export const { searchRate } = rateSlice.actions

export default rateSlice.reducer
