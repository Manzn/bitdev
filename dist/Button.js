"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {

    if (k2 === undefined) k2 = k;

    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });

}) : (function(o, m, k, k2) {

    if (k2 === undefined) k2 = k;

    o[k2] = m[k];

}));

var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {

    Object.defineProperty(o, "default", { enumerable: true, value: v });

}) : function(o, v) {

    o["default"] = v;

});

var __importStar = (this && this.__importStar) || function (mod) {

    if (mod && mod.__esModule) return mod;

    var result = {};

    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

    __setModuleDefault(result, mod);

    return result;

};

Object.defineProperty(exports, "__esModule", { value: true });

var react_1 = __importStar(require("react"));

function Button(props) {

    return (react_1.default.createElement(react_1.Fragment, null,

        react_1.default.createElement("button", { className: 'lto-button', onClick: props.onClick, style: props.style, autoFocus: props.autoFocus || false }, props.children),

        react_1.default.createElement("style", null, "\n            .lto-button {\n              border: none;\n              padding: 5px 20px 5px 20px;\n              border-radius: 5px;\n              cursor: pointer;\n              min-height: 40px;\n          \n              //noinspection CssNoGenericFontName\n              font-family: Metropolis;\n              font-size: 14px;\n              font-weight: 600;\n              font-stretch: normal;\n              font-style: normal;\n              line-height: 1.71;\n          \n              display: flex;\n              justify-content: center;\n              align-items: center;\n          \n              transition: all 0.3s;\n          \n              &:focus {\n                outline: 0;\n              }\n          \n              &:hover {\n                opacity: 0.8;\n                transition: all 0.3s;\n              }\n          \n              &.lto-disabled {\n                filter: grayscale(50%);\n                color: rgb(100, 100, 100);\n                cursor: not-allowed;\n              }\n            }\n            button {\n                background-color: #00ffae;\n                color: #1c1e24;\n            }\n        ")));

}

exports.default = Button;

