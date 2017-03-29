!function(b){"use strict";function d(){return Object.create(null)}function e(a){window.console.timeStamp&&window.console.timeStamp(a)}function f(a,b){return{configurable:(4&b)>0,enumerable:(2&b)>0,writable:(1&b)>0,value:a}}var c=Hyphenopoly;!function(){var b=Object.create(null,{timeout:f(3e3,2),defaultLanguage:f("en",2),dontHyphenateClass:f("donthyphenate",2),dontHyphenate:f(function(){var a=d(),b="video,audio,script,code,pre,img,br,samp,kbd,var,abbr,acronym,sub,sup,button,option,label,textarea,input,math,svg,style";return b.split(",").forEach(function(b){a[b]=!0}),a}(),2),safeCopy:f(!0,2),normalize:f(!1,2),onHyphenopolyStart:f(function(){e("Hyphenopoly start!")},2),onHyphenationDone:f(function(){e("Hyphenation done!")},2),onHyphenationFailed:f(function(a){window.console.error("Hyphenopoly.js error",a)},2)}),g=Object.create(b),h=Object.create(null,{minWordLength:f(6,2),leftmin:f(0,2),leftminPerLang:f(0,2),rightmin:f(0,2),rightminPerLang:f(0,2),hyphen:f(String.fromCharCode(173),2),orphanControl:f(1,2),compound:f("hyphen",2),onBeforeWordHyphenation:f(function(a){return a},2),onAfterWordHyphenation:f(function(a){return a},2),onBeforeElementHyphenation:f(function(a,b){return{element:a,lang:b}},2),onAfterElementHyphenation:f(function(a,b){return{element:a,lang:b}},2)});Object.keys(c.setup).forEach(function(a){if("classnames"===a){var b=Object.keys(c.setup.classnames);Object.defineProperty(g,"classNames",f(b,2)),b.forEach(function(a){var b={};Object.keys(c.setup.classnames[a]).forEach(function(d){b[d]=f(c.setup.classnames[a][d],2)}),Object.defineProperty(g,a,f(Object.create(h,b),2))})}else Object.defineProperty(g,a,f(c.setup[a],3))}),c.c=g}(),function(b){function j(a,b){var d,c=0,e=g[b].hyphen;for(".\\+*?[^]$(){}=!<>|:-".indexOf(g[b].hyphen)!==-1&&(e="\\"+e),d=a.childNodes[c];d;)3===d.nodeType?d.data=d.data.replace(new RegExp(e,"g"),""):1===d.nodeType&&j(d,b),c+=1,d=a.childNodes[c]}function n(){function c(c){b[c]||(a.push(c),b[c]=a.length-1)}var a=[],b=d(),e=d();return e.int2code=a,e.code2int=b,e.add=c,Object.freeze(e)}function o(a){function i(a){e[f[1]]=a,f[2]=f[1],f[1]+=1}function j(){f[1]+=1}function k(){var a=f[0];return e[f[2]+1]=255,f[0]=f[2]+2,f[1]=f[0],a}function l(a,c){for(var e=0,f=0,l=0,m=0,n=0,o=!1;e<c.length;)f=c.charCodeAt(e),(e+1)%a?f<=57&&f>=49?(i(f),o=!0):(o||j(),o=!1,n===-1&&(n=b+h,b=n,g[m+(l<<1)]=n),l=d[f],m=n,n=g[m+(l<<1)],n||(g[m+(l<<1)]=-1,n=-1)):(f<=57&&f>=49?(i(f),g[m+(l<<1)+1]=k()):(o||j(),j(),n===-1&&(n=b+h,b=n,g[m+(l<<1)]=n),l=d[f],m=n,g[m+(l<<1)]||(g[m+(l<<1)]=-1),g[m+(l<<1)+1]=k()),m=0,n=0,o=!1),e+=1}var c,d,b=0,e=new Uint8Array(a.valueStoreLength),f=new Uint32Array(3);f[0]=1,f[1]=1,f[2]=1;var g,h;for(a.charMap=n(),c=0;c<a.patternChars.length;)a.charMap.add(a.patternChars.charCodeAt(c)),c+=1;d=a.charMap.code2int,a.valueStore=e,a.indexedTrie=new Int32Array(2*a.patternArrayLength),g=a.indexedTrie,h=2*a.charMap.int2code.length,Object.keys(a.patterns).forEach(function(c){l(parseInt(c,10),a.patterns[c])}),a.converted=!0}function p(a,b){try{return a.getAttribute("lang")?a.getAttribute("lang").toLowerCase():"html"!==a.tagName.toLowerCase()?p(a.parentNode,b):b?h:null}catch(a){}}function q(){var a=b.document.getElementsByTagName("html")[0];h=p(a,!1),h||""===g.defaultLanguage||(h=g.defaultLanguage),a.lang=h}function r(){function d(a,b){return a.filter(function(a){return b.indexOf(a)!==-1})}function e(a,b,f,h){var j,k,l=0;for(h=h||!1,j=a.lang&&"string"==typeof a.lang?a.lang.toLowerCase():b&&""!==b?b.toLowerCase():p(a,!0),"H9Y"===c.testResults.languages[j]&&i.add(a,j,f),k=a.childNodes[l];k;)1!==k.nodeType||g.dontHyphenate[k.nodeName.toLowerCase()]||k.className.indexOf(g.dontHyphenateClass)!==-1||0===d(k.className.split(" "),g.classNames).length&&e(k,j,f,!0),l+=1,k=a.childNodes[l]}var a;g.classNames.forEach(function(c){a=b.document.querySelectorAll("."+c),Array.prototype.forEach.call(a,function(a){e(a,p(a,!0),c,!1)})}),c.elementsReady=!0}function s(a,b){var c=b;return Object.keys(a).forEach(function(b){c=c.replace(new RegExp(b,"g"),a[b])}),c}function u(a,b,c){function p(b){var c=b.toLowerCase();return l&&(c=c.normalize("NFC")),m&&(c=s(a.charSubstitution,c)),b.indexOf("'")!==-1&&(c=c.replace(/'/g,"’")),c}function q(a,c){var d=p(a),g=a.length,k=d.length,l="",m=0,o=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=n.leftminPerLang[b],y=n.rightminPerLang[b],z=void 0!==h[95]?h[95]:-1;for(f[0]=z,e[0]=0;v<k;)w=d.charCodeAt(v),v+=1,f[v]=void 0!==h[w]?h[w]:-1,e[v]=0;for(f[v+1]=z,e[k]=0,k+=2,v=0;v<k;){for(m=0,r=v;r<k&&(u=f[r],u!==-1);){if(o=i[m+2*u],q=i[m+2*u+1],q>0)for(t=0,s=j[q+t];255!==s;)s>e[v+t]&&(e[v+t]=s),t+=1,s=j[q+t];if(!(o>0))break;m=o,r+=1}v+=1}for(s=0;s<g;)s>=x&&s<=g-y&&1&e[s+1]&&(l+=c),l+=a.charAt(s),s+=1;return l}function r(a,b,d){var e,h,f=0,g=String.fromCharCode(8203),i=d;switch(n.compound){case"auto":for(e=d.split("-"),h=u(a,b,c);f<e.length;)e[f].length>=n.minWordLength&&(e[f]=h(e[f])),f+=1;i=e.join("-");break;case"all":for(e=d.split("-"),h=u(a,b,c);f<e.length;)e[f].length>=n.minWordLength&&(e[f]=h(e[f])),f+=1;i=e.join("-"+g);break;default:i=d.replace("-","-"+g)}return i}function v(c){c=n.onBeforeWordHyphenation(c,b);var d=k[c]||void 0;return d||(d=c.indexOf(o)!==-1?c:void 0!==a.exceptions[c]?a.exceptions[c].replace(/-/g,n.hyphen):c.indexOf("-")!==-1?r(a,b,c):q(c,n.hyphen)),d=n.onAfterWordHyphenation(d,b),k[c]=d,d}var e=new Uint8Array(64),f=new Int32Array(64),h=a.charMap.code2int,i=a.indexedTrie,j=a.valueStore,k=d(),l=g.normalize&&!!String.prototype.normalize,m=!!a.hasOwnProperty("charSubstitution"),n=g[c],o=n.hyphen;return t[b+"-"+c]=v,v}function v(a){function b(b,c,d,e){var f=g[a],h=f.hyphen;return".\\+*?[^]$(){}=!<>|:-".indexOf(f.hyphen)!==-1&&(h="\\"+f.hyphen),3===f.orphanControl&&" "===c&&(c=String.fromCharCode(160)),c+d.replace(new RegExp(h,"g"),"")+e}return b}function w(a,b){var d=b.element,e=c.languages[a],f=b.class,h=g[f];h.onBeforeElementHyphenation(d,a);for(var j=void 0!==t[a+"-"+f]?t[a+"-"+f]:u(e,a,f),k=v(f),m=0,n=d.childNodes[m];n;)3===n.nodeType&&/\S/.test(n.data)&&n.data.length>=h.minWordLength&&(n.data=n.data.replace(e.genRegExps[f],j),1!==h.orphanControl&&(n.data=n.data.replace(/(\u0020*)(\S+)(\s*)$/,k))),m+=1,n=d.childNodes[m];b.hyphenated=!0,i.counters[1]+=1,g.safeCopy&&"body"!==d.tagName.toLowerCase()&&l.registerOnCopy(d,f),h.onAfterElementHyphenation(d,a)}function x(a,b){b.forEach(function(c){w(a,c)}),i.counters[0]===i.counters[1]&&A(["hyphenationDone"])}function y(a){for(var g,b=a.split(", "),c=d(),e=0,f=b.length;e<f;)g=b[e].replace(/-/g,""),void 0===c[g]&&(c[g]=b[e]),e+=1;return c}function z(a){var b=c.languages[a];b.prepared||(b.cache=d(),b.hasOwnProperty("exceptions")&&(c.addExceptions(a,b.exceptions),delete b.exceptions),void 0!==m.global&&(void 0!==m.lang?m[a]+=", "+m.global:m[a]=m.global),void 0!==m.lang?(b.exceptions=y(m[a]),delete m[a]):b.exceptions=d(),o(b),b.genRegExps=d(),g.classNames.forEach(function(c){var e,h=g[c];0===h.leftminPerLang&&Object.defineProperty(h,"leftminPerLang",f(d(),2)),0===h.rightminPerLang&&Object.defineProperty(h,"rightminPerLang",f(d(),2)),void 0===h.leftminPerLang[a]?h.leftminPerLang[a]=Math.max(b.leftmin,h.leftmin):h.leftminPerLang[a]=Math.max(b.leftmin,h.leftmin,h.leftminPerLang[a]),void 0===h.rightminPerLang[a]?h.rightminPerLang[a]=Math.max(b.rightmin,h.rightmin):h.rightminPerLang[a]=Math.max(b.rightmin,h.rightmin,h.rightminPerLang[a]),e=g.normalize&&String.prototype.normalize?"[\\w"+b.specialChars+b.specialChars.normalize("NFD")+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+h.minWordLength+",}":"[\\w"+b.specialChars+String.fromCharCode(173)+String.fromCharCode(8204)+"-]{"+h.minWordLength+",}",b.genRegExps[c]=new RegExp(e,"gi")}),b.prepared=!0)}function A(a){switch(e(a[0]),a[0]){case"DOMContentLoaded":q(),r(),c.evt(["ElementsReady"]);break;case"ElementsReady":i.each(function(a,b){c.languages.hasOwnProperty(a)&&c.languages[a].converted&&x(a,b)});break;case"loaded":z(a[1]),c.evt(["patternReady",a[1]]);break;case"patternReady":c.elementsReady&&x(a[1],i.list[a[1]]);break;case"hyphenationDone":b.clearTimeout(g.timeOutHandler),b.document.documentElement.style.visibility="visible",g.onHyphenationDone();break;case"timeout":b.document.documentElement.style.visibility="visible",g.onTimeOut()}}var g=c.c,h=null,i=function(){function a(a,b){return{element:a,hyphenated:!1,treated:!1,class:b}}function b(){function e(d,e,f){var g=a(d,f);return void 0===c[e]&&(c[e]=[]),c[e].push(g),b[0]+=1,g}function f(a){Object.keys(c).forEach(function(b){2===a.length?a(b,c[b]):a(c[b])})}var b=[0,0],c=d();return{counters:b,list:c,add:e,each:f}}return b()}(),k=function(){return window.postMessage&&window.addEventListener?function(){function c(c){a.push(c),window.postMessage(b,"*")}function d(c){c.source===window&&c.data===b&&(c.stopPropagation(),a.length>0&&a.shift()())}var a=[],b="Hyphenator_zeroTimeOut_message";return window.addEventListener("message",d,!0),c}():function(a){window.setTimeout(a,0)}}(),l=function(){var a=function(){function a(a,b){a=a||window.event;var c,d,e,f,h=a.target||a.srcElement,i=h.ownerDocument,l=i.getElementsByTagName("body")[0],m=i.defaultView||i.parentWindow;h.tagName&&g.dontHyphenate[h.tagName.toLowerCase()]||(c=i.createElement("div"),c.style.color=window.getComputedStyle?m.getComputedStyle(l,null).backgroundColor:"#FFFFFF",c.style.fontSize="0px",l.appendChild(c),a.stopPropagation(),d=m.getSelection(),e=d.getRangeAt(0),c.appendChild(e.cloneContents()),j(c,b),d.selectAllChildren(c),f=function(){c.parentNode.removeChild(c),d.removeAllRanges(),d.addRange(e)},k(f))}function b(b){var c=b.ownerDocument.getElementsByTagName("body")[0];c&&(b=b||c,b.removeEventListener("copy",a,!0))}function c(b,c){var d=b.ownerDocument.getElementsByTagName("body")[0];d&&(b=b||d,b.addEventListener("copy",function(b){a(b,c)},!0))}return{oncopyHandler:a,removeOnCopy:b,registerOnCopy:c}};return!!g.safeCopy&&a()}(),m=d(),t=d();c.addExceptions=function(a,b){""===a&&(a="global"),void 0!==m.lang?m[a]+=", "+b:m[a]=b},g.onHyphenopolyStart(),b.clearTimeout(c.setup.timeOutHandler),Object.defineProperty(g,"timeOutHandler",f(b.setTimeout(function(){A(["timeout"])},g.timeout),2)),c.evt=function(a){A(a)},c.evtList.forEach(function(b){A(b)}),delete c.evtList}(b)}(window);