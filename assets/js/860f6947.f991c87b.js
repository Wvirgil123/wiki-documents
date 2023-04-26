"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50244],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?r.createElement(h,n(n({ref:t},d),{},{components:a})):r.createElement(h,n({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const i={title:"Grove - Serial MP3 Player",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Serial_MP3_Player/",slug:"/Grove-Serial_MP3_Player",last_update:{date:"01/09/2022",author:"gunengyu"}},n=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Serial_MP3_Player",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Serial_MP3_Player",title:"Grove - Serial MP3 Player",description:"Grove-Serial MP3 Player is a kind of simple MP3 player device whose design is based on a high-quality MP3 audio chip---WT5001. It can support 8KHZ~44.1kHZ sampling frequency MP3 and WAV file formats. This product has several peripheral ports: a standard UART Grove interface, a dual track headphone jack, an external interface and also a Micro SD card interface. You can control the MP3 playback state by sending commands to module via serial port tools, such as switch songs, change the volume and play mode and so on. It seems a simple module, but it owns such strong function. Want to know how the sound quality is? Please come and experience it!",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Serial_MP3_Player.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Serial_MP3_Player",permalink:"/Grove-Serial_MP3_Player",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Serial_MP3_Player.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - Serial MP3 Player",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Serial_MP3_Player/",slug:"/Grove-Serial_MP3_Player",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Optocoupler Relay (M281)",permalink:"/Grove-Optocoupler_Relay-M281"},next:{title:"Grove - Servo",permalink:"/Grove-Servo"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"References",id:"references",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3sensor_02.jpg",alt:null}))),(0,o.kt)("p",null,"Grove-Serial MP3 Player is a kind of simple MP3 player device whose design is based on a high-quality MP3 audio chip---WT5001. It can support 8KHZ~44.1kHZ sampling frequency MP3 and WAV file formats. This product has several peripheral ports: a standard UART Grove interface, a dual track headphone jack, an external interface and also a Micro SD card interface. You can control the MP3 playback state by sending commands to module via serial port tools, such as switch songs, change the volume and play mode and so on. It seems a simple module, but it owns such strong function. Want to know how the sound quality is? Please come and experience it!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Standard Grove interface"),(0,o.kt)("li",{parentName:"ul"},"Asynchronous serial port control play mode"),(0,o.kt)("li",{parentName:"ul"},"Busy Indicator"),(0,o.kt)("li",{parentName:"ul"},"Reset Button"),(0,o.kt)("li",{parentName:"ul"},"Standard Micro SD card Interface"),(0,o.kt)("li",{parentName:"ul"},"Support FAT16 and FAT32 file system")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3_interface.jpg",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2460\uff1aLeft Channel Grove Interface."),(0,o.kt)("li",{parentName:"ul"},"\u2461\uff1aHeadset Interface:3.5mm headphones"),(0,o.kt)("li",{parentName:"ul"},"\u2462\uff1aRight Channel Grove Interface."),(0,o.kt)("li",{parentName:"ul"},"\u2463\uff1aWT5001"),(0,o.kt)("li",{parentName:"ul"},"\u2464\uff1aLED Indicator\uff1aLED is on when music is playing."),(0,o.kt)("li",{parentName:"ul"},"\u2465\uff1aUART Grove Interface"),(0,o.kt)("li",{parentName:"ul"},"\u2466\uff1aSD Card: micro SD Card(\u22642GB)")),(0,o.kt)("h2",{id:"play-with-arduino"},"Play With Arduino"),(0,o.kt)("h3",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,"The Grove - Serial MP3 Play can be controlled by Arduino/Seeeduino. And there is a Serial_MP3 test code for you to use. I believe you can easily get started. For more detailed information, please refer to the following description. The hardware installation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect Grove - Serial MP3 Play to the Digital 2 port of Arduino/Seeeduino, Notice that you can change the pin number as you like, just make sure corresponding changes the code. Then connect your Arduino/Seeeduino to PC with a USB cable."),(0,o.kt)("li",{parentName:"ul"},"Plug a earphone into Grove - Serial MP3 Play. Now the hardware part has been completed.")),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Download the  ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player"},"Grove-MP3 v2.0"),"  from Github."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Refer ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," You can select ",(0,o.kt)("strong",{parentName:"li"},"Seeed_Serial_MP3_Player/examples/WT2003S_Terminal_Player")," example and upload to arduino. If you do not know how to upload the code, please check ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," We will see the info at COM terminal as below.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5.")," Please key in the related command to play the music.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The library supports AVR/SAMD/STM32F4 devices, both hardware and software serial as well.\n"))),(0,o.kt)("p",null,"There are 2 kinds of serial ports. One is COMSerial, stands for communication port(connecting with Grove-MP3 module). The other is ShowSerial, stands for serial info display port(connectiong with PC)."),(0,o.kt)("p",null,"Most of arduino boards have at least one Serial, some have multiple serials(Arduino Mega has 4 Serials). It communicates on digital pins 0 (RX) and 1 (TX) as well as with the computer via USB. So if you connect UART device on pin D0 and pin D1, you have to remove them before downloading program through USB. Or else it will cause upload fails. Sometimes you need more serial ports than the number of hardware serial ports available. If this is the case, you can use an Software Serial that uses software to emulate serial hardware. Software serial requires a lot of help from the Arduino controller to send and receive data, so it\u2019s not as fast or efficient as hardware serial. For more info about the Serial, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Serial/"},"Seeed Arduino Serial"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"AVR:")," For the below example, We define Software Serial as COMSerial(connectiong with Grove-MP3 module). NOT all the digital pins can be used for software serial. You can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/SoftwareSerial"},"Software Serial")," for detail pins. We define hardware Serial as ShowSerial(connecting with PC). If you use Arduino Mega, you can connect the hardware Serial to ShowSerial and the other Serial1/Serial2/Serial3 to COMSerial. So you can refer to AVR Mega setting.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"SAMD:")," For the below example, The SAMD does not support software serial. We use the hardware serial ",(0,o.kt)("strong",{parentName:"p"},"Serial1")," to commuincate with Grove-MP3 Module and ",(0,o.kt)("strong",{parentName:"p"},"SerialUSB")," to print message on PC.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"STM32F4:")," For the below example, We use the hardware serial ",(0,o.kt)("strong",{parentName:"p"},"Serial")," to commuincate with Grove-MP3 Module and ",(0,o.kt)("strong",{parentName:"p"},"SerialUSB")," to print message on PC."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"For more info about the Serial, please refer to [Seeed Arduino Serial](https://wiki.seeedstudio.com/Seeed_Arduino_Serial/).\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#ifdef __AVR__\n#include <SoftwareSerial.h>\nSoftwareSerial SSerial(2, 3); // RX, TX\n#define COMSerial SSerial\n#define ShowSerial Serial \n\nWT2003S<SoftwareSerial> Mp3Player;\n#endif\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n#define COMSerial Serial1\n#define ShowSerial SerialUSB \n\nWT2003S<Uart> Mp3Player;\n#endif\n\n#ifdef ARDUINO_ARCH_STM32F4\n#define COMSerial Serial\n#define ShowSerial SerialUSB \n\nWT2003S<HardwareSerial> Mp3Player;\n#endif\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now you can hear songs stored in your SD card. And in the playing mode, the D1 indicator is on. If in the pause mode, the indicator will blink. More experience is waiting for you\uff01")),(0,o.kt)("p",null,"There is another way to control MP3 play mode via serial tool.In this way, you need a ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=63_66"},"UartSBee")," to connect MP3 to PC. The hardware installation as shown below:\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Using_UartSBee_to_Control_MP3.jpg",alt:null})),(0,o.kt)("p",null,"After the connection is completed, open the serial tool to send commands. About the specific commands, please see the reference part!\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Serial_tool_to_send_commands.jpg",alt:null})),(0,o.kt)("p",null,"More experience is waiting for you\uff01"),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"Common Command Descriptions:"),(0,o.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col"},"Command Name"),(0,o.kt)("th",{scope:"col"},"Command Format"),(0,o.kt)("th",{scope:"col"},"Description")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"Pause"),(0,o.kt)("td",null,"7E 02 A3 7E"),(0,o.kt)("td",null,"The music will stop when you send this command at the first time. After resending this command, it will continue.")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"Stop"),(0,o.kt)("td",null,"7E 02 A4 7E"),(0,o.kt)("td",null,"This command is able to trigger play the next song, or trigger play the first one if the player is playing the last one.")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"Next"),(0,o.kt)("td",null,"7E 02 A5 7E"),(0,o.kt)("td",null,"This command is able to trigger play the next song, or trigger play the first one if the player is playing the last one.")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"Previous"),(0,o.kt)("td",null,"7E 02 A6 7E"),(0,o.kt)("td",null,"This command can trigger play the previous song. Sending this command can trigger playback to the last song when you are enjoying the first one.")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"Volume control"),(0,o.kt)("td",null,"7E 03 A7 1F 7E"),(0,o.kt)("td",null,"There are 32 volume levels from 00 to 31. 00 is mute, and 31 for the maximum volume.")),(0,o.kt)("tr",null,(0,o.kt)("th",{rowspan:"4",scope:"row"},"Assigned play mode"),(0,o.kt)("td",{rowspan:"4"},"7E 03 A9 XX 7E"),(0,o.kt)("td",null,"XX=00 means playing single without playback(default)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"XX=01 means the single repeated play mode")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"XX=02 means that it is all tracks repeated playback mode.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"XX=03 stands for random pattern."))),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip"},"Grove - Serial MP3 Play Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-Serial_MP3_Player.pdf"},"Grove - Serial MP3 Play Schematic in PDF format")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player"},"Demo code on github")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/WT5001_datasheet_V1.5.pdf"},"WT5001 Datasheet"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);