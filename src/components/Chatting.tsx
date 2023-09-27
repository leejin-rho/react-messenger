import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../style/colors'
import { imgPath } from '../style/imgPath'

export const Chatting = () => {
  return (
    <ChattingBox>
      <TopHeadiing>
        <SafeAreaImg src={imgPath.path[0]} />
      </TopHeadiing>
      <ChattingList>
        <NoChatImg src={imgPath.path[8]} />
        <NoChatText>작성된 메시지가 없습니다.</NoChatText>
      </ChattingList>
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
    </ChattingBox>
  )
}

const ChattingBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey_50};
  align-items: center;
  height: 100%;
  width: 100%;
`

const TopHeadiing = styled.div`
  height: 88px;
  width: 100%;
  padding: 0px 20px 14px 20px;
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
  width: 100px;
  align-items: center;
  justify-content: center;
`

const NoChatText = styled.div`
  color: ${colors.grey_700};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  width: 206px;
`

const NoChatImg = styled.img`
  width: 155px;
  height: 100px;
  margin-bottom: 41px;
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
