import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';
import {handleModifyVotes} from "../shared/utility";

let state = undefined;

fetch("http://localhost:7777/data")
    .then(data => data.json())
    .then(json => {
        state = json;
        render();
    })

function handleVote(answerId, increment) {
    state.answers = handleModifyVotes(state.answers, answerId, increment);

    fetch(`vote/${answerId}/?increment=${increment}`);

    render();
}

function render() {
    ReactDOM.hydrate(<App {...state} handleModifyVotes={handleVote} />, document.querySelector('#Container'))
}
