"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15640],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=n,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return o?r.createElement(h,a(a({ref:t},u),{},{components:o})):r.createElement(h,a({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},57859:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const i={description:"Xadow - Vibrator Motor",title:"Xadow - Vibrator Motor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Vibrator_Motor",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Vibrator_Motor",id:"Seeed_Elderly/Xadow/Xadow_Vibrator_Motor",title:"Xadow - Vibrator Motor",description:"Xadow - Vibrator Motor",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Vibrator_Motor.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Vibrator_Motor",permalink:"/zh-CN/Xadow_Vibrator_Motor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Vibrator_Motor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - Vibrator Motor",title:"Xadow - Vibrator Motor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Vibrator_Motor",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - UV Sensor",permalink:"/zh-CN/Xadow_UV_Sensor"},next:{title:"Xadow - 1.54 inch Touchscreen",permalink:"/zh-CN/Xadow_1.54_inch_Touchscreen"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/Vibration_Motor_01.jpg",alt:null})),(0,n.kt)("p",null,'This small vibrator motor can vibrate like your phone. When using it, you only need to power for the module and then send "Vibration" command. In fact, the "Vibration" command is setting control pins to high level, then it will work. I like this module because it can create a short-term shock to prompt me whether one operation was successful, such as shaking my arm to switch my iPhone songs, which sounds terrible, but it does not like the buzzer.'),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"working voltage: 3.3V")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rated Speed: 9000rpm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"controlled by two digital signals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dimensions: 25.43mm x 20.35mm"))),(0,n.kt)("h2",{id:"demonstration"},"Demonstration"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Here is a Demo Code showing how to turn on the vibration motor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Installation: ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/XadowVibration.jpg",alt:null})),(0,n.kt)("p",null,"Note: when connect Xadow Vibrator Motor to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).\nDemo code like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<pre>\nvoid setup()\n{\n    DDRF |= 0x01;\n    DDRB |= 0x04;\n}\n\nvoid loop()\n{\n    //turn on the vibration motor\n    PORTF |= 0x01;\n    PORTB |= 0x04;\n    delay(1000);\n    //turn off the vibration motor\n    PORTF &amp;= ~(0x01);\n    PORTB |= 0x04;\n    delay(1000);\n    //turn on the vibration motor\n    PORTF |= 0x01;\n    PORTB |= 0x04;\n    delay(1000);\n    //turn off the vibration motor\n    PORTF |= 0x01;\n    PORTB &amp;= ~(0x04);\n    delay(1000);\n    //turn on the vibration motor\n    PORTF |= 0x01;\n    PORTB |= 0x04;\n    delay(1000);\n    //turn off the vibration motor\n    PORTF &amp;= ~(0x01);\n    PORTB &amp;= ~(0x04);\n    delay(1000);\n}</pre>\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip"},"Xadow Vibrator Motor Eagle File")),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);