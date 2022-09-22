import axios from "axios";

import { getMatch, matchesFinished, matchesNotStarted, allMatches } from "../../reducer/matchSlice";


export const getMatches = () => {
  return async function (dispatch) {
    try {
        const apiMostBet = await axios.get('https://qatarbets-backend-production.up.railway.app/fixture/get');
        const apiMostBetMatches = apiMostBet.data
        dispatch(getMatch(apiMostBetMatches))
    } catch (error) {
        console.error(error);
    }
  }
}

export const filterMatchesStatus = (payload) => {
  return async function (dispatch) {
    if(payload === "Finished"){
      dispatch(matchesFinished(payload))
    }
    if(payload === "Not Started"){
      dispatch(matchesNotStarted(payload))
    }
    if(payload === "All Matches"){
      dispatch(allMatches(payload))
    }
  }
}

