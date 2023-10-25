import styled from 'styled-components'
import { colors } from '../style/colors'

import { useState } from 'react'

export const MyPage = () => {
  //const [isChatList, setIsChatList] = useState(false)

  return (
    <TopHeading>
      <TitleText> 설정 </TitleText>
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
// const TitleBox = styled.div`
//   width: 335px;
//   height: 24px;
// `
const TitleText = styled.span`
  font-size: 22px;
`
