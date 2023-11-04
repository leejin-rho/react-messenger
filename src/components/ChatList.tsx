import styled from 'styled-components'
import { colors } from '../style/colors'
import { useEffect, useState } from 'react'
import { imgPath } from '../style/imgPath'
import userData from '../assets/data/userData.json'
import { Link } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { chatDataState } from '../states/chatAtom'
import { format } from 'date-fns'

export const ChatList = ({ searchValue }: { searchValue: string }) => {
  const [isNew, setIsNew] = useState(false)
  const [chatData, setChatData] = useRecoilState(chatDataState)
  const today = format(new Date(), 'yyyy/MM/dd')

  //local storage
  useEffect(() => {
    const Chattings = localStorage.getItem('chatData')
    if (Chattings) {
      setChatData(JSON.parse(Chattings))
    }
  }, [])

  //채팅 목록에서 18글자가 넘어가면 ...표시 되도록
  const editContent = (content: String) => {
    if (content.length >= 14) {
      return content.substring(0, 14) + '...'
    } else return content
  }

  return (
    <ChatContainer>
      {userData
        .filter((user: { uid: number; userName: string }) =>
          user.userName.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .filter((user: { uid: number; userName: string }) => chatData[user.uid]?.chat.length > 0)
        .sort((a: { uid: number }, b: { uid: number }) => {
          //마지막에 보낸 채팅방이 가장 위로 올 수 있도록
          const lastChat_1 = new Date(chatData[a.uid]?.chat[chatData[a.uid]?.chat.length - 1]?.time).getTime()
          const lastChat_2 = new Date(chatData[b.uid]?.chat[chatData[b.uid]?.chat.length - 1]?.time).getTime()
          return lastChat_2 - lastChat_1
        })
        .map((user: { uid: number; userName: string }) =>
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
                    <ChatContent>
                      {editContent(chatData[user.uid]?.chat?.[chatData[user.uid]?.chat.length - 1]?.content) || ''}
                    </ChatContent>
                  </ChatTextBox>
                </InfoBox>
                <ChatTime>
                  {format(
                    new Date(chatData[user.uid]?.chat?.[chatData[user.uid]?.chat.length - 1]?.time),
                    today ===
                      format(
                        new Date(chatData[user.uid]?.chat?.[chatData[user.uid]?.chat.length - 1]?.time),
                        'yyyy/MM/dd',
                      )
                      ? 'hh:mm aa'
                      : 'MM/dd',
                  ) || ''}
                </ChatTime>
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
  width: 16.5rem;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 2.63rem;
`
const ChatName = styled.span`
  width: 100%;
  color: ${colors.grey_900};
  font-family: 'Pretendard-Medium';
  font-size: 1.125rem;
  line-height: 140%; /* 1.575rem */
`
const ChatContent = styled.div`
  color: ${colors.grey_400};
  width: 100%;
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
