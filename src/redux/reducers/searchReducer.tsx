import { ActionSearch } from '../../types/ActionSearch'

import { SearchState } from '../../types/SearchState'

import { SET_SEARCH_TERM } from '../actions/searchActions'

const initialState: SearchState = {
    searchTerm: ''
}

export const searchReducer = (state: SearchState | {} = initialState, action: ActionSearch): SearchState | {} => {

    if(action.type === SET_SEARCH_TERM) {
        return {
            ...state,
            searchTerm: action.searchTerm
        }
    }

    return state
}