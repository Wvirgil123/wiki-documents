"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[20821],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(i),c=n,k=m["".concat(u,".").concat(c)]||m[c]||p[c]||a;return i?r.createElement(k,o(o({ref:t},d),{},{components:i})):r.createElement(k,o({ref:t},d))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},79909:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=i(87462),n=(i(67294),i(3905));const a={title:"Wio Link Event Kit",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_Link_Event_Kit/",slug:"/Wio_Link_Event_Kit",last_update:{date:"01/11/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_Link/Wio_Link_Event_Kit",id:"Sensor/Wio_Series/Wio_Link/Wio_Link_Event_Kit",title:"Wio Link Event Kit",description:"Wio Link Event Kit is a event-monitoring kit which include some typical event-triggered Grove functional modules to build smart IoT devices. The most amazing part of this kit is the Wio Link development board which can be utilized for various devices: without a bit programming skill required. All the actions you want your modules performed and the flashing code operation to Wio Link could be completed with taps in a mobile app. And you can send instructions to your devices over the internet at anywhere. So Wio Link will be a perfect utility to making things around smarter for everyone. Now let's get familiar with some event-triggered modules included in this Kit.",source:"@site/docs/Sensor/Wio_Series/Wio_Link/Wio_Link_Event_Kit.md",sourceDirName:"Sensor/Wio_Series/Wio_Link",slug:"/Wio_Link_Event_Kit",permalink:"/zh-CN/Wio_Link_Event_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Link/Wio_Link_Event_Kit.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"Wio Link Event Kit",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_Link_Event_Kit/",slug:"/Wio_Link_Event_Kit",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio Link Environment Kit",permalink:"/zh-CN/Wio_Link_Environment_Kit"},next:{title:"Wio Link Starter Kit",permalink:"/zh-CN/Wio_Link_Starter_Kit"}},u={},s=[{value:"Features",id:"features",level:2},{value:"Parts list",id:"parts-list",level:2},{value:"A simple demo",id:"a-simple-demo",level:2},{value:"Preliminary Guide",id:"preliminary-guide",level:3},{value:"Material required",id:"material-required",level:3},{value:"A detailed how-to",id:"a-detailed-how-to",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_Link_Event_Kit/img/Wio_Link_Event_Kit_product_view_1200_s.jpg",alt:null})),(0,n.kt)("p",null,"Wio Link Event Kit is a event-monitoring kit which include some typical event-triggered Grove functional modules to build smart IoT devices. The most amazing part of this kit is the Wio Link development board which can be utilized for various devices: without a bit programming skill required. All the actions you want your modules performed and the flashing code operation to Wio Link could be completed with taps in a mobile app. And you can send instructions to your devices over the internet at anywhere. So Wio Link will be a perfect utility to making things around smarter for everyone. Now let's get familiar with some event-triggered modules included in this Kit."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Wio-Link-Event-Kit-p-2611.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," The Wio IFTTT function is EOL. But Wio APP is available. You can use the API from Wio APP to read sensor status and control the actuator. \n"))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Include common frequently-used event-monitoring functional modules."),(0,n.kt)("li",{parentName:"ul"},"Completely easy to make things around you smarter."),(0,n.kt)("li",{parentName:"ul"},"Grove port interfaced, more practical function and less work."),(0,n.kt)("li",{parentName:"ul"},"Weight: 145 g")),(0,n.kt)("h2",{id:"parts-list"},"Parts list"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parts name"),(0,n.kt)("th",{parentName:"tr",align:null},"Quantity"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F"},"Grove - IR Distance Interrupt")),(0,n.kt)("td",{parentName:"tr",align:null},"1PC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Grove-Button/"},"Grove - Button")),(0,n.kt)("td",{parentName:"tr",align:null},"1PC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Magnetic-Switch.html?queryID=d18ad991c05de7f74bbabc475ad4f905&objectID=1827&indexName=bazaar_retailer_products"},"Grove - Magnetic Switch")),(0,n.kt)("td",{parentName:"tr",align:null},"1PC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Grove-3-Axis_Digital_Accelerometer-1.5g/"},"Grove - 3-Axis Digital Accelerometer(\xb11.5g)")),(0,n.kt)("td",{parentName:"tr",align:null},"1PC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Wio_Link/"},"Wio Link")),(0,n.kt)("td",{parentName:"tr",align:null},"1PC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html?queryID=a8b80828fdcd52ad1ae49daa5ed97191&objectID=1405&indexName=bazaar_retailer_products"},"Micro USB Cable - 48cm")),(0,n.kt)("td",{parentName:"tr",align:null},"1PC")))),(0,n.kt)("h2",{id:"a-simple-demo"},"A simple demo"),(0,n.kt)("p",null,"This demo can used as a compilation result-indicator."),(0,n.kt)("h3",{id:"preliminary-guide"},"Preliminary Guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://travis-ci.org/"},"Travis CI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Wio_Link/"},"Wio Link"))),(0,n.kt)("h3",{id:"material-required"},"Material required"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Link-Event-Kit-p-2611.html?queryID=3ab174447ce3813d2105c3db0e9e783a&objectID=537&indexName=bazaar_retailer_products"},"Wio Link APP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Wio_Link/"},"Wio Link")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Relay.html?queryID=f15824e61eef2f0aa449144b0da3587c&objectID=1804&indexName=bazaar_retailer_products"},"Grove Relay")," \xd7 3"),(0,n.kt)("li",{parentName:"ul"},"A Travis CI Account"),(0,n.kt)("li",{parentName:"ul"},"A GitHub Account"),(0,n.kt)("li",{parentName:"ul"},"Traffic Light")),(0,n.kt)("h3",{id:"a-detailed-how-to"},"A detailed how-to"),(0,n.kt)("p",null,"Please go to ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/1068-traffic-light-indicates-travis-ci-compiled-results.html"},"Recipe")," for the detailed manual:"),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);