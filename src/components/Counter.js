import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(2);

   function handleNumberChange(e){
        setCount(e.target.value);       
    }
    
    return(
        <div>
            <h1>Test</h1>
            <p>Le compteur est à : {count}</p>
            
            <button onClick={() => setCount(count+1)}>
                +1
            </button>
            <button onClick={() => setCount(count-1)}>
                -1
            </button><br />
            <input type="text" value={count} onChange={handleNumberChange} placeholder="Ecris ton numéro !" />
        </div>
    );

}

export default Counter