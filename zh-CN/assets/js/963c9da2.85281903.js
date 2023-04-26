"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return r?o.createElement(m,a(a({ref:t},d),{},{components:r})):o.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(87462),i=(r(67294),r(3905));const n={description:"4A_Motor_Shield",title:"4A Motor Shield",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/4A_Motor_Shield",last_update:{date:"01/11/2023",author:"Eico"},no_comments:!1},a=void 0,l={unversionedId:"Top_Brand/Arduino/shield/4A_Motor_Shield",id:"Top_Brand/Arduino/shield/4A_Motor_Shield",title:"4A Motor Shield",description:"4A_Motor_Shield",source:"@site/docs/Top_Brand/Arduino/shield/4A_Motor_Shield.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/4A_Motor_Shield",permalink:"/zh-CN/4A_Motor_Shield",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/4A_Motor_Shield.md",tags:[{label:"Shield",permalink:"/zh-CN/tags/shield"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"4A_Motor_Shield",title:"4A Motor Shield",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/4A_Motor_Shield",last_update:{date:"01/11/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"2.8inch TFT Touch Shield v2.0",permalink:"/zh-CN/2.8inch_TFT_Touch_Shield_v2.0"},next:{title:"Base Shield V2",permalink:"/zh-CN/Base_Shield_V2"}},s={},p=[{value:"Specifications",id:"specifications",level:2},{value:"Interface",id:"interface",level:2},{value:"Caution",id:"caution",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Drive DC Motor",id:"drive-dc-motor",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4A_Motor_Shield_top.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"The 4A Motor Shield is based on the Freescale MC33932 dual H-Bridge Power IC , which can control inductive loads with currents up to 5.0A peak per single bridge. It lets you drive two DC motors with your Arduino/Seeeduino board, controlling the speed and direction of each one independently. You can also measure the motor current absorption of each motor, among other features.",(0,i.kt)("br",{parentName:"p"}),"\n","The on board DC/DC converter suport a very wide range of input voltage, and can provide a 5V power supply for the microcontroller board with 100mA maximun current.So, you just need one power supply to drive the motors and power up the logic circuit.  "),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/4A-Motor-Shield-p-1954.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operating Voltage: 6V ~ 28V  "),(0,i.kt)("li",{parentName:"ul"},'DC/DC output: 5V 100mA @ "5V" pin  '),(0,i.kt)("li",{parentName:"ul"},"Output Current(For Each Channel ): 2A (continuous operation) / 5A(peak)  "),(0,i.kt)("li",{parentName:"ul"},"Output Duty Range: 0%~100%  "),(0,i.kt)("li",{parentName:"ul"},"Output short-circuit protection (short to VPWR or GND)  "),(0,i.kt)("li",{parentName:"ul"},"Over-current limiting (regulation) via internal constant-off-time PWM  "),(0,i.kt)("li",{parentName:"ul"},"Temperature dependant current limit threshold reduction  ")),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/4a_motor_shield_top_view.jpeg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2460\uff1aJ1:"),"DC Input connector.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\u2461\uff1aJ2:"),"Motor Driver output connector.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\u2462\uff1aEN,FT:"),"Jumpers for EN control and Fault flag detection.If short circuit the EN jumper, the EN signal was mapped to the D4 pin ,you can control the H-Bridge disable output or reset the Fault flag by D4 pin. If short circuit the FT jumper, the fault flag signal was mapped to D3 pin ,you can read the fault flag from the D3 pin ether.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\u2463: IO:"),"Logic Voltage level Select Jumper. You can choose the control logic voltage level from this jumper.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"\u2464\uff1aIA,IB:"),"Current sensor jumper. If you need to detect the motor current, you have to short circuit these jumpers.The motor current will be converted into voltage signal and can be read from A0,A1 pin.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Power Supply:"),' You have to power up the shield from the J1(DC input connector).The input voltage range can be set up to 6Vdc ~ 28Vdc.The on board DC/DC converter can convert the DC input voltage to 5Vdc output voltage to supply the logic circuit.The DC/DC converter can also power up the microcontroller board(Arduino/Seeeduino) form "5V" pin for maximun 100mA current.',(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Motor Interface\uff1a"),"Out 1 and Out 2(Out 3 and Out 4) connect Motor A(B) for DC Motor.  "),(0,i.kt)("h2",{id:"caution"},"Caution"),(0,i.kt)("span",{style:{color:"red"}},"Do not touch the H-bridge IC or PCB board during working. Its temperature can reach up to 100 degrees in the case of full load operating."),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("h3",{id:"drive-dc-motor"},"Drive DC Motor"),(0,i.kt)("p",null,"Connect DC motor to the motor shield Output Pins OUT1& OUT2(OUT3& OUT4). And connect the drive voltage to the power supply terminals. Motor driver board can generate 5V supply voltage to seeeduino."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/Drive_DC_Motor.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Install the library we provide in the Resources section into Arduino libraries file and find the example \u201cDCMotorDemo\u201d by the path: File->Example->MotorDrive->DCMotorDemo.  "),(0,i.kt)("p",null,"This demo enables the motor rotate in one direction for 2 sec, take a break for 1 sec and rotate in the reverse direction for 2 sec."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/4A_Motor_Shield/img/DC_Motor_Code.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.pdf"},"Schematic pdf"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/4A_MOTOR_Shield_v1.0.zip"},"Eagle File"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MotorDriver20121210.zip"},"Motor Shield Library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/4A_Motor_Shield/res/MC33932.pdf"},"MC33932 Datasheet"),"  ")),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);