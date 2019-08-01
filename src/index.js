import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
    const buttonText ="Click me!"
    return (
    <div>
        <label className="label" for="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={{ backgroundColor:'blue',color: 'white' }}>
        {buttonText}
        </button>
    </div>
    );
}


// Take react component and show it on the screen
ReactDOM.render(<App />,document.getElementById('root'));