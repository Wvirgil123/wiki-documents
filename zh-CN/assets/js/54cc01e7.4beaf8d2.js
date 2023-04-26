"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"Grove - CO2 Sensor",title:"Grove - CO2 Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-CO2_Sensor",last_update:{date:"1/5/2023",author:"shuxu hu"}},a=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-CO2_Sensor",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-CO2_Sensor",title:"Grove - CO2 Sensor",description:"Grove - CO2 Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-CO2_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Grove-CO2_Sensor",permalink:"/zh-CN/Grove-CO2_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-CO2_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"2023\u5e741\u67085\u65e5",frontMatter:{description:"Grove - CO2 Sensor",title:"Grove - CO2 Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-CO2_Sensor",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Alcohol Sensor",permalink:"/zh-CN/Grove-Alcohol_Sensor"},next:{title:"Grove-VOC and eCO2 Gas Sensor(SGP30)",permalink:"/zh-CN/Grove-VOC_and_eCO2_Gas_Sensor-SGP30"}},l={},p=[{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Calibration",id:"calibration",level:2},{value:"Reference",id:"reference",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Grove_CO2_Sensor.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The Grove - CO2 Sensor module is infrared CO2 sensor high sensitivity and high resolution. Infrared CO2 sensor MH-Z16 Is a general-purpose, small sensors, the use of non-dispersive infrared (NDIR) Present in the principle of the air CO2 Detect, with good selectivity, oxygen- dependent, long life, built-in temperature sensor, temperature compensation, with UART output, easy to use. It can be widely used in HVAC and indoor air quality monitoring, industrial process monitoring and security, agriculture and livestock production process monitoring."),(0,o.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/4df5kaaKa6I",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("div",{class:"admonition warning"},(0,o.kt)("p",{class:"admonition-title"},"Caution"),"Note that the sensor value only reflects the approximated trend of gas concentration in a permissible error range. It DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.\n"))),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Measuring the range of 0-2000 parts per million (PPM)"),(0,o.kt)("li",{parentName:"ul"},"Resolution of 1 PPM 0-2000 parts per million (PPM)"),(0,o.kt)("li",{parentName:"ul"},"Accuracy of 200 PPM"),(0,o.kt)("li",{parentName:"ul"},"A Warm - up time 3 minutes"),(0,o.kt)("li",{parentName:"ul"},"Response Time ","<"," 90s"),(0,o.kt)("li",{parentName:"ul"},"Operating temperature 0 to 50\u2103"),(0,o.kt)("li",{parentName:"ul"},"Operating Humidity 0% ~ 90% RH"),(0,o.kt)("li",{parentName:"ul"},"Storage temperature - 20-60\u2103"),(0,o.kt)("li",{parentName:"ul"},"Operating Voltage4.5 V to 6 V DC"),(0,o.kt)("li",{parentName:"ul"},"The Current maximum Current of less than 100 ma, the average Current of less than 50 ma"),(0,o.kt)("li",{parentName:"ul"},"Output mode UART")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("p",null,"Connect the module with Grove Shield using like following picture and use the program below to gain the voltage."),(0,o.kt)("p",null,"Please note that the best preheat time of the sensor is about 180s. For the detailed information about the sensor, please refer to the datasheet."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/5.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/*\n  This test code is write for Arduino AVR Series(UNO, Leonardo, Mega)\n  If you want to use with LinkIt ONE, please connect the module to D0/1 and modify:\n\n  // #include <SoftwareSerial.h>\n  // SoftwareSerial s_serial(2, 3);      // TX, RX\n\n  #define sensor Serial1\n*/\n\n\n#include <SoftwareSerial.h>\nSoftwareSerial s_serial(2, 3);      // TX, RX\n\n#define sensor s_serial\n\nconst unsigned char cmd_get_sensor[] =\n{\n    0xff, 0x01, 0x86, 0x00, 0x00,\n    0x00, 0x00, 0x00, 0x79\n};\n\nunsigned char dataRevice[9];\nint temperature;\nint CO2PPM;\n \nvoid setup()\n{\n    sensor.begin(9600);\n    Serial.begin(115200);\n    Serial.println("get a \'g\', begin to read from sensor!");\n    Serial.println("********************************************************");\n    Serial.println();\n}\n \nvoid loop()\n{\n    if(dataRecieve())\n    {\n        Serial.print("Temperature: ");\n        Serial.print(temperature);\n        Serial.print("  CO2: ");\n        Serial.print(CO2PPM);\n        Serial.println("");\n    }\n    delay(1000);\n}\n \nbool dataRecieve(void)\n{\n    byte data[9];\n    int i = 0;\n \n    //transmit command data\n    for(i=0; i<sizeof(cmd_get_sensor); i++)\n    {\n        sensor.write(cmd_get_sensor[i]);\n    }\n    delay(10);\n    //begin reveiceing data\n    if(sensor.available())\n    {\n        while(sensor.available())\n        {\n            for(int i=0;i<9; i++)\n            {\n                data[i] = sensor.read();\n            }\n        }\n    }\n \n    for(int j=0; j<9; j++)\n    {\n        Serial.print(data[j]);\n        Serial.print(" ");\n    }\n    Serial.println("");\n \n    if((i != 9) || (1 + (0xFF ^ (byte)(data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]))) != data[8])\n    {\n        return false;\n    }\n    \n    CO2PPM = (int)data[2] * 256 + (int)data[3];\n    temperature = (int)data[4] - 40;\n \n    return true;\n}\n')),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/img/Uart_co2.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"calibration"},"Calibration"),(0,o.kt)("p",null,"If you need to calibrate the sensor, please upload below code to your Arduino. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Grove - Co2 Sensor calibration\n\n#include <SoftwareSerial.h>\nSoftwareSerial sensor(A5, A4);      // TX, RX\n\n\nconst unsigned char cmd_calibrate[] = \n{\n    0xff, 0x87, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0xf2\n};\n\nvoid setup()\n{\n    sensor.begin(9600);\n    Serial.begin(115200);\n    Serial.println("begin to calibrate");\n    \n    for(int i=0; i<sizeof(cmd_calibrate); i++)\n    {\n        sensor.write(cmd_calibrate[i]);\n    }\n    \n    Serial.println("calibrate done");\n}\n\nvoid loop()\n{\n    // nothing to do\n}\n')),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"Please preheat the sensor for at least 5 minutes before calibrating and make sure the sensor in fresh air. \n"))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"350~450ppm: General outdoor environment"),(0,o.kt)("li",{parentName:"ul"},"350~1000ppm\uff1aThe air is fresh and breathing smooth"),(0,o.kt)("li",{parentName:"ul"},"1000~2000ppm\uff1aThe air was stagnant and feel asleep"),(0,o.kt)("li",{parentName:"ul"},"5000ppm\uff1aPermissible exposure limit for an 8h work day")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/res/MH-Z16_CO2.pdf"},"MH-Z16","_","CO2 datasheet","_","ZH","_","CN.pdf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-CO2_Sensor/res/MH-Z16_CO2_datasheet_EN.pdf"},"MH-Z16","_","CO2 datasheet","_","EN.pdf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.blm.gov/style/medialib/blm/wy/information/NEPA/cfodocs/howell.Par.2800.File.dat/25apxC.pdf"},"Health Risk Evaluation for Carbon Dioxide"))),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LoRa IoTea"),": An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed",width:"350"}),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);