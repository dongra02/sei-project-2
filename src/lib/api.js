import axios from 'axios'


const token = 'jvzv7evQ2knnSuZVSQxVv-kWuxdUbQgXKw-8hcMAJcY'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = proxyUrl + 'https://trefle.io/api/v1/'
const config = {
  headers: {
    Authorization: 'Bearer ' + token
  }
}
// curl 'https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN&filter[common_name]=beach%20strawberry'
const query =  {
  'filter_not': {
    'edible_part': 'null'
  }
}

const queryTwo = 'filter[common_name]=beach%20strawberry'

export const getPlantsDistribution = (region) => {
  // return axios.get(`${baseUrl}/distributions/${region}/plants?filter[edible]=true`, config)
  return axios.get(`${baseUrl}/plants?${query}&page=5`, config)
  // return axios.get(`${baseUrl}/distributions/9/plants?${query}`, config)
}

export const getPlantsEdible = (pageNum) => {
  console.log(`${baseUrl}/plants?${query}&page=${pageNum}`)
  return axios.get(`${baseUrl}/plants?${query}&page=${pageNum}`, config)
  // return axios.get(`${baseUrl}/plants?${query}`, config)

}

// https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1//plants?[object

export const getPlantsEdibleQueryTwo = () => {
  console.log(`${baseUrl}/plants?${queryTwo}`)
  return axios.get(`${baseUrl}/plants?${queryTwo}`, config)
  // return axios.get(`${baseUrl}/plants?${query}`, config)

}

export const getSinglePlant = slug => axios.get(`${baseUrl}/plants/${slug}`, config)


// export const getPlantsEdiblePage 