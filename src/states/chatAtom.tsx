import { atom } from 'recoil'

interface ChatElm {
  id: number
  chat: {
    c_id: number
    to: string
    from: string
    content: string
    time: string
  }[]
}

export const chatDataState = atom<{ [id: number]: ChatElm }>({
  key: 'chatDataState',
  default: [],
})
