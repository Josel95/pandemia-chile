import { Comuna } from './Comuna'

export interface ActionComuna {
    type: string,
    isCurrentComuna: boolean
    payload: Comuna
}