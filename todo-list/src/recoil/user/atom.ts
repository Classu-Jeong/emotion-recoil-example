import { atom } from 'recoil'

// import { USER_ATOM_KEY } from '../../utils/constants/atomKey'

export const userState = atom({
    key: 'USER_ATOM_KEY',
    default: '',
})
