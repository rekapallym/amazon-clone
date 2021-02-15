import axios from 'axios'

const instance = axios.create({
  baseUrl: 'http://localhost:5001/clone-4b2fd/us-central1/api', // the API(Cloud Fucntion) url
})

export default instance
