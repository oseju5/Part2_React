// - 자바스크립트 문법을 이용해서 html 태그 작성하기
// 기본 형태 단축키 rfc

import React from 'react'

export default function Board() {
  return (
    <div>
        <h3>게시글 제목</h3>
        <p>게시글 내용</p>
        <ul>
            <li>댓글들</li>
            <li>댓글들</li>
        </ul>
    </div>
  )
}
