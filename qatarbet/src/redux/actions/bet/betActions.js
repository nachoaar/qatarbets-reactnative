import axios from "axios"
import { Bet } from "../../reducer/betSlice"

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