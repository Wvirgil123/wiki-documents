"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56835],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(u,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(m,i(i({ref:e},s),{},{components:n})):r.createElement(m,i({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=k;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[d]="string"==typeof t?t:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60801:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const l={description:"LinkIt ONE Tutorial - Colorful World",title:"LinkIt ONE Tutorial - Colorful World",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Colorful_World",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,a={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Colorful_World",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Colorful_World",title:"LinkIt ONE Tutorial - Colorful World",description:"LinkIt ONE Tutorial - Colorful World",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Colorful_World.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-Colorful_World",permalink:"/zh-CN/LinkIt_ONE_Tutorial-Colorful_World",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Colorful_World.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"LinkIt ONE Tutorial - Colorful World",title:"LinkIt ONE Tutorial - Colorful World",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Colorful_World",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Analog Interface",permalink:"/zh-CN/LinkIt_ONE_Tutorial-Analog_Interface"},next:{title:"LinkIt ONE Tutorial - Get temperature with Webpage",permalink:"/zh-CN/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage"}},u={},p=[{value:"Tech Support",id:"tech-support",level:2}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What We\u2019re Doing")),(0,o.kt)("p",null,"We now know how to control the LED's lets combine it with basic idea about combining colors. The R-Red G-Green B-Blue are the primary colors these colors when mixed in different proportion gives different colors. An RGB LED consists of four pins the long lead is the positive terminal and the other three lead are for controlling RGB colors. Make connections as shown in the Fig5.2 and upload the code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Things you need")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Break board x 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Resistors 330\u03a9,10k\u03a9,1k\u03a9 x 3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"8mm RGB LED x 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transistor\uff082N3904\uff09 x 3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Button x 3"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Schematic")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_1.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connection")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_2.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")),(0,o.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//Code_sidekick_linkit.png",alt:null}))),(0,o.kt)("p",null,"You can unzip the file to the ",(0,o.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,o.kt)("p",null,"To access the demo code open:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L5_Color_Pannel")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const int ledR = 2;\nconst int ledB = 3;\nconst int ledG = 4;\n\nconst int buttonR = 5;\nconst int buttonG = 6;\nconst int buttonB = 7;\n\nvoid setup()\n{\n    pinMode(ledR, OUTPUT);                          // set all led pin OUTPUT\n    pinMode(ledG, OUTPUT);\n    pinMode(ledB, OUTPUT);\n\n    pinMode(buttonR, INPUT);                        // set all button pin INPUT\n    pinMode(buttonG, INPUT);\n    pinMode(buttonB, INPUT);\n}\n\nvoid loop()\n{\n    int stateR = 1-digitalRead(buttonR);            // get state of button\n    int stateG = 1-digitalRead(buttonG);\n    int stateB = 1-digitalRead(buttonB);\n\n    digitalWrite(ledR, stateR);                     // set led\n    digitalWrite(ledG, stateG);\n    digitalWrite(ledB, stateB);\n\n    delay(10);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Wrong color display"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Since there are four pins in the LED, there exists probability of error in the connection make sure that all the control pins are connected to the correct leads"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reddish appearance\uff1f"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In RGB LED, red color has high intensity than the other two colors for a given voltage. In order to make the colour overall tone in harmony, try to reduce the intensity of RED LED with a larger resistance value.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Making it better")),(0,o.kt)("p",null,"Do you want to get more colors? There are two buttons to adjust the RGB values of successive rises. Then we can find more colors. Try to build the circuit linking the two analog output interface (RGB values were increased higher or lower). Code has been defined to get it. (PWM analog output, you get a return value of the output of the analog 0-1023 to use.)"),(0,o.kt)("p",null,"To open the demo code\uff1a"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L5_Colourful_RGB")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"More ideas")),(0,o.kt)("p",null,"How expand the code to turn down the RGB values?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);