import Axios from 'axios'

export const createInstance = (config) => 
  Axios.create(config)

export const api = createInstance({
  baseURL: process.env.REACT_APP_BASE_URL
})

export const findMovies = (text) => 
  api.get('search/shows', {params: {q: text}})

export const findSingleMovie = (text) => 
  api.get('singlesearch/shows', {params: {q: text}})