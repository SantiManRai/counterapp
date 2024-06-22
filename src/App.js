import React, {useState} from 'react';
import './App.css';

const App=()=> 
    {
    //Initializing number as 0 for passing.
    const [number, setNumber] = useState(0);
    return(

      <div>
                        <h1>{number}</h1>
         <button onClick={()=>setNumber(number + 1) } className='button'>ADD</button>
         <button onClick={()=>setNumber(number - 1) } className='button'>SUB</button>
         <button onClick={()=>setNumber(number - number) } className='button'>RESET</button>
                        <br></br> <br></br>
         <button onClick={()=>setNumber(number * number) } className='button'>SQU</button>
         <button onClick={()=>setNumber(number * number * number) } className='button'>CUB</button>
         <button onClick={()=>setNumber(number / number) } className='button'>DIV</button>

      </div>
   
    );
    }

export default App;
