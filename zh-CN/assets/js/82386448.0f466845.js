"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={description:"Xadow - UV Sensor",title:"Xadow - UV Sensor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_UV_Sensor",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_UV_Sensor",id:"Seeed_Elderly/Xadow/Xadow_UV_Sensor",title:"Xadow - UV Sensor",description:"Xadow - UV Sensor",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_UV_Sensor.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_UV_Sensor",permalink:"/zh-CN/Xadow_UV_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_UV_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - UV Sensor",title:"Xadow - UV Sensor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_UV_Sensor",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Storage",permalink:"/zh-CN/Xadow_Storage"},next:{title:"Xadow - Vibrator Motor",permalink:"/zh-CN/Xadow_Vibrator_Motor"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Reference",id:"reference",level:2},{value:"UV Sensor I2C Address",id:"uv-sensor-i2c-address",level:3},{value:"spectral response curve of UV Sensor",id:"spectral-response-curve-of-uv-sensor",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/xadow%20uv.jpg",alt:null})),(0,o.kt)("p",null,"Xadow UV Sensor is suitable for measuring the UV radiation in sunlight. It can detect the UV wavelength of 290 ~ 400 nm. The UV Sensor is outputting digital voltage value corresponding to UV light intensity. With the diagram of output voltage and UV, we can easy to know the current UV index. The Xadow UV Sensor can be powered by 3.3V. And it is compatible with Xadow system."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-UV-Sensor-p-1694.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can detect UV-A and UV-B Brand"),(0,o.kt)("li",{parentName:"ul"},"UV wavelength detect: 290 ~ 400nm"),(0,o.kt)("li",{parentName:"ul"},"Maximum-sensitivity wave length: 330nm"),(0,o.kt)("li",{parentName:"ul"},"Built-in ADC circuit, high convert accuracy"),(0,o.kt)("li",{parentName:"ul"},"Test Accuracy: \xb10.1 UV Index"),(0,o.kt)("li",{parentName:"ul"},"Operating temperature: -25 ~ 70 \u2103"),(0,o.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Xadow UV Sensor can output a voltage value corresponding to UV index. Because there is a linear relationship between the output voltage and UV index, you can also directly see UV index with a formula. Next we show how to use UV sensor to know the UV index and display it on the OLED screen."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Installation")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"When connect Xadow UV Sensor to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download Code")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now you can upload it to Xadow Main Board by copying and pasting them into Arduino IDE.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#include &lt;Wire.h&gt;\n#include &lt;SeeedOLED.h&gt;\n#include &lt;Streaming.h&gt;\n\n#define ADDR_ADC121    0x5A\n\n#define V_REF 3.00\n\n#define REG_ADDR_RESULT         0x00\n#define REG_ADDR_ALERT          0x01\n#define REG_ADDR_CONFIG         0x02\n#define REG_ADDR_LIMITL         0x03\n#define REG_ADDR_LIMITH         0x04\n#define REG_ADDR_HYST           0x05\n#define REG_ADDR_CONVL          0x06\n#define REG_ADDR_CONVH          0x07\n\nunsigned int getData;\nfloat analogVal=0;\nfloat UVIndex = 0;\nvoid init_adc()\n{\n    Wire.beginTransmission(ADDR_ADC121);        // transmit to device\n    Wire.write(REG_ADDR_CONFIG);                // Configuration Register\n    Wire.write(0x20);\n    Wire.endTransmission();\n}\nvoid setup()\n{\n    Wire.begin();\n    Serial.begin(38400);\n    SeeedOled.init();  //initialize SEEED OLED display\n    SeeedOled.clearDisplay();  // clear the screen and set start position to top left corner\n\n    init_adc();\n}\n\nvoid loop()\n{\n    readVoltage();\n    //SeeedOled.clearDisplay();\n    SeeedOled.setTextXY(1,0);\n    SeeedOled.putString("Voltage: ");\n    SeeedOled.setTextXY(1,8);\n    SeeedOled.putFloat(analogVal);\n    SeeedOled.setTextXY(1,12);\n    SeeedOled.putString("mV");\n    SeeedOled.setTextXY(2,0);\n    SeeedOled.putString("UVIndex: ");\n    SeeedOled.setTextXY(2,8);\n    SeeedOled.putFloat(UVIndex);\n    delay(50);\n}\nvoid readVoltage()     //unsigned int *data\n{\n    Wire.beginTransmission(ADDR_ADC121);        // transmit to device\n    Wire.write(REG_ADDR_RESULT);                // get result\n    Wire.endTransmission();\n\n    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device\n    delay(1);\n    if(Wire.available()&lt;=2)\n    {\n        getData = (Wire.read()&amp;0x0f)&lt;&lt;8;\n        getData |= Wire.read();\n    }\n    delay(50);\n    analogVal = getData*V_REF/4096/2;\n    Serial.print("analogVal:");\n    Serial.print(analogVal);\n    Serial.println("mV");\n    UVIndex = analogVal/9.71;\n    Serial.print("UVIndex:");\n    Serial.println(UVIndex);\n\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open the serial monitor, the voltage value and UV index are showing:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can see on the OLED screen:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Figuring out the UV index is not a different matter by referring to the below diagram."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Voltage_and_UVI.jpg",alt:null})),(0,o.kt)("p",null,"About the Xadow UV Sensor, we use a resistance which resistance value is 3M, so you need refer to this line for RL=3M."),(0,o.kt)("p",null,"It is linear observing the relationship between voltage and UV. And the formula by calculated can be gotten: UV Index = Voltage/9.71 which has been used in code."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"uv-sensor-i2c-address"},"UV Sensor I2C Address"),(0,o.kt)("p",null,"The Xadow UV Sensor has a seven-bit hardware address which is referred to as a slave address. And the slave address is configured by the ADR0 and ADR1 address selection inputs. ADR0 and ADR1 can be low level, left floating, or tied to high level.The state of these inputs sets the hardware address that the module responds to on the I2C bus (see the below Table)."),(0,o.kt)("table",{cellspacing:"0",width:"50%"},(0,o.kt)("tr",null,(0,o.kt)("th",{rowspan:"2",scope:"col"},"  Slave Address[A6 - A0]"),(0,o.kt)("th",{colspan:"2",scope:"col"}," ADR0 and ADR1 inputs state")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"col"}," ADR1"),(0,o.kt)("td",{scope:"col"}," ADR0")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"}," 1010000(0x50)"),(0,o.kt)("td",null,"Floating"),(0,o.kt)("td",null,"Floating")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"}," 1010001(0x51)"),(0,o.kt)("td",null," Floating"),(0,o.kt)("td",null," L")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"}," 1010010(0x52)"),(0,o.kt)("td",null," Floating"),(0,o.kt)("td",null," H")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"}," 1010100(0x54)"),(0,o.kt)("td",null," L"),(0,o.kt)("td",null," Floating")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"}," 1010101(0x55)"),(0,o.kt)("td",null,"L"),(0,o.kt)("td",null,"L")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"}," 1010110(0x56)"),(0,o.kt)("td",null," L"),(0,o.kt)("td",null," H")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"}," 1011000(0x58)"),(0,o.kt)("td",null," H"),(0,o.kt)("td",null," Floating")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"}," 1011001(0x59)"),(0,o.kt)("td",null," H"),(0,o.kt)("td",null," L")),(0,o.kt)("tr",null,(0,o.kt)("td",{scope:"row"},"1011010(default 0x5A)"),(0,o.kt)("td",null," H"),(0,o.kt)("td",null," H"))),(0,o.kt)("p",null,'In default mode, ADR0 and ADR1 are connected to "H"(see the Xadow UV Sensor)'),(0,o.kt)("h3",{id:"spectral-response-curve-of-uv-sensor"},"spectral response curve of UV Sensor"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/img/Responsivity.jpg",alt:null})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_UV_Sensor/res/Xadow_UV_Sensor_Eagle_File.zip"},"Xadow UV Sensor Eagle File")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);