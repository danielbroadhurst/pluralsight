import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return <div>
        <p>Hello</p>
    </div>
}

ReactDom.render(< App />, document.querySelector('#Container'))
