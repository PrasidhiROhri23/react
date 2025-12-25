import React,{useState} from 'react'
function Calculator(){

    const [display, setdisplay] = useState("");

    let displayNumber=(event)=>{
        setdisplay(prevDisplay=>prevDisplay+event);
    }
    let reset=()=>{
        setdisplay("");
    }
    let backSpace=()=>{
        setdisplay(prevDisplay=>prevDisplay.substring(0,prevDisplay.length-1))
    }
    let evaluate=(event)=>{
       if("+-*/".includes(display[display.length-1])){
        setdisplay("")
       }
       else{
        const format = display.replace(/x/g,"*").replace(/÷/g,"/")
        setdisplay(eval(format).toString())
       }
    }


    return(
        <>
        <div className="calculator">
            <div className="box1">
                <input className="input-box" value={display} placeholder="Enter numbers here" readOnly></input>
                <div className="controls1">
                    <button onClick={()=>displayNumber("1")}>1</button>
                    <button onClick={()=>displayNumber("2")}>2</button>
                    <button onClick={()=>displayNumber("3")}>3</button>
                    <button onClick={reset} className='reset'>AC</button>
                    <button onClick={backSpace} className='del'>DEL</button>

                </div>
                <div className="controls2">
                    <button onClick={()=>displayNumber("4")}>4</button>
                    <button onClick={()=>displayNumber("5")}>5</button>
                    <button onClick={()=>displayNumber("6")}>6</button>
                    <button onClick={()=>displayNumber("+")} className='add'>+</button>
                    <button onClick={()=>displayNumber("-")} className='subtract'>-</button>
                    
                </div>
                <div className="controls3">
                    <button onClick={()=>displayNumber("7")}>7</button>
                    <button onClick={()=>displayNumber("8")}>8</button>
                    <button onClick={()=>displayNumber("9")}>9</button>
                    <button onClick={()=>displayNumber("x")} className='multiply'>x</button>
                    <button onClick={()=>displayNumber("÷")} className='divide'>÷</button>
                    
                </div>
                <div className="zero">
                    <button onClick={()=>displayNumber("0")} className="last">0</button>
                    <button onClick={()=>evaluate()} className='equals'>=</button>
                </div>
            </div>
        </div>
        </>
    );
}
export default Calculator;