# **[4주차]**

이번 과제를 하면서도... 뭔가 컴포넌트 분리가 완전 제대로 되진 않은 것 같아서 다음 과제에는 시정하겠습니다!!!
그리고 제가 deploy 과정에서 실수를 해서... redeploy commit이 굉장히 많은데 그건 무시해주시면 감사하겠습니다.
이번 과제에서는 나름대로 디테일한 기능들을 신경쓰려고 노력했습니다!
채팅방에서는 위쪽에 ... 을 누르시면 사용자를 변경할 수 있어요.
각각 탭바 누르면 나오는 화면들이 디자인이 비슷한 부분이 많아서 따로 page로 만들지않고 component로 켰다 껐다하게 구현해보았습니다.

# **[디자인 및 플로우]**

<img width="831" alt="스크린샷 2023-11-03 오후 9 05 01" src="https://github.com/CEOS-Developers/react-messenger-18th/assets/52371699/5f313f78-aea5-4367-984d-37c2c478700b">

# **[배포링크]**

[react-messenger-18th](https://react-messenger-18th-mu.vercel.app/)

# **[Key Questions]**

**디자이너로부터 받은 QA 목록, QA 반영한 커밋(or 브랜치) 링크**
처음에 기능관련 설명해주신 이후에 제가 구현한 것들이 다 맞게 잘 구현했다고 하셔서..... 반영한 사항이 따로 없습니다....

**Routing**

이번 과제에서는 친구목록, 채팅목록, 설정은 각각 component로 만들어서 tapBar.tsx에서 관리했고, 각각의 채팅방을 “/chatting/\*”주소로 router를 이용했다.

Routing이란 간단하게 말하면 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이라고 할 수 있는데, 나는 여러 라우터 라이브러리 중 리액트 라우터(React Router)를 이용해 구현했다. <Routes>컴포넌트는 여러 <Route>를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜준다.

**SPA**

Single Page Application(SPA)는 그 전 모든 페이지를 재렌더링 했던 것과 달리 특정 변경이 일어나는 부분만 Ajax등을 이용해 데이터를 바인딩해준다. 하지만 자바스크립트로 DOM 조작이 빈번하게 일어나면 브라우저의 성능을 저하하고, 그래서 Virtual DOM이라는 개념이 생겨났다. SPA 프레임워크인 React, Angular, Vue는 대표적으로 Virtual DOM을 이용해 SPA를 구현하는 기술들이다. SPA 프레임워크는 처리 과정이 효율적이며 속도가 빠르지만 처음 화면을 로딩할 때 로딩 속도가 다소 걸린다는 단점이 있다.

**상태관리**

이번 프로젝트에서는 recoil 라이브러리를 이용해서 chatData의 상태를 관리했다. 각 user의 채팅 데이터들을 chatData에 id순서대로 넣어서 각각의 채팅데이터를 만들었고, 이를 이용해 chatList에서 마지막 채팅과 시간을 나타나는데에도 사용했다.

Recoil은 상태관리를 쉽게 해주는데, Recoil의 Atoms는 state의 단위이며 업데이트와 구독이 가능하다. atom 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독하기 때문에 atom에 어떤 변화가 있다면 그 atom을 구독하는 모든 컴포넌트가 리렌더링된다.

- useRecoilState(): atom을 읽고, 쓰기 위해 사용. 컴포넌트는 atom을 구독함.
- useRecoilValue(): atom을 읽기만 할 때 사용. 컴포넌트는 atom을 구독함.
- useSetRecoilState(): atom을 쓰려고만 할 때 사용.
- useResetRecoilState(): atom을 default 값으로 초기화 할 때 사용.

등등 여러 사용방법이 있는데, 이번 과제에서 나는 useRecoilState를 주로 사용했다.

## 링크 및 참고자료

- [React Router v6 튜토리얼](https://velog.io/@velopert/react-router-v6-tutorial)
- [(선택) react-router v6에서는 어떤 것들이 변했을까?](https://blog.woolta.com/categories/1/posts/211)
- [React 상태 관리 가이드](https://www.stevy.dev/react-state-management-guide/)
- [Flux 패턴이란?](https://velog.io/@huurray/React%EC%9D%98-%ED%83%84%EC%83%9D%EA%B3%BC-Flux-%ED%8C%A8%ED%84%B4%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)
- [useReducer](https://www.daleseo.com/react-hooks-use-reducer/)
