import styled from 'styled-components'
import { colors } from '../style/colors'
import { useState } from 'react'
import { imgPath } from '../style/imgPath'
import { ReactComponent as PencilIcon } from '../assets/svgs/pencil.svg'
import { ReactComponent as LinkIcon } from '../assets/svgs/link.svg'
import { Link } from 'react-router-dom'

export const MyPage = () => {
  //const [isChatList, setIsChatList] = useState(false)

  return (
    <>
      <StatusBar src={imgPath.path[1]} />
      <BackgroundImg src={imgPath.path[8]} />
      <MyPageContainer>
        <ProfileBox>
          <ProfileImg src={imgPath.profile[0]} />
          <TextBox>
            <NameBox>
              <ProfileName>노이진</ProfileName>
              <PencilIcon />
            </NameBox>
            <ProfileEmail>tbdpapdl@gmail.com</ProfileEmail>
          </TextBox>
        </ProfileBox>
        <SNSBox>
          <GoText>바로가기</GoText>
          <SNSLine>
            <SNSIconBox>
              <SNSImg src={imgPath.path[9]} />
              <SNSTitle>github</SNSTitle>
            </SNSIconBox>
            <a
              href="https://github.com/leejin-rho"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', width: '1.5rem', height: '1.5rem' }}
            >
              <LinkIcon style={{ width: '1.5rem', height: '1.5rem' }} />
            </a>
          </SNSLine>
          <SNSLine>
            <SNSIconBox>
              <SNSImg src={imgPath.path[10]} />
              <SNSTitle>instagram</SNSTitle>
            </SNSIconBox>
            <a
              href="https://www.instagram.com/binar2y.ro/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', width: '1.5rem', height: '1.5rem' }}
            >
              <LinkIcon style={{ width: '1.5rem', height: '1.5rem' }} />
            </a>
          </SNSLine>
        </SNSBox>
      </MyPageContainer>
    </>
  )
}

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 54.2rem;
  background-color: ${colors.grey_50};
`
const StatusBar = styled.img`
  width: 375px;
  position: absolute;
  top: 0rem;
  z-index: 1;
`
const BackgroundImg = styled.img`
  width: 375px;
  height: 9.5rem;
  position: absolute;
  top: 0rem;
`
const ProfileBox = styled.div`
  width: 23.4375rem;
  height: 6.625rem;
  display: flex;
  z-index: 1;
  margin-top: 1.66rem;
`
const ProfileImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 6.25rem;
  margin-left: 1.25rem;
`
const NameBox = styled.div`
  display: flex;
  align-items: end;
`
const ProfileName = styled.span`
  color: ${colors.grey_900};
  font-family: 'Pretendard-Regular';
  font-size: 1.75rem;
  line-height: 1.5rem;
  margin-right: 0.38rem;
`
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 3.125rem;
  margin: 3.19rem 0rem 0rem 1rem;
`
const ProfileEmail = styled.span`
  color: ${colors.grey_700};
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  line-height: 140%; /* 1.4rem */
  margin-top: 0.25rem;
`
const SNSBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 1.25rem 0rem 1.25rem;
`
const GoText = styled.span`
  color: ${colors.grey_700};
  font-family: 'Pretendard-Medium';
  font-size: 1.125rem;
  line-height: 140%; /* 1.575rem */
  margin: 2.5rem 0rem 0.75rem 0rem;
`
const SNSLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 0.375rem;
  padding: 0.6875rem 0.5625rem 0.6875rem 1.125rem;
  margin-bottom: 0.5rem;
`
const SNSTitle = styled.span`
  color: ${colors.grey_700};
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  line-height: 140%; /* 1.4rem */
`
const SNSImg = styled.img`
  width: 1.75rem;
  height: 1.75rem;
`
const SNSIconBox = styled.div`
  display: flex;
  height: 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
