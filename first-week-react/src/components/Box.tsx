type BoxProps = {
    title: string;
    content: string;
}

const Box = ({title, content}: BoxProps) => {
    return (
        <div style={{border: "1px solid black", width: "200px", height: "100px"}}>
            <h2 style={{textAlign: "center"}}>{title}</h2>
            <p style={{textAlign: "center"}}>{content}</p>
        </div>
    )
}

export default Box;