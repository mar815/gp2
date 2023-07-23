import React from 'react';
import HomePage from './components/HomePage';
import ItemList from './components/ItemList';
var App = function () {
    return (React.createElement("div", { className: "container" },
        React.createElement(HomePage, null),
        React.createElement(ItemList, null)));
};
export default App;
