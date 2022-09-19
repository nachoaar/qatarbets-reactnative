import axios from "axios";
import { getMatch, getMatchId } from "../../reducer/matchSlice";


export const getMatches = () => {
    return async function (dispatch) {
        try {
            const match = await axios.get('https://qatarbets-backend-production-ab54.up.railway.app/fixture/get');
            dispatch(getMatch(match.data));
        } catch (error) {
            console.error(error);
        }
    }
}

export function matchId(payload) {
    return async function (dispatch) {
        try {
            const match = await axios.get(`https://qatarbets-backend-production-ab54.up.railway.app/fixture/${payload}`);
            dispatch(getMatchId(match.data))       
        } catch (error) {
            console.error(error);
        }
    };
  }