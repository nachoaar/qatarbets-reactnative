import { createSlice } from "@reduxjs/toolkit";


export const betSlice = createSlice({
  name: "bets",
  initialState: {
    bets: []
  },
  reducers: {
    AllBets: (state, action) => {
      state.bets = action.payload
    }
  }
})

export const { AllBets } = betSlice.actions;
export default betSlice.reducer;
