import { ComunaState } from './ComunaState'

import { SearchState } from './SearchState'

export interface State {
    comuna: ComunaState
    search: SearchState
}