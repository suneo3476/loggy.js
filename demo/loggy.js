(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/**
 * Loggy - just log prettier
 * 
 * @param message - the message to log
 * @param type - default is 'error' - (0-3: Error, Warning, Info, Success)
 * @author https://github.com/GabrielWanzek/loggy.js
 * Colors by http://bootswatch.com/cyborg/ (THOMAS PARK - http://thomaspark.me/)
 */

/*
	input => e, w, i, s in lower & upper case or 0 ~ 3
*/

var loggy = function loggy(message, type) {

  type = typeof type !== 'undefined' ? type : 0;

  var type_head = ["E", "W", "I", "S"];
  if (typeof type === 'string' && type_head.indexOf(type.toUpperCase()) != -1) type = type_head.indexOf(type.toUpperCase());else if ([0, 1, 2, 3].indexOf(+type) == -1) {
    type = 0;
    console.log("invalid type except in e, w, i, s, 0, 1, 2, 3");
  }

  var colors = ["#ec3090", // error   - type 0
  "#ef8800", // warning - type 1
  "#5acfd6", // info    - type 2
  "#77e300" // success - type 3
  ];

  var borders = ["#bc0060", // error   - type 0
  "#cf5800", // warning - type 1
  "#2a9fa6", // info    - type 2
  "#47c300" // success - type 3
  ];

  var type_str = ["ERROR  ", "WARNING", "INFO   ", "SUCCESS"];

  var str = ["%c " + type_str[type] + " %c" + message + " ", "border:1px solid " + borders[type] + ";margin:1px 0;padding:1px;background:#060606;color:" + colors[type], "border:1px solid " + borders[type] + ";margin:1px 0;padding:1px;background:#060606;color:#ffffff"];

  console.log.apply(console, str);
};

module.exports = loggy;

/*test code*/
loggy("error test!", 0);
loggy("warning test!", "w");
loggy("info test!", "I");
loggy("success test!", "3");
loggy("invalit type test!", 5);

},{}]},{},[1]);
