"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={description:"Seeeduino Ethernet",title:"Seeeduino Ethernet",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Ethernet",last_update:{date:"1/31/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino_Ethernet",id:"Sensor/Seeeduino Series/Seeeduino_Ethernet",title:"Seeeduino Ethernet",description:"Seeeduino Ethernet",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino_Ethernet.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino_Ethernet",permalink:"/Seeeduino_Ethernet",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino_Ethernet.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Seeeduino Ethernet",title:"Seeeduino Ethernet",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Ethernet",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino Cortex M0",permalink:"/Seeeduino-Cortex-M0"},next:{title:"Seeeduino GPRS",permalink:"/Seeeduino_GPRS"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Step 1: Install the Hardware",id:"step-1-install-the-hardware",level:3},{value:"Step 2: Programing",id:"step-2-programing",level:3},{value:"Step 3: Download the program",id:"step-3-download-the-program",level:3},{value:"Step 4: Result testing",id:"step-4-result-testing",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-2.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,"Seeeduino Ethernet is a compact and multifunctional development platform, which merges data logging and processing, device control and Ethernet communication together into one. It's armed with a MEGA328P chip and a Wiz5100: the former provides an Arduino controlling style and the latter provides TCP and UDP Ethernet communication ability. Plus integrated SD card module, it's convenient and neat for remote data logging, processing or transferring via network."),(0,i.kt)("p",null,"In this version, we lowered the height of RJ45 to balance it with the headers. Besides, with an I2C and a UART Grove port populated,it's convenient to connect corresponding Grove modules to this board."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Ethernet-p-1231.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:"enter image description here"}))),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Voltage: 6.2-13V")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Current: 140-550mA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supported Card Type: Micro SD card(",(0,i.kt)("font",{color:"red"},(0,i.kt)("strong",{parentName:"p"},"must be SanDisk")),"), FAT/FAT32 (More than 2G is not guaranteed)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supported Connection: TCP/UDP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Net Weight: 23\xb12g")),(0,i.kt)("li",{parentName:"ul"}),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ethernet jack: Standard RJ45"))),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We will test the Seeeduino Ethernet functions of writing or reading information from the SD Card and sending out A/D data to network.\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-1.jpg",alt:"enter image description here"})),(0,i.kt)("h3",{id:"step-1-install-the-hardware"},"Step 1: Install the Hardware"),(0,i.kt)("p",null,"Firstly, install the hardware. We have two alternatives to plug in the power."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method 1"),": You can use one ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/passive-poe-cable-set-p-1175.html?cPath=207"},"Passive PoE Cable Set")," to provide power and Ethernet connection at the same time like the picture below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-3.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method 2"),":  Use separate power cable and Ethernet cable."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-4.jpg",alt:"enter image description here"})),(0,i.kt)("h3",{id:"step-2-programing"},"Step 2: Programing"),(0,i.kt)("p",null,"After hardware installation, here we continue to try the test code.\nThis program is written to test the functions of writing or reading data from the SD Card and sending out A/D data to network.\nThis demo code can be used as a test program as well as reference if you wanna explore more functions of the board."),(0,i.kt)("font",{color:"red"},"NOTICE: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'All the ".h" file needed have been pre-installed in Arduino IDE(1.0).')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install a Micro SD card. Make sure the Micro SD card is not full and the format is FAT or FAT32."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/*\n  SD card read/write\n\n This example shows how to read and write data to and from an SD card file\n The circuit:\n * SD card attached to SPI bus as follows:\n ** MOSI - pin 11\n ** MISO - pin 12\n ** CLK - pin 13\n ** CS - pin 4\n\n   Web Server\n\n A simple web server that shows the value of the analog input pins.\n using an Arduino Wiznet Ethernet shield.\n\n Circuit:\n * Ethernet shield attached to pins 10, 11, 12, 13\n * Analog inputs attached to pins A0 through A5 (optional)\n\n created 18 Dec 2009\n by David A. Mellis\n modified 4 Sep 2010\n by Tom Igoe\n\n */\n\n#include <SD.h>\n#include <SPI.h>\n#include <Ethernet.h>\n\n// Enter a MAC address and IP address for your controller below.\n// The IP address will be dependent on your local network:\nbyte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };\nIPAddress ip(192,168,1,177);\n\n// Initialize the Ethernet server library\n// with the IP address and port you want to use\n// (port 80 is default for HTTP):\nEthernetServer server(80);\n\nFile myFile;\n\nvoid setup()\n{\n    Serial.begin(9600);\n    Serial.print("Initializing SD card...");\n    // On the Ethernet Shield, CS is pin 4. It\'s set as an output by default.\n    // Note that even if it\'s not used as the CS pin, the hardware SS pin\n    // (10 on most Arduino boards, 53 on the Mega) must be left as an output\n    // or the SD library functions will not work.\n    pinMode(10, OUTPUT);\n    // pinMode(4,OUTPUT);\n    if (!SD.begin(4)) {\n        Serial.println("initialization failed!");\n        return;\n    }\n    Serial.println("initialization done.");\n\n    // open the file. note that only one file can be open at a time,\n    // so you have to close this one before opening another.\n\n    myFile = SD.open("test.txt",FILE_WRITE);\n    // if the file opened or created okay, write to it:\n    if (myFile) {\n        Serial.print("Writing to test.txt...");\n        myFile.println("testing 1, 2, 3.");\n        // close the file:\n        myFile.close();\n        Serial.println("done.");\n    } else {\n        // if the file didn\'t open, print an error:\n        Serial.println("error opening test.txt");\n    }\n\n    // re-open the file for reading:\n    myFile = SD.open("test.txt");\n    if (myFile) {\n        Serial.println("test.txt:");\n\n        // read from the file until there\'s nothing else in it:\n        while (myFile.available()) {\n            Serial.write(myFile.read());\n        }\n        // close the file:\n        myFile.close();\n    } else {\n        // if the file didn\'t open, print an error:\n        Serial.println("error opening test.txt");\n    }\n    // start the Ethernet connection and the server:\n    Ethernet.begin(mac, ip);\n    server.begin();\n}\nunsigned char buff[6];\nvoid loop()\n{\n    EthernetClient client = server.available();\n    if (client) {\n        // an http request ends with a blank line\n        boolean currentLineIsBlank = true;\n        while (client.connected()) {\n            if (client.available()) {\n                char c = client.read();\n                // if you\'ve gotten to the end of the line (received a newline\n                // character) and the line is blank, the http request has ended,\n                // so you can send a reply\n                if (c == \'\\n\' && currentLineIsBlank) {\n                    // send a standard http response header\n                    client.println("HTTP/1.1 200 OK");\n                    client.println("Content-Type: text/html");\n                    client.println();\n\n                    // output the value of each analog input pin\n                    for (int analogChannel = 0; analogChannel < 6; analogChannel++) {\n                        client.print("analog input ");\n                        client.print(analogChannel);\n                        client.print(" is ");\n                        client.print(analogRead(analogChannel));\n                        client.println("<br />");\n                        buff[analogChannel] = analogRead(analogChannel);\n                    }\n                    break;\n                }\n                if (c == \'\\n\') {\n                    // you\'re starting a new line\n                    currentLineIsBlank = true;\n                }\n                else if (c != \'\\r\') {\n                    // you\'ve gotten a character on the current line\n                    currentLineIsBlank = false;\n                }\n            }\n        }\n        // give the web browser time to receive the data\n        delay(1);\n        // close the connection:\n        client.stop();\n        myFile = SD.open("test.txt", FILE_WRITE);\n        if (myFile) {\n            Serial.println("test.txt:");\n            for (int analogChannel = 0; analogChannel < 6; analogChannel++) {\n                myFile.print("analog input ");\n                myFile.print(analogChannel);\n                myFile.print(" is ");\n                myFile.println(analogRead(analogChannel));\n            }\n            // read from the file until there\'s nothing else in it:\n            myFile.close();\n        }\n        else {\n            // if the file didn\'t open, print an error:\n            Serial.println("error opening test.txt");\n        }\n\n        myFile = SD.open("test.txt");\n        if (myFile) {\n            Serial.println("test.txt:");\n\n            // read from the file until there\'s nothing else in it:\n            while (myFile.available()) {\n                Serial.write(myFile.read());\n            }\n            // close the file:\n            myFile.close();\n        }\n        else {\n            // if the file didn\'t open, print an error:\n            Serial.println("error opening test.txt");\n        }\n    }\n}\n')),(0,i.kt)("h3",{id:"step-3-download-the-program"},"Step 3: Download the program"),(0,i.kt)("p",null,"Because there is no USB connector on the board. Seeeduino Ethernet requires a ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109"},"UartSBee")," to download the program."),(0,i.kt)("p",null,"Connect the UartSBee to Seeeduino Ethernet as below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-11.jpg",alt:"enter image description here"})),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduino_ethernet-5.jpg",alt:"enter image description here"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please select Seeeduino V3.0 as board in tool menu to download the program.")),(0,i.kt)("h3",{id:"step-4-result-testing"},"Step 4: Result testing"),(0,i.kt)("font",{color:"red"},"NOTICE:")," Make sure the Seeeduino Ethernet and your computer are in the same local area network. After the program was downloaded, open the Serial Monitor. You will check the status of the board.",(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Seeeduinoethernet-9.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,"Open a web browser and enter the web address:192.168.1.177, then you can check the data sent out by Seeeduino Ethernet:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/img/Ethernet_shield2.jpg",alt:"enter image description here"})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeed_Ethernet_Source_Files.zip"},"Seeeduino Ethernet Eagle Files"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Ethernet/res/Seeeduino_Ethernet_.pdf"},"Seeeduino Ethernet Schematic.pdf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This documentation is licensed under the Creative Commons ",(0,i.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/3.0/"},"Attribution-ShareAlike License 3.0"),". Source code and libraries are licensed under ",(0,i.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl.html"},"GPL/LGPL"),", see source code files for details.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Please reformat SD card to FAT/FTA32 .If it still can't work ,suggest to download the ",(0,i.kt)("a",{parentName:"p",href:"https://www.sdcard.org/downloads/formatter_3/"},"SD Formatter")," and reformat SD card by this software."))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);