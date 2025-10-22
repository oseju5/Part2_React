// Book.jsx

export default function Book({title,author}) {
    // 삼항연산자를 사용할 때는 있니/없니 값을 비교할 때 사용
    let resultCss = author ?
                    // 스타일
                    {color:"red",fontSize:"32px",fontWeight:"bold"}:
                    {color:"blue",fontWeight:"bold"};

    return (
    <div>
        <h3>책 제목:{title}</h3>
        { author ? <p style={resultCss}>저자:{author}</p> : 
                    <p style={resultCss}>미상!</p> }
    </div>
    )
}
