import axios from 'axios'
import * as constants from 'marvel_react/src/webservices/constants'


export function fetchCharactersList(){
    return new Promise(function(resolve, reject) {
      const fetchURL = constants.CHARACTERS + constants.TIME_STAMP + constants.PUBLIC_API_KEY + constants.HASH
      
      axios.get(fetchURL)
      .then((response) => {
        console.log("axios get response: ", response);
        const miList = response.data && response.data.records ? response.data.records : []
        resolve(miList)
      })
      .catch((error) => {
        console.log("axios get response: ", error);
        reject(error)
      });
    })
  }