"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),c=i,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||n;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={description:"Overview",title:"Overview",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Bluetooth-Overview",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="Bluetooth Overview",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Bluetooth-Overview",id:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Bluetooth-Overview",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Bluetooth-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth",slug:"/Wio-Terminal-Bluetooth-Overview",permalink:"/zh-CN/Wio-Terminal-Bluetooth-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Bluetooth-Overview.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Bluetooth-Overview",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Advanced Wi-Fi Usage",permalink:"/zh-CN/Wio-Terminal-Advanced-Wi-Fi"},next:{title:"Client and Server introduction",permalink:"/zh-CN/Wio-terminal-BLE-introduction"}},p={},s=[{value:"Update the Wireless Core Firmware",id:"update-the-wireless-core-firmware",level:2},{value:"Update Seeed SAMD ArduinoCore",id:"update-seeed-samd-arduinocore",level:2},{value:"Libraries Installation",id:"libraries-installation",level:2},{value:"How to Install a Library from Arduino Library Manager",id:"how-to-install-a-library-from-arduino-library-manager",level:3},{value:"Needed Libraries for Bluetooth",id:"needed-libraries-for-bluetooth",level:3}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bluetooth-overview"},"Bluetooth Overview"),(0,i.kt)("p",null,"This wiki introduces how to update the latest firmware for the Wireless Core Realtek RTL8720 on the Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable Bluetooth connectivity."),(0,i.kt)("h2",{id:"update-the-wireless-core-firmware"},"Update the Wireless Core Firmware"),(0,i.kt)("p",null,"Please follow ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware"},"this guide")," to update the wireless core firmware on the Wio Terminal."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    This firmware allows Wi-Fi and Bluetooth to work at the same time!\n"))),(0,i.kt)("h2",{id:"update-seeed-samd-arduinocore"},"Update Seeed SAMD ArduinoCore"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please update the ",(0,i.kt)("strong",{parentName:"p"},"Seeed SAMD ArduinoCore to the latest version (1.8.1)"),"!")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"STEP 1:")," Open the ",(0,i.kt)("strong",{parentName:"p"},"Arduino IDE"),", and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Tools")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Board")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Boards Manager"),", and search ",(0,i.kt)("strong",{parentName:"p"},"Wio Terminal")," in the search box")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"STEP 2:")," Make sure the latest version (1.8.1) is installed. If not, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Select version")," drop-down menu, select the latest version and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Install")))),(0,i.kt)("p",{style:{textalign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png",alt:"pir",width:850,height:"auto"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also find the source code of Seeed SAMD ArduinoCore ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ArduinoCore-samd"},(0,i.kt)("strong",{parentName:"a"},"here")),".")),(0,i.kt)("h2",{id:"libraries-installation"},"Libraries Installation"),(0,i.kt)("p",null,"There are a few Arduino Libraries that are needed for Bluetooth connectivity. We have included all the wireless-related libraries for the Wio Terminal in the ",(0,i.kt)("strong",{parentName:"p"},"Arduino Library Manager"),". So you simply have to open Arduino Library Manager within Arduino IDE and search for the libraries that you need and easily install them!"),(0,i.kt)("h3",{id:"how-to-install-a-library-from-arduino-library-manager"},"How to Install a Library from Arduino Library Manager"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"STEP 1:")," Open the ",(0,i.kt)("strong",{parentName:"p"},"Arduino IDE"),", and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Sketch")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Manage Libraries..."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"STEP 2:")," Type the ",(0,i.kt)("strong",{parentName:"p"},"name of the library")," that we need and select the ",(0,i.kt)("strong",{parentName:"p"},"latest version")," from the drop-down menu (if available)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"STEP 3:")," Click ",(0,i.kt)("strong",{parentName:"p"},"Install")))),(0,i.kt)("p",{style:{textalign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg",alt:"pir",width:870,height:"auto"})),(0,i.kt)("h3",{id:"needed-libraries-for-bluetooth"},"Needed Libraries for Bluetooth"),(0,i.kt)("p",null,"We need the following libraries to get started with Bluetooth on the Wio Terminal. You can search for these libraries by typing the library name in the search box of Arduino Library Manager."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE"},(0,i.kt)("strong",{parentName:"a"},"Seeed_Arduino_rpcBLE"))," - search for ",(0,i.kt)("inlineCode",{parentName:"p"},'"seeed rpcble"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified"},(0,i.kt)("strong",{parentName:"a"},"Seeed_Arduino_rpcUnified"))," - search for ",(0,i.kt)("inlineCode",{parentName:"p"},'"seeed rpcunified"')))))}u.isMDXComponent=!0}}]);