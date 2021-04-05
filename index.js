/*!
 * JavaScript Inputs Validator v1.0.0
 * Copyright(c) 2020-2021 REMOSI TECHNOLOGY OU.
 * MIT Licensed
 */

'use strict';

// RegExp Patterns
const patterns = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
    ipv4: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
    float: /^[-+]?[0-9]+\.[0-9]+$/,
    name: /^([a-z A-Z]{2,})$/
}

exports.isEmail = (string) => {
    let pattern = new RegExp(patterns.email);
    let result = pattern.test(string);
    return result;
}

exports.isUrl = (string) => {
    let pattern = new RegExp(patterns.url);
    let result = pattern.test(string);
    return result;
}

exports.isIPv4 = (string) => {
    let pattern = new RegExp(patterns.ipv4);
    let result = pattern.test(string);
    return result;
}

exports.isPhone = (string) => {
    let pattern = new RegExp(patterns.phone);
    let result = pattern.test(string);
    return result;
}

exports.isFloat = (string) => {
    let pattern = new RegExp(patterns.float);
    let result = pattern.test(string);
    return result;
}

exports.isName = (string) => {
    let pattern = new RegExp(patterns.string);
    let result = pattern.test(string);
    return result;
}