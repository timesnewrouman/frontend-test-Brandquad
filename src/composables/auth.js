import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

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
        router.push({name: 'About'})
        authData.value = response.data.token
      } else {
        console.log(response.status)
      }
    })
    .catch((reject) => {
      console.log(`ошибка login`, reject.data)
    })
}

function getInfo() {
  return axios.get(`http://localhost:8081/login`,
    {headers: {'Authorization': `Bearer ${authData.value}`}})
    .then((response) => {
      if (response.status === 200) {
        userData.value = response.data
      } else {
        console.log(response.status)
      }
    })
    .catch((reject) => {
      console.log(`ошибка getInfo`, reject.data)
    })
}

export {
  authData,
  userData,
  register,
  login,
  getInfo
}