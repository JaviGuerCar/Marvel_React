import * as types from '../types/characters'
import { fetch, post } from 'marvel_react/src/webservices/webservices'
import * as constants from 'marvel_react/src/webservices/constants'
import { Actions } from 'react-native-router-flux'


// Función que devuelve el tipo y el valor que actualiza el reducer
function updateCharactersList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value: value
    }
}

function setCharactersFetching(value){
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value
    }
}

export function updateCharacterSelected(value){
    return {
        type: types.CHARACTERS_UPDATE_CHARACTER,
        value: value
    }
}

// Función para descargar el listado
export function fetchCharactersList() {
    return (dispatch, getState) => {

        dispatch(setCharactersFetching(true))
        const fetchURL = constants.CHARACTERS + constants.TIME_STAMP + constants.PUBLIC_API_KEY + constants.HASH

        fetch(fetchURL).then((response) => {
            console.log('axios get response: ', response);
            const list = response.data && response.data.results ? response.data.results : []
            dispatch(setCharactersFetching(false))
            dispatch(updateCharactersList(list))
            
        })
        .catch((error) => {
            console.log('axios get error: ', error);
            dispatch(setCharactersFetching(false))
        });

    }
}

// Función que haría el post, lo dejamos ya que el WS no lo permite
export function postCharacter(data){
    return (dispatch, getState) => {
        console.log('Nuevo personaje insertado: ', data)
        Actions.pop()
    }
    
}