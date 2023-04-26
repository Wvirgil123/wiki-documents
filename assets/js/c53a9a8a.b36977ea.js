"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92067],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=s(n),d=r,c=k["".concat(p,".").concat(d)]||k[d]||m[d]||i;return n?a.createElement(c,l(l({ref:e},u),{},{components:n})):a.createElement(c,l({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65928:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={description:"SenseCAP M1 Overview",title:"SenseCAP M1 Overview",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},l="**General Information**",o={unversionedId:"Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview",id:"Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview",title:"SenseCAP M1 Overview",description:"SenseCAP M1 Overview",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway",slug:"/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview",permalink:"/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Overview.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"SenseCAP M1 Overview",title:"SenseCAP M1 Overview",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Sensecap LoRaWAN User Guide",permalink:"/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide"},next:{title:"SenseCAP M1 Quick Start",permalink:"/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Quick_Start"}},p={},s=[],u={toc:s};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-information"},(0,r.kt)("strong",{parentName:"h1"},"General Information")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SenseCAP M1")," is a high-performing, ready-to-use ",(0,r.kt)("strong",{parentName:"p"},"LoRaWAN indoor gateway")," connected to the ",(0,r.kt)("strong",{parentName:"p"},"Helium LongFi\u2122 Network."),(0,r.kt)("br",{parentName:"p"}),"\n","It is based on Raspberry Pi 4 and embedded with a WM1302/WM1303 (Semtech SX1302/SX1303) LoRa concentrator. It provides built-in BLE, which helps you set up the device in a few simple steps and supports connecting to the internet via Wi-Fi or Ethernet."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/sensecapm1.webp",alt:"SenseCAP M1 Gateway"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"features"},(0,r.kt)("strong",{parentName:"h1"},"Features")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/features.jpg",alt:"SenseCAP M1 Features"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Handy Setup to Helium Network:")," Ready to go within simple steps.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Powered by Mature Hardware Solutions:")," Raspberry Pi 4(2G/4G/8G RAM, 64G storage) and WM1302/WM1303 (Semtech SX1302/SX1303) baseband LoRa chip.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Secure and Reliable:")," Built-in ECC608 crypto chip, high-security authentication, and reliable connectivity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Automatic Online Upgrades"),": Automatic OTA upgrades, without manual operation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remote Diagnosis"),": Built-in remote diagnostics mechanism, efficient online support.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"64GB Large Storage"),": 64GB MicroSD card large storage, extending the lifetime of the gateway, fulfilling the memory requirement of potential upgrade.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Efficient Cooling Solution"),": Aluminum enclosure with a heatsink and cooling fan inside, ensuring long-term and stable operation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Multiple Accessories"),": Fiberglass antenna, slider pad for sliding rod installation, and upcoming outdoor enclosure, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FCC and CE Certificated"),": Available for personal and commercial use.  "),(0,r.kt)("hr",{parentName:"li"}))),(0,r.kt)("h1",{id:"package-contents"},(0,r.kt)("strong",{parentName:"h1"},"Package Contents")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SenseCAP M1 LoRaWAN Indoor Gateway (EU868/US915) ","*","1"),(0,r.kt)("li",{parentName:"ul"},"Power Adapter (EU/US)","*","1"),(0,r.kt)("li",{parentName:"ul"},"Antenna (EU868/US915) ","*","1"),(0,r.kt)("li",{parentName:"ul"},"64GB MicroSD Card ","*","1"),(0,r.kt)("li",{parentName:"ul"},"Quick Start Guide ","*","1")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/package-contents.png",alt:"SenseCAP M1 Package Contents"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"general-overview"},(0,r.kt)("strong",{parentName:"h1"},"General Overview")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-1.webp",alt:"SenseCAP M1 General Overview"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-2.webp",alt:"SenseCAP M1 Breakdown"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/overview-3.webp",alt:"SenseCAP M1 Breakdown 2"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"interface"},(0,r.kt)("strong",{parentName:"h1"},"Interface")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/interface-1.webp",alt:"SenseCAP M1 Interface"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"dimensions"},(0,r.kt)("strong",{parentName:"h1"},"Dimensions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/dimensions-1.webp",alt:"SenseCAP M1 Dimensions"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Device Size (/pcs):")," 154","*","100","*","44 mm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Device Weight (/pcs)"),": 370g")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Package Size (/pcs)"),": 274","*","175","*","60 mm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Package Weight (/pcs)"),": 675g  "),(0,r.kt)("hr",{parentName:"li"}))),(0,r.kt)("h1",{id:"block-diagram"},(0,r.kt)("strong",{parentName:"h1"},"Block Diagram")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/block-diagram.webp",alt:"SenseCAP M1 Block Diagram"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"system-structure"},(0,r.kt)("strong",{parentName:"h1"},"System Structure")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/system-structure.webp",alt:"SenseCAP M1 System Structure"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"led-status"},(0,r.kt)("strong",{parentName:"h1"},"LED Status")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/LED-status.webp",alt:"SenseCAP M1 LED Status"})),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"unit-information"},(0,r.kt)("strong",{parentName:"h1"},"Unit Information")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/06/unit-info.webp",alt:"SenseCAP M1 Unit Information"})),(0,r.kt)("p",null,"These two labels on the bottom indicate important information of the unit including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Model"),(0,r.kt)("li",{parentName:"ul"},"S/N"),(0,r.kt)("li",{parentName:"ul"},"WiFi MAC"),(0,r.kt)("li",{parentName:"ul"},"ETH MAC"),(0,r.kt)("li",{parentName:"ul"},"CPU ID")),(0,r.kt)("p",null,"This information will be required when registering for the ",(0,r.kt)("strong",{parentName:"p"},"SenseCAP Dashboard"),"."),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"datasheet"},(0,r.kt)("strong",{parentName:"h1"},"Datasheet")),(0,r.kt)("table",{style:{width:"45.6785%"},border:0,cellSpacing:0,cellPadding:0},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Processor"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"Raspberry Pi 4 (Broadcom BCM2711, Quad core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz)")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"RAM"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"2GB / 4GB / 8GB")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Storage"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"64GB MicroSD Card")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Frequency"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"EU868 Version: 863MHz ~ 870MHz",(0,r.kt)("br",null),"AS923 Version: 902MHz ~ 928MHz",(0,r.kt)("br",null),"US915 Version: 902MHz ~ 928MHz")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},rowSpan:2,valign:"top"},"Sensitivity"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"-125dBm @125KHz/SF7")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"-139dBm @125KHz/SF12")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"TX Power"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"Up to 26 dBm")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Antenna Gain"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},(0,r.kt)("p",null,"US915: 2.6 dBi"),(0,r.kt)("p",null,"EU868: 2.8 dBi"))),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Antenna Impedance"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"50 Ohm")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Antenna Radiation Pattern"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"Omni-Directional")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Wi-Fi"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"2.4 GHz and 5.0 GHz IEEE 802.11ac wireless")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Bluetooth"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"Bluetooth 5.0, BLE")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"LoRaWAN"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"Supports Class A, C")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Input Voltage"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"DC 5V - 3A")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Interfaces"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},(0,r.kt)("p",null,"USB Type-C (Power Supply) * 1"),(0,r.kt)("p",null,"Ethernet RJ45 * 1"),(0,r.kt)("p",null,"RP-SMA Female Antenna Connector* 1"))),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Operating Temperature"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"0\xb0C to 50\xb0C")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Relative Humidity"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"0% - 90% (non-condensing)")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Heat Dissipation"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"Aluminum enclosure, a heatsink, and a cooling fan")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"IP Grade"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"IP20")),(0,r.kt)("tr",null,(0,r.kt)("td",{style:{width:"28.2523%"},valign:"top"},"Certification"),(0,r.kt)("td",{style:{width:"71.4849%"},valign:"top"},"FCC / CE / RCM / ROHS / UKCA...")))))}k.isMDXComponent=!0}}]);