
type TextProps = {
    text: string;
}

export const Title = ({text}: TextProps) => {
    return (
        <h1 style={{textAlign: "center", paddingLeft: "300px"}}>{text}</h1>
    )
}

export const SubTitle = ({text}: TextProps) => {
    return (
        <h2 style={{textAlign: "center", paddingRight: "300px"}}>{text}</h2>
    )
}