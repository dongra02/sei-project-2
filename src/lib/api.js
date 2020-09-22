import axios from 'axios'


const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const baseUrl = proxyUrl + 'https://trefle.io/api/v1/'
const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_MY_API_KEY}`
  }
}

export const getPlantsEdible = (pageNum) => {
  return axios.get(`${baseUrl}/species?filter[edible]=true&page=${pageNum}`, config)
}

export const getPlantsEdibleQueryTwo = (queryText) => {
  return axios.get(`${baseUrl}/species/search?q=${queryText}&filter[edible]=true`, config)
}

export const getSinglePlant = slug => axios.get(`${baseUrl}/plants/${slug}`, config)