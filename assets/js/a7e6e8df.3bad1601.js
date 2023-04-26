"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97683],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var s=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,s,n=function(t,e){if(null==t)return{};var a,s,n={},l=Object.keys(t);for(s=0;s<l.length;s++)a=l[s],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(s=0;s<l.length;s++)a=l[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=s.createContext({}),d=function(t){var e=s.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=d(t.components);return s.createElement(o.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=d(a),k=n,m=p["".concat(o,".").concat(k)]||p[k]||u[k]||l;return a?s.createElement(m,r(r({ref:e},c),{},{components:a})):s.createElement(m,r({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[p]="string"==typeof t?t:n,r[1]=i;for(var d=2;d<l;d++)r[d]=a[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}k.displayName="MDXCreateElement"},51432:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var s=a(87462),n=(a(67294),a(3905));const l={description:"Liquid Level Sensor",title:"Liquid Level Sensor",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},r=void 0,i={unversionedId:"Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor",id:"Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor",title:"Liquid Level Sensor",description:"Liquid Level Sensor",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Probe",slug:"/Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor",permalink:"/Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Probe/Liquid-Level-Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Liquid Level Sensor",title:"Liquid Level Sensor",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"One Stop Model Training with Edge Impulse",permalink:"/One-Stop-Model-Training-with-Edge-Impulse"},next:{title:"Water Leak Detector",permalink:"/Sensor/SenseCAP/SenseCAP_Probe/Water-Leak-Detector"}},o={},d=[{value:"Product Description",id:"product-description",level:2},{value:"Features",id:"features",level:2},{value:"Applications",id:"applications",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Dimensions",id:"dimensions",level:2},{value:"Electric Wiring",id:"electric-wiring",level:2},{value:"Sources",id:"sources",level:2}],c={toc:d};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,s.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Liquid_Level_Sensor/img/01_14_4.png",alt:"Liquid Level Sensor"})),(0,n.kt)("h2",{id:"product-description"},"Product Description"),(0,n.kt)("p",null,"The Liquid Level Sensor measures the height of water or other liquid and converts it to the voltage signal. It works with a data logger or other devices that have analog voltage input ports."),(0,n.kt)("p",null,"The Liquid Level Sensor has a built-in silicon piezoresistive core that features high sensitivity. The internal chip converts the millivolt signal into a standard voltage signal, which can be connected to a computer, a control instrument, or a PLC."),(0,n.kt)("p",null,"It's small-size and lightweight, easy to install. With a sealed stainless steel probe, it can work in water, oil, and mild-corrosive environments. The sensor has high anti-vibration and anti-impact performance. It can be widely used in process control, aviation, aerospace, automobile, medical equipment, HVAC, and other applications."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Liquid-Level-Sensor-p-4619.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High-performance"),": anti-interference and long-term stability"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Robustness"),": anti-corrosion, durable and stable"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User-friendly"),": anti-blocking design, easy to clean"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Widely-applicable"),": 0.5~4.5V transmission output, can work with digital displays, PLC, inverters, recorders and other instruments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Industry-grade"),": IP68 rating, durable and waterproof, suitable for outdoor severe environments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Certifications"),": FCC, CE, and RoHS")),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reservoir detection"),(0,n.kt)("li",{parentName:"ul"},"Pool pump station"),(0,n.kt)("li",{parentName:"ul"},"River monitoring"),(0,n.kt)("li",{parentName:"ul"},"Marine monitoring"),(0,n.kt)("li",{parentName:"ul"},"Lake monitoring"),(0,n.kt)("li",{parentName:"ul"},"Sewage treatment"),(0,n.kt)("li",{parentName:"ul"},"Deep well level monitoring"),(0,n.kt)("li",{parentName:"ul"},"Tank level monitoring")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Liquid_Level_Sensor/img/92d658aefc90480a607588f72f6f138.png",alt:"applications"})),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",{class:"tg","data-data-style":"undefined;table-layout: fixed; width: 640px;"},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Measurement Range")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;","data-data-style":"font-size: small;"},"0 ~ 5 meters"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;","data-data-style":"font-size: small;"},"Cable Length")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;","data-data-style":"font-size: small;"},"5.3 meters"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Output Signal")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"0.5 ~ 4.5V"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Accuracy")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"\xb1 0.25%F.S"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Zero Temperature Drift")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"\xb1 0.03%F.S/\u2103"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-zdzz"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Sensitivity Temperature Drift")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"\xb1 0.03%F.S/\u2103"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Long-term Stability")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"\u22640.2%F.S/year"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Response Time")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"5ms( (\u226490%F.S)"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Measurement Liquid ")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Slight corrosive liquid (water, edible oil, etc.)"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Power Supply")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"5V DC"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Overload Capacity")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"200%F.S"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Compensation Temperature")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"-10\u2103 ~ +70\u2103"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Medium Temperature ")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"-40\u2103 ~ +80\u2103"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Storage Temperature")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"-40\u2103 ~ +85\u2103"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Material")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("p",null,(0,n.kt)("span",{"data-style":"color: #000000;"},"304 stainless steel shell,")),(0,n.kt)("p",null,(0,n.kt)("span",{"data-style":"color: #000000;"},"316L stainless steel core,")),(0,n.kt)("p",null,(0,n.kt)("span",{"data-style":"color: #000000;"},"special rubber-insulated cable.")))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"IP Rating")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"IP68"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Device Weight")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"670g"))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"Certifications ")),(0,n.kt)("td",{class:"tg-h2xt"},(0,n.kt)("span",{"data-style":"color: #000000;"},"CE, FCC, RoHS"))))),(0,n.kt)("h2",{id:"dimensions"},"Dimensions"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Liquid_Level_Sensor/img/dimensions.PNG",alt:"d"})),(0,n.kt)("h2",{id:"electric-wiring"},"Electric Wiring"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Liquid_Level_Sensor/img/WD.PNG",alt:"ew"})),(0,n.kt)("h2",{id:"sources"},"Sources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/314990619/res/Liquid%20Level%20Sensor-Datasheet.pdf"},"Liquid Level Sensor Datasheet"))))}p.isMDXComponent=!0}}]);