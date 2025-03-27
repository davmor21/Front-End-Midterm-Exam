import {useState} from 'react'

function UserInfo(props){
    const [random, setRandom] = useState(Math.floor(Math.random() * 10));
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Profession: {props.job}</p>
            <p>Your lucky number is <b style={{color: "gold"}}>{random}</b></p>
            <button onClick={() => setRandom(Math.floor(Math.random() * 100))}>Generate New Lucky Number</button>
        </div>
    );
}
export default UserInfo