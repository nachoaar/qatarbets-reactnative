import { createSlice } from "@reduxjs/toolkit";


export const betSlice = createSlice({
  name: "bet",
  initialState: {
    bets: []
  },
  reducers: {
    Bet: (state, action) => {
      state.bets = action.payload
    }
  }
})

export const { Bet } = betSlice.actions;
export default betSlice.reducer;
