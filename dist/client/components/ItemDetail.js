var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useState, useEffect } from 'react';
import '../styles/ItemDetail.scss';
var ItemDetail = function (_a) {
    var itemId = _a.itemId;
    var _b = useState(null), item = _b[0], setItem = _b[1];
    useEffect(function () {
        // Mock fetch call to the backend to get the details of a specific item
        // In a real application, this would be a call to your backend API
        var mockFetchItemDetail = function () { return __awaiter(void 0, void 0, void 0, function () {
            var mockData;
            return __generator(this, function (_a) {
                mockData = {
                    id: 1,
                    name: 'Plastic Bottle',
                    category: 'Plastic',
                    description: 'A common household item used for storing liquids.',
                    recyclingProtocol: 'Rinse and clean the bottle. Remove the cap and place it in the recycling bin.'
                };
                // For simplicity, we are returning the same mockData for any itemId
                setItem(mockData);
                return [2 /*return*/];
            });
        }); };
        mockFetchItemDetail();
    }, [itemId]);
    return (React.createElement("div", { className: "item-detail" }, item && (React.createElement(React.Fragment, null,
        React.createElement("h2", null, item.name),
        React.createElement("p", null,
            React.createElement("strong", null, "Category:"),
            " ",
            item.category),
        React.createElement("p", null,
            React.createElement("strong", null, "Description:"),
            " ",
            item.description),
        React.createElement("p", null,
            React.createElement("strong", null, "Recycling Protocol:"),
            " ",
            item.recyclingProtocol)))));
};
export default ItemDetail;
