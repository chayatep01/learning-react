'use strict';

console.log("App is running");
//live-server public
//babel src/app.js --out-fli=public/scripts/app.js --presets=env,react --watch

var app = {
    title: 'Indecision App',
    subtitle: 'Let computer tell you !',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    console.log('form submitted');
    console.log(option);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
        render();
    }
};
var removeAll = function removeAll() {
    app.options = [];
    render();
};

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            ' ',
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here is an option !' : 'No option'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: makeDecision },
            ' What should i do ?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'remove'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option '
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
