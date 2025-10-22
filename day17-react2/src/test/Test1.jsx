// 1. 상품명과 가격 출력하기
// 객체 안에 name과 price 정보를 만들고 { } 구조분해로 화면에 출력한다.


export default function Test1({product}) {
    return (
        <>
            <h3>상품명: {product.name}</h3>
            <p>가격: {product.price}</p>
        </>

    )
}
