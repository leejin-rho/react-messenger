import { atom, useRecoilState } from 'recoil'

const chatDataState = atom({
  key: 'chatDataState',
  default: {
    id: 0,
    chat: {
      //채팅 정보
      c_id: 0,
      to: '',
      from: '',
      content: '',
      time: '',
    },
  },
})
