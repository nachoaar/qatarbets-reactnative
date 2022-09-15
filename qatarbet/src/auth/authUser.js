import AsyncStorage from '@react-native-async-storage/async-storage';


// setItem() se utiliza tanto para agregar un nuevo elemento de datos
// (cuando no existen datos para una clave determinada) como para modificar un elemento existente
const addStoreData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('UserKey', jsonValue)
  } catch (error) {
    console.log(error);
  }
}

// getItem() devuelve una promesa que se resuelve en el valor almacenado cuando
// se encuentran datos para la clave dada, o devuelve nulllo contrario.
const getStoreData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('UserKey')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
}

// removeItem Elimina el elemento de un key (toca probar si hay quepasarle el key del obj --> 'UserKey')
const removeStoreData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log(error);
    return false
  }
}


export const authUser = {
  addStoreData,
  getStoreData,
  removeStoreData
}
