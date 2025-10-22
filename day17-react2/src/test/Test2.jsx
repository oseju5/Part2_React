// 2. 책 제목과 저자 출력하기
// 책 정보를 객체로 저장하고 구조분해로 제목과 저자를 각각 출력한다.

export default function Test2({book}) {
    return (
        <>
            <p>제목: {book.title}</p>
            <p>저자: {book.author}</p>
        </>
    )
}
