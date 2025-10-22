import './App.css'
import FruitsList from './commonents/FruitsList';
import FruitsList2 from './commonents/FruitsList2';
import Test1 from './test/Test1';
import Test2 from './test/Test2';
import Test3 from './test/Test3';

function App() {

  // 배열을 props로 넘기기
  let fruits = ["🍎 사과", "🍌 바나나", "🍇 포도"];

  let fruitInfo ={
    name: "🍎",
    price: 2000
  }

  // 만약 값이 없으면 과일의 가격을 띄우고 싶지 않을 때
  let fruitInfo2 ={
    name: "🍌",
    color: "Yellow"
  }

  let test1Product = {
    name: "아이스 아메리카노",
    price: 3000
  }

  let test2Book = {
    title: "책 제목",
    author: "저자 이름"
  }

  let test3Item1 ={
    name: '바닐라 라떼',
    price: 2000
  }
  let test3Item2 ={
    name: '가격 없는 상품'
  }

  return (
    <>
      {/* 배열을 props로 넘길 경우, 전체 배열이 넘어가서 <h3>'🍎 사과🍌 바나나🍇 포도'</h3>으로 출력 */}
      <FruitsList items={fruits}/>
      <hr />

      {/* 객체 형태의 props */}
      <FruitsList2 items={fruitInfo}/>
      {/* 조건부 렌더링 실습 */}
      <FruitsList2 items={fruitInfo2}/>
      <hr />

      <Test1 product={test1Product}/>
      <hr />

      <Test2 book={test2Book}/>
      <hr />

      <Test3 items={test3Item1}/>
      <Test3 items={test3Item2}/>
      <hr />

    </>
  )
}

export default App
