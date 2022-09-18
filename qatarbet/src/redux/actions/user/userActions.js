import axios from "axios";
import { authUser } from "./authUser";
import { User, RemoveUser } from '../../reducer/userSlice'
import { authUser } from './authUser'


export const loginUser = async ({email, pass}) => {
  const dataUser = {email, pass}
  try {
    const logUser = await axios.post('https://qatarbets-backend-production-ab54.up.railway.app/user/login/mobile',dataUser, {withCredentials: true} );
    if(logUser.data.hasOwnProperty('error')){
      return logUser.data
    }
    if(logUser.data){
      const { avatar, name, rol, token} = logUser.data;
      authUser.addStoreData(token);
      dispatch(User({avatar, name, rol}))
    }

  } catch (error) {
    console.log(error);
  }
}

export const logout = async () => {
  try {
    const keyUser = await authUser.getStoreData();
    if(keyUser){
      const removeUserStorage = await authUser.removeStoreData(keyUser)
      dispatch(RemoveUser())
    }
  } catch (error) {
    console.log(error);
  }
}
