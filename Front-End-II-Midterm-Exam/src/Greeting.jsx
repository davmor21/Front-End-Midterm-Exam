import DigitalClock from './DigitalClock';
import {useState} from 'react'

function Greeting(props) {
    const myGreetings = ['Hello', 'What\'s up', 'Hey', 'Yo', 'Hola'];
    const [num, setNum] = useState(0);
    return (
      <>
        <h1>{myGreetings[num % myGreetings.length]}, {props.name}!</h1>
        <DigitalClock />
        <button onClick={() => setNum(num + 1)}>Change Greeting</button>
      </>
        

      
    )
  }

  export default Greeting