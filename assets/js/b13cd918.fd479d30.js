"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={description:"Secret Box",title:"Secret Box",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Secret_Box",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/Secret_Box",id:"Seeed_Elderly/LinkIt/Linklt ONE/Secret_Box",title:"Secret Box",description:"Secret Box",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/Secret_Box.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/Secret_Box",permalink:"/Secret_Box",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/Secret_Box.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Secret Box",title:"Secret Box",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Secret_Box",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Starter Kit for LinkIt ONE",permalink:"/Grove-Starter_Kit_for_LinkIt_ONE"},next:{title:"Arch Mix",permalink:"/Arch_Mix"}},p={},u=[{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Function")),(0,o.kt)("p",null,"LinkIt ONE with Grove - Light Sensor, put into a box. when the box is opened, a message will be sent to your phone."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connection")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GSM antenna")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"SIM Card")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Li Battery"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// demo of Grove Starter kit for LinkIt ONE\n// Secret box\n\n#include <LGSM.h>\n\nchar num[20] = "13425171053";           // your number write here\nchar text[100] = "Warning: Your box had been opened!!";    // what do you want to send\n\n\nconst int pinLight = A0;                // light sensor connect to A0\n\nbool isLightInBox()\n{\n    return (analogRead(pinLight)<50);   // when get data less than 50, means light sensor was in box\n}\n\nvoid setup()\n{\n    Serial.begin(115200);\n\n    while(!isLightInBox());             // until put in box\n    delay(2000);\n}\n\n\nvoid loop()\n{\n    if(!isLightInBox())                 // box is open\n    {\n        Serial.println("box had been opened");\n\n        while(!LSMS.ready())\n        {\n            delay(1000);\n        }\n\n        Serial.println("SIM ready for work!");\n        LSMS.beginSMS(num);\n        LSMS.print(text);\n\n        if(LSMS.endSMS())\n        {\n            Serial.println("SMS is sent");\n        }\n        else\n        {\n            Serial.println("SMS send fail");\n        }\n\n        while(!isLightInBox());             // until put in box\n        delay(2000);\n    }\n\n    delay(10);\n}\n')),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);