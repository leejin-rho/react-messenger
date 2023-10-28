import styled from 'styled-components'
import { useCallback, useRef, useState } from 'react'
import { colors } from '../style/colors'
import { FriendList } from './FriendList'
import { ChatList } from './ChatList'
import { MyPage } from './MyPage'
import { ReactComponent as WriteIcon } from '../assets/svgs/write.svg'
import { ReactComponent as EditIcon } from '../assets/svgs/edit.svg'
import { ReactComponent as FriendsIcon } from '../assets/svgs/friends.svg'
import { ReactComponent as ChattingIcon } from '../assets/svgs/chatting.svg'
import { ReactComponent as SettingIcon } from '../assets/svgs/setting.svg'
import { ReactComponent as SearchIcon } from '../assets/svgs/search.svg'

export const TapBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFriend, setIsFriend] = useState(true)
  const [isChatList, setIsChatting] = useState(false)
  const [isSetting, setIsSetting] = useState(false)
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
          <EditIcon style={{ width: '1.9rem', color: isSetting ? colors.white : colors.grey_700 }} />
          <TitleText style={{ color: isSetting ? colors.white : colors.grey_900 }}>
            {isFriend ? '친구들' : isSetting ? '내 설정' : '채팅'}
          </TitleText>
          <WriteIcon style={{ color: isSetting ? 'transparent' : colors.grey_900, width: '1.5rem' }} />
        </UserContainer>
      </TopHeading>
      {!isSetting ? (
        <>
          <InputContainer onSubmit={onSubmit}>
            <InputLine>
              <SearchIcon style={{ width: '1.5rem' }} />
              <InputBox
                placeholder="검색"
                ref={inputRef}
                value={inputValue}
                onChange={onChange}
                onClick={handleInputClick}
              />
            </InputLine>
            {/* <button
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
        ></button> */}
          </InputContainer>
          {isFriend ? <FriendList /> : <ChatList />}
        </>
      ) : (
        <MyPage />
      )}

      <TapContainer>
        <IconBox
          onClick={() => {
            setIsChatting(true)
            setIsFriend(false)
            setIsSetting(false)
          }}
        >
          <ChattingIcon style={{ color: isChatList ? colors.purple : colors.grey_400, width: '1.75rem' }} />
          <IconText style={{ color: isChatList ? colors.purple : colors.grey_400 }}>채팅</IconText>
        </IconBox>
        <IconBox
          onClick={() => {
            setIsChatting(false)
            setIsFriend(true)
            setIsSetting(false)
          }}
        >
          <FriendsIcon style={{ color: isFriend ? colors.purple : colors.grey_400, width: '1.75rem' }} />
          <IconText style={{ color: isFriend ? colors.purple : colors.grey_400 }}>친구들</IconText>
        </IconBox>
        <IconBox
          onClick={() => {
            setIsChatting(false)
            setIsFriend(false)
            setIsSetting(true)
          }}
        >
          <SettingIcon style={{ color: isSetting ? colors.purple : colors.grey_400, width: '1.75rem' }} />
          <IconText style={{ color: isSetting ? colors.purple : colors.grey_400 }}>설정</IconText>
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
  z-index: 1;
`

const TitleText = styled.span`
  font-family: 'Pretendard-Medium';
  font-size: 1.375rem;
`

const InputContainer = styled.form`
  width: 100%;
  padding: 0.38rem 1.25rem 1.5rem 1.25rem;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`

const InputLine = styled.div`
  width: 20.9375rem;
  height: 2.5rem;
  outline: none;
  border: none;
  display: flex;
  flex-direction: row;
  border-radius: 0.375rem;
  background: ${colors.white};
  padding: 0.5rem 0.87rem 0.5rem 0.87rem;
`

const InputBox = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 0.375rem;
  background: ${colors.white};
  font-size: 1.125rem;
  font-family: 'Pretendard-Regular';
  padding: 0rem 0.2rem 0rem 0.2rem;

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

const IconText = styled.div`
  display: flex;
  margin-top: 0.31rem;
  text-align: center;
  font-family: 'Pretendard-Medium';
  font-size: 0.875rem;
`
