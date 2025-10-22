// 2. 책 제목과 저자 출력하기
// 책 정보를 객체로 저장하고 구조분해로 제목과 저자를 각각 출력한다.

import "./Test2.css"

export default function Test2({name,author,price}) {

    // 유지보수성을 위해 on/off일 경우 변수에 클래스명을 담아 사용하기도~~...
    let textClass = price ? "price" : "no-price";
    return (
        <>
            <p>제목: {name}</p>
            <p>저자: {author}</p>
            {price ? <p className={textClass}>가격: {price}원</p> :
                        <p className={textClass}>문의요망!!!</p>}

        </>
    )
}



/*
export default function Test2({name,author,price}) {
    return (
        <>
            <p>제목: {name}</p>
            <p>저자: {author}</p>
            {price ? <p>{price}원</p> : <p class="noPrice">문의 요망</p>}
        </>
    )
}
     */
