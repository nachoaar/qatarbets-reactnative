import { createSlice } from "@reduxjs/toolkit";


export const betSlice = createSlice({
  name: "bet",
  initialState: {
    bets: []
  },
  reducers: {
    Bet: (state, action) => {
      let payload = []
      let gamblers = action.payload.gamblers
      for (let i = 0; i < action.payload.bets.length; i++) {
        let actualBet = action.payload.bets[i]
        let index = action.payload.matches.findIndex((match) => match.id === actualBet.matchId)
        let userName =  gamblers[gamblers.findIndex((gambler) => gambler.id === actualBet.userId)]?.name
        let bet = {
          id: actualBet.id,
          match: `${action.payload.matches[index]?.home_team.name} vs ${action.payload.matches[index]?.away_team.name}`,
          result: actualBet.result,
          money_bet:actualBet.money_bet,
          final_profit: actualBet.final_profit,
          userId: actualBet.userId,
          user: userName,
          fecha_hora: action.payload.matches[index].date,
          matchId: action.payload.matches[index].matchId,
        }
        payload.push(bet)
      }
      state.bets = payload
    },
    OrderBets: (state, action) => {
      const order = action.payload === "9-0" ?
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
