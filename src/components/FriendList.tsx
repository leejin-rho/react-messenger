import styled from 'styled-components'
import { colors } from '../style/colors'

export const FriendList = () => {
  return (
    <TitleBox>
      <TitleText>친구들</TitleText>
    </TitleBox>
  )
}

const TitleBox = styled.div`
  width: 335px;
  height: 24px;
`
const TitleText = styled.span`
  font-size: 22px;
`
