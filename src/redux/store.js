import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './genresSlice'
import searchReducer from './searchSlice'
import rateReducer from './rateSlice'
import sortReducer from './sortSlice'
import suggestionsReducer from './suggestionsSlice'

export const store = configureStore({
  reducer: {
    searchTerm: searchReducer,
    genres: genresReducer,
    rate: rateReducer,
    sortSelect: sortReducer,
    suggestions: suggestionsReducer,
  },
})
