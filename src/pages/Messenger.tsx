import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../style/colors'
import { TapBar } from '../components/TapBar'
import { imgPath } from '../style/imgPath'

const Messenger = () => {
  return (
    <Container>
      <SafeAreaImg src={imgPath.path[0]} isTop={true} />
      <TapBar />
      <SafeAreaImg src={imgPath.path[2]} isTop={false} />
    </Container>
  )
}

export default Messenger

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey_50};
  align-items: center;
  width: 375px;
  height: 812px;
  /* @media (max-width: 390px) {
    width: auto;
    height: 70vh;
  } */
`

type SafeAreaImgProps = {
  isTop?: boolean
}

const SafeAreaImg = styled.img<SafeAreaImgProps>`
  width: 100%;
  background-color: ${(props) => (props.isTop ? colors.grey_50 : colors.white)};
`
