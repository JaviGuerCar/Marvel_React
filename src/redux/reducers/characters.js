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
        default:
            return state;
    }
} 