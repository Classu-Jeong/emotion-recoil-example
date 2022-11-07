import { atom } from 'recoil'

export const todoListState = atom({
    key: 'TODO_ATOM_KEY',
    default: [],
})

export default todoListState
