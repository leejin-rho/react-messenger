import styled from 'styled-components'
import { colors } from '../style/colors'
import { useState } from 'react'

export const ChatList = () => {
  return <ChatContainer></ChatContainer>
}

const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 54.2rem;
  background-color: ${colors.grey_50};
`
