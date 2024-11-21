import { useState } from 'react';

export default function Count_Click(){
    const [num, numstate] = useState<number>(0);
    const [view, is_view] = useState<boolean>(false);

    function up_num(){
        if ((num+1)%5 == 0){
            alert("5번 눌렀습니다!");
            is_view(true)
        }
        else {
            is_view(false)
        }
        numstate(num+1);
    }
    
    function reset(){
        numstate(0);
        is_view(false);
    }

    return(
        <div>
            <h2 style={{textAlign: "center"}}>현재 {num} 번 눌렸습니다.</h2>
            <p style={{textAlign: "center"}}>(5번 마다 아래 글과 알림이 나와요!)</p>
            <h3 style={{textAlign: "center", display : view ? "grid" : "none"}}>5번 눌렸습니다!</h3>
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                <button onClick = {up_num}>Click_me!</button>
                <button onClick = {reset}>Reset</button>
            </div>
        </div>
    )
}

