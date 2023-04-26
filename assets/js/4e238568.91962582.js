"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19149],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(o),y=a,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||r;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},83830:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=o(87462),a=(o(67294),o(3905));const r={description:"Deploy Wiki Platform Locally",title:"Deploy Wiki Platform Locally",keywords:["Contribution"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Deploy_Page_Locally",last_update:{date:"3/14/2023",author:"Matthew"}},l=void 0,i={unversionedId:"Contribution/Contributors/Deploy_Page_Locally/Deploy_Page_Locally",id:"Contribution/Contributors/Deploy_Page_Locally/Deploy_Page_Locally",title:"Deploy Wiki Platform Locally",description:"Deploy Wiki Platform Locally",source:"@site/docs/Contribution/Contributors/Deploy_Page_Locally/Deploy_Page_Locally.md",sourceDirName:"Contribution/Contributors/Deploy_Page_Locally",slug:"/Deploy_Page_Locally",permalink:"/Deploy_Page_Locally",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Contribution/Contributors/Deploy_Page_Locally/Deploy_Page_Locally.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1678752e3,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{description:"Deploy Wiki Platform Locally",title:"Deploy Wiki Platform Locally",keywords:["Contribution"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Deploy_Page_Locally",last_update:{date:"3/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"microbit wiki page",permalink:"/microbit_wiki_page"},next:{title:"Contribution Guide",permalink:"/Contribution-Guide"}},s={},d=[{value:"1. Fork and Download the Repository",id:"1-fork-and-download-the-repository",level:3},{value:"2. Download node.js",id:"2-download-nodejs",level:3},{value:"3. Download Visual Studio Code",id:"3-download-visual-studio-code",level:3},{value:"4. Install Yarn",id:"4-install-yarn",level:3},{value:"5. Automatically install dependencies using Yarn",id:"5-automatically-install-dependencies-using-yarn",level:3},{value:"6. Build the wiki patform locally using Yarn",id:"6-build-the-wiki-patform-locally-using-yarn",level:3}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-fork-and-download-the-repository"},"1. Fork and Download the Repository"),(0,a.kt)("p",null,"a. Please visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version"},"Seeed Studio Wiki Platform's Github Repository")," and then ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," the 'wiki-documents' repository of your own."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image1",src:o(9919).Z,width:"2702",height:"1044"})),(0,a.kt)("p",null,"b. Download the files into your local PC. If you don't have ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," you can download ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone {your repository}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image2",src:o(7370).Z,width:"2702",height:"1142"})),(0,a.kt)("h3",{id:"2-download-nodejs"},"2. Download node.js"),(0,a.kt)("p",null,"Please download the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"node.js")," according to your operating system(Windows, Mac)."),(0,a.kt)("h3",{id:"3-download-visual-studio-code"},"3. Download Visual Studio Code"),(0,a.kt)("p",null,"Please download the ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"Visual Studio Code")," according to your operating system(Windows, Mac)."),(0,a.kt)("h3",{id:"4-install-yarn"},"4. Install Yarn"),(0,a.kt)("p",null,'Open the "Visual Studio Code" and use the followling command to install Yarn.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --global yarn\n")),(0,a.kt)("p",null,"For further information, please check ",(0,a.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable"},"here"),"."),(0,a.kt)("h3",{id:"5-automatically-install-dependencies-using-yarn"},"5. Automatically install dependencies using Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn\n")),(0,a.kt)("p",null,'For people using Windows operating system, please change "Powershall" to "Command Promat" and then execute ',(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),"."),(0,a.kt)("h3",{id:"6-build-the-wiki-patform-locally-using-yarn"},"6. Build the wiki patform locally using Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn start\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image3",src:o(96749).Z,width:"2702",height:"1442"})))}c.isMDXComponent=!0},9919:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/1-266e68cebfb5e61f7741ebfdc525718b.jpg"},7370:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/2-f04ae71a01f54bdff001dcc54ef6b4f3.jpg"},96749:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/3-86de52d67331f19b3bb1c512eabcd23a.jpg"}}]);