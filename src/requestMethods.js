import axios from "axios"

const BASE_URL = `https://unileather-api.herokuapp.com/api/`
const persistRoot = JSON.parse(localStorage.getItem("persist:root"))
const TOKEN = persistRoot
  ? JSON.parse(persistRoot?.user)?.currentUser?.accessToken
  : ""
export const publicRequest = axios.create({
  baseURL: BASE_URL
})
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `e ${TOKEN}`
  }
})
