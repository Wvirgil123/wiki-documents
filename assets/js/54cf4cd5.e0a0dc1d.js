"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Connect to The Things Network",title:"Connect to The Things Network",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"2/14/2023",author:"Matthew"}},l="Connect to The Things Network",i={unversionedId:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network",id:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network",title:"Connect to The Things Network",description:"Connect to The Things Network",source:"@site/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial",slug:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network",permalink:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Connect to The Things Network",title:"Connect to The Things Network",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"2/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Connect to Helium Network",permalink:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network"},next:{title:"SenseCAP S2120 8-in-1 LoRaWAN Weather Sensor Introduction",permalink:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor/SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor_Introduction"}},s={},p=[{value:"1. The Things Network",id:"1-the-things-network",level:2},{value:"Connect to The Things Network",id:"connect-to-the-things-network-1",level:2},{value:"Create a New Account",id:"create-a-new-account",level:3},{value:"Setup the Sensor",id:"setup-the-sensor",level:3},{value:"Set Frequency of Sensor via SenseCAP Mate App",id:"set-frequency-of-sensor-via-sensecap-mate-app",level:3},{value:"TTN configuration",id:"ttn-configuration",level:2},{value:"Gateway Registration on TTN",id:"gateway-registration-on-ttn",level:3},{value:"Create the Application",id:"create-the-application",level:3},{value:"Add Sensor to TTN Console",id:"add-sensor-to-ttn-console",level:2},{value:"Check Data on TTN Console",id:"check-data-on-ttn-console",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-to-the-things-network"},"Connect to The Things Network"),(0,r.kt)("h2",{id:"1-the-things-network"},"1. The Things Network"),(0,r.kt)("p",null,"The Things Stack is an enterprise grade LoRaWAN network server, built on an open-source core. The Things Stack allows you to build and manage LoRaWAN networks on your own hardware or in the cloud."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png",alt:null})),(0,r.kt)("h2",{id:"connect-to-the-things-network-1"},"Connect to The Things Network"),(0,r.kt)("h3",{id:"create-a-new-account"},"Create a New Account"),(0,r.kt)("p",null,"TTN Website: ",(0,r.kt)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/"},"https://www.thethingsnetwork.org/")),(0,r.kt)("h3",{id:"setup-the-sensor"},"Setup the Sensor"),(0,r.kt)("p",null,"(1) Open the SenseCAP Mate App\n(2) Press button and hold for 3 seconds, the LED will flash at 1s frequency."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/004.png",alt:null})),(0,r.kt)("p",null,"(3) Please click the \u201cSetup\u201d button to turn on Bluetooth and click \u201cScan\u201d to start scanning the sensor's Bluetooth."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/005.png",alt:null})),(0,r.kt)("p",null,"(4) Select the Sensor by S/N (label). Then, the basic information of the sensor will be displayed after entering."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/006.png",alt:null}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/007.png",alt:null})),(0,r.kt)("h3",{id:"set-frequency-of-sensor-via-sensecap-mate-app"},"Set Frequency of Sensor via SenseCAP Mate App"),(0,r.kt)("p",null,"Set the corresponding frequency band based on the frequency band of the gateway."),(0,r.kt)("p",null,"(1) Click the \u201cSetting\u201d and select the platform is \u201cThe Things Network\u201d."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/008.jpeg",alt:"wecom-temp-81208-6d8da19d41a879a504ad54c71bf4961c"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/009.jpeg",alt:"wecom-temp-73569-56429bfa7490c37c5ec3c5b2fc8ba435"})),(0,r.kt)("p",null,"(2) Select the Frequency Plan, if your gateway is US915, set the sensor to US915.\n(3) The device uses OTAA to join the LoRaWAN network by default. So, we can set the device EUI, App EUI and APP Key here."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/010.png",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Device EUI"),(0,r.kt)("td",{parentName:"tr",align:null},"16, hexadecimal from 0 ~ F")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App EUI"),(0,r.kt)("td",{parentName:"tr",align:null},"16, hexadecimal from 0 ~ F")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Key"),(0,r.kt)("td",{parentName:"tr",align:null},"32, hexadecimal from 0 ~ F")))),(0,r.kt)("p",null,"(4) Set the Packet Policy. The sensor uplink packet strategy has three modes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2C+1N (default)"),(0,r.kt)("td",{parentName:"tr",align:null},"2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1C"),(0,r.kt)("td",{parentName:"tr",align:null},"1C (1 confirm) the device will sleep after get 1 received confirm packet from server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1N"),(0,r.kt)("td",{parentName:"tr",align:null},"1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not.")))),(0,r.kt)("p",null,"(5) Click the \u201cSend\u201d button, send the setting to the sensor for it to take effect. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/011.png",alt:null})),(0,r.kt)("p",null,"(6) Click the \u201cHome\u201d button, the App will disconnect the Bluetooth connection."),(0,r.kt)("p",null,"Then, the sensor will reboot."),(0,r.kt)("p",null,"(7) When the device is disconnected from Bluetooth, the LED lights up for ",(0,r.kt)("strong",{parentName:"p"},"5 seconds")," and then flashes as a ",(0,r.kt)("strong",{parentName:"p"},"breathing light"),"."),(0,r.kt)("h2",{id:"ttn-configuration"},"TTN configuration"),(0,r.kt)("h3",{id:"gateway-registration-on-ttn"},"Gateway Registration on TTN"),(0,r.kt)("p",null,"Create a Gateway on the TTN console based on actual information."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/012.png",alt:null})),(0,r.kt)("h3",{id:"create-the-application"},"Create the Application"),(0,r.kt)("p",null,"Create an application on your TTN console. Within applications, you can register and manage end devices and their network data. After setting up your device fleet, use one of our many integration options to pass relevant data to your external services."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/013.png",alt:null})),(0,r.kt)("h2",{id:"add-sensor-to-ttn-console"},"Add Sensor to TTN Console"),(0,r.kt)("p",null,"(1) Select the Application you have created, and click the \u2018Register end device\u2019 to add end your device."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/014.png",alt:null})),(0,r.kt)("p",null,"(2) Select the end device in the LoRaWAN Device Repository."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/015.png",alt:null})),(0,r.kt)("p",null,"And then based on the brand, configure items like the ones below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/016.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"End device brand: Select SenseCAP."),(0,r.kt)("li",{parentName:"ul"},"Model: Select your sensor model. (If not, use manual add)"),(0,r.kt)("li",{parentName:"ul"},"Hardware / Firmware Version: Usually, choose the latest one."),(0,r.kt)("li",{parentName:"ul"},"Profile(Region)/Frequency plan: Get it from SenseCAP Mate App")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Sensor Frequency")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Common Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EU863-870"),(0,r.kt)("td",{parentName:"tr",align:null},"EU868"),(0,r.kt)("td",{parentName:"tr",align:null},"Europe 863-870 MHz (SF9 for RX2 -recommended)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"US902-928"),(0,r.kt)("td",{parentName:"tr",align:null},"US915"),(0,r.kt)("td",{parentName:"tr",align:null},"United States 902-928 MHz, FSB 2 (used by TTN)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AU915-928"),(0,r.kt)("td",{parentName:"tr",align:null},"AU915"),(0,r.kt)("td",{parentName:"tr",align:null},"Australia 915-928 MHz, FSB 2 (used by TTN)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KR920-923"),(0,r.kt)("td",{parentName:"tr",align:null},"KR920"),(0,r.kt)("td",{parentName:"tr",align:null},"--------")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IN865-867"),(0,r.kt)("td",{parentName:"tr",align:null},"IN865"),(0,r.kt)("td",{parentName:"tr",align:null},"--------")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AS923"),(0,r.kt)("td",{parentName:"tr",align:null},"AS923-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Asia 920-923 MHZ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AS923-2"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Different countries and LoRaWAN network servers use different frequency plans. "),(0,r.kt)("p",null,"For Helium network, please refer to: "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://docs.helium.com/lorawan-on-helium/frequency-plans"},"https://docs.helium.com/lorawan-on-helium/frequency-plans")),"\t"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/017.png",alt:null})),(0,r.kt)("p",null,"(3) Configure \u2018Provisioning information\u2019."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/018.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JoinEUI: which means the ",(0,r.kt)("strong",{parentName:"li"},"APP EUI"),", you can get it from SenseCAP Mate App.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/019.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Device EUI/ App Key: Get it from the configuration page via SenseCAP Mate App. Like the below picture.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/020.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/021.png",alt:null})),(0,r.kt)("p",null,"(4) Register end device. "),(0,r.kt)("p",null,"After you finish the above items, Click the \u201cRegister end device\u201d to save your modification."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*","Note:")," If joining the network successfully, LED will ",(0,r.kt)("strong",{parentName:"p"},"flashes fast for 2s"),"."),(0,r.kt)("h2",{id:"check-data-on-ttn-console"},"Check Data on TTN Console"),(0,r.kt)("p",null,"On the Data page, data package is uploading. For the format of the payload, refer to the section of Payload Decoding."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/022.png",alt:null})))}c.isMDXComponent=!0}}]);