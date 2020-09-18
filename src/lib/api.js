import axios from 'axios'


const token = 'jvzv7evQ2knnSuZVSQxVv-kWuxdUbQgXKw-8hcMAJcY'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
// const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=<'

const baseUrl = proxyUrl + 'https://trefle.io/api/v1/'
const config = {
  headers: {
    Authorization: 'Bearer ' + token
  }
}

const query =  {
  'filter_not': {
    'edible_part': 'null'
  }
}

export const getPlantsDistribution = (region) => {
  // return axios.get(`${baseUrl}/distributions/${region}/plants?filter[edible]=true`, config)
  return axios.get(`${baseUrl}/plants?${query}&page=5`, config)
  // return axios.get(`${baseUrl}/distributions/9/plants?${query}`, config)
}

export const getPlantsEdible = (pageNum) => {
  console.log(`${baseUrl}/plants?${query}&page=${pageNum}`)
  // return axios.get(`${baseUrl}/plants?${query}&page=${pageNum}`, config)
  return axios.get(`${baseUrl}/species?filter[edible]=true&page=${pageNum}`, config)
  // return axios.get(`${baseUrl}/plants?${query}`, config)
}

export const getPlantsEdibleQueryTwo = (queryText) => {
  console.log(queryText)
  console.log(`${baseUrl}/plants/?&filter[common_name]=${queryText}`)
  return axios.get(`${baseUrl}/plants/search?q=${queryText}`, config)
}

export const getSinglePlant = slug => axios.get(`${baseUrl}/plants/${slug}`, config)