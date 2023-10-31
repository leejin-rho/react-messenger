import styled from 'styled-components'
import { colors } from '../style/colors'
import { useState } from 'react'
import { imgPath } from '../style/imgPath'
import { Chatting } from '../pages/Chatting'
import userData from '../assets/data/userData.json'
import { Link } from 'react-router-dom'

export const ChatList = () => {
  const [isNew, setIsNew] = useState(false)

  return (
    <ChatContainer>
      {userData.map((user: { uid: number; userName: string }) =>
        user.uid != 0 ? (
          <Link to={`/chatting/${user.uid}`} style={{ display: 'contents' }}>
            <ChatBox key={user.uid}>
              <InfoBox>
                <ChatProfileBox>
                  <ChatProfileImg src={imgPath.profile[user.uid]} />
                  {isNew ? <ChatProfileAlarm /> : null}
                </ChatProfileBox>
                <ChatTextBox>
                  <ChatName>{user.userName}</ChatName>
                  <ChatContent>헤이 거기</ChatContent>
                </ChatTextBox>
              </InfoBox>
              <ChatTime>10:22 AM</ChatTime>
            </ChatBox>
          </Link>
        ) : null,
      )}
    </ChatContainer>
  )
}

const ChatContainer = styled.div`
  width: 100%;
  height: 54.2rem;
  background-color: ${colors.grey_50};
  overflow: auto;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
const ChatBox = styled.div`
  display: flex;
  width: 100%;
  height: 4.375rem;
  justify-content: space-between;
  padding: 0.31rem 1.94rem 0.31rem 1.25rem;
`
const InfoBox = styled.div`
  display: flex;
  width: 12.375rem;
  height: 3.75rem;
  align-items: center;
`
const ChatProfileBox = styled.div`
  display: flex;
  position: relative;
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 0.81rem;
`
const ChatProfileImg = styled.img`
  width: 3.75rem;
  height: 3.75rem;
`
const ChatProfileAlarm = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0.8125rem;
  height: 0.8125rem;
  background-color: ${colors.green};
  border-width: 0.15rem;
  border-style: solid;
  border-color: ${colors.grey_50};
  border-radius: 999px;
  box-sizing: content-box;
`

const ChatTextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.63rem;
`
const ChatName = styled.span`
  color: ${colors.grey_900};
  font-family: 'Pretendard-Medium';
  font-size: 1.125rem;
  line-height: 140%; /* 1.575rem */
`
const ChatContent = styled.div`
  color: ${colors.grey_400};
  font-family: 'Pretendard-Regular';
  font-size: 0.875rem;
  line-height: 0.875rem;
  margin-top: 0.19rem;
`
const ChatTime = styled.span`
  color: ${colors.grey_400};
  font-family: 'Pretendard-Regular';
  font-size: 0.75rem;
  line-height: 0.875rem;
  margin-top: 0.56rem;
`
