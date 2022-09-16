import { axios } from "axios"
import { Gambler, GamblerId, GamblerName, CacheGambler } from '../../reducer/gamblerSlice'


export const getGamblers = () => {
  return async function (dispatch) {
    const gamblers = await axios.get('https://qatarbets-backend-production-ab54.up.railway.app/user');
    dispatch(Gambler(gamblers.data));
  }
}

export const getGamblerId = (payload) => {
  return async function (dispatch) {
    const gamblerId = await axios.get(`https://qatarbets-backend-production-ab54.up.railway.app/user/userId/${payload}`);
    dispatch(GamblerId(gamblerId.data))
  }
}

export function getGamblerName(payload) {
  return async function (dispatch) {
    dispatch(GamblerName(payload));
  }
}

export function CacheDashGambler() {
  return async function (dispatch) {
    dispatch(CacheGambler());
  }
}
