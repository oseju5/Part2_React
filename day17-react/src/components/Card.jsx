// 매개변수 공간에 {변수} 선언,
// App()에서 컴포넌트를 불러올 때 {변수}="값" 을 지정해주면
// 해당 값을 변수에 넣는다.

export default function Card({title}) {
    return (
        <div>
            <img src="" alt="" />
            <button>담기</button>
            <h4>{title}</h4>
        </div>
    )
}
