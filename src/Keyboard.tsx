// import style from './Keyboard.modules.css?inline'
import './Keyboard.modules.css'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

type KeyboardProps={
    disabled?:boolean
    activeLetters: string[] ,inactiveLetters:string[],addGuessedLetter:(letter:string)=>void
}

export function Keyboard({
    disabled=false,
    activeLetters,
    inactiveLetters,
    addGuessedLetter
    }:KeyboardProps) {
    return (
    <div 
        style={{
            display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(50px,1fr))",gap:".5rem",}}
        >
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return (
            <button 
            onClick={
                ()=>addGuessedLetter(key)
            }
            // ${isActive? style.active:""} 
            // ${isInactive? style.inactive:""}
            className={
                `${'btn'}`
                } 
                disabled={isInactive||isActive||disabled}
            key={key}>
                {key}
            </button>
            )
        })}
    </div>)
}