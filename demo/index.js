"use strict"
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

const loggy = function (message, type) {

  type = (typeof type) !== 'undefined' ? type : 0;

  const type_head = ["E", "W", "I", "S"];
  if(typeof type === 'string' && type_head.indexOf(type.toUpperCase())!=-1)
    type = type_head.indexOf(type.toUpperCase());
  else if([0,1,2,3].indexOf(+type)==-1){
    type = 0;
    console.log("invalid type except in e, w, i, s, 0, 1, 2, 3");
  }

  const colors = [
    "#cc0000", // error   - type 0
    "#ff8800", // warning - type 1
    "#2a9fd6", // info    - type 2
    "#77b300"  // success - type 3
  ];
  
  const type_str = ["ERROR  ","WARNING","INFO   ","SUCCESS"];
  
  const str = [
    "%c " + type_str[type] + " %c" + message + " ",
    "margin:1px 0;padding:1px;background:#060606;color:" + colors[type],
    "margin:1px 0;padding:1px;background:#060606;color:#ffffff"
  ];
  
  console.log.apply(console,str);
}