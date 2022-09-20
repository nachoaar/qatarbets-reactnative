import { createSlice } from "@reduxjs/toolkit";


export const betSlice = createSlice({
  name: "bet",
  initialState: {
    bets: []
  },
  reducers: {
    Bet: (state, action) => {
      state.bets = action.payload
    },
    OrderBets: (state, action) => {
      const order = action.payload === "1-0" ?
      state.bets.slice().sort((a, b) =>{
        if(a.money_bet < b.money_bet) {return -1}
        if(b.money_bet < a.money_bet) {return 1}
        return 0;
      }) :
      state.bets.slice().sort((a, b) => {
        if(a.money_bet > b.money_bet) {return -1}
        if(b.money_bet > a.money_bet) {return 1}
        return 0;
      })
      state.bets = order;
    }
  }
})

export const { Bet, OrderBets } = betSlice.actions;
export default betSlice.reducer;
