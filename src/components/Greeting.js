import React, { useState } from 'react'

function Greeting() {
    const [changedState, setChangeState] = useState(false);

    const handlerChangeText = () => {
        setChangeState(true);
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {changedState && <p>Changed!</p>}
            {!changedState && <p>Its good to see you!</p>}
            
            <button onClick={handlerChangeText}>Click Me</button>
        </div>
    )
}

export default Greeting
