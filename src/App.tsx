import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Messenger from "./Messenger";

function App() {
  return (
    <>
      <GlobalStyle />
      <Messenger />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
        padding: 0;
        margin: 0;
    };
`;
