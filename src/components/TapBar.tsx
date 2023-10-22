import styled from 'styled-components'
import { useState } from 'react'
import { colors } from '../style/colors'
import writeIcon from '../assets/svgs/write.svg'
import editIcon from '../assets/svgs/edit.svg'
import { FriendList } from './FriendList'
import { ChatList } from './ChatList'
import { MyPage } from './MyPage'

export const TapBar = () => {
  const [isFriend, setIsFriend] = useState(true)
  //const [isChatList, setIsChatList] = useState(false)

  return (
    <TopHeading>
      <UserContainer>
        <img src={editIcon} style={{ width: '1.9rem' }}></img>
        <TitleText> {isFriend ? '친구들' : '채팅'}</TitleText>
        <img src={writeIcon} style={{ width: '1.5rem' }}></img>
      </UserContainer>
    </TopHeading>
  )
}

const TopHeading = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.3rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const UserContainer = styled.div`
  display: flex;
  width: 21rem;
  height: 1.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 1.25rem 0.9rem 1.25rem;
`

const TitleText = styled.span`
  font-family: 'Pretendard-SemiBold';
  font-size: 1.375rem;
`
