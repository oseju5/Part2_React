// useState를 사용하기 위해서는 React에서 import 해줄 필요가 있음
// 본문에서 useState 입력 후 탭 누르면 컴포넌트 자동 임포트 하듯이 아래 구문이 임포트 된다.
import React, { useState } from 'react'



export default function UseStateEx1() {

    // 값을 저장할 때는 변수를 사용한다
    // 버튼을 누를 때마다 값을 기억하는 공간
    // let count = 0;

    // useState()
    // React는 state(상태)가 바뀌면 화면을 다시 그리는 함수가 필요하다.
    // 렌더 작업을 자동으로 처리해주는 함수가 useState()

    // let [변수, 값을바꾸는함수] = useState(시작값);
    let [count,setCount] = useState(0);

    return (
        <div>
            <h3>값을 변경하는 것! - useState()</h3>
            <p>useState()<br></br>
                값을 저장하고, 바뀌면 화면을 자동으로 다시 그려주는(렌더링) 것</p>
            <p>리액트의 동작 원리: 일반 변수를 사용하면 값은 변경이 가능하지만 렌더링하지는 않는다.</p>
            <p>console.log에는 찍히지만, useState를 사용하지 않으면 화면이 변경되지는 않는다.</p>

            <h4>현재 숫자: {count}</h4>
            <button onClick={
                ()=>{
                    // 리액트에게 값이 바뀌었으니 화면을 다시 렌더링하도록 지시하는 함수
                    setCount(count+1);
                    console.log(count);
                }
            }>버튼 +1</button>
        </div>
    )
}
