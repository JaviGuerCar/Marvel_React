import * as types from '../types/characters'
import { fetch, post } from 'marvel_react/src/webservices/webservices'
import * as constants from 'marvel_react/src/webservices/constants'


// Función que devuelve el tipo y el valor que actualiza el reducer
function updateCharactersList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value
    }
    
}

// Función para descargar el listado
export function fetchCharactersList() {
    return (dispatch, getState) => {

        const fetchURL = constants.CHARACTERS + constants.TIME_STAMP + constants.PUBLIC_API_KEY + constants.HASH

        fetch(fetchURL).then((response) => {
            console.log('axios get response: ', response);
            const list = response.data && response.data.results ? response.data.results : []
            dispatch(updateCharactersList(list))
        })
        .catch((error) => {
            console.log('axios get error: ', error);
        });

    }
}