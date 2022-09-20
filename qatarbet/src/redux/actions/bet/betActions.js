import axios from "axios"
import { Bet, OrderBets } from "../../reducer/betSlice"

export const getBets = () => {
  return async function (dispatch) {
    try {
      const bet = (await axios.get('https://qatarbets-backend-production.up.railway.app/bet/allBets')).data;
      const matches = (await axios.get(`https://qatarbets-backend-production.up.railway.app/fixture/get`)).data;
      const gamblers = (await axios.get(`https://qatarbets-backend-production.up.railway.app/user/`)).data;
      let payload = {
        bets: bet,
        matches: matches,
        gamblers: gamblers
      }
      dispatch(Bet(payload));
    } catch (error) {
      console.log(error);
    }
  }
}

export const orderBets = (payload) => {
  return async function (dipatch) {
    dipatch(OrderBets(payload))
  }
}
