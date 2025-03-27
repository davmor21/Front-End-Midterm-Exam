import {Component } from 'react'

function UserInfo(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Profession: {props.job}</p>
            <button onClick={props.handleClick}>Show Alert</button>
        </div>
    );
}
export default UserInfo