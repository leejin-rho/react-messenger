import styled from 'styled-components'
import { colors } from '../style/colors'
import { useState } from 'react'
import { imgPath } from '../style/imgPath'
import userData from '../assets/data/userData.json'
import { ReactComponent as ArrowIcon } from '../assets/svgs/arrow.svg'
import { Link } from 'react-router-dom'

export const FriendList = () => {
  return (
    <FriendContainer>
      {userData.map((user: { uid: number; userName: string }) =>
        user.uid != 0 ? (
          <Link to={`/chatting/${user.uid}`} style={{ display: 'contents' }}>
            <FriendBox key={user.uid}>
              <Profile src={imgPath.profile[user.uid]} />
              <FriendName>{user.userName}</FriendName> <ArrowIcon />
            </FriendBox>
          </Link>
        ) : null,
      )}
    </FriendContainer>
  )
}

const FriendContainer = styled.div`
  width: 100%;
  height: 54.2rem;
  background-color: ${colors.grey_50};
  overflow: auto;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const FriendBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.75rem 0rem 1.25rem;
  width: 100%;
  height: 4.375rem;
  background-color: ${colors.grey_50};
`
const Profile = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 3.125rem;
  margin-right: 0.63rem;
`
const FriendName = styled.span`
  color: ${colors.grey_700};
  font-family: 'Pretendard-Medium';
  font-size: 1.125rem;
  line-height: 1.575rem;
  width: 16.5rem;
`
