import AsyncStorage from '@react-native-async-storage/async-storage';

const addStoreData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    const rest = await AsyncStorage.setItem('UserToken', jsonValue)
  } catch (error) {
    console.log(error);
  }
}

const getStoreData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('UserToken')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
}

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
