export interface Action<T> {
    type: string,
    isCurrentComuna: boolean
    payload: T
}