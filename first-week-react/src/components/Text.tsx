import { useState } from 'react';

export default function Text_input(){
    const [message, message_listener] = useState<string>('');

    //React.ChangeEvent<HTMLInputElement> React에서 이벤트 객체의 타입을 지정할 때 사용하는 타입이다. 
    const get_value = (event:React.ChangeEvent<HTMLInputElement>) => {
        message_listener(event.target.value);
    }
    if (message == "hi"){
        message_listener("hello");
    }

    return (
        <div>
            <h2 style={{textAlign: "center"}}>입력한 내용은 [ {message} ] 입니다!</h2>
            <p style={{textAlign: "center"}}>(hi을 입력하면 hello으로 바뀌어요!)</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <input type="text" onChange={get_value} value={message}/>
            </div>
        </div>
    )
}