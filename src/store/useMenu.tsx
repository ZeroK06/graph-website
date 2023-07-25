import { create } from 'zustand'

type menuProps = {
    isActive: boolean,
    isActiveDrag: boolean,
    changeActive: () => void
    changeActiveDrag: () => void
}

const useMenu = create<menuProps>()(set => ({
    isActive: false,
    isActiveDrag: true,
    changeActive: () => set(state => ({ ...state, isActive: !state.isActive })),
    changeActiveDrag: () => set(state => ({ ...state, isActiveDrag: !state.isActiveDrag }))
}))


export default useMenu