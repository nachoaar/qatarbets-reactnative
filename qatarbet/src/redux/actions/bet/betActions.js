import axios from "axios"
import { Bet, OrderBets } from "../../reducer/betSlice"

export const getBets = () => {
  return async function (dispatch) {
    try {
      const bet = await axios.get('https://qatarbets-backend-production-ab54.up.railway.app/bet/allBets');
      dispatch(Bet(bet.data));
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
