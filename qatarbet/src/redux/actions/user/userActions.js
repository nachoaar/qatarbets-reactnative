import axios from "axios";
import { authUser } from "./authUser";
import { User, RemoveUser } from '../../reducer/userSlice'


export const loginUser = ({email, pass}) => {
  return async function (dispatch) {
    const dataUser = {email, pass}
    try {
      const logUser = await axios.post('https://qatarbets-backend-production.up.railway.app/user/login/mobile',dataUser, {withCredentials: true} );
      if (logUser.data.hasOwnProperty('error')) {
        return logUser.data
      }
      if (logUser.data) {
        const { avatar, name, rol, token} = logUser.data;
        await authUser.addStoreData(token);
        dispatch(User({avatar, name, rol}))
        return logUser.data
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const logout = () => {
  return async function (dispatch) {
    try {
      const keyUser = await authUser.getStoreData();
      if(keyUser){
        await authUser.removeStoreData('UserToken')
        dispatch(RemoveUser())
      }
    } catch (error) {
      console.log(error);
    }
  }
}
