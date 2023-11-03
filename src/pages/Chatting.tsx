import { useState, useEffect, useCallback, useRef } from 'react'
import styled from 'styled-components'
import { colors } from '../style/colors'
import { imgPath } from '../style/imgPath'
import { chatDataState } from '../states/chatAtom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link, useParams } from 'react-router-dom'
import { format } from 'date-fns'
import userData from '../assets/data/userData.json'

export const Chatting = () => {
  const { id } = useParams()
  const opposite = userData[Number(id)]
  const me = userData[0]

  const [isChatOn, setIsChatOn] = useState<boolean>(false)
  const [nowChatting, setNowChatting] = useState<string>(opposite.userName)
  const [user, setUser] = useState<string>(me.userName)
  const [inputValue, setInputValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const chatListRef = useRef<HTMLDivElement>(null)
  const [chatData, setChatData] = useRecoilState(chatDataState)

  //local storage용
  useEffect(() => {
    //local storage load
    const Chattings = localStorage.getItem('chatData')
    if (Chattings && JSON.parse(Chattings)[Number(id)]) {
      setChatData(JSON.parse(Chattings))
      setIsChatOn(true)
      //처음에 가장 아래 스크롤에서 시작
      setTimeout(() => {
        const element = chatListRef.current
        if (element) element.scrollTop = element.scrollHeight
      }, 0)
    } else setIsChatOn(false)
    //chatData가 비었을 땐 메세지 없음 화면이 나오도록
  }, [])

  //input이 submit되면 스크롤이 내려감, localStorage에 저장
  useEffect(() => {
    const element = chatListRef.current
    if (element) {
      element.scrollTop = element.scrollHeight
    }
  }, [chatData])

  //input 함수
  //onChange
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  //inputRef설정 함수
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    inputRef.current?.focus()
  }

  //onSubmit
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      //입력한 값이 없을 때 alert 추가
      if (inputValue.trim() == '') {
        alert('메시지를 입력해주세요.')
      } else {
        createChatting(inputValue)
        setInputValue('')
        console.log(chatData)
      }
    },
    [inputValue],
  )

  const createChatting = (inputValue: string): void => {
    setChatData((prevChats) => {
      const newChat = {
        //상대 채팅데이터의 마지막 c_id에서 +1
        c_id: prevChats[opposite.uid]?.chat.length
          ? prevChats[opposite.uid].chat[prevChats[opposite.uid].chat.length - 1].c_id + 1
          : 0,
        to: opposite.userName,
        from: user,
        content: inputValue,
        time: new Date().toISOString(),
      }

      const newChatData = {
        //각 사용자의 uid값을 id에 넣어서 각각의 data 배열 생성
        id: opposite.uid,
        chat: prevChats[opposite.uid] ? [...prevChats[opposite.uid].chat, newChat] : [newChat],
      }

      const updatedChats = {
        ...prevChats,
        [opposite.uid]: newChatData,
      }

      localStorage.setItem('chatData', JSON.stringify(updatedChats))
      setIsChatOn(updatedChats[opposite.uid].chat.length > 0)

      return updatedChats
    }) //채팅리스트에 Input 추가
  }

  //간단하게 user 변경
  const changeUser = (): void => {
    if (user === me.userName) {
      setUser(opposite.userName)
      setNowChatting(me.userName)
    } else {
      setUser(me.userName)
      setNowChatting(opposite.userName)
    }
  }

  return (
    <ChattingContainer>
      <TopHeading>
        <SafeAreaImg src={imgPath.path[0]} />
        <UserContainer>
          <Link to="/" style={{ display: 'contents' }}>
            <BackIcon src={imgPath.path[3]} />
          </Link>
          <UserNameBox>
            <UserName>{nowChatting}</UserName>
            {isChatOn && <GreenCircle />}
          </UserNameBox>
          <DotsIcon src={imgPath.path[6]} onClick={changeUser} />
        </UserContainer>
      </TopHeading>
      {isChatOn ? (
        <ChattingList ref={chatListRef}>
          {chatData[opposite.uid]?.chat.map((chat, index, arr) => {
            //만약 그 전 채팅시간과 같다면 그 전 채팅시간이 사라지고 마지막 채팅에만
            const showTime: boolean =
              index === arr.length - 1 ||
              format(new Date(chat.time), 'hh:mm') !== format(new Date(arr[index + 1].time), 'hh:mm') ||
              chat.from !== arr[index + 1].from
            //만약 그 전 채팅시간과 같다면 그 전 채팅시간이 사라지고 첫 채팅에만 프로필
            const showProfile: boolean =
              index === 0 ||
              format(new Date(chat.time), 'hh:mm') !== format(new Date(arr[index - 1]?.time), 'hh:mm') ||
              chat.from !== arr[index - 1].from

            return chat.from === user ? (
              <MyChatList>
                <MyChatContainer>
                  <ChattingBox1>{chat.content}</ChattingBox1>
                </MyChatContainer>
                {showTime ? <ChatTime>{format(new Date(chat.time), 'hh:mm')}</ChatTime> : null}
              </MyChatList>
            ) : (
              <FriendContainer>
                {showProfile ? (
                  <ProfileImg
                    src={nowChatting === opposite.userName ? imgPath.profile[opposite.uid] : imgPath.profile[0]}
                  ></ProfileImg>
                ) : (
                  <NoProfileImg />
                )}
                <FriendChatList>
                  <FriendChatContainer>
                    {showProfile ? <FriendName>{nowChatting}</FriendName> : null}
                    <ChattingBox2>{chat.content}</ChattingBox2>
                  </FriendChatContainer>
                  {showTime ? <ChatTime>{format(new Date(chat.time), 'hh:mm')}</ChatTime> : null}
                </FriendChatList>
              </FriendContainer>
            )
          })}
        </ChattingList>
      ) : (
        <NoChattingList>
          <NoChatImg src={imgPath.path[7]} />
          <NoChatText>작성된 메시지가 없습니다.</NoChatText>
        </NoChattingList>
      )}
      <BottomBox>
        <ChatArea>
          <InputContainer onSubmit={onSubmit}>
            <PlusIcon src={imgPath.path[4]} />
            <InputBox
              placeholder="메시지를 작성해주세요"
              ref={inputRef}
              value={inputValue}
              onChange={onChange}
              onClick={handleInputClick}
            />
            <button
              type="submit"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                width: 24,
                height: 24,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AirplainIcon src={imgPath.path[5]} />
            </button>
          </InputContainer>
        </ChatArea>
      </BottomBox>
      <SafeAreaImg2 src={imgPath.path[2]} />
    </ChattingContainer>
  )
}

const ChattingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey_50};
  align-items: center;
  width: 375px;
  height: 812px;
`

const SafeAreaImg = styled.img`
  width: 100%;
`
const SafeAreaImg2 = styled.img`
  width: 100%;
  background-color: ${colors.white};
`

const TopHeading = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.3;
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
const UserNameBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 283px;
  height: 28px;
`
const UserName = styled.span`
  color: ${colors.grey_900};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin-left: 11px;
  font-family: 'Pretendard-Regular';
`

const GreenCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${colors.green};
`

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`

const DotsIcon = styled.img`
  width: 24px;
  height: 24px;
`
const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`
const ChattingList = styled.div`
  display: flex;
  flex-direction: column;
  height: 40rem;
  width: 100%;
  padding: 0rem 1.25rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
const NoChattingList = styled(ChattingList)`
  align-items: center;
  justify-content: center;
`

const NoChatText = styled.div`
  color: ${colors.grey_700};
  text-align: center;
  font-family: 'Pretendard-SemiBold';
  font-size: 20px;
  font-style: normal;
  line-height: 140%;
  width: 12.875rem;
`

const NoChatImg = styled.img`
  width: 155px;
  height: 100px;
  margin-bottom: 41px;
`

const MyChatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`

const MyChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ChattingBox1 = styled.span`
  display: flex;
  width: fit-content;
  max-width: 16rem;
  background-color: ${colors.purple};
  border-radius: 0.6rem;
  padding: 0.63rem 0.75rem 0.63rem 0.75rem;
  color: ${colors.white};
  line-height: 120%;
  font-family: 'Pretendard-Light';
  margin-bottom: 0.5rem;
  word-break: break-all;
`

const ChattingBox2 = styled.span`
  background-color: ${colors.white};
  border-radius: 0.6rem;
  padding: 0.63rem 0.75rem 0.63rem 0.75rem;
  color: ${colors.grey_900};
  max-width: 20rem;
  width: fit-content;
  line-height: 120%;
  font-family: 'Pretendard-Light';
  margin-bottom: 0.5rem;
  word-break: break-all;
`

const FriendChatList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FriendContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`

const ProfileImg = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50px;
  margin-right: 0.5rem;
`

const NoProfileImg = styled.div`
  width: 3.125rem;
  margin: 0rem 0.5rem 0rem 0.5rem;
`

const FriendChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
`

const FriendName = styled.span`
  color: ${colors.grey_900};
  font-family: 'Pretendard';
  font-size: 14px;
  line-height: 120%; /* 16.8px */
  margin-bottom: 0.5rem;
`

const ChatTime = styled.span`
  color: ${colors.grey_400};
  font-family: 'Pretendard-Light';
  font-size: 14px;
  line-height: 120%; /* 16.8px */
  margin-bottom: 0.6rem;
`

const ChatArea = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 14px 16px 0px 16px;
  background-color: ${colors.white};
  box-sizing: border-box;
`

const InputContainer = styled.form`
  display: flex;
  width: 100%;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  height: 36px;
`

const PlusIcon = styled.img`
  height: 28px;
  width: 28px;
`

const InputBox = styled.input`
  width: 264px;
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 9px 0px 8px 14px;
  font-size: 16px;
  font-family: 'Pretendard-Regular';

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari */
    color: ${colors.grey_300};
  }

  &::-ms-input-placeholder {
    /* Internet Explorer */
    color: ${colors.grey_300};
  }

  background-color: ${colors.grey_50};
`

const AirplainIcon = styled.img`
  height: 24px;
  width: 24px;
`
