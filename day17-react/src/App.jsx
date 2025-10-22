import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card from './components/Card'
import Profile from './components/Profile'
import Post from './components/Post'
import Person from './components/Person'
import Product from './components/Product'



function App() {


  return (
    <>
    {/* 아래와 같이 동일한 태그 구성에서 내용만 변경될 경우, App()에서 함수 내로 내용을 전달해줄 수 있다. */}
      <Card1 />
      <Card2 />
      <Card3 />

      <h3>Props?</h3>
      <p>리액트에서 컴포넌트는 작은 조각(레고 조각 같은)함수를 의미한다.</p>
      <p>그런데 어떤 컴포넌트는 다른 컴포넌트에게 정보를 전달해야 될 때가 있다.</p>
      <p>그 때 사용하는 게 바로 'Props'</p>

      <p>App(부모) 가 Card(자식)에게 선물보내기</p>
      <p>이때 정보는 단방향 송신으로, 수신하는 쪽에서 값을 수정할 수 없다.(읽기 전용)</p>

      {/* 똑같은 태그를 기준으로 컴포넌트에게 제목을 각각 보내주기 */}
      <Card title="계란빵"/>
      <Card title="우동5종"/>
      <Card title="국거리"/>
      <hr></hr>


      {/* 개발자 3명의 정보를 Profile 컴포넌트를 이용해서 정보 출력하기 */}
      <Profile name="세주" dept="풀스택 개발자" years="2"/>
      <Profile name="쭈기" dept="돈 많은 백수" years="26"/>
      <Profile name="허니멜로" dept="귀염둥이" years="1"/>
      <hr></hr>

      {/* 각 게시글을 작성할 때 Post 컴포넌트를 이용해서 사용 */}
      <Post title="출석 1등" userId="세주" id="1" body="1등이라지요"/>
      <Post title="출석 2등" userId="쭈기" id="2" body="2등이라지요"/>
      <hr></hr>

      {/* 이름과 나이를 컴포넌트로 넘기고 계산하기 */}
      {/* 큰따옴표 안에 넣은 값은 모두 문자로 들어가기 때문에, "26"+1 = "261"의 값이 나온다 */}
      {/* 문자열이 아닌 다른 값(숫자, 객체, 불리언 등)을 전달할 때에는 중괄호를 사용한다. */}
      <Person name="세주" age={26} gender={true}/>
      {/* 값을 지정해주지 않으면 undefined */}
      <Person name="쭈기" age={19}/>

      <p>리액트는 정보를 담는 변수 타입이 2개 존재한다.</p>
      <ul>
        <li>"" 따옴표 == string 문자 타입</li>
        <li>{} 중괄호 == 계산되거나 바뀌는 값을 담는 타입 (숫자, 객체, 변수, 함수 불리언 등등)</li>
      </ul>
      <hr></hr>

      {/* 원래 props 를 사용하는 방법은: */}
      {/* 자식의 매개변수에는 props만 기재하고, 변수를 호출할 때 props.속성이름 으로 호출한다. */}
      <p>매개변수: 부모에서 자식으로 값을 전달할 때, 함수끼리 사용하는 파라미터 (괄호 안에 들어가는 변수들)</p>
      <Product title="아메리카노" price="3000원" />
      <Product title="아메리카노"
                price={4000}
                isHot={true}
                decf={false} />

    </>
  )
}

export default App
