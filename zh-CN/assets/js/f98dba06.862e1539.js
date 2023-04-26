"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47008],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var l=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=l.createContext({}),h=function(e){var t=l.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=h(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=h(o),c=n,m=p["".concat(u,".").concat(c)]||p[c]||s[c]||i;return o?l.createElement(m,a(a({ref:t},d),{},{components:o})):l.createElement(m,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=c;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:n,a[1]=r;for(var h=2;h<i;h++)a[h]=o[h];return l.createElement.apply(null,a)}return l.createElement.apply(null,o)}c.displayName="MDXCreateElement"},39237:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var l=o(87462),n=(o(67294),o(3905));const i={description:"Bluetooth_Shield_V2",title:"Bluetooth Shield V2",tags:["Shield","bluetooth"],keywords:["Shield","bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bluetooth_Shield_V2",last_update:{date:"01/11/2023",author:"Eico"},no_comments:!1},a=void 0,r={unversionedId:"Top_Brand/Arduino/shield/Bluetooth_Shield_V2",id:"Top_Brand/Arduino/shield/Bluetooth_Shield_V2",title:"Bluetooth Shield V2",description:"Bluetooth_Shield_V2",source:"@site/docs/Top_Brand/Arduino/shield/Bluetooth_Shield_V2.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Bluetooth_Shield_V2",permalink:"/zh-CN/Bluetooth_Shield_V2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Bluetooth_Shield_V2.md",tags:[{label:"Shield",permalink:"/zh-CN/tags/shield"},{label:"bluetooth",permalink:"/zh-CN/tags/bluetooth"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"Bluetooth_Shield_V2",title:"Bluetooth Shield V2",tags:["Shield","bluetooth"],keywords:["Shield","bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bluetooth_Shield_V2",last_update:{date:"01/11/2023",author:"Eico"},no_comments:!1}},u={},h=[{value:"Features",id:"features",level:2},{value:"Interface function",id:"interface-function",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"1\uff1aTwo Bluetooth Shield Connect",id:"1two-bluetooth-shield-connect",level:3},{value:"2\uff1aConnect to Smart Phone",id:"2connect-to-smart-phone",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:h};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shiled_v2.JPG",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"The Bluetooth Shield integrates a Serial Bluetooth module. It can be easily used with Arduino/Seeedstudio for transparent wireless serial communication. You can choose two pins from Arduino D0 to D7 as Software Serial Ports to communicate with Bluetooth Shield (D0 and D1 is Hardware Serial Port). The shield also has two Grove connectors (one is Digital, the other is Analog) for you to install Grove modules."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Input Voltage: 3.3V"),(0,n.kt)("li",{parentName:"ul"},"Baudrate: 9600, 19200, 38400, 57600, 115200, 230400, 460800"),(0,n.kt)("li",{parentName:"ul"},"Seeeduino/Arduino compatible"),(0,n.kt)("li",{parentName:"ul"},"Up to10m communication distance in house without obstacle"),(0,n.kt)("li",{parentName:"ul"},"UART interface (TTL) with programmable baud rate"),(0,n.kt)("li",{parentName:"ul"},"Default Baud rate: 9600, Data bits: 8, Stop bit: 1, Parity: No parity"),(0,n.kt)("li",{parentName:"ul"},"Default PINCODE:\u201d1234\u201d"),(0,n.kt)("li",{parentName:"ul"},"A full set of configuration commands"),(0,n.kt)("li",{parentName:"ul"},"On board PCB Antenna")),(0,n.kt)("h2",{id:"interface-function"},"Interface function"),(0,n.kt)("hr",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_V2.0_K.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("table",{align:"center"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h3",null,"Pad Type")),(0,n.kt)("td",null,(0,n.kt)("h3",null,"Description"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h4",null,"BT_IO")),(0,n.kt)("td",null,(0,n.kt)("h4",null,"IO Port of Bluetooth module can be control: read, write."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h4",null,"BT_RX")),(0,n.kt)("td",null,(0,n.kt)("h4",null,"UART Data input of Bluetooth module."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h4",null,"BT_TX")),(0,n.kt)("td",null,(0,n.kt)("h4",null,"UART Data output Bluetooth module."))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("h4",null,"Two Grove connectors")),(0,n.kt)("td",null,(0,n.kt)("h4",null,"One is Digital (D8 and D9), the other is I2C/Analog (A4 and A5)."))))),(0,n.kt)("h2",{id:"demonstration"},"Demonstration"),(0,n.kt)("h3",{id:"1two-bluetooth-shield-connect"},"1\uff1aTwo Bluetooth Shield Connect"),(0,n.kt)("p",null,"This demo will show you how to connect two Bluetooth shield."),(0,n.kt)("p",null,"You need two piece of ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7"},"Seeeduino V3.0"),",\nOne Bluetooth Shield as Master while the other as Slave."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Installation ")),(0,n.kt)("p",null,"as folowing:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image0.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"make sure the right connection of the jumpers"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image4.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Download Code and Upload ")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can download the code in github, click ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip"},"here"),",then extract it to libraries folder of Arduino.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Arduino IDE, open File -",">"," Examples -",">"," Bluetooth_Shield_V2_Demo_Code -",">"," Master_Button, then you can open the code of Master")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Arduino IDE, open File -",">"," Examples -",">"," Bluetooth_Shield_V2_Demo_Code -",">"," Slave_led, then you can open the code of Slave")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Upload to Upload the code, if you have any problem about how to start Arduino, please click ",(0,n.kt)("a",{parentName:"p",href:"/Getting_Started_with_Seeeduino"},"here")," for some help."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_ide_1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Check The Result")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After finish Uploading the code to both Master and Slave, reset the two devices meanwhile")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can see the led blink, indicate that devices was initializing and connecting.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After about servel seconds, led on, indicate that Master and Slave had connected."))),(0,n.kt)("p",null,"!!!Note\nIf the phenomenon is not observed above, try unplugging the power and re-plug in again."),(0,n.kt)("h3",{id:"2connect-to-smart-phone"},"2\uff1aConnect to Smart Phone"),(0,n.kt)("p",null,"This demo will show you how to connect Bluetooth Shield to a Smart Phone."),(0,n.kt)("p",null,"We need a Seeeduino V3.0, a Smart Phone that with Bluetooth function."),(0,n.kt)("p",null,"Via a Bluetooth SPP App"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Installation")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_shield_demo_image1.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Download Code and Upload")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can download the code in github, click ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip"},"here"),",then extract it to libraries folder of Arduino.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Arduino IDE, File -",">"," Examples -",">"," Bluetooth_Shield_V2_Demo_Code -",">"," Slave_Temperature, then you can open the code")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Upload to Upload the code, if you have any problem about how to start Arduino, please click ",(0,n.kt)("a",{parentName:"p",href:"//Getting_Started_with_Seeeduino"},"here")," for some help."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Demo2.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Download a SSP App")),(0,n.kt)("p",null,"Here we us an Ardriod Phone, Mine is a Xiaomi 2A, open Google Play, search bluetooth spp, you can find many results."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_Find_spp.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Most of this app are useful, just choose one and have try."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Get Temperature")),(0,n.kt)("p",null,'After installing an SPP app, try connecting it to SeeedBTSlave, pin code is: "0000"'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_App_1.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"When connect is ok, send 't' to SeeedBTSlave, and you can get the temperature now:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/img/Bluetooth_Shield_get_temp.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Buletooth_Shield_v2.0_sch_pcb.zip"},"Schematic and Layout in Eagle format"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf"},"module Datasheet")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);