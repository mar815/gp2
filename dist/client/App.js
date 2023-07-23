import React from 'react';
import HomePage from './components/HomePage';
import ItemList from './components/ItemList';
import './styles/App.scss';
var App = function () {
    return (React.createElement("div", { className: "container" },
        React.createElement(HomePage, null),
        React.createElement(ItemList, null)));
};
export default App;
