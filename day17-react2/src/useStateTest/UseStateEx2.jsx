import React, { useState } from 'react'


// 리액트는 원본 파일이 하나 있고 복제본 파일을 만든다.
// 원본파일을 직접 건드리게되면 새로고침이 일어나고 값이 리셋된다.
// 복제본을 만들었다. (가상 DOM)
// 변수를 이용해서 값을 저장하면 원본파일에 변경된 값이 올라가야되는데
// 복제본에 올라간다. 그래서 원본파일이 변경된 값을 모른다.
// useState() -> 복제본에 있던 변경된 값을 원본으로 보내준다.

export default function UseStateEx2() {
    let [num,setNum] = useState(0);
    return (
        <div>
            <p>현재 숫자: {num}</p>
            <button onClick={
                ()=>{
                
                setNum(num+5);
                console.log(num)
                }
            }>버튼 +5</button>

        </div>
    )
}
