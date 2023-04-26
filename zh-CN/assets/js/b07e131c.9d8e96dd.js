"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43176],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var l=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=l.createContext({}),s=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},h=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=s(a),h=n,c=p["".concat(u,".").concat(h)]||p[h]||m[h]||i;return a?l.createElement(c,r(r({ref:e},d),{},{components:a})):l.createElement(c,r({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[p]="string"==typeof t?t:n,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22805:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=a(87462),n=(a(67294),a(3905));const i={title:"DSO Quad Manual (by the community)",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Quad_Manual_by_the_community/",slug:"/DSO_Quad_Manual_by_the_community",last_update:{date:"02/03/2022",author:"gunengyu"}},r=void 0,o={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad_Manual_by_the_community",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad_Manual_by_the_community",title:"DSO Quad Manual (by the community)",description:"The DSO Quad is a pocket oscilloscope. It has lots of great features in a small package:",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad_Manual_by_the_community.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Quad_Manual_by_the_community",permalink:"/zh-CN/DSO_Quad_Manual_by_the_community",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad_Manual_by_the_community.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"2022\u5e742\u67083\u65e5",frontMatter:{title:"DSO Quad Manual (by the community)",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Quad_Manual_by_the_community/",slug:"/DSO_Quad_Manual_by_the_community",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Quad",permalink:"/zh-CN/DSO_Quad"},next:{title:"DSO Quad:Beta HW",permalink:"/zh-CN/DSO_Quad-Beta_HW"}},u={},s=[{value:"Why Another Manual?",id:"why-another-manual",level:2},{value:"Other Seeedstudio Documentation",id:"other-seeedstudio-documentation",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Install the Battery",id:"install-the-battery",level:3},{value:"LED Indicators and Power Modes",id:"led-indicators-and-power-modes",level:3},{value:"Firmware Updates",id:"firmware-updates",level:3},{value:"Calibration",id:"calibration",level:3},{value:"Old GUI (app version 2.x)",id:"old-gui-app-version-2x",level:4},{value:"New GUI (hardware 2.7, app version P1.00 and above)",id:"new-gui-hardware-27-app-version-p100-and-above",level:4},{value:"Using The DSO Quad",id:"using-the-dso-quad",level:2},{value:"Measuring Voltage",id:"measuring-voltage",level:3},{value:"Specifications",id:"specifications",level:2},{value:"Definitions",id:"definitions",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/P10308912-1024x684.jpg",alt:null})),(0,n.kt)("p",null,"The DSO Quad is a pocket oscilloscope. It has lots of great features in a small package:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2 Analog Inputs at 72 MS/s (10",(0,n.kt)("a",{parentName:"p",href:"#definitions"},"Vpp")," using the ",(0,n.kt)("a",{parentName:"p",href:"#definitions"},"x1 probe"),", 80",(0,n.kt)("a",{parentName:"p",href:"#definitions"},"Vpp")," is possible with an upgrade).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2 Digital Inputs at (3.3V max, diode designed to permit higher voltages needs an upgrade). Digital probes not included.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Signal Generator Output, 10 Hz-20kHz analog or 10 Hz-100kHz digital (8 MHz digital output is possible with an upgrade).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Auto, Normal, Single, Scan, and free-running triggering modes."))),(0,n.kt)("p",null,"If this is your first time using the DSO Quad, please read the ",(0,n.kt)("a",{parentName:"p",href:"#getting-started"},"Getting Started")," section."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"#specifications"},"Specifications")," section has all the details about the DSO Quad's capabilities."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"Note: The DSO Quad is currently a BETA product. This means significant hardware and software issues still exist in the product. Every attempt has been made to accurately describe the current product in this manual. However, this manual comes with ABSOLUTELY NO WARRANTY."))),(0,n.kt)("h2",{id:"why-another-manual"},"Why Another Manual?"),(0,n.kt)("p",null,"Seeedstudio's official manual can be downloaded ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=1929"},"here"),". I started this page as a project in my spare time to answer all the questions I had when I first got my DSO Quad."),(0,n.kt)("p",null,"This manual may help if you're wondering:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"How do I install the battery? (I'm concerned my battery might be backwards! How can I be sure?)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"How do I open the back cover?")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"How do I power on the unit?")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"What do the charging indicator LEDs mean?")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"How do I upgrade the firmware?")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"How do I test the unit?")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"What are the buttons for?"))),(0,n.kt)("p",null,"I felt like this all belongs in one place -- a manual -- and I just kept working on it until it is what you see now."),(0,n.kt)("h3",{id:"other-seeedstudio-documentation"},"Other Seeedstudio Documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/DSO_Quad",title:"DSO Quad"},"DSO Quad Manual (official wiki page)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/DSO_Quad-Building_Firmware",title:"DSO Quad Building Firmware"},"DSO Quad Building Firmware"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=2074"},"DSO Quad battery installation tutorial with video")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"When you receive the DSO Quad, you should have something like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_plastic_cover.jpg",alt:null}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_usb_cable.jpg",alt:null}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_pouch.jpg",alt:null}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_probes.jpg",alt:null}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_battery.jpg",alt:null}),(0,n.kt)("br",null),"\n(This is the Lithium-Polymer battery, still in its static bag)"),(0,n.kt)("h3",{id:"install-the-battery"},"Install the Battery"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"First, be sure the DSO Quad on/off switch is ",(0,n.kt)("strong",{parentName:"p"},"off"),":\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Turn_off.jpg",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Hold the DSO Quad so that you are looking at the text on the back face, right-side up as shown:\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_right_side_up.jpg",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Slide the back face to the left:",(0,n.kt)("br",null),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_slide_to_left.jpg",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The back face should then fall off easily, revealing the empty battery cavity:\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_back_removed.jpg",alt:null}),(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Note:")," There are reports of reverse-polarity batteries. ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"This will destroy your charging circuit if not corrected."))," Please carefully check for the proper alignment of red and black wires.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check that the red wire is closest to the outside of the DSO Quad. The black wire is on the inside.\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_observe_polarity.jpg",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If your battery was connected incorrectly, ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"do not plug it in!"))," Go to ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=1911"},"this forum thread")," for help.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If your battery is connected correctly, thread the wires through the clips on the left side:")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Slide the back cover into place.\nHold the left side tightly while sliding the cover to the right. See ",(0,n.kt)("a",{parentName:"p",href:"http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/"},"http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/")," for a demonstration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("div",{className:"thumb tright"},(0,n.kt)("div",{className:"thumbinner",style:{width:202}}," ",(0,n.kt)("div",{className:"thumbcaption"},'Red "charging" LED'))),' Turn the DSO Quad upright and connect the USB cable. You should see the red "charging" LED. Please charge your DSO Quad for at least 1 hour the first time before using it.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_red_charging_led.jpg",alt:null})),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Please ",(0,n.kt)("a",{parentName:"li",href:"#firmware-updates"},"update your firmware")," to the latest version.")),(0,n.kt)("h3",{id:"led-indicators-and-power-modes"},"LED Indicators and Power Modes"),(0,n.kt)("p",null,"The DSO Quad is charged by connecting the USB cable. The LTC4054 battery controller ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922"},"will not charge the battery")," while the power switch is on. This is best explained in a table:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," Power Switch"),(0,n.kt)("th",null," USB Cable"),(0,n.kt)("th",null," Battery"),(0,n.kt)("th",null," What you see"),(0,n.kt)("th",null," DSO Quad Power Mode")),(0,n.kt)("tr",null,(0,n.kt)("td",null," OFF"),(0,n.kt)("td",null," Disconnected"),(0,n.kt)("td",null," Idle"),(0,n.kt)("td",null," LEDs off, display off"),(0,n.kt)("td",null," Powered off")),(0,n.kt)("tr",null,(0,n.kt)("td",null," ON"),(0,n.kt)("td",null," Disconnected"),(0,n.kt)("td",null," Draining"),(0,n.kt)("td",null," LEDs off, display on"),(0,n.kt)("td",null," Normal (power on)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," ON"),(0,n.kt)("td",null," Disconnected"),(0,n.kt)("td",null," Draining"),(0,n.kt)("td",null," Green LED on, display off"),(0,n.kt)("td",null," Power save mode: after 600 seconds of no button presses, the screen is blanked")),(0,n.kt)("tr",null,(0,n.kt)("td",null," ON"),(0,n.kt)("td",null," Disconnected"),(0,n.kt)("td",null," Empty"),(0,n.kt)("td",null," LEDs off, display off"),(0,n.kt)("td",null," No battery, power off. Please connect the USB cable: battery needs to be charged")),(0,n.kt)("tr",null,(0,n.kt)("td",null," ON"),(0,n.kt)("td",null," Connected to 5V/500mA USB"),(0,n.kt)("td",null," Idle"),(0,n.kt)("td",null," Red LED on, display on"),(0,n.kt)("td",null," Powered on, [battery will not charge while on](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," OFF"),(0,n.kt)("td",null," Connected to 5V/500mA USB"),(0,n.kt)("td",null," Charging"),(0,n.kt)("td",null," Red LED on, display off"),(0,n.kt)("td",null," Powered off, battery charging")),(0,n.kt)("tr",null,(0,n.kt)("td",null," OFF"),(0,n.kt)("td",null," USB port is not supplying power*"),(0,n.kt)("td",null," Idle"),(0,n.kt)("td",null," LEDs off, display off"),(0,n.kt)("td",null," Powered off, unable to charge")),(0,n.kt)("tr",null,(0,n.kt)("td",null," OFF"),(0,n.kt)("td",null," Connected to 5V/500mA USB"),(0,n.kt)("td",null," Full"),(0,n.kt)("td",null," LEDs off, display off"),(0,n.kt)("td",null," Powered off, battery is full")),(0,n.kt)("tr",null,(0,n.kt)("td",null," OFF"),(0,n.kt)("td",null," Connected to 5V/500mA USB"),(0,n.kt)("td",null," No battery installed"),(0,n.kt)("td",null," Red LED on dimly, display off"),(0,n.kt)("td",null," Powered off, no battery installed"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"* USB port is not supplying power:")," if your DSO quad is not charging, it may be the USB port. Here are some troubleshooting tips:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Please be sure the USB cable is correctly connected.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Please try a different port on the computer. Some USB hubs cannot supply enough power, especially if several devices are connected.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Please try a different port on another computer. Some laptops may turn off power to USB ports when in sleep mode."))),(0,n.kt)("h3",{id:"firmware-updates"},"Firmware Updates"),(0,n.kt)("p",null,"There are several versions of the DSO Quad, and the firmware for each is different. Please carefully identify your hardware. When you first turn on the DSO Quad, look for the hardware version. Compare what you see to the following table:"),(0,n.kt)("p",null,"Check here for the latest firmware: ",(0,n.kt)("a",{parentName:"p",href:"/DSO_Quad-Building_Firmware",title:"DSO Quad Building Firmware"},"DSO Quad Building Firmware"),"\nHere is the latest firmware under special contract with ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip"},"FPGA(DFU\uff0cSYS\uff0cAPP) v2.7.2"),"."),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," Boot Screen"),(0,n.kt)("th",null," Hardware Ver"),(0,n.kt)("th",null," Factory FW"),(0,n.kt)("th",null," Latest FW Update"),(0,n.kt)("th",null," Notes")),(0,n.kt)("tr",null,(0,n.kt)("td",null),(0,n.kt)("td",null," 2.7"),(0,n.kt)("td",null," APP 2.53",(0,n.kt)("p",null,"SYS 1.52"),(0,n.kt)("p",null,"FPGA 2.61")),(0,n.kt)("td",null," APP P1.00",(0,n.kt)("p",null,"SYS B1.52"),(0,n.kt)("p",null,"FPGA 2.61")),(0,n.kt)("td",null," Seeed Studio ships this version.",(0,n.kt)("p",null,"This firmware has a much better GUI!"),(0,n.kt)("p",null,"(Also, the factory firmware on 2.7 freezed a lot, so this firmware is highly recommended)"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_26.jpg",alt:null}))),(0,n.kt)("td",null," 2.6"),(0,n.kt)("td",null," APP 2.33",(0,n.kt)("p",null,"SYS 1.33\nFPGA 2.5")),(0,n.kt)("td",null," APP 2.53",(0,n.kt)("p",null,"SYS 1.52\nFPGA 2.61"),(0,n.kt)("p",null,"Seeed Studio shipped this version"),(0,n.kt)("p",null," ",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_22.jpg",alt:null})),(0,n.kt)("p",null," 2.2\nAPP"),(0,n.kt)("p",null,"SYS 1.02")),(0,n.kt)("td",null," [APP 2.34?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)",(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760"},"SYS 1.32?"))),(0,n.kt)("td",null," Ver 2.2 devices were only given to Beta testers, with a [free upgrade to 2.6](http://ourdev.cn/bbs/bbs_content_all.jsp?bbs_sn=4138839). This version will not receive any further software updates."))),(0,n.kt)("p",null,"You might find more info on ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=1929"},"https://forum.seeedstudio.com/viewtopic.php?f=22","&","t=1929"),"."),(0,n.kt)("p",null,"The firmware source code is available ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/Seeed-Studio/DSOQuad_SourceCode"},"here"),". ",(0,n.kt)("strong",{parentName:"p"},"Note:")," Seeedstudio does not recommend you create your own FPGA firmware, because of the risk of damaging the hardware."),(0,n.kt)("h3",{id:"calibration"},"Calibration"),(0,n.kt)("p",null,"The DSO Quad requires calibration before the first use, and should be re-calibrated after extended use. The two parameters to be calibrated are gain and bias (DC offset)."),(0,n.kt)("h4",{id:"old-gui-app-version-2x"},"Old GUI (app version 2.x)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Bias Calibration"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Hold the button marked with a square for 2 seconds, and the calibration "spreadsheet" appears'),(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Dial the values to 0 in each box. Move up/down by rotating the right-most "navigation" switch left/right. Move columns by clicking in the right-most "navigation" switch.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Cancel the calibration by leaving some entries unchanged. Or, save the calibration after calibrating at each level. Follow the instructions an the top.")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Gain Calibration"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"(Look at the regular manual for this)")))),(0,n.kt)("h4",{id:"new-gui-hardware-27-app-version-p100-and-above"},"New GUI (hardware 2.7, app version P1.00 and above)"),(0,n.kt)("p",null,"(i'm not sure whats going on with the version numbering, perhaps its a beta or preview, but its not clear to me)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Bias Calibration"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press square button one time"),(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select "Calibrat" in the menu.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the instructions"))))))),(0,n.kt)("p",null,"More details see here: ",(0,n.kt)("a",{parentName:"p",href:"/DSO_Quad-Calibration",title:"DSO Quad:Calibration"},"DSO Quad:Calibration")),(0,n.kt)("p",null,"Note: I noticed the calibration is different when you connect or disconnect a powersupply to the micro USB connection. So calibrate it the way you will use it the most."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Gain Calibration"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"(Look at the regular manual for this)")))),(0,n.kt)("h2",{id:"using-the-dso-quad"},"Using The DSO Quad"),(0,n.kt)("p",null,'The most important switches are the two rotating switches on the right. The right-most is the "navigation" switch for changing which main part of the UI is currently blinking. The other switch is the "submenu" switch used to change Volts/div, microseconds, trigger positions, etc.'),(0,n.kt)("p",null,"Each of these switches can be rotated left or right, and clicked in like a push button."),(0,n.kt)("p",null,"The main screen has these blocks:"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," Title"),(0,n.kt)("th",null," Description of block")),(0,n.kt)("tr",null,(0,n.kt)("td",null," RUN/HOLD"),(0,n.kt)("td",null," Pausing the scope, and start running again")),(0,n.kt)("tr",null,(0,n.kt)("td",null," CH(A)"),(0,n.kt)("td",null," cyan colored plot and measurements")),(0,n.kt)("tr",null,(0,n.kt)("td",null," CH(B)"),(0,n.kt)("td",null," yellow colored plot and measurements")),(0,n.kt)("tr",null,(0,n.kt)("td",null," CH(C)"),(0,n.kt)("td",null," purple colored plot and measurements")),(0,n.kt)("tr",null,(0,n.kt)("td",null," CH(D)"),(0,n.kt)("td",null," green colored plot and measurements")),(0,n.kt)("tr",null,(0,n.kt)("td",null," SCAN"),(0,n.kt)("td",null," brown colored SCAN/AUTO/NORM (NORMAL)/SINGL (SINGLE)/NONE trigger mode")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Signal Generator"),(0,n.kt)("td",null,' blue colored digital and analog "wave out"')),(0,n.kt)("tr",null,(0,n.kt)("td",null," Trigger"),(0,n.kt)("td",null," All trigger levels (for CH(A) through CH(D)) and the triggering mode")),(0,n.kt)("tr",null,(0,n.kt)("td",null," YPOS"),(0,n.kt)("td",null," YPOS")),(0,n.kt)("tr",null,(0,n.kt)("td",null," V1"),(0,n.kt)("td",null," V1")),(0,n.kt)("tr",null,(0,n.kt)("td",null," V2"),(0,n.kt)("td",null," V2")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Horizontal scroller"),(0,n.kt)("td",null," Horizontal scroller")),(0,n.kt)("tr",null,(0,n.kt)("td",null," T1"),(0,n.kt)("td",null," T1")),(0,n.kt)("tr",null,(0,n.kt)("td",null," T2"),(0,n.kt)("td",null," T2")),(0,n.kt)("tr",null,(0,n.kt)("td",null," XPOS"),(0,n.kt)("td",null," XPOS")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Delta V"),(0,n.kt)("td",null," difference between V1 and V2 markers")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Delta T"),(0,n.kt)("td",null," difference between T1 and T2 markers")),(0,n.kt)("tr",null,(0,n.kt)("td",null," live measurements"),(0,n.kt)("td",null," customizable measurement read-outs. For example, Vbt, FPS, Vdc, RMS, Max, Min, Vpp, FRQ, DUT, CIR, TL, TH"))),(0,n.kt)("h3",{id:"measuring-voltage"},"Measuring Voltage"),(0,n.kt)("p",null,"Vmax, Vmin, Vpp, Vdc (average V), Vrms (sqrt(average(V*V)))"),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("p",null,"Sampling 0.1 usec - 1 sec"),(0,n.kt)("p",null,"Digital input bandwidth ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=1978"},"This forum thread")),(0,n.kt)("h3",{id:"definitions"},"Definitions"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," Vpp"),(0,n.kt)("td",null," Volts peak-to-peak")),(0,n.kt)("tr",null,(0,n.kt)("th",null," x1 probe"),(0,n.kt)("td",null," Measures low voltage signals. Do not exceed 80Vpp or you may damage your DSO Quad. (Can be used as a low impedance probe.)")),(0,n.kt)("tr",null,(0,n.kt)("th",null," x10 probe"),(0,n.kt)("td",null," Measures high voltage signals. Do not exceed 400Vpp or you may damage your DSO Quad. (Can be used as a high impedance probe.)",(0,n.kt)("p",null,"Note that the values on screen are 1/10 of the input, so please multiply by 10 in your head."))),(0,n.kt)("tr",null,(0,n.kt)("th",null," ..."),(0,n.kt)("td",null," ..."))),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"The DSO Quad can be charged from any normal USB port. Please charge your DSO Quad for at least 1 hour before using it."),(0,n.kt)("p",null,'The DSO Quad firmware does a rapid USB disconnect-reconnect to do a "live" firmware update. This method is incompatible with Mac OS X or Linux. Please see ',(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=1934"},"this forum thread")," for more information.  See ",(0,n.kt)("a",{parentName:"p",href:"/DSO_Quad-Building_Firmware",title:"DSO Quad Building Firmware"},"DSO Quad Building Firmware")," for how to upgrade firmware from Linux."),(0,n.kt)("h2",{id:"resource"},"Resource"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip"},"FPGA(DFU\uff0cSYS\uff0cAPP) v2.7.2")),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);