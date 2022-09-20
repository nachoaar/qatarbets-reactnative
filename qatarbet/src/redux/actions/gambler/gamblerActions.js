import axios from "axios"
import { Gambler, GamblerId, GamblerName, CacheGambler } from '../../reducer/gamblerSlice'


export const getGamblers = () => {
  return async function (dispatch) {
    try {
      const gamblers = await axios.get('https://qatarbets-backend-production-ab54.up.railway.app/user');
      dispatch(Gambler(gamblers.data));
    } catch (error) {
      console.log('error linea 11', error);
    }
  }
}

export const getGamblerId = (payload) => {
  return async function (dispatch) {
    try {
      const gamblerId = await axios.get(`https://qatarbets-backend-production-ab54.up.railway.app/user/userId/${payload}`);
      await dispatch(GamblerId(gamblerId.data));
    } catch (error) {
      console.log('error linea 22', error);
    }
  }
}

export const getGamblerName = (payload) => {
  return async function (dispatch) {
    const value = payload.toLowerCase()
    const resMsg = await dispatch(GamblerName(value));
    return resMsg
  }
}

export const cacheDashGambler = () => {
  return async function (dispatch) {
    dispatch(CacheGambler());
  }
}
