"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34142],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={description:"Xadow - GPS V2",title:"Xadow - GPS V2",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_GPS_V2",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_GPS_V2",id:"Seeed_Elderly/Xadow/Xadow_GPS_V2",title:"Xadow - GPS V2",description:"Xadow - GPS V2",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_GPS_V2.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_GPS_V2",permalink:"/zh-CN/Xadow_GPS_V2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_GPS_V2.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - GPS V2",title:"Xadow - GPS V2",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_GPS_V2",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - GPS",permalink:"/zh-CN/Xadow_GPS"},next:{title:"Xadow - Gesture v1.0",permalink:"/zh-CN/Xadow_Gesture_v1.0"}},d={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"About Global Positioning System (GPS)",id:"about-global-positioning-system-gps",level:2},{value:"Rephone Community",id:"rephone-community",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.JPG",alt:null})),(0,r.kt)("p",null,"Based on the GPS L70 module from Quectel\xae, the Xadow GPS v2 combines the advanced AGPS technology EASYTM (Embedded Assist System) and the AlwaysLocateTM technology to achieve high performance, ultra-low power consumption and fast positioning even at indoor signal levels. With an excellent high-sensibility receiver (-163dBm tracking) and a built-in chip antenna, the module can track up to 22 satellites on 66 channels, making it a perfect choice for navigation projects. The board also adopts the new 11 PIN Xadow connector to improve the flexibility of module connections."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-Get_One_Now_Banner.png",alt:null}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EASY\u2122, advanced AGPS technology without the need for external memory"),(0,r.kt)("li",{parentName:"ul"},"Ultra-low power consumption in tracking mode"),(0,r.kt)("li",{parentName:"ul"},"AlwaysLocate\u2122, an intelligent controller of alternate modes"),(0,r.kt)("li",{parentName:"ul"},"High sensitivity"),(0,r.kt)("li",{parentName:"ul"},"Support QZSS"),(0,r.kt)("li",{parentName:"ul"},"Support DGPS, SBAS(WAAS/EGNOS/MSAS/GAGAN)"),(0,r.kt)("li",{parentName:"ul"},"Anti-Jamming, Multi-tone Active Interference Canceller"),(0,r.kt)("li",{parentName:"ul"},"Built-in chip antenna with efficiency up to 83%"),(0,r.kt)("li",{parentName:"ul"},"Built-in 11 PIN Xadow Connectors for fully flexible connection with other Xadow Modules"),(0,r.kt)("li",{parentName:"ul"},"Stackable, chain-able and sew-able with other Xadow Modules")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Microcontroller")),(0,r.kt)("td",{parentName:"tr",align:null},"Kinetis KL02")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Core")),(0,r.kt)("td",{parentName:"tr",align:null},"ARM\xae 32-bit Cortex\xae -M0+CPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Power Supply")),(0,r.kt)("td",{parentName:"tr",align:null},"3.3 ~ 6 V (via breakout pins)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Flash")),(0,r.kt)("td",{parentName:"tr",align:null},"32 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SRAM")),(0,r.kt)("td",{parentName:"tr",align:null},"4 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Clock Speed")),(0,r.kt)("td",{parentName:"tr",align:null},"48 MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Power Consumption")),(0,r.kt)("td",{parentName:"tr",align:null},"18mA@Tracking, 21mA@Acquisition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Power Saving")),(0,r.kt)("td",{parentName:"tr",align:null},"Typ. 3mA@AlwaysLocateTM, 7uA@Backup /Mode, 180uA@Standby Mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Channel")),(0,r.kt)("td",{parentName:"tr",align:null},"22(Tracking) / 66 (Acquisition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Update Rate")),(0,r.kt)("td",{parentName:"tr",align:null},"1Hz(Default), up to 10Hz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Horizontal Position Accuracy")),(0,r.kt)("td",{parentName:"tr",align:null},"<2.5m CEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Velocity Accuracy")),(0,r.kt)("td",{parentName:"tr",align:null},"<0.1m/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Maximum Velocity")),(0,r.kt)("td",{parentName:"tr",align:null},"Max.515m/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cold/warm start with EASYTM")),(0,r.kt)("td",{parentName:"tr",align:null},"215s/5s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Acquisition Sensitivity")),(0,r.kt)("td",{parentName:"tr",align:null},"-145dBm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tracking Sensitivity")),(0,r.kt)("td",{parentName:"tr",align:null},"-163dBm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Operating Temperature")),(0,r.kt)("td",{parentName:"tr",align:null},"-40\u2103 to 85\u2103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Protocols\tNMEA")),(0,r.kt)("td",{parentName:"tr",align:null},"0183/PMTK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Antenna Type")),(0,r.kt)("td",{parentName:"tr",align:null},"Chip antenna")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Interface")),(0,r.kt)("td",{parentName:"tr",align:null},"Interface with Xadow GSM+BLE through  / I2C (7-bit address 0x05)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Dimensions")),(0,r.kt)("td",{parentName:"tr",align:null},"25.37mm X 20.30mm / 1\u201d \xd7 0.8\u201d")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.png",alt:null})),(0,r.kt)("h2",{id:"about-global-positioning-system-gps"},"About Global Positioning System (GPS)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The Global Positioning System (GPS) is a space-based navigation system that provides real-time and all-weather geographic position, altitude, travelling speed and time information anywhere on or near the Earth where there is an unobstructed line of sight to four or more GPS satellites. It was formerly used only by military projects, and now it is freely accessible to anyone with a GPS receiver. The typical applications of GPS cover automobile navigation, time transfer, traffic signal timing, anti-theft and tracking devices, etc."),(0,r.kt)("h2",{id:"rephone-community"},"Rephone Community"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-RePhone_Community-2.png",alt:null}))),(0,r.kt)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"."),(0,r.kt)("p",null,"Now join us in the ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Frequently Asked Questions")),(0,r.kt)("p",null,"Some frequently asked questions in ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),' are collected and answered to the topic "Frequently Asked Questions of RePhone (FAQ)" , the topic will be kept updating whenever a new FAQ comes out.'),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will be keep updating the source code on our github page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WayenWeng/Xadow_GPS_v2/"},"Source Code for Xadow GPS v2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/WayenWeng/Xadow_GPS_v2_test/"},"Testing Code for Xadow GPS v2 based on Eclipse IDE"))),(0,r.kt)("p",null,"The schematic diagram of Xadow GPS v2 is provided in the following link:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip"},"Xadow GPS v2 Schematic Files"))),(0,r.kt)("p",null,"When you find the GPS values are a bit far from your actual location, you might need to burn new firmware to Xadow GPS V2:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/Burn_to_Xadow_modules.zip"},"Learn how to burn new firmware with a mbed board"))),(0,r.kt)("p",null,"Check more info about the GPS L70 and the chip antenna:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/GPS_L70_%26_Chip_Antenna.rar"},"Specification for GPS L70 and the chip antenna"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);