// 객체 형태의 props

export default function FruitsList2({items}) {
    return (
        <div>

            <h3>과일명: {items.name}</h3>
            {/* 논리 연산자 && 를 이용한 조건부 렌더링,
            가격의 값이 있을 경우에만 p태그를 보여주고, 아니면 안 보여주기. */}
            {items.price && <p>과일 가격: {items.price}</p>}
        </div>
    )
}
