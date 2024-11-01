function App() {
    // TODO - Start: 기능을 구현하기 위한 소스코드를 여기에 작성해주세요. (단, TypeScript로 작성할 필요는 업습니다.)

    // End: 기능을 구현하기 위한 소스코드를 여기에 작성해주세요.

    return (
        <div>
            <h1 style={{textAlign: "center"}}>ReactJS + TS 과제 1주차</h1>

            <br/><br/><br/>

            {/* TODO - Start: 여기는 컴포넌트를 이용해서 구현하세요 */}
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                {/* Box 컴포넌트를 사용하세요 */}
            </div>
            {/* Title 컴포넌트를 사용하세요 */}
            {/* SubTitle 컴포넌트를 사용하세요 */}
            {/* End: 여기는 컴포넌트를 이용해서 구현하세요 */}

            <br/><br/><br/>

            {/* TODO - Start: 여기는 조건부 렌더링, useState 와 useEffect 를 이용해서 구현하세요 */}
            <h2 style={{textAlign: "center"}}>현재 ? 번 눌렸습니다.</h2>
            <p style={{textAlign: "center"}}>(5번 마다 아래 글과 알림이 나와요!)</p>
            <h3 style={{textAlign: "center"}}>5번 눌렸습니다!</h3>
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                <button>Click me!</button>
                <button>Reset</button>
            </div>
            {/* End: 여기는 useState 와 useEffect 를 이용해서 구현하세요. */}

            <br/><br/><br/>

            {/* TODO - Start: 여기는 useState 와 useEffect 를 이용해서 구현하세요 */}
            <h2 style={{textAlign: "center"}}>입력한 내용은 [ ? ] 입니다!</h2>
            <p style={{textAlign: "center"}}>(hi을 입력하면 hello으로 바뀌어요!)</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <input type="text"/>
            </div>
            {/* Start: 여기는 useState 와 useEffect 를 이용해서 구현하세요 */}

            <br/><br/><br/>

            {/* TODO -  Start: 여기는 조건부 렌더링을 활용하세요 */}
            <h2 style={{textAlign: "center"}}>현재 [ OFF ] 상태입니다!</h2>
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                <button>Toggle</button>
            </div>
            {/* End: 여기는 조건부 렌더링을 활용하세요 */}
        </div>
    )
}

export default App
