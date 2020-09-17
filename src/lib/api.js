import axios from 'axios'

// const corsFix = 'https://cors-anywhere.herokuapp.com'
const corsFix = 'http://localhost:8080'
const token = 'token=jvzv7evQ2knnSuZVSQxVv-kWuxdUbQgXKw-8hcMAJcY'
const baseUrl = 'https://trefle.io/api/v1'



export const getPlantsDistribution = (region) => {
  console.log(`${corsFix}/${baseUrl}/distributions/${region}/plants?${token}`)
  return axios.get(`${corsFix}/${baseUrl}/distributions/${region}/plants?${token}`)
}

