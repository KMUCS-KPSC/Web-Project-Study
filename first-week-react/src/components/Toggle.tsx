import { useState } from 'react';

export default function Toggle(){
    const [now, toggle_listener] = useState(false)

    function change(){
        toggle_listener(!now)
    }
    return (
        <div>
            <h2 style={{textAlign: "center"}}>현재 [ {now ? "ON" : "OFF"} ] 상태입니다!</h2>
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                <button onClick={change}>Toggle</button>
            </div>
        </div>
    )
}