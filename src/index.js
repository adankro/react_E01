import React from 'react';
import ReactDOM from 'react-dom';
const label_1 ="First Name:"
var button ={'text':'submmit'};

function getTime() {
    return (new Date()).toLocaleTimeString()
}

//Create a react component
const App = () => {
    
    return (
    <div>
        <label className="label" htmlFor="name">{label_1}</label>
        <input id="name" type="text" />
        <button  style={{ backgroundColor:'blue',color: 'white' }}>
        {button.text}
        </button>
        <br/>
        <label >{getTime()}</label>
    </div>
    );
}


// Take react component and show it on the screen
ReactDOM.render(<App />,document.getElementById('root'));