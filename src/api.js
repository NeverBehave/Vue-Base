import axios from 'axios'

const BaseUrl = 'localhost:8000'

export default {
  getSomething () {
    return axios('/data')
  },
}
