import * as types from '../types/characters'

const initalState = {
    isFetching: false,
    list: [],
    item: null
}

export default function reducer(state = initalState, action = {} ){
    switch (action.type) {
        case types.CHARACTERS_UPDATE_LIST:
            return {
                ...state,
                list: action.value
            };

        case types.CHARACTERS_UPDATE_CHARACTER:
            return {
                ...state,
                item: action.value
            };

        case types.CHARACTERS_SET_FETCHING:
            return {
                ...state,
                isFetching: action.value
            };

        default:
            return state;
    }
} 