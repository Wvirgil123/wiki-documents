"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57499],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>g});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(i),h=r,g=p["".concat(u,".").concat(h)]||p[h]||c[h]||o;return i?n.createElement(g,l(l({ref:t},s),{},{components:i})):n.createElement(g,l({ref:t},s))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},21829:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));const o={description:"Getting Started with Seeeduino",title:"Getting Started with Seeeduino",keywords:["Seeeduino_Series"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Getting_Started_with_Seeeduino",last_update:{date:"1/12/2022",author:"hushuxu"}},l=void 0,a={unversionedId:"Sensor/Seeeduino Series/Getting_Started_with_Seeeduino",id:"Sensor/Seeeduino Series/Getting_Started_with_Seeeduino",title:"Getting Started with Seeeduino",description:"Getting Started with Seeeduino",source:"@site/docs/Sensor/Seeeduino Series/Getting_Started_with_Seeeduino.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Getting_Started_with_Seeeduino",permalink:"/zh-CN/Getting_Started_with_Seeeduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Getting_Started_with_Seeeduino.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1641945600,formattedLastUpdatedAt:"2022\u5e741\u670812\u65e5",frontMatter:{description:"Getting Started with Seeeduino",title:"Getting Started with Seeeduino",keywords:["Seeeduino_Series"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Getting_Started_with_Seeeduino",last_update:{date:"1/12/2022",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Wio Node",permalink:"/zh-CN/Wio_Node"},next:{title:"Seeeduino Buying Guide",permalink:"/zh-CN/Seeeduino_Buying_Guide"}},u={},d=[{value:"<strong>0. Hello world</strong>",id:"0-hello-world",level:3},{value:"1. Connect Seeeduino to PC",id:"1-connect-seeeduino-to-pc",level:3},{value:"2. Open the Blink example",id:"2-open-the-blink-example",level:3},{value:"3. Select your board",id:"3-select-your-board",level:3},{value:"4. Select your Serial Port",id:"4-select-your-serial-port",level:3},{value:"5. Upload the program",id:"5-upload-the-program",level:3},{value:"6. Result",id:"6-result",level:3},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Hello_world.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h3",{id:"0-hello-world"},(0,r.kt)("strong",{parentName:"h3"},"0. Hello world")),(0,r.kt)("p",null,"Generally, teacher will teach us to write a simple Hello World example when start to learn a programming language. This is only a basic introductory\uff0cbut it is a very important process. Although you are not familiar about Arduino, do not worry. You can learn the hello world about Arduino: light up a LED.\nNow we take Seeeduino as example to learn how to light up a LED which is controlled by Digital 13 pin.  Before doing this, please make sure that you have downloaded the Arduino Environment and installed the Seeeduino Driver successfully. If not, please click here to learn the specific steps."),(0,r.kt)("h3",{id:"1-connect-seeeduino-to-pc"},"1. Connect Seeeduino to PC"),(0,r.kt)("p",null,"Connect the Seeeduino board to your computer using the USB cable. The green power LED (labeled PWR) should go on.\n(When Seeeduino works independently, you can select USB or power adapter to power for Seeeduino.)"),(0,r.kt)("h3",{id:"2-open-the-blink-example"},"2. Open the Blink example"),(0,r.kt)("p",null,"Open the LED blink example sketch: ",(0,r.kt)("strong",{parentName:"p"},"File",">","Examples",">","01.Basics",">","Blink"),"."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started1.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h3",{id:"3-select-your-board"},"3. Select your board"),(0,r.kt)("p",null,"You'll need to select the entry in the Tools ",">"," Board menu that corresponds to your Arduino. \u5728Here we need to select ATmega328."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started2.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h3",{id:"4-select-your-serial-port"},"4. Select your Serial Port"),(0,r.kt)("p",null,"Select the serial device of the Arduino board from the Tools | Serial Port menu."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started3.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h3",{id:"5-upload-the-program"},"5. Upload the program"),(0,r.kt)("p",null,'Now, simply click the "Upload" button in the environment. Wait a few seconds - you should see the RX and TX leds on the board flashing. If the upload is successful, the message "Done uploading." will appear in the status bar.'),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started4.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h3",{id:"6-result"},"6. Result"),(0,r.kt)("p",null,"A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running."),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"  Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);