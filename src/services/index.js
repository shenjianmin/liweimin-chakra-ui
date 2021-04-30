import axios from 'axios'

const request = axios.create({
  baseURL: ' https://conduit.productionready.io'
})

export const registe = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}

export const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}