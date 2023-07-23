import { create } from 'zustand'

type menuProps = {
    isActive: boolean,
    changeActive: () => void
}

const useMenu = create<menuProps>()(set => ({
    isActive: false,
    changeActive: () => set(state => ({ ...state, isActive: !state.isActive }))
}))


export default useMenu