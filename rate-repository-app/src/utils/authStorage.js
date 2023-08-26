import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}/accessToken`,)

    return token
  }

  async getExpirationDate(){
    const expirationDate = await AsyncStorage.getItem(`${this.namespace}/expirationDate`)
    return expirationDate
  }

  async getLoggedUser(){
    const loggedUser = await AsyncStorage.getItem(`${this.namespace}/loggedUser`)
    return loggedUser
  }

  async setExpirationDate(expirationDate){
    await AsyncStorage.setItem(`${this.namespace}/expirationDate`,expirationDate)
  }

  async setLoggedUser(loggedUser){
    await AsyncStorage.setItem(`${this.namespace}/loggedUser`,loggedUser)
  }

  async setAccessToken(accessToken) {
    console.log({accessToken:accessToken})
    await AsyncStorage.setItem(`${this.namespace}/accessToken`,accessToken)
  }

  async removeAccessToken() {
    await AsyncStorage.setItem(`${this.namespace}/accessToken`,undefined)
  }
}

export default AuthStorage;