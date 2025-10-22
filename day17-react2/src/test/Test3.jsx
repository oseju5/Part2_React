// 5. 가격이 있으면 원 표시, 없으면 생략
// price가 있으면 price원, 없으면 공백

export default function Test3({items}) {
    return (
        <>
        <p>상품명: {items.name}</p>
        {items.price && <p>가격: {items.price}</p>}
        </>

    )
}
