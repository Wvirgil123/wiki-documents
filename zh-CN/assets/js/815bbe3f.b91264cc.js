"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27777],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(i),c=n,h=p["".concat(d,".").concat(c)]||p[c]||m[c]||a;return i?r.createElement(h,o(o({ref:t},u),{},{components:i})):r.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},30739:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=i(87462),n=(i(67294),i(3905));const a={description:"Overview",title:"Overview",keywords:["Wio_terminal Audio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Audio-Overview",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="Audio Library For Wio Terminal Overview",l={unversionedId:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Overview",id:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Overview",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board",slug:"/Wio-Terminal-Audio-Overview",permalink:"/zh-CN/Wio-Terminal-Audio-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-Overview.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal Audio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Audio-Overview",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Ethernet Extension board",permalink:"/zh-CN/Wio-Terminal-Ethernet"},next:{title:"Play and Record",permalink:"/zh-CN/Wio-Terminal-Audio-Play-Record"}},d={},s=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Hardware Connection",id:"hardware-connection",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installing the Seeed_Arduino_Audio",id:"installing-the-seeed_arduino_audio",level:2},{value:"Installing the FS libraries for Wio Terminal",id:"installing-the-fs-libraries-for-wio-terminal",level:2}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"audio-library-for-wio-terminal-overview"},"Audio Library For Wio Terminal Overview"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif"})),(0,n.kt)("p",null,"This wiki introduces how to use the Audio library with Wio Terminal using ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html"},(0,n.kt)("strong",{parentName:"a"},"ReSpeaker 2-Mic Hat")),". With the help of this library, you are able to record, play and analysis audio using Wio Terminal! Furthermore, this audio library can be implemented into different areas such as Speech recognition and much more!"),(0,n.kt)("h2",{id:"hardware-required"},"Hardware Required"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,n.kt)("strong",{parentName:"a"},"Wio Terminal")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html"},(0,n.kt)("strong",{parentName:"a"},"ReSpeaker 2-Mics Pi HAT")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"40 Pin Pi HAT Adapter board for Wio Terminal (Not released yet)")))),(0,n.kt)("h2",{id:"hardware-connection"},"Hardware Connection"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For now, if you want to test out the software, you will fly out leads.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/ai-wt.png"})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"To get started with the Audio library for Wio Terminal, please follow through the followings:"),(0,n.kt)("h2",{id:"installing-the-seeed_arduino_audio"},"Installing the Seeed_Arduino_Audio"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Audio"},"Seeed_Arduino_Audio")," repositories and download the entire repo to your local drive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_Audio")," file that you've have just downloaded."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,n.kt)("h2",{id:"installing-the-fs-libraries-for-wio-terminal"},"Installing the FS libraries for Wio Terminal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Please visit the official ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/"},(0,n.kt)("strong",{parentName:"a"},"Wio Terminal File System wiki"))," page.")))}p.isMDXComponent=!0}}]);