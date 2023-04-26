"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return n?r.createElement(c,l(l({ref:t},u),{},{components:n})):r.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",title:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_ESP32C3_Pin_Multiplexing",last_update:{date:"03/03/2023",author:"MengDu"}},l="Pin Multiplexing",o={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Pin_Multiplexing",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Pin_Multiplexing",title:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",description:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Pin_Multiplexing.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3",slug:"/XIAO_ESP32C3_Pin_Multiplexing",permalink:"/zh-CN/XIAO_ESP32C3_Pin_Multiplexing",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32C3/XIAO_ESP32C3_Pin_Multiplexing.md",tags:[],version:"current",lastUpdatedBy:"MengDu",lastUpdatedAt:1677801600,formattedLastUpdatedAt:"2023\u5e743\u67083\u65e5",frontMatter:{description:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",title:"Pin Multiplexing on Seeed Studio XIAO ESP32C3",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO_ESP32C3_Pin_Multiplexing",last_update:{date:"03/03/2023",author:"MengDu"}},sidebar:"ProductSidebar",previous:{title:"Bluetooth Usage on Seeed Studio XIAO ESP32C3",permalink:"/zh-CN/XIAO_ESP32C3_Bluetooth_Usage"},next:{title:"XIAO ESP32C3 accesses Home Assistant via ESPHome service",permalink:"/zh-CN/xiao-esp32c3-esphome"}},s={},p=[{value:"Digital",id:"digital",level:2},{value:"Digital as PWM",id:"digital-as-pwm",level:2},{value:"Analog",id:"analog",level:2},{value:"Serial",id:"serial",level:2},{value:"Regular method - choose one of USB serial or UART0 serial to use",id:"regular-method---choose-one-of-usb-serial-or-uart0-serial-to-use",level:3},{value:"Special way - use USB serial and UART0/UART1 at the same time",id:"special-way---use-usb-serial-and-uart0uart1-at-the-same-time",level:3},{value:"I2C",id:"i2c",level:2},{value:"Hardware connection",id:"hardware-connection",level:3},{value:"Software setup",id:"software-setup",level:3},{value:"SPI",id:"spi",level:2},{value:"Hardware connection",id:"hardware-connection-1",level:3},{value:"Software setup",id:"software-setup-1",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pin-multiplexing"},"Pin Multiplexing"),(0,a.kt)("p",null,"Seeed Studio XIAO ESP32C3 has rich interfaces. There are ",(0,a.kt)("strong",{parentName:"p"},"11 digital I/O")," that can be used as ",(0,a.kt)("strong",{parentName:"p"},"PWM pins")," and ",(0,a.kt)("strong",{parentName:"p"},"4 analog inputs")," that can be used as ",(0,a.kt)("strong",{parentName:"p"},"ADC pins"),". It supports four serial communication interfaces such as ",(0,a.kt)("strong",{parentName:"p"},"UART, I2C, SPI and I2S"),". This wiki will be helpful to learn about these interfaces and implement them in your next projects!"),(0,a.kt)("h2",{id:"digital"},"Digital"),(0,a.kt)("p",null,"Connect a pushbutton to Pin D6 and an LED to Pin D10. Then upload the following code to control the ON/OFF of LED using the pushbutton."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"const int buttonPin = D6;     // pushbutton connected to digital pin 6\nconst int ledPin =  D10;      // LED connected to digital pin 10\n \nint buttonState = 0;         // variable for reading the pushbutton status\n \nvoid setup() {\n  // initialize the LED pin as an output:\n  pinMode(ledPin, OUTPUT);\n  // initialize the pushbutton pin as an input:\n  pinMode(buttonPin, INPUT);\n}\n \nvoid loop() {\n  // read the state of the pushbutton value:\n  buttonState = digitalRead(buttonPin);\n \n  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:\n  if (buttonState == HIGH) {\n    // turn LED on:\n    digitalWrite(ledPin, HIGH);\n  } else {\n    // turn LED off:\n    digitalWrite(ledPin, LOW);\n  }\n}\n")),(0,a.kt)("h2",{id:"digital-as-pwm"},"Digital as PWM"),(0,a.kt)("p",null,"Connect an LED to Pin D10. Then upload the following code to see the LED gradually fading."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int ledPin = D10;    // LED connected to digital pin 10\n\nvoid setup() {\n  // declaring LED pin as output\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  // fade in from min to max in increments of 5 points:\n  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {\n    // sets the value (range from 0 to 255):\n    analogWrite(ledPin, fadeValue);\n    // wait for 30 milliseconds to see the dimming effect\n    delay(30);\n  }\n\n  // fade out from max to min in increments of 5 points:\n  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {\n    // sets the value (range from 0 to 255):\n    analogWrite(ledPin, fadeValue);\n    // wait for 30 milliseconds to see the dimming effect\n    delay(30);\n  }\n}\n")),(0,a.kt)("h2",{id:"analog"},"Analog"),(0,a.kt)("p",null,"Connect a potentiometer to Pin A0 and an LED to Pin D10. Then upload the following code to control the blinking interval of the LED by rotating the potentiometer knob."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"const int sensorPin = A0;\nconst int ledPin =  D10; \n\nvoid setup() {\n  pinMode(sensorPin, INPUT);  // declare the sensorPin as an INPUT\n  pinMode(ledPin, OUTPUT);   // declare the ledPin as an OUTPUT\n}\n\nvoid loop() {\n  // read the value from the sensor:\n  int sensorValue = analogRead(sensorPin);\n  // turn the ledPin on\n  digitalWrite(ledPin, HIGH);\n  // stop the program for <sensorValue> milliseconds:\n  delay(sensorValue);\n  // turn the ledPin off:\n  digitalWrite(ledPin, LOW);\n  // stop the program for for <sensorValue> milliseconds:\n  delay(sensorValue);\n}\n")),(0,a.kt)("h2",{id:"serial"},"Serial"),(0,a.kt)("h3",{id:"regular-method---choose-one-of-usb-serial-or-uart0-serial-to-use"},"Regular method - choose one of USB serial or UART0 serial to use"),(0,a.kt)("p",null,"There are 2 serial interfaces on this board:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB Serial"),(0,a.kt)("li",{parentName:"ul"},"UART0 Serial")),(0,a.kt)("p",null,"By default, USB serial is enabled, which means you can connect the board to a PC via USB Type-C and open serial monitor on Arduino IDE to view data sent via serial."),(0,a.kt)("p",null,"However, if you want to use UART0 as the serial, you need to connect pin D6 as the TX pin and pin D7 as RX pin with a USB-Serial adapter."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-3.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",null,"Also, you need to set ",(0,a.kt)("strong",{parentName:"p"},"USB CDC On Boot")," to ",(0,a.kt)("strong",{parentName:"p"},"Disabled")," from Arduino IDE."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: Change photo when board shows up on Arduino Board Manager")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-1.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,'Upload the following code to Arduino IDE to send the string "Hello World!" via serial'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n    Serial.begin(115200);\n    while (!Serial);\n}\n \nvoid loop() {\n    Serial.println("Hello World!");\n    delay(1000);\n}\n')),(0,a.kt)("p",null,"The output will be as follows on Arduino Serial Monitor"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-2.jpg",alt:"pir",width:450,height:"auto"})),(0,a.kt)("h3",{id:"special-way---use-usb-serial-and-uart0uart1-at-the-same-time"},"Special way - use USB serial and UART0/UART1 at the same time"),(0,a.kt)("p",null,"Very often, we need to use UART sensors to connect to XIAO ESP32C3 hardware serial port to get data, and at the same time, you may need to use the USB serial to display the data on the serial monitor. This can be achieved by some special methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example program:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// Need this for the lower level access to set them up.\n#include <HardwareSerial.h>\n\n//Define two Serial devices mapped to the two internal UARTs\nHardwareSerial MySerial0(0);\nHardwareSerial MySerial1(1);\n\nvoid setup()\n{\n    // For the USB, just use Serial as normal:\n    Serial.begin(115200);\n\n    // Configure MySerial0 on pins TX=D6 and RX=D7 (-1, -1 means use the default)\n    MySerial0.begin(9600, SERIAL_8N1, -1, -1);\n    MySerial0.print("MySerial0");\n\n    // And configure MySerial1 on pins RX=D9, TX=D10\n    MySerial1.begin(115200, SERIAL_8N1, 9, 10);\n    MySerial1.print("MySerial1");\n}\n\nvoid loop()\n{\n\n}\n')),(0,a.kt)("p",null,"As you can see, the XIAO ESP32C3 actually has three UARTs available."),(0,a.kt)("p",null,"In the following, we will take the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html"},"60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module"),", which is available for sale, as an example, and explain how to use the D6 and D7 hardware serial ports and the USB serial port."),(0,a.kt)("p",null,"Please be prepared for the following."),(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"XIAO ESP32C3"),(0,a.kt)("th",null,"60GHz mmWave Sensor -",(0,a.kt)("br",null),"Human Resting Breathing",(0,a.kt)("br",null),"and Heartbeat Module")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:120,src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"}))),(0,a.kt)("td",null,(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:240,src:"https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"})))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html"},"Get One Now")),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html"},"Get One Now")))),(0,a.kt)("p",null,"Download the sensor library to your computer. And add it to the Arduino IDE."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/",target:"_blank"},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"})))),(0,a.kt)("p",null,"Here, we want to parse the heartbeat and respiration data information, then you can rewrite your program like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "Arduino.h"\n#include <60ghzbreathheart.h>\n#include <HardwareSerial.h>\n\nHardwareSerial MySerial(0);   //Create a new HardwareSerial class -- D6/D7\n\n// can also try hardware serial with\nBreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);\n\nvoid setup() {\n  // put your setup code here, to run once:\n  Serial.begin(115200);\n  MySerial.begin(115200, SERIAL_8N1, -1, -1); // at CPU Freq is 40MHz, work half speed of defined.\n\n  while(!Serial);   //When the serial port is opened, the program starts to execute.\n\n  Serial.println("Readly");\n\n  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.\n  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.\n}\n\nvoid loop()\n{\n  // put your main code here, to run repeatedly:\n  radar.Breath_Heart();           //Breath and heartbeat information output\n  if(radar.sensor_report != 0x00){\n    switch(radar.sensor_report){\n      case HEARTRATEVAL:\n        Serial.print("Sensor monitored the current heart rate value is: ");\n        Serial.println(radar.heart_rate, DEC);\n        Serial.println("----------------------------");\n        break;\n      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on\n        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");\n        Serial.print(radar.heart_point_1);\n        Serial.print(", point 2 : ");\n        Serial.print(radar.heart_point_2);\n        Serial.print(", point 3 : ");\n        Serial.print(radar.heart_point_3);\n        Serial.print(", point 4 : ");\n        Serial.print(radar.heart_point_4);\n        Serial.print(", point 5 : ");\n        Serial.println(radar.heart_point_5);\n        Serial.println("----------------------------");\n        break;\n      case BREATHNOR:\n        Serial.println("Sensor detects current breath rate is normal.");\n        Serial.println("----------------------------");\n        break;\n      case BREATHRAPID:\n        Serial.println("Sensor detects current breath rate is too fast.");\n        Serial.println("----------------------------");\n        break;\n      case BREATHSLOW:\n        Serial.println("Sensor detects current breath rate is too slow.");\n        Serial.println("----------------------------");\n        break;\n      case BREATHNONE:\n        Serial.println("There is no breathing information yet, please wait...");\n        Serial.println("----------------------------");\n        break;\n      case BREATHVAL:\n        Serial.print("Sensor monitored the current breath rate value is: ");\n        Serial.println(radar.breath_rate, DEC);\n        Serial.println("----------------------------");\n        break;\n      case BREATHWAVE:  //Valid only when real-time data transfer mode is on\n        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");\n        Serial.print(radar.breath_point_1);\n        Serial.print(", point 2 : ");\n        Serial.print(radar.breath_point_2);\n        Serial.print(", point 3 : ");\n        Serial.print(radar.breath_point_3);\n        Serial.print(", point 4 : ");\n        Serial.print(radar.breath_point_4);\n        Serial.print(", point 5 : ");\n        Serial.println(radar.breath_point_5);\n        Serial.println("----------------------------");\n        break;\n    }\n  }\n  delay(200);                       //Add time delay to avoid program jam\n}\n')),(0,a.kt)("p",null,"Please upload the program, then open the serial monitor and set the baud rate to 115200."),(0,a.kt)("p",null,"Next, we can connect the sensor to the XIAO ESP32C3 using the following connection method."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.jpg"})),(0,a.kt)("p",null,"If all goes well, you will see data messages on the serial monitor."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png",alt:"pir",width:"800",height:"auto"})),(0,a.kt)("h2",{id:"i2c"},"I2C"),(0,a.kt)("h3",{id:"hardware-connection"},"Hardware connection"),(0,a.kt)("p",null,"Connect a ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html"},"Grove - OLED Yellow&Blue Display 0.96 (SSD1315)")," to XIAO ESP32C3 by following the hardware connection as follows."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Grove - OLED Yellow&Blue Display 0.96 (SSD1315)"),(0,a.kt)("th",{parentName:"tr",align:null},"XIAO ESP32C3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SCL"),(0,a.kt)("td",{parentName:"tr",align:null},"SCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SDA"),(0,a.kt)("td",{parentName:"tr",align:null},"SDA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VCC"),(0,a.kt)("td",{parentName:"tr",align:null},"5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"GND")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-7.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("h3",{id:"software-setup"},"Software setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Open Arduino IDE, navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Sketch > Include Library > Manage Libraries..."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Search for ",(0,a.kt)("strong",{parentName:"p"},"u8g2")," and install it"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Upload the following code to display text strings on the OLED Display")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'//#include <Arduino.h>\n#include <U8g2lib.h>\n \n#ifdef U8X8_HAVE_HW_SPI\n#include <SPI.h>\n#endif\n#ifdef U8X8_HAVE_HW_I2C\n#include <Wire.h>\n#endif\n\nU8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C\n \nvoid setup(void) {\n  u8g2.begin();\n//  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180\n}\n \nvoid loop(void) {\n  u8g2.clearBuffer();                   // clear the internal memory\n  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font\n  u8g2.drawStr(0,15,"Hello World!");    // write something to the internal memory\n  u8g2.drawStr(0,30,"Hello World!");\n  u8g2.drawStr(0,40,"Hello World!");\n  u8g2.sendBuffer();                    // transfer internal memory to the display\n//  delay(1000);  \n}\n')),(0,a.kt)("h2",{id:"spi"},"SPI"),(0,a.kt)("h3",{id:"hardware-connection-1"},"Hardware connection"),(0,a.kt)("p",null,"Connect a ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html"},"Grove - High Precision Barometric Pressure Sensor (DPS310)")," to XIAO ESP32C3 by following the hardware connection as follows."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Grove - High Precision Barometric Pressure Sensor (DPS310)"),(0,a.kt)("th",{parentName:"tr",align:null},"XIAO ESP32C3"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3V3"),(0,a.kt)("td",{parentName:"tr",align:null},"3V3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SDI"),(0,a.kt)("td",{parentName:"tr",align:null},"MOSI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"GND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SDO"),(0,a.kt)("td",{parentName:"tr",align:null},"MISO")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CSK"),(0,a.kt)("td",{parentName:"tr",align:null},"SCK")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CS"),(0,a.kt)("td",{parentName:"tr",align:null},"CS")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-4.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("h3",{id:"software-setup-1"},"Software setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Download ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_DPS310"},"Seeed_Arduino_DPS310 Library")," as a zip file")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-5.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Open Arduino IDE, navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library...")," and open the downloaded zip file")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"File > Examples > DigitalPressureSensor > spi_background")," to open the ",(0,a.kt)("strong",{parentName:"li"},"spi_background")," example")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-6.png",alt:"pir",width:450,height:"auto"})),(0,a.kt)("p",null,"Alternatively you can copy the code from below as well"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Dps310.h>\n\n// Dps310 Opject\nDps310 Dps310PressureSensor = Dps310();\n\nvoid setup() {\n    //pin number of your slave select line\n    //XMC2GO\n    int16_t pin_cs = SS;\n    //for XMC 1100 Bootkit  & XMC4700 Relax Kit uncomment the following line\n    //int16_t pin_cs = 10;\n\n    Serial.begin(9600);\n    while (!Serial);\n\n\n    //Call begin to initialize Dps310\n    //The parameter pin_nr is the number of the CS pin on your Microcontroller\n    Dps310PressureSensor.begin(SPI, pin_cs);\n\n    //temperature measure rate (value from 0 to 7)\n    //2^temp_mr temperature measurement results per second\n    int16_t temp_mr = 2;\n    //temperature oversampling rate (value from 0 to 7)\n    //2^temp_osr internal temperature measurements per result\n    //A higher value increases precision\n    int16_t temp_osr = 2;\n    //pressure measure rate (value from 0 to 7)\n    //2^prs_mr pressure measurement results per second\n    int16_t prs_mr = 2;\n    //pressure oversampling rate (value from 0 to 7)\n    //2^prs_osr internal pressure measurements per result\n    //A higher value increases precision\n    int16_t prs_osr = 2;\n    //startMeasureBothCont enables background mode\n    //temperature and pressure ar measured automatically\n    //High precision and hgh measure rates at the same time are not available.\n    //Consult Datasheet (or trial and error) for more information\n    int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);\n    //Use one of the commented lines below instead to measure only temperature or pressure\n    //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);\n    //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);\n\n\n    if (ret != 0) {\n        Serial.print("Init FAILED! ret = ");\n        Serial.println(ret);\n    } else {\n        Serial.println("Init complete!");\n    }\n}\n\n\n\nvoid loop() {\n    uint8_t pressureCount = 20;\n    float pressure[pressureCount];\n    uint8_t temperatureCount = 20;\n    float temperature[temperatureCount];\n\n    //This function writes the results of continuous measurements to the arrays given as parameters\n    //The parameters temperatureCount and pressureCount should hold the sizes of the arrays temperature and pressure when the function is called\n    //After the end of the function, temperatureCount and pressureCount hold the numbers of values written to the arrays\n    //Note: The Dps310 cannot save more than 32 results. When its result buffer is full, it won\'t save any new measurement results\n    int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);\n\n    if (ret != 0) {\n        Serial.println();\n        Serial.println();\n        Serial.print("FAIL! ret = ");\n        Serial.println(ret);\n    } else {\n        Serial.println();\n        Serial.println();\n        Serial.print(temperatureCount);\n        Serial.println(" temperature values found: ");\n        for (int16_t i = 0; i < temperatureCount; i++) {\n            Serial.print(temperature[i]);\n            Serial.println(" degrees of Celsius");\n        }\n\n        Serial.println();\n        Serial.print(pressureCount);\n        Serial.println(" pressure values found: ");\n        for (int16_t i = 0; i < pressureCount; i++) {\n            Serial.print(pressure[i]);\n            Serial.println(" Pascal");\n        }\n    }\n\n    //Wait some time, so that the Dps310 can refill its buffer\n    delay(10000);\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Upload the codes and open the ",(0,a.kt)("strong",{parentName:"li"},"Serial Monitor"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Once you upload the codes, it will not be executed automatically until you click ",(0,a.kt)("strong",{parentName:"p"},"Serial Monitor")," on the upper right corner of the Arduino window."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-8.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Now you will see the temperature and pressure data displayed one after the other on the serial monitor as above!"))}d.isMDXComponent=!0}}]);