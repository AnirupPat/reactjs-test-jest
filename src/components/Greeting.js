import React, { useState } from 'react'
import Output from './Output';

function Greeting() {
    const [changedState, setChangeState] = useState(false);

    const handlerChangeText = () => {
        setChangeState(true);
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {changedState && <Output>Changed!</Output>}
            {!changedState && <Output>Its good to see you!</Output>}
            
            <button onClick={handlerChangeText}>Click Me</button>
        </div>
    )
}

export default Greeting
