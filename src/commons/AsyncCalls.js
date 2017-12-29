import axios from 'axios'

export function fetchCharactersList() { 
    const fetchUrl = '/personajes'
    return axios.get(fetchUrl)
}