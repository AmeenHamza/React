import { useState } from "react"

function Practice() {

    const [increment, setIncrement] = useState(0);

    const Increase = ()=> {
        setIncrement(increment + 4);
    }

    const Decrease = ()=> {
        setIncrement(increment - 1);
    }

    return (
        <>
            <div>
                <h1>Increase = {increment}</h1>

                {
                    increment > 0 && increment < 100 ?
                    <><button type="button" onClick={Increase}>Increment</button>
                    <button type="button" onClick={Decrease}>Decrement</button></> 
                    :
                    increment >= 100 ? 
                    <button type="button" onClick={Decrease}>Decrement</button>
                    :
                    <button type="button" onClick={Increase}>Increment</button>
                }
            </div>
        </>
    )
}

export default Practice;