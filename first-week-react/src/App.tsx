//import React from 'react'
import Box from './components/Box.tsx';
import {Title} from './components/Title.tsx';
import {SubTitle}  from './components/Title.tsx';
import Count_Click from './components/Click_Button.tsx';
import Text_input from './components/Text.tsx';
import Toggle from './components/Toggle.tsx';

function App() {
    // TODO - Start: 기능을 구현하기 위한 소스코드를 여기에 작성해주세요. (단, TypeScript로 작성할 필요는 업습니다.)
    // End: 기능을 구현하기 위한 소스코드를 여기에 작성해주세요.
    
    //const [value, setValue] = React.useState("Click me!")
    return (
        <div>
            <h1 style={{textAlign: "center"}}>ReactJS + TS 과제 1주차</h1>

            <br/><br/><br/>

            {/* TODO - Start: 여기는 컴포넌트를 이용해서 구현하세요 */}
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                {/* Box 컴포넌트를 사용하세요 */}
                <Box title = "이건 뭔가요?" content='Box 컴포넌트'/>
            </div>
            {/* Title 컴포넌트를 사용하세요 */}
            <Title text="Title 컴포넌트"/>
            {/* SubTitle 컴포넌트를 사용하세요 */}
            <SubTitle text="SubTitle 컴포넌트"/>
            {/* End: 여기는 컴포넌트를 이용해서 구현하세요 */}

            <br/><br/><br/>

            {/* TODO - Start: 여기는 조건부 렌더링, useState 와 useEffect 를 이용해서 구현하세요 */}
            <Count_Click />
            {/* End: 여기는 useState 와 useEffect 를 이용해서 구현하세요. */}

            <br/><br/><br/>

            {/* TODO - Start: 여기는 useState 와 useEffect 를 이용해서 구현하세요 */}
            <Text_input />
            {/* Start: 여기는 useState 와 useEffect 를 이용해서 구현하세요 */}

            <br/><br/><br/>

            {/* TODO -  Start: 여기는 조건부 렌더링을 활용하세요 */}
            <Toggle />
            {/* End: 여기는 조건부 렌더링을 활용하세요 */}
        </div>
    )
}

export default App
