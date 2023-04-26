"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),u=a,d=h["".concat(l,".").concat(u)]||h[u]||m[u]||n;return r?i.createElement(d,o(o({ref:t},c),{},{components:r})):i.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={description:"Wio Terminal Battery Chassis",title:"Wio Terminal Battery Chassis",keywords:["Wio_terminal Extension_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Battery-Chassis",last_update:{date:"1/30/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Battery-Chassis",id:"Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Battery-Chassis",title:"Wio Terminal Battery Chassis",description:"Wio Terminal Battery Chassis",source:"@site/docs/Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Battery-Chassis.md",sourceDirName:"Sensor/Wio_Terminal/Extension_Board",slug:"/Wio-Terminal-Battery-Chassis",permalink:"/zh-CN/Wio-Terminal-Battery-Chassis",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Battery-Chassis.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"Wio Terminal Battery Chassis",title:"Wio Terminal Battery Chassis",keywords:["Wio_terminal Extension_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Battery-Chassis",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"LoRa Node with AIoTs GPS",permalink:"/zh-CN/AIoTs_GPS_state_tester"},next:{title:"Wio Terminal Chassis Battery(650mAh)",permalink:"/zh-CN/Wio-Terminal-Chassis-Battery_650mAh"}},l={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Precautions",id:"precautions",level:2},{value:"FAQ",id:"faq",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png",alt:null})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"This version of Wio Terminal battery chassis cannot turn off the power completely (no influence on usage)."),(0,a.kt)("li",{parentName:"ol"},"The charge current will up to 1.5A, which may reduce battery life or cause other issues.\nWe are optimizing the design of the new version (the estimated release date is unavailable yet), and we recommend the new version if you are a beginner.\n",(0,a.kt)("em",{parentName:"li"},"Please contact us (",(0,a.kt)("a",{parentName:"em",href:"mailto:techsupport@seeed.cc"},"techsupport@seeed.cc"),") for tech support or exchange if you meet any problem during the usage of this version.\n"),"Please do NOT let the pins touch other objects when the power is on."))),(0,a.kt)("p",null,"The Wio Terminal Battery Chassis is a must-have extension board for ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio-Terminal")," Dev Board as it provides an external power source for Wio Terminal to enhance its portability and compactness. It has ",(0,a.kt)("strong",{parentName:"p"},"a 650mAH rechargeable lithium polymer battery, 4 Grove Analog/Digital Ports, 1 Grove I2C Port, and 1 Grove UART Port, as well as the ABS enclosure for aesthetic and protection.")," There is also the same Raspberry Pi 40-pin compatible GPIO at the back of the Wio Terminal Battery Chassis for more add-ons!"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio-Terminal Dev Board")," + Wio Terminal Battery Chassis, you are able to build the most powerful and compact IoT projects with no ease. With the extended Grove Ports, you can enjoy the plug and play features of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/category/Grove-c-1003.html"},"Grove Ecosystem"),"!"),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Built-in 650mAh Rechargeable Lithium Polymer Battery"),(0,a.kt)("li",{parentName:"ul"},"USB Type-C Charging"),(0,a.kt)("li",{parentName:"ul"},"Overcurrent protection"),(0,a.kt)("li",{parentName:"ul"},"Hiccup mode/Hiccup Protection"),(0,a.kt)("li",{parentName:"ul"},"4 x Grove Analog/Digital Port"),(0,a.kt)("li",{parentName:"ul"},"1 x Grove I2C Port"),(0,a.kt)("li",{parentName:"ul"},"1 x Grove UART Port"),(0,a.kt)("li",{parentName:"ul"},"Magnets are hidden inside the enclosure so that it can be stuck on the Whiteboard!")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Wio Terminal Battery Chassis is either powered by USB Type-C interface or the internal battery. The maximum input current of USB Type-C is 2A, and the input voltage range is ",(0,a.kt)("strong",{parentName:"p"},"4.75V ~ 5.25V."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The built-in battery is a rechargeable lithium-polymer battery, with a capacity of 650mAh. The battery output voltage is 3.7V, with a battery charging voltage of 4.2V.\nThe battery can only be charged through the USB Type-C interface, and cannot be charged through the female connector or Grove interface.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Wio Terminal Battery Chassis standby current is less than 300uA.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Wio Terminal Battery Chassis has overcurrent protection when it is powered through the USB Type-C interface, and the current threshold of the overcurrent protection is 2.5A.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the Wio Terminal Battery Chassis is short-circuited in battery-powered mode, it will enter hiccup mode. After the short-circuit is removed, it will automatically return to normal power-supply mode."))),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg"})),(0,a.kt)("h2",{id:"precautions"},"Precautions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Wio Terminal Battery Chassis cannot output 3.3V voltage by itself, it can only output 5V voltage. To output 3.3V it must be used with Wio Terminal."),(0,a.kt)("li",{parentName:"ul"},"When the Wio Terminal Battery Chassis is switched from battery charging mode to battery power mode, there will be a 1.2s voltage drop time."),(0,a.kt)("li",{parentName:"ul"},"By default, the Wio Terminal Battery Chassis is powered by the battery when it is not connected to the USB Type-C. After plugs in the USB Type-C, it automatically switches to the USB Type-C for power supply."),(0,a.kt)("li",{parentName:"ul"},"When the Wio Terminal Battery Chassis is plugged into the USB Type-C, it will supply power to both the battery and the RPI_5V pin on the connector. At this time, the battery will not supply power. If the lithium battery is not fully charged, it will stop charges after charging to 100%.")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"Charging Current:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/sch.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This resistor is changed to ",(0,a.kt)("strong",{parentName:"li"},"680k\u03a9/1%")," to limit the charging current to ",(0,a.kt)("strong",{parentName:"li"},"450mA"),".")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip"},"Wio Terminal Battery Chassis Schematics Design File"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}h.isMDXComponent=!0}}]);