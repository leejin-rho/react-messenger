import styled from 'styled-components'
import { colors } from '../style/colors'
import { useState } from 'react'

export const FriendList = () => {
  return (
    <TopHeading>
      <TitleText> 얼음땡만하는 사람 </TitleText>
    </TopHeading>
  )
}

const TopHeading = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.3;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const TitleText = styled.span`
  font-size: 22px;
`
