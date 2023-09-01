import React, { useState } from 'react'; //add state to functional components
import './index.css';

function App() { //call the function
  const [value, setValue] = useState(''); //state variable named value , function named setValue 

  return ( //define the structure of the calculators interface
    <div className="container"> 
      <div className="calculator">
        <form action=""> {/* wraps all the input buttons */}
          <div className='display'> {/*calculator value displayed */}
            <input type= "text" value={value}/> {/* current value */}
            </div>
          <div>
            <input type="button" value="AC" onClick={e => setValue('')}/> {/* calls the setValue func */}
            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/> {/* remove the last character */}
            <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))}/> {/* evaluate the current value */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App; 