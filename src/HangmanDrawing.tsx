const HEAD = (
    <div style={{
        width:"60px",
        height:"60px",
        borderRadius:"100%",
        border:"10px solid black",
        position:"absolute",
        top:"50px",
        right:"-25px"
    }}/>
)

const BODY = (
    <div style={{
        width:"10px",
        height:"100px",
        background:"black",
        position:"absolute",
        top:"110px",
        right:"0"
    }}/>
)

const LEFTARM = (
    <div style={{
        width:"10px",
        height:"80px",
        background:"black",
        position:"absolute",
        top:"120px",
        transform:"rotate(45deg)",
        right:"30px"
    }}/>
)

const RIGHTARM = (
    <div style={{
        width:"10px",
        height:"80px",
        background:"black",
        position:"absolute",
        top:"120px",
        transform:"rotate(-45deg)",
        right:"-30px"
    }}/>
)

const LEFTLEG = (
    <div style={{
        width:"10px",
        height:"80px",
        background:"black",
        position:"absolute",
        top:"195px",
        transform:"rotate(45deg)",
        right:"30px"
    }}/>
)

const RIGHTLEG = (
    <div style={{
        width:"10px",
        height:"80px",
        background:"black",
        position:"absolute",
        top:"195px",
        transform:"rotate(-45deg)",
        right:"-30px"
    }}/>
)

const BODY_PARTS = [HEAD,BODY,LEFTARM,RIGHTARM,LEFTLEG,RIGHTLEG]

type HangmanDrawingProps = {
    numberOfGuesses:number
}

export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {
    return (
    <div style={{position:"relative"}}>
        {BODY_PARTS.slice(0,numberOfGuesses)}
        <div style={{height:"50px",width:"10px",background:"black",marginLeft:"310px",position:"absolute"}}/>
        
        <div style={{height:"10px",width:"200px",background:"black",marginLeft:"120px"}}/>

        <div style={{height:"350px",width:"10px",background:"black",marginLeft:"120px"}}/>

        <div style={{height:"10px",width:"250px",background:"black"}}/>
    </div>
    )
}