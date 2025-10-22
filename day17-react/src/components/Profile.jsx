// 컴포넌트의 맨 첫 글자는 대문자
// 탬플릿 단축키는 rfc


export default function Profile({name, dept, years}) {
    return (
        <div>
            <h3>개발자 이름: {name}</h3>
            <p>부서: {dept}</p>
            <p>입사: {years}년차</p>
        </div>
    )
}
