// 파일명 첫 글자는 반드시 대문자로 작성
//  - 자바스크립트 안에서 html 태그 사용하기

// 1. 함수 생성 
//  - 기본 형태 단축키 rfc

import React from 'react'

export default function Test2() {
    return (
        // 2. 내가 원하는 태그들을 Test2 라는 이름으로 묶는다.
        <div>
            <h3>Front-End</h3>
            <p>React,Html,Css</p>
        </div>
    )
}

// 3. App 화면에 내가 만든 태그를 import