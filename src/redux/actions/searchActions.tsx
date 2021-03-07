import { ActionSearch } from '../../types/ActionSearch'

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'

export const setSearchTerm = (searchTerm: string): ActionSearch => {
    return {
        type: SET_SEARCH_TERM,
        searchTerm
    }
}