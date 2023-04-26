"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={description:"RS485 500cm Ultrasonic Level Sensor",title:"RS485 500cm Ultrasonic Level Sensor",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"3/28/2023",author:"Yvonne"}},s="RS485 500cm Ultrasonic Level Sensor",i={unversionedId:"Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor",id:"Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor",title:"RS485 500cm Ultrasonic Level Sensor",description:"RS485 500cm Ultrasonic Level Sensor",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Probe",slug:"/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor",permalink:"/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1679961600,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{description:"RS485 500cm Ultrasonic Level Sensor",title:"RS485 500cm Ultrasonic Level Sensor",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"3/28/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Soil Moisture & Temperature Sensor",permalink:"/Sensor/SenseCAP/SenseCAP_Probe/Soil-Moisture-Temperature-Sensor"},next:{title:"RS485 750cm Ultrasonic Level Sensor",permalink:"/RS485_750cm_Ultrasonic_Sensor-1"}},l={},c=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Materials required",id:"materials-required",level:5},{value:"1. Prepare data logger, RS485 500cm Ultrasonic Level Sensor, gateway, and tools.",id:"1-prepare-data-logger-rs485-500cm-ultrasonic-level-sensor-gateway-and-tools",level:2},{value:"2. Network Architecture",id:"2-network-architecture",level:3},{value:"3. Connect RS485 500cm Ultrasonic Level Sensor to SenseCAP Data Logger",id:"3-connect-rs485-500cm-ultrasonic-level-sensor-to-sensecap-data-logger",level:3},{value:"4. Configure Settings for Data Logger and RS485 500cm Ultrasonic Level Sensor Communication",id:"4-configure-settings-for-data-logger-and-rs485-500cm-ultrasonic-level-sensor-communication",level:3},{value:"How to import template",id:"how-to-import-template",level:4},{value:"5. Upload the data to SenseCAP Portal and Mate App",id:"5-upload-the-data-to-sensecap-portal-and-mate-app",level:3},{value:"6. Test the sensor in a real environment.",id:"6-test-the-sensor-in-a-real-environment",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rs485-500cm-ultrasonic-level-sensor"},"RS485 500cm Ultrasonic Level Sensor"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png"})),(0,r.kt)("p",null,"The RS485 500cm Ultrasonic Level Sensor offers high precision and has a measuring range of 25 to 500cm. It utilizes advanced ultrasonic sensing technology to deliver accurate distance measurements with a resolution of up to 1mm. We also provide serial port tools for parameter configuration and firmware upgrades to ensure seamless operation, making it ideal for a variety of applications, including horizontal ranging, intelligent trash can management systems, robot avoidance, and automatic control."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png",border:"0"}))),(0,r.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.kt)("p",null,"With the SenseCAP\xa0S2100 ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products"},"data logger"),", you can easily turn this sensor into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.kt)("h1",{id:"play-with-s2100-lorawan-data-logger"},"Play with S2100 LoRaWAN Data Logger"),(0,r.kt)("p",null,"On this page, we'll guide you through the process of connecting the S2100 LoRaWAN Data Logger with a 500cm Ultrasonic Level Sensor, enabling you to create a robust, industrial-grade LoRaWAN wireless sensor that can be used commercially in just five minutes."),(0,r.kt)("h2",{id:"get-started"},"Get Started"),(0,r.kt)("h3",{id:"preparation"},"Preparation"),(0,r.kt)("h4",{id:"hardware"},"Hardware"),(0,r.kt)("h5",{id:"materials-required"},"Materials required"),(0,r.kt)("table",{align:"center"},(0,r.kt)("tr",null,(0,r.kt)("th",null,"SenseCAP S2100 Data Logger"),(0,r.kt)("th",null,"500cm Ultrasonic Level Sensor"),(0,r.kt)("th",null,"Cross screwdriver")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png",style:{width:500,height:"auto"}}))),(0,r.kt)("td",null,(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png",style:{width:500,height:"auto"}}))),(0,r.kt)("td",null,(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png",style:{width:500,height:"auto"}})))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,r.kt)("td",null,(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html?queryID=b2f7f18dfc97aa5f70b2a759a49a00ab&objectID=5588&indexName=bazaar_retailer_products"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))))),(0,r.kt)("h2",{id:"1-prepare-data-logger-rs485-500cm-ultrasonic-level-sensor-gateway-and-tools"},"1. Prepare data logger, RS485 500cm Ultrasonic Level Sensor, gateway, and tools."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data logger"),": It is a LoRaWAN converter that converts MODBUS RS485/Analog/GPIO sensors into LoRa-enabled sensors and therefore transfers data through the LoRaWAN protocol.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RS485 500cm Ultrasonic Level Sensor"),": It uses ultrasonic sensing technology for distance measurement. Measuring range from 25cm to 500cm, and the resolution can reach 1mm. With an IP67 waterproof ultrasonic transducer, it has strong adaptability to the working environment.\xa0")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cross screwdriver"),": Used to assemble the sensor probe.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gateway"),": The LoRaWAN sensor transmits data to a LoRaWAN gateway, which then transmits it to the cloud server. If you don't have a gateway, there are two options:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Option 1: Sensors work in areas covered by Helium Network(Check on\xa0",(0,r.kt)("a",{parentName:"li",href:"https://explorer.helium.com/"},"Helium Explorer"),"). Wherever the helium network is available, you can use sensors to transfer data without purchasing a gateway."),(0,r.kt)("li",{parentName:"ul"},"Option 2: Buy a\xa0",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html"},"gateway"),".")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Download the\xa0SenseCAP Mate App\xa0for configuration:")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:250,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"})),(0,r.kt)("div",{align:"center"},"SenseCAP Mate App iOS&Android"),(0,r.kt)("p",null,"The preparation is done. Let's get started!"),(0,r.kt)("h3",{id:"2-network-architecture"},"2. Network Architecture"),(0,r.kt)("p",null,"Let's start with LoRaWAN's networking.\nThe data logger converts sensor data into LoRa data and uploads the data to the gateway. The gateway uploads the data to the server."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"})),(0,r.kt)("h3",{id:"3-connect-rs485-500cm-ultrasonic-level-sensor-to-sensecap-data-logger"},"3. Connect RS485 500cm Ultrasonic Level Sensor to SenseCAP Data Logger"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1:")," Uncrew the three screws on the data logger")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2:")," Remove the bottom cover and take out the inside PCBA until the screw terminals are accessible. You do not need to take out the entire board")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3:")," Remove the thread cap by unscrewing in clockwise counter-clockwise direction")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4:")," Pass the included cable through the thread cap and the bottom cover")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5:")," Connect the wires of the cable into the screw terminal as follows")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips"),": If you are using another protocol, such as 4-20mA, please refer to the pin table:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"})),(0,r.kt)("p",null,"Wire sequence of the RS485 500cm Ultrasonic Level Sensor:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2024.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2010.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6:")," Put back the hardware unit inside the case, close it from bottom cover and screw it back")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 7:")," Tighten the thread cap and secure the cable in place")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"})),(0,r.kt)("p",null,"Once all the connections are done for the Ultrasonic Level Sensor and the Data Logger, it should look like below"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2013.png"})),(0,r.kt)("h3",{id:"4-configure-settings-for-data-logger-and-rs485-500cm-ultrasonic-level-sensor-communication"},"4. Configure Settings for Data Logger and RS485 500cm Ultrasonic Level Sensor Communication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1:")," Select ",(0,r.kt)("strong",{parentName:"li"},"S2100 Data Logger")," and Click ",(0,r.kt)("strong",{parentName:"li"},"Setup")," on the config page.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2:")," Press the button and hold for\xa0",(0,r.kt)("strong",{parentName:"li"},"3")," seconds,\xa0the green LED will flash at 1s frequency. Then click ",(0,r.kt)("strong",{parentName:"li"},"Scan")," to start scanning the data logger's Bluetooth.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3:")," Configure the LoRaWAN and sensor parameters(including RS485 Modbus-RTU command).")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"})),(0,r.kt)("h4",{id:"how-to-import-template"},"How to import template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1:"),"Please click this template link and choose your browser to download it.\n(",(0,r.kt)("a",{parentName:"p",href:"http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270"},"http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2:"),' Tap "\u2795" in the upper right corner, select "import Template", then select the downloaded file, and the template will be imported.'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Click Send and Test the sensor by clicking ",(0,r.kt)("strong",{parentName:"p"},"Measure")))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2017.png"})),(0,r.kt)("p",null,"The distance and temperature of the sensor are obtained successfully!"),(0,r.kt)("h3",{id:"5-upload-the-data-to-sensecap-portal-and-mate-app"},"5. Upload the data to SenseCAP Portal and Mate App"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1:")," Go back to the app home page and Data Logger Red LEDs will start blinking for a couple of seconds followed by Green LEDs blinking for a brief amount of time to indicate that the LoRaWAN connection is successful and the data is sent. Alternatively you can click the button on the data logger once, to force this data sending.\nBefore uploading data, make sure the gateway is working properly or has helium network coverage.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"})),(0,r.kt)("p",null,"Now we need to add this sensor to SenseCAP platform in order to view the data on the cloud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2:")," Binding the data logger via scanning the QR code.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3:")," Check the data on App and Portal.(",(0,r.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cc/"},"https://sensecap.seeed.cc/"),")")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"})),(0,r.kt)("h3",{id:"6-test-the-sensor-in-a-real-environment"},"6. Test the sensor in a real environment."),(0,r.kt)("p",null,"Fast application to the outdoor real scene for long-term monitoring."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2020.png"})),(0,r.kt)("p",null,"At present, a LoRaWAN sensor has been developed."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RS485-Ultrasonic-Level-Sensor/RS485-500cm-Ultrasonic-Level-Sensor.pdf"},"RS485 500cm Ultrasonic Level Sensor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf"},"SenseCAP S2100 Data Logger User Guide"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);