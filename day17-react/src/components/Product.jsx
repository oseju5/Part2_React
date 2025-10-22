// 원래는 부모가 자식에게 데이터를 전달하는 값임을 알기 위해
// 매개변수명을 props로 사용했음

export default function Product(props) {

    /*
    props === {title : "아메리카노"}
    props === {title : "카페라떼", price : 3000}

    props를 쓰면 코드가 조금 길어지니까, 짧게 변경하기 위해서 매개변수 자리에 {}중괄호를 달아서 가독성도 좋아지고 짧게 변수명만 쓸 수
    있게 해준다.
    
    하단에서 계속 props.title < 이렇게 props를 붙여서 부르는 게 귀찮으니까
    매개변수 자리에 {title,price} 중괄호를 달아 가볍게 불러오는 것

    리액트 화면을 보여주기(렌더링)
    - JSX문법 안에서 {}안에 들어간 걸 값으로 바꿔서 HTML에 출력한다.
    - true,false,null,undefined 화면에 아무것도 렌더링 되지 않는다.
    - 리액트가 무시한다(화면에 그리지 않는다.)

    */


    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>{props.decf}</p>
            {/* 조건부 렌더링, true일 때만 태그를 보여준다.
            삼항연산자보다 간결한 처리가 가능하다. (On/Off일 때) */}
            <p>{props.isHot && <span>앗뜨거</span>}</p>

        </div>
    )
}
