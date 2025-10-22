import { useState } from "react"

export default function DarkMode() {
    // boolean 타입으로 다크모드 구현하기
    let [isDark,setIsDark] = useState(true);
    function toggleTheme(){
        setIsDark(!isDark);
    }

    return (
        <div>
            <h2 style={{background:isDark?"#555":"#999"}}>{isDark ? "🌙 다크 모드" : "☀️ 라이트 모드"}</h2>
            <button onClick={toggleTheme}>모드</button>
        </div>
    )
}
