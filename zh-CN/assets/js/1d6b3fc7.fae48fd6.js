"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58699],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={description:"Use External Editor",title:"Use External Editor",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/Use_External_Editor",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},a=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Use_External_Editor",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Use_External_Editor",title:"Use External Editor",description:"Use External Editor",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Use_External_Editor.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Use_External_Editor",permalink:"/zh-CN/Use_External_Editor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Use_External_Editor.md",tags:[{label:"Tutorial",permalink:"/zh-CN/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{description:"Use External Editor",title:"Use External Editor",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/Use_External_Editor",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Upload Code",permalink:"/zh-CN/Upload_Code"},next:{title:"How To Use Sketchbook",permalink:"/zh-CN/How_To_Use_Sketchbook"}},l={},u=[{value:"Resources",id:"resources",level:3},{value:"Tech Support",id:"tech-support",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Some guy this Arduino IDE\u2019s editing interface is no so friendly, non-standard indentation, no syntax highlighting, no Autocomplete and so on. In short, if you\u2019ve used other excellent editor such as emacs, vim, even notepad++, you must be very unhappy about Arduino\u2019s editing interface."),(0,o.kt)("p",null,"But, you can use an external editor, open Arduino IDE, click File -",">"," Preferences, choose Use external editor:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Use_External_Editor/img/%E5%A4%96%E9%83%A8%E7%BC%96%E8%BE%91%E5%99%A81.png",alt:null})),(0,o.kt)("p",null,"Then you find you can\u2019t type in Arduino IDE, you can only use external editor now."),(0,o.kt)("p",null,"The following is my favorite editor: Vim, is it more beautiful than Arduino IDE?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Use_External_Editor/img/%E5%A4%96%E9%83%A8%E7%BC%96%E8%BE%91%E5%99%A82.png",alt:null})),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Use_External_Editor/res/Use_external_editor.pdf"},"down pdf file"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);