var React = require('react');
var ReactDOM = require('react-dom');
var Show = require('./show')
var shows = require('./shows');


ReactDOM.render(
    <Show shows={shows} />,
    document.getElementById('root')
);
