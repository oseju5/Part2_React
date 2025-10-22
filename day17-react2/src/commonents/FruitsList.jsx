// 배열 타입의 props


export default function FruitsList({items}) {
    return (
        <div>
            <h3>{items}</h3>
            <p>사과: {items[0]}</p>
            <p>바나나: {items[1]}</p>
            <p>포도: {items[2]}</p>

        </div>
    )
}
