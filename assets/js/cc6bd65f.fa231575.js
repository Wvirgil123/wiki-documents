"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={description:"Edge Impulse on CodeCraft",title:"Edge Impulse on CodeCraft",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Edge_Impulse_CC",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Codecraft connecting Azure IoT with Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Edge_Impulse_CC",id:"Sensor/Wio_Terminal/Tutorial/Edge_Impulse_CC",title:"Edge Impulse on CodeCraft",description:"Edge Impulse on CodeCraft",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Edge_Impulse_CC.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Edge_Impulse_CC",permalink:"/Edge_Impulse_CC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Edge_Impulse_CC.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Edge Impulse on CodeCraft",title:"Edge Impulse on CodeCraft",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Edge_Impulse_CC",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Codecraft connecting Azure IoT with Wio Terminal",permalink:"/Azure_IoT_CC"},next:{title:"Connecting to Blynk",permalink:"/Wio-Terminal-Blynk"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Tutorial",id:"tutorial",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"codecraft-connecting-azure-iot-with-wio-terminal"},"Codecraft connecting Azure IoT with Wio Terminal"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Here we gonna show you how to connect Codecraft with Azure IoT based on Wio Terminal and apply sensors to IoT projects. ",(0,a.kt)("a",{parentName:"p",href:"https://ide.tinkergen.com/"},"Codecraft")," is a graphical programmable application that can be used online and offline produced by Seeed. ",(0,a.kt)("a",{parentName:"p",href:"https://apps.azureiotcentral.com/"},"Azure IoT")," is a hosted IoT app platform that\u2019s secure, scales with you as your business grows, and integrates with your existing business apps produced by Microsoft."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/CCandAzure/jihe.png"})),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Required")),(0,a.kt)("p",null,"In this demo you will need the devices listed as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"WioTerminal")," x1"),(0,a.kt)("li",{parentName:"ul"},"Tpye-C Cable x1"),(0,a.kt)("li",{parentName:"ul"},"Computer x1")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Connect")),(0,a.kt)("p",null,"It is connected to a computer through the Type-C cable."),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software Required")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ide.tinkergen.com/"},"Codecraft")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apps.azureiotcentral.com/"},"Azure IoT"))),(0,a.kt)("h3",{id:"tutorial"},"Tutorial"),(0,a.kt)("p",null,"Here we gonna show you how to apply Wio Terminal in Codecraft and then connect Codecraft with Azure IoT to train a Machine Learning model and use it. The project is based on the Arduino platform which means Arduino IDE and various Arduino libraries are required. If this is your first time using the Wio terminal, we recommend a guide to quickly ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Get Started with Wio Terminal"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1")," Connect the Wio Terminal with PC."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2")," Open the ",(0,a.kt)("a",{parentName:"li",href:"https://ide.tinkergen.com/"},"Codecraft website")," and connect with the Wio Terminal")),(0,a.kt)("p",null,'Select "Wio Terminal"'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc1.png",alt:null})),(0,a.kt)("p",null,'Chose "Connect" , it might need to install CodecraftAssistant if it is the first time to use Codecraft for you.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc2.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc3.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3")," Drag the blocks on the left to build a finished program like below:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc5.png",alt:null})),(0,a.kt)("p",null,"As you may see, Wi-Fi and ",(0,a.kt)("strong",{parentName:"p"},"Azure IoT Central scope id")," here we need to set up. The Wi-Fi must be in the same environment of yours and next step we will fill the the Azure IoT information."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc6.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4")," Open the ",(0,a.kt)("a",{parentName:"li",href:"https://ide.tinkergen.com/"},"Azure website")," and ",(0,a.kt)("strong",{parentName:"li"},"creat a new app"))),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},'"Build"')," on the left side, the information here is customized and not very important."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/az.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5")," Click ",(0,a.kt)("strong",{parentName:"li"},'\u201cAdministration\u201d--\x3e"Device connection"--\x3e"SAS-IoT-Device"')," to add the Wio Terminal")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/az3.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6")," Copy the information of what we need in Codecraft and paste them to the program we build")),(0,a.kt)("p",null,"Here are the essential information ",(0,a.kt)("strong",{parentName:"p"},'"ID Scope", "Primary key", "Device ID"')," to the Codecraft"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/az5.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/az6.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7")," Upload the program and see the results")),(0,a.kt)("p",null,'Click the "upload" and upload the program'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/ccaz1.png",alt:null})),(0,a.kt)("p",null,'Move to the Azure IoT page and click "Device" --\x3e "SAS-IoT-Device"'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/ccaz.png",alt:null})),(0,a.kt)("p",null,"The connection should be like:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/ccaz2.png",alt:null})))}d.isMDXComponent=!0}}]);