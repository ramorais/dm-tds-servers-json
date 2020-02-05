module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(1),o=r(2),i=r(3).homedir()+"\\.totvsls\\servers.json";let s="";const a=r(4);e.activate=function(t){var e;console.log('Congratulations, your extension "Local Servers" is now active!');var r=null!=(e=n.workspace.workspaceFolders)?e:null;null!==r&&r.length>0&&(s=r[0].uri.fsPath+"\\.vscode\\servers.json"),function(){if(a.existsSync(s)){n.window.showInformationMessage("Servers.json: Transferindo...");try{n.workspace.fs.copy(o.URI.file(s),o.URI.file(i),{overwrite:!0})}catch(t){}n.window.showInformationMessage("Servers.json: OK :-)")}}()},e.deactivate=function(){}},function(t,e){t.exports=require("vscode")},function(t,e,r){"use strict";r.r(e),r.d(e,"URI",(function(){return l}));var n,o,i,s=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});if("object"==typeof process)i="win32"===process.platform;else if("object"==typeof navigator){var a=navigator.userAgent;i=a.indexOf("Windows")>=0}var h=/^\w[\w\d+.-]*$/,u=/^\//,f=/^\/\//;var c="/",p=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,l=function(){function t(t,e,r,n,o,i){void 0===i&&(i=!1),"object"==typeof t?(this.scheme=t.scheme||"",this.authority=t.authority||"",this.path=t.path||"",this.query=t.query||"",this.fragment=t.fragment||""):(this.scheme=function(t,e){return t||e?t:"file"}(t,i),this.authority=e||"",this.path=function(t,e){switch(t){case"https":case"http":case"file":e?e[0]!==c&&(e=c+e):e=c}return e}(this.scheme,r||""),this.query=n||"",this.fragment=o||"",function(t,e){if(!t.scheme&&e)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'+t.authority+'", path: "'+t.path+'", query: "'+t.query+'", fragment: "'+t.fragment+'"}');if(t.scheme&&!h.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!u.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(f.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,i))}return t.isUri=function(e){return e instanceof t||!!e&&("string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"function"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString)},Object.defineProperty(t.prototype,"fsPath",{get:function(){return b(this)},enumerable:!0,configurable:!0}),t.prototype.with=function(t){if(!t)return this;var e=t.scheme,r=t.authority,n=t.path,o=t.query,i=t.fragment;return void 0===e?e=this.scheme:null===e&&(e=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===n?n=this.path:null===n&&(n=""),void 0===o?o=this.query:null===o&&(o=""),void 0===i?i=this.fragment:null===i&&(i=""),e===this.scheme&&r===this.authority&&n===this.path&&o===this.query&&i===this.fragment?this:new y(e,r,n,o,i)},t.parse=function(t,e){void 0===e&&(e=!1);var r=p.exec(t);return r?new y(r[2]||"",decodeURIComponent(r[4]||""),decodeURIComponent(r[5]||""),decodeURIComponent(r[7]||""),decodeURIComponent(r[9]||""),e):new y("","","","","")},t.file=function(t){var e="";if(i&&(t=t.replace(/\\/g,c)),t[0]===c&&t[1]===c){var r=t.indexOf(c,2);-1===r?(e=t.substring(2),t=c):(e=t.substring(2,r),t=t.substring(r)||c)}return new y("file",e,t,"","")},t.from=function(t){return new y(t.scheme,t.authority,t.path,t.query,t.fragment)},t.prototype.toString=function(t){return void 0===t&&(t=!1),w(this,t)},t.prototype.toJSON=function(){return this},t.revive=function(e){if(e){if(e instanceof t)return e;var r=new y(e);return r._formatted=e.external,r._fsPath=e._sep===d?e.fsPath:null,r}return e},t}(),d=i?1:void 0,y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._formatted=null,e._fsPath=null,e}return s(e,t),Object.defineProperty(e.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=b(this)),this._fsPath},enumerable:!0,configurable:!0}),e.prototype.toString=function(t){return void 0===t&&(t=!1),t?w(this,!0):(this._formatted||(this._formatted=w(this,!1)),this._formatted)},e.prototype.toJSON=function(){var t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=d),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t},e}(l),m=((o={})[58]="%3A",o[47]="%2F",o[63]="%3F",o[35]="%23",o[91]="%5B",o[93]="%5D",o[64]="%40",o[33]="%21",o[36]="%24",o[38]="%26",o[39]="%27",o[40]="%28",o[41]="%29",o[42]="%2A",o[43]="%2B",o[44]="%2C",o[59]="%3B",o[61]="%3D",o[32]="%20",o);function v(t,e){for(var r=void 0,n=-1,o=0;o<t.length;o++){var i=t.charCodeAt(o);if(i>=97&&i<=122||i>=65&&i<=90||i>=48&&i<=57||45===i||46===i||95===i||126===i||e&&47===i)-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),void 0!==r&&(r+=t.charAt(o));else{void 0===r&&(r=t.substr(0,o));var s=m[i];void 0!==s?(-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),r+=s):-1===n&&(n=o)}}return-1!==n&&(r+=encodeURIComponent(t.substring(n))),void 0!==r?r:t}function g(t){for(var e=void 0,r=0;r<t.length;r++){var n=t.charCodeAt(r);35===n||63===n?(void 0===e&&(e=t.substr(0,r)),e+=m[n]):void 0!==e&&(e+=t[r])}return void 0!==e?e:t}function b(t){var e;return e=t.authority&&t.path.length>1&&"file"===t.scheme?"//"+t.authority+t.path:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&t.path.charCodeAt(1)<=90||t.path.charCodeAt(1)>=97&&t.path.charCodeAt(1)<=122)&&58===t.path.charCodeAt(2)?t.path[1].toLowerCase()+t.path.substr(2):t.path,i&&(e=e.replace(/\//g,"\\")),e}function w(t,e){var r=e?g:v,n="",o=t.scheme,i=t.authority,s=t.path,a=t.query,h=t.fragment;if(o&&(n+=o,n+=":"),(i||"file"===o)&&(n+=c,n+=c),i){var u=i.indexOf("@");if(-1!==u){var f=i.substr(0,u);i=i.substr(u+1),-1===(u=f.indexOf(":"))?n+=r(f,!1):(n+=r(f.substr(0,u),!1),n+=":",n+=r(f.substr(u+1),!1)),n+="@"}-1===(u=(i=i.toLowerCase()).indexOf(":"))?n+=r(i,!1):(n+=r(i.substr(0,u),!1),n+=i.substr(u))}if(s){if(s.length>=3&&47===s.charCodeAt(0)&&58===s.charCodeAt(2))(p=s.charCodeAt(1))>=65&&p<=90&&(s="/"+String.fromCharCode(p+32)+":"+s.substr(3));else if(s.length>=2&&58===s.charCodeAt(1)){var p;(p=s.charCodeAt(0))>=65&&p<=90&&(s=String.fromCharCode(p+32)+":"+s.substr(2))}n+=r(s,!0)}return a&&(n+="?",n+=r(a,!1)),h&&(n+="#",n+=e?h:v(h,!1)),n}},function(t,e){t.exports=require("os")},function(t,e){t.exports=require("fs")}]);
//# sourceMappingURL=extension.js.map