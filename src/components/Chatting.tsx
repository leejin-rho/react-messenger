import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../style/colors'
import { imgPath } from '../style/imgPath'

export const Chatting = () => {
  const [isChatOn, setIsChatOn] = useState<boolean>(true)

  const ChattingData = [
    {
      id: 1,
      content:
        '모든 국민은 종교의 자유를 가진다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서모든 국민은 종교의 자유를 가진다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.법률이 정하는 바에 의하여 계엄을 선포할 수 있다.',
    },
    {
      id: 2,
      content: '모든 국민은 종교의 자유를 가진다. 대통령은 전시·사변 또는 이에 준하는',
    },
  ]

  return (
    <ChattingContainer>
      <TopHeadiing>
        <SafeAreaImg src={imgPath.path[0]} />
        <UserContainer>
          <BackIcon src={imgPath.path[1]} />
          <UserNameBox>
            <UserName>얼음땡만하는사람</UserName>
            <GreenCircle />
          </UserNameBox>
          <DotsIcon src={imgPath.path[7]} />
        </UserContainer>
      </TopHeadiing>
      {isChatOn ? (
        <ChattingList>
          <MyChatList>
            <MyChatContainer>
              <ChattingBox1>
                모든 국민은 종교의 자유를 가진다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서모든 국민은
                종교의 자유를 가진다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의
                필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수
                있다.법률이 정하는 바에 의하여 계엄을 선포할 수 있다.
              </ChattingBox1>
            </MyChatContainer>
            <ChatTime>07:40AM</ChatTime>
          </MyChatList>
          <FriendContainer>
            <ProfileImg src={imgPath.path[4]}></ProfileImg>
            <FriendChatList>
              <FriendChatContainer>
                <FriendName>얼음땡만하는사람</FriendName>
                <ChattingBox2>
                  국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 공무원의 신분과 정치적 중립성은
                  법률이
                </ChattingBox2>
              </FriendChatContainer>
              <ChatTime>08:21AM</ChatTime>
            </FriendChatList>
          </FriendContainer>
        </ChattingList>
      ) : (
        <ChattingList>
          <NoChatImg src={imgPath.path[8]} />
          <NoChatText>작성된 메시지가 없습니다.</NoChatText>
        </ChattingList>
      )}
      <BottomBox>
        <ChatArea>
          <InputContainer>
            <PlusIcon src={imgPath.path[2]} />
            <InputBox placeholder="메시지를 작성해주세요" />
            <AirplainIcon src={imgPath.path[3]} />
          </InputContainer>
        </ChatArea>
        <SafeAreaImg src={imgPath.path[6]} />
      </BottomBox>
    </ChattingContainer>
  )
}

const ChattingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey_50};
  align-items: center;
  height: 100%;
  width: 100%;
`

const TopHeadiing = styled.div`
  display: flex;
  flex-direction: column;
  height: 88px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 14px 20px;
`

const UserContainer = styled.div`
  display: flex;
  width: 335px;
  height: 24px;
  justify-content: space-between;
`

const UserNameBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 283px;
  height: 28px;
`

const UserName = styled.span`
  color: ${colors.grey_900};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  margin-left: 10.55px;
  font-family: Pretendard-Regular;
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
  height: 94px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`

const ChattingList = styled.div`
  display: flex;
  flex-direction: column;
  height: 630px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 0px 20px;
`

const NoChatText = styled.div`
  color: ${colors.grey_700};
  text-align: center;
  font-family: 'Pretendard-SemiBold';
  font-size: 20px;
  font-style: normal;
  line-height: 28px;
  width: 206px;
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
  margin-bottom: 10px;
`

const MyChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 259px;
`

const ChattingBox1 = styled.div`
  background-color: ${colors.purple};
  border-radius: 10px;
  padding: 12px 10px 12px 10px;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  line-height: 120%;
  font-family: 'Pretendard-Light';
  margin-bottom: 8px;
`

const FriendChatList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`

const FriendContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 8px;
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
`

const ChattingBox2 = styled.div`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 12px 10px 12px 10px;
  color: ${colors.grey_900};
  width: 240px;
  line-height: 120%;
  font-family: 'Pretendard-Light';
  margin-bottom: 8px;
`

const ChatTime = styled.span`
  color: ${colors.grey_400};
  font-family: 'Pretendard-Light';
  font-size: 14px;
  line-height: 120%; /* 16.8px */
`

const SafeAreaImg = styled.img`
  width: 100%;
`

const ChatArea = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 14px 16px 0px 16px;
  background-color: ${colors.white};
  box-sizing: border-box;
`

const InputContainer = styled.div`
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
