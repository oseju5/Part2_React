import React, { useState } from 'react'

export default function NameChange() {
    let [name,setName] = useState("세주")
    function chageName(){
        setName('자유연맹추구해파리단 단장');
    }

    return (
        <div>
            <h3>이름: {name}</h3>
            <button onClick={chageName}>이름 변경</button>
        </div>
    )
}
