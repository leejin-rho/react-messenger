import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Messenger from './Messenger'
import { colors } from './style/colors'

function App() {
  return (
    <>
      <GlobalStyle />
      <Messenger />
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  
  ${reset}
  *, *::before, *::after{
        box-sizing: border-box;
    }
  body{
    display: flex;
        padding: 0;
        margin: 0;
        justify-content: center;
        font-family: "Pretendard-Regular";
        background-color: ${colors.grey_900};
    };
`
