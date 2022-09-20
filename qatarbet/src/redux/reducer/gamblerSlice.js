import { createSlice } from "@reduxjs/toolkit";

export const gamblerSlice = createSlice({
  name: "gambler",
  initialState: {
    gamblers: [],
    gamblerId: [],
    gamblerName: []
  },
  reducers: {
    Gambler: (state, action) => {
      state.gamblers = action.payload
    },
    GamblerId: (state, action) => {
      state.gamblerId = action.payload
    },
    GamblerName: (state, action) => {
      let gamblerByName = state.gamblers.find((g) => g.name.toLowerCase() === action.payload)
      state.gamblerName = gamblerByName === undefined ? {error: "El usuario no existe"} : gamblerByName
    },
    CacheGambler: (state) => {
      state.gamblerId = {}
      state.gamblerName = []
    }
  }
})

export const { Gambler, GamblerId, GamblerName, CacheGambler } = gamblerSlice.actions;
export default gamblerSlice.reducer;
