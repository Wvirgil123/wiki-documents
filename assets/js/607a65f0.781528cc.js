"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17183],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(i),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},45258:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));const a={description:"Wifi Shield V1.1",title:"Wifi Shield V1.1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wifi_Shield_V1.1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Wifi_Shield_V1.1",id:"Top_Brand/Arduino/shield/Wifi_Shield_V1.1",title:"Wifi Shield V1.1",description:"Wifi Shield V1.1",source:"@site/docs/Top_Brand/Arduino/shield/Wifi_Shield_V1.1.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Wifi_Shield_V1.1",permalink:"/Wifi_Shield_V1.1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Wifi_Shield_V1.1.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Wifi Shield V1.1",title:"Wifi Shield V1.1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wifi_Shield_V1.1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wifi Shield V1.0",permalink:"/Wifi_Shield_V1.0"},next:{title:"Wifi Shield V1.2",permalink:"/Wifi_Shield_V1.2"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Get started",id:"get-started",level:2},{value:"Demo: Wifly_Test",id:"demo-wifly_test",level:3},{value:"Demo for Others",id:"demo-for-others",level:3},{value:"Touble Shooting",id:"touble-shooting",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This Wifi Shield utilizes a RN171 wifi module to provide your Arduino/Seeeduino with serial Ethernet's function. It only takes two pins to hook your device up to 802.11b/g wireless networks with this shield. It features an independent antenna which can cover a wider range and transmit stronger signals. With supports for common TCP, UDP and FTP communication protocols, this Wifi Shield can meet needs of most wireless network projects, like smart home networks, robot controls or personal weather stations,etc. We prepared an easy and convenient command set for this shield so that you can use neat and concise code to run the function."),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Voltage\uff1a3.3~5.5 V")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Current\uff1a25~400mA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transmit power\uff1a0-10 dBm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Frequency\uff1a2402~2480 MHz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Channal\uff1a0~13")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Network rate\uff1a1-11 Mbps for 802.11b/6-54Mbps for 802.11g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dimension\uff1a60X56X19 mm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Net Weight\uff1a24\xb11 g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Secure WiFi authentication\uff1aWEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Built-in networking applications\uff1aDHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_Interface_Function.jpg",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RN-171\uff1a"),"WIFLY GSX 802.11 b/g Wireless LAN Module.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Software Serial Port Configuration Area:"),"\xa0Choose the digital pins you would like to use as RX and TX of RN171.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Reset button:")," Reset the Wifi Shield.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Status indicators illustration:"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Two LEDs(D1,D5) will blink alternately when no connection exists.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After connected to router, the Association to AP status Indicator(D1) will blink.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After connected to router and TCP Sever, the AP status Indicator(D1) will always be on."))),(0,r.kt)("h2",{id:"get-started"},"Get started"),(0,r.kt)("h3",{id:"demo-wifly_test"},"Demo: Wifly_Test"),(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/WiFi_Shield"},"Wifi Shield Library")," on github, unzip it into the libraries folder of Arduino."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\n#include <Arduino.h>\n#include <SoftwareSerial.h>\n#include "WiFly.h"\n\n#define SSID      "YourAP"\n#define KEY       "password"\n#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN\n\n// Pins\' connection\n// Arduino       WiFly\n//  2    <----\x3e    TX\n//  3    <----\x3e    RX\nSoftwareSerial uart(2, 3);\nWiFly wifly(&uart);\n//WiFly wifly(&Serial1);     // for leonardo, use hardware serial - Serial1\n\nvoid setup() {\n  uart.begin(9600);\n\n  Serial.begin(9600);\n  Serial.println("--------- WIFLY TEST --------");\n\n  // wait for initilization of wifly\n  delay(3000);\n\n  uart.begin(9600);     // WiFly UART Baud Rate: 9600\n\n  wifly.reset();\n\n  Serial.println("Join " SSID );\n  if (wifly.join(SSID, KEY, AUTH)) {\n    Serial.println("OK");\n  } else {\n    Serial.println("Failed");\n  }\n\n  // get WiFly params\n  wifly.sendCommand("get everthing\\r");\n  char c;\n  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {\n    Serial.print((char)c);\n  }\n\n  if (wifly.commandMode()) {\n    Serial.println("Enter command mode. Send \\"exit\\"(with \\\\r) to exit command mode");\n  }\n}\n\nvoid loop() {\n  while (wifly.available()) {\n    Serial.write(wifly.read());\n  }\n\n  while (Serial.available()) {\n    wifly.write(Serial.read());\n  }\n}\n\n')),(0,r.kt)("p",null,"1.Connect D2(RX) and D3(TX) of software serial port with TX and RX of WiFi shield."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_UART.jpg",alt:null})),(0,r.kt)("p",null,"2.Change the code to update your access point info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n#define SSID      "YourAP"\n#define KEY       "password"\n#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN\n\n')),(0,r.kt)("p",null,"3.Download the sketch to Arduino, open Serial Monitor, set baud rate to 9600, set enter key to Carriage return. WiFi Shield will output some messages and enter command mode. In command mode, you can enter some commands to interact:"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"get wlan")," - get wlan info"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"join")," - join a network"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"ping")," seeedstudio.com - ping seeed!"),(0,r.kt)("p",null,"  For more command, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf"},"WiFi Module User Manual")),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/Wi-Fi_Info.png",alt:null})),(0,r.kt)("p",null,"4.For further usage, please try other examples of the WiFi shield library."),(0,r.kt)("h3",{id:"demo-for-others"},"Demo for Others"),(0,r.kt)("h2",{id:"touble-shooting"},"Touble Shooting"),(0,r.kt)("p",null,"If the Wifi Shield doesn't response any commands, try to do factory reset following ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Wifly_171_troubleshooting/"},"the guide")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resource"},"Resource"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip"},"WiFi Shield Eagle Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1.pdf"},"wifi Shield V1.1 PCB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1%20SCH.pdf"},"wifi Shield V1.1 SCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-171.pdf"},"RN-171 Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Library]"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/WiFi_Shield"},"Wifi Shield Library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Manual]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf"},"WiFi Module User Manual"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);