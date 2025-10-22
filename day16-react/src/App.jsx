// 기본 설정값인데 이것도 다 지워버림...

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Board from './Board'
import Test from './Test'
import Test2 from './Test2'
import Testmonial from './Testmonial'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>

    <h3>메인 화면을 구성하는 body와 같은 역할을 한다.</h3>
    <ul>
      <li>HTML은 파일 단위라서 파일 위치가 변경되면 새로고침 하느라 '깜빡' 할 때가 있음</li>
      <li>react는 컴포넌트 단위 별로 저장하여 반복되는 코드를 줄이고, 새로고침 없이 작성할 수 있게 만듦</li>
      <li>헤더.jsx 헤더.css / 메인.jsx 메인.css  이런 식으로 블럭을 쪼개어 조합하는 느낌인 듯...</li>
      <li>웹사이트가 아니라 앱처럼 반응하도록 만들어주는 기술.</li>
      <li>react, next 등...</li>
      <li>react로 개발하면 html 파일이 하나밖에 없다. 1개의 html 페이지 안에서 레고 블록처럼 구조만 변경하며 기능한다.</li>
      <li>SPA: Single Page Application<br></br>
        페이지 전체를 새로고침 하지 않고 다른 페이지처럼 화면이 전환되는 웹앱. 보통 하나의 HTML안에서 사용한다.
      </li>
      <li>쿠팡, 인스타, 페이스북 등 스크롤 시 계속해서 늘어나는 페이지 등이 react로 만들어졌다.</li>
      <li>react가 아니라 단순 html이라면 페이지에 변경이 있을 때마다 깜 빡 깜 빡 하게 될 것.</li>
    </ul>

    {/* react에서는 class -> calssName으로 작성 */}
    <section className='about'>
      <h1>About me - 오세주</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quibusdam non rem praesentium doloribus neque, officiis unde eius laborum illo tempore ipsum sequi sint, corrupti quia numquam rerum quae! Perferendis.</p>

      <article className='major-parent'>
        <div className='major'>
          <h3>Front-end</h3>
          <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs</p>
        </div>
        <div className='major'>
          <h3>Mobile</h3>
          <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs</p>
        </div>
        <div className='major'>
          <h3>Back-end</h3>
          <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs</p>
        </div>
      </article>
    </section>

    <h3>리액트 기본 문법</h3>
    <p>확장자: JSX (JavaScropt XML)</p>
    <p>자바스크립트 안에서 HTML을 직접 쓸 수 있게 해주는 문법</p>
    <p>움직이는 페이지를 만들기 위해서 사용하는 게 자바스크립트,</p>
    <p>createElement, append 등을 축약하기 위해 만들어진 게 JSX</p>
    <p>JSX - 자바스크립트 코드로 UI(유저 인터페이스, 화면)를 직접 제어하기 위한 문법</p>
    <p>터미널 - 컴퓨터에게 직접 명령하는 대화창</p>
    <ul>
      <li>터미널 - npm run dev (= 리액트를 실행하라는 명령문)</li>
      <li>실행 시 내 컴퓨터(Local)에서 리액트가 실행됨.</li>
      <li>localhost - 내 컴퓨터 안에서만 볼 수 있는 사이트 (웹에 배포되지 않음)</li>

      <p>리액트는 함수를 이용하여 함수를 만든다. 위에 적힌 function App()</p>
      <p>내가 직접 태그를 만들 수도 있다. = Test.jsx</p>
    </ul>

    <h3>내가 직접 만든 태그!</h3>
    {/* 상단에 import 필요 */}
    {/* < 쓰고 파일명 단축키로 쓰면 import 까지 자동 실행됨 */}
    <Test />
    {/* 아래와 같이 중복되는 html 코드를 블럭으로 만들어 이곳저곳에서 반복적으로 사용할 수 있음 */}
    <Test2 />
    <Test2 />
    <Test2 />

    <Board />

    <Testmonial />

    {/* 기본 값으로 들어있으나 삭제해버림. */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
