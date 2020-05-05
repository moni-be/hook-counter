import React, { useState } from 'react';

function Counter(){
    const [count, SetCount] = useState(0);

    return(
        <div>
            <h1>Test</h1>
            <p>Le compteur est à : {count}</p>
            <input />
            <button onClick={() => SetCount(count +1)}>
                +1
            </button>
            <button onClick={() => SetCount(count-1)}>
                -1
            </button>
        </div>
    );

}

export default Counter