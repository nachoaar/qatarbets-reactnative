import axios from "axios";
import { authUser } from "../auth/authUser";

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
      return logUser.data // aca guardo en el asyncStorage el token del usuario
      // aca iria el dispach para cargar el estado del usuario en redux
    }

  } catch (error) {
    console.log(error);
  }
}
