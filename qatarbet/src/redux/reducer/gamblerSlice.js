import { createSlice } from "@reduxjs/toolkit";

export const gamblerSlice = createSlice({
  name: "gambler",
  initialState: {
    gamblers: [],
    GamblerId: {},
    gamblerName: {}
  },
  reducer: {
    Gambler: (state, action) => {
      state.gamblers = action.payload
    },
    GamblerId: (state, action) => {
      state.GamblerId = action.payload
    },
    GamblerName: (state, action) => {
      let gamblerByName = state.gamblers.find((g) => g.name === action.payload)
      state.gamblerName = gamblerByName === undefined ? {} : gamblerByName
    },
    CacheGambler: (state) => {
      state.gamblerName = {}
    }
  }
})

export const { Gambler, GamblerId, GamblerName, CacheGambler } = gamblerSlice.actions;
export default gamblerSlice.reducer;
