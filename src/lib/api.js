import axios from 'axios'

const token = 'token=jvzv7evQ2knnSuZVSQxVv-kWuxdUbQgXKw-8hcMAJcY'
const baseUrl = 'https://trefle.io/api/v1'


export const getPlantsDistribution = (region) => {
  console.log(`${baseUrl}/distributions/${region}/plants?${token}`)
  return axios.get(`${baseUrl}/distributions/${region}/plants?${token}`, '{crossdomain: true}')
}

