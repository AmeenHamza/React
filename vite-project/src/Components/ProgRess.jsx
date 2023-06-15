import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../App.css";

function ProgRess() {
  const [value, setValue] = useState(0); // This is called Hooks 

  const add = () => {
    setValue(value + 10);
  }
  const del = () => {
    setValue(value - 10);
  }

  return (
    <>
      <div className='price'>
        <ProgressBar now={value} label={`${value}%`} visuallyHidden />

        {
          value > 0 && value < 100
            ?
            <>
              <button className='btn btn-success mx-2 my-5 p-3' onClick={add}>Add</button>
              <button className='btn btn-success mx-2 my-2 p-3' onClick={del}>Del</button>
            </>
            : value === 100 ? 
                <button className='btn btn-success mx-2 my-2 p-3' onClick={del}>Del</button>
              
              : 
                <button className='btn btn-success my-3 p-3' onClick={add}>Increase</button>
              
        }

      </div>


    </>
  )
}

export default ProgRess;