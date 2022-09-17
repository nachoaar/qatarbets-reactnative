import axios from "axios"
import { AllBets } from '../../reducer/betSlice'


export const getAllBets = () => {
  return async function (dispatch) {
    try {
      const bets = await axios.get('https://qatarbets-backend-production-ab54.up.railway.app/bet/allBets')
      dispatch(AllBets(bets.data))
    } catch (error) {
      console.log(error);
    }
  }
}
