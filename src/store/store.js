import {defineStore} from 'pinia';
import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

export const storeData = defineStore('main', () => {
  const authData = ref(null);
  const userData = ref(null);

  const router = useRouter();

  function register(username, password) {
    return axios.post(`http://localhost:8081/register`, {
      "username": username,
      "password": password,
    })
      .then((response) => {
        if (response.status === 200) {
          return router.push({name: 'Login'})
        } else {
          console.log(response.status)
        }
      })
      .catch((reject) => {
        console.log(`ошибка register`, reject.data)
      })
  }

  function login(username, password) {
    return axios.post(`http://localhost:8081/login`, {
      "username": username,
      "password": password,
    })
      .then((response) => {
        if (response.status === 200) {
          authData.value = response.data.token
          return router.push({name: 'About'})
        } else {
          console.log(response.status)
        }
      })
      .catch((reject) => {
        console.log(`ошибка login`, reject.data)
      })
  }

  function getInfo() {
    return axios.get(`http://localhost:8081/about`,
      {headers: {'Authorization': `Bearer ${authData.value}`}})
      .then((response) => {
        if (response.status === 200) {
          userData.value = response.data.data
        } else {
          console.log(response.status)
        }
      })
      .catch((reject) => {
        console.log(`ошибка getInfo`, reject.data)
      })
  }

  return {
    authData,
    userData,
    register,
    login,
    getInfo
  }
})