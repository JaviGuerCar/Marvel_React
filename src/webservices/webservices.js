import axios from 'axios'
import * as constants from './constants'

export function configureAxios() {
    axios.defaults.baseURL = constants.BASE_URL;
    axios.defaults.headers.common['Referer'] = constants.BASE_URL_REFERER;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

export function fetch(url) {
    return axios.get(url)
    .then((response) => {
        return response.data
    }).catch((error) => {
        throw error
    });
}

export function post(url, data) {
    return axios.post(url, data)
    .then((response) => {
        return response.data
    }).catch((error) => {
        throw error
    });
}  