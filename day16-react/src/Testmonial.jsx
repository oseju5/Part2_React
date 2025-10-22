// 기본형 단축키 rfc

import React from 'react'
// 경로를 입력할 때는 문자열로 작성
import "./Testmonial.css";

export default function Testmonial() {
    return (
        <div>
            {/* 리액트에서 이미지 가져오는 방법
               1. 이미지 주소 복사 (절대 경로) */}
            <img src="https://pbs.twimg.com/media/FVQXinVaUAA2Lbg.png" alt="개발자 사진" />
        </div>
    )
}

// 리액트는 함수를 부르면 화면이 생기는 프로그램
// 1. App()함수가 동작한다.
// 2. return() 안의 HTML을 읽는다. (화면에 표시할 내용 준비)
// 3. Testmonial 태그를 만나면 해당 함수를 실행한다.
// 4. Testmonial 안의 return() 함수를 실행하낟.
// 5. App()으로 가지고 와서 화면에 보여준다.