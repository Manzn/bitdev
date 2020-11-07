"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {

    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }

    return cooked;

};

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

exports.buttonStyle = void 0;

var css_1 = __importDefault(require("styled-jsx/css"));

exports.buttonStyle = css_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .lto-button {\n    border: none;\n    padding: 5px 20px 5px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    min-height: 40px;\n\n    //noinspection CssNoGenericFontName\n    font-family: Metropolis;\n    font-size: 14px;\n    font-weight: 600;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    transition: all 0.3s;\n\n    &:focus {\n      outline: 0;\n    }\n\n    &:hover {\n      opacity: 0.8;\n      transition: all 0.3s;\n    }\n\n    &.lto-disabled {\n      filter: grayscale(50%);\n      color: rgb(100, 100, 100);\n      cursor: not-allowed;\n    }\n  }\n"], ["\n  .lto-button {\n    border: none;\n    padding: 5px 20px 5px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    min-height: 40px;\n\n    //noinspection CssNoGenericFontName\n    font-family: Metropolis;\n    font-size: 14px;\n    font-weight: 600;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    transition: all 0.3s;\n\n    &:focus {\n      outline: 0;\n    }\n\n    &:hover {\n      opacity: 0.8;\n      transition: all 0.3s;\n    }\n\n    &.lto-disabled {\n      filter: grayscale(50%);\n      color: rgb(100, 100, 100);\n      cursor: not-allowed;\n    }\n  }\n"])));

var templateObject_1;

