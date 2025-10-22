// 중괄호 내부에 사칙연산 기호를 사용하여 계산식을 만들 수 있음

export default function Person({name,age,gender}) {
    // 넘어온 변수의 타입값을 구분
    // 콘솔에서 log, alert()를 했을 때 두 번씩 실행되는 이유는
    // 개발자 실수를 방지 하기 위해 검사하는 StrictMode 가 실행되었기 때문이다.
    //  - main.jsx에서 확인할 수 있음
    // npm run dev -- 개발모드 1번 실행
    // StrictMode -- 개발자 실수하지 않게 1번 더 실행
    console.log(typeof name);
    console.log(typeof age);
    console.log(gender);

    return (
        <div>
            <h3>이름: {name}</h3>
            <p>현재 나이: {age}</p>
            <p>내년 나이: {age+1}</p>
            <p>성별: {gender ? "여성" : "남성"}</p>
        </div>
    )
}
