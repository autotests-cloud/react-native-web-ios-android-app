import axios from 'axios'

// axios.defaults.withCredentials = true

export const BASE_URL = `${process.env.REACT_APP_API_URL}`

export const requestData = async (url, method = "GET", params, data) => await axios({
  url,
  method,
  params,
  baseURL: BASE_URL,
  data,
  headers: { Authorization: "Bearer " + (localStorage.getItem("token") || sessionStorage.getItem("token")) }
}).then(json => json ? Promise.resolve(json.data) : Promise.reject(null))
  .catch((err) => {
    console.error(err)
    return Promise.reject(err)})


// export const getItem = async (type, _id) => await requestData(`/${type}/${_id}`)
