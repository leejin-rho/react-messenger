import styled from 'styled-components'
import { useCallback, useRef, useState } from 'react'
import { colors } from '../style/colors'
import { FriendList } from './FriendList'
import { ChatList } from './ChatList'
import { MyPage } from './MyPage'
import writeIcon from '../assets/svgs/write.svg'
import editIcon from '../assets/svgs/edit.svg'
import friendsIcon from '../assets/svgs/friends.svg'
import chattingIcon from '../assets/svgs/chatting.svg'
import settingIcon from '../assets/svgs/setting.svg'

export const TapBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFriend, setIsFriend] = useState(true)
  //const [isChatList, setIsChatList] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      //입력한 값이 없을 때 alert 추가
      if (inputValue.trim() == '') {
        alert('채팅을 입력해주세요.')
      } else {
        setInputValue('')
      }
    },
    [inputValue],
  )

  //inputRef설정 함수
  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    inputRef.current?.focus()
  }

  return (
    <>
      <TopHeading>
        <UserContainer>
          <img src={editIcon} style={{ width: '1.9rem' }}></img>
          <TitleText> {isFriend ? '친구들' : '채팅'}</TitleText>
          <img src={writeIcon} style={{ width: '1.5rem' }}></img>
        </UserContainer>
      </TopHeading>

      <InputContainer onSubmit={onSubmit}>
        <InputBox placeholder="검색" ref={inputRef} value={inputValue} onChange={onChange} onClick={handleInputClick} />
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
        ></button>
      </InputContainer>

      <TapContainer>
        <IconBox>
          <IconImg src={chattingIcon} />
          <IconText>채팅</IconText>
        </IconBox>
        <IconBox>
          <IconImg src={friendsIcon} />
          <IconText>친구들</IconText>
        </IconBox>
        <IconBox>
          <IconImg src={settingIcon} />
          <IconText>세팅</IconText>
        </IconBox>
      </TapContainer>
    </>
  )
}

const TopHeading = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.3rem;
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

const TitleText = styled.span`
  font-family: 'Pretendard-SemiBold';
  font-size: 1.375rem;
`

const InputContainer = styled.form`
  width: 100%;
  padding: 0.38rem 1.25rem 1.5rem 1.25rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`

const InputBox = styled.input`
  width: 20.9375rem;
  height: 2.5rem;
  outline: none;
  border: none;
  border-radius: 0.375rem;
  background: ${colors.white};
  padding: 9px 0px 8px 14px;
  font-size: 1.125rem;
  font-family: 'Pretendard-Regular';

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari */
    color: ${colors.grey_400};
  }

  &::-ms-input-placeholder {
    /* Internet Explorer */
    color: ${colors.grey_400};
  }
  background-color: ${colors.white};
`

const TapContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.56rem 3rem 0rem 3rem;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
  background-color: ${colors.white};
`

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3.125rem;
`

const IconImg = styled.img`
  display: flex;
  width: 1.75rem;
`

const IconText = styled.div`
  display: flex;
  color: ${colors.grey_400};
  margin-top: 0.31rem;
  text-align: center;
  font-family: 'Pretendard-regular';
  font-size: 0.875rem;
`
