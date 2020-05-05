import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState();

   function handleNumberChange(e){
        setCount(parseInt(e.target.value));       
    }
    
    return(
        <div>
            <h1>Test</h1>
            <p>Le compteur que tu as choisi est : {count}</p>
            
            <button onClick={() => setCount(count+1)}>
                +1
            </button>
            <button onClick={() => setCount(count-1)}>
                -1
            </button><br />
            <input type="number" value={count} onChange={handleNumberChange} placeholder="Ecris ton numéro !" />
        </div>
    );

}

export default Counter