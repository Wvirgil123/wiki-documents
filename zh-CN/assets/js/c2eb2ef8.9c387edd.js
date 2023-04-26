"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39192],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return a?o.createElement(h,r(r({ref:t},p),{},{components:a})):o.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=a(87462),i=(a(67294),a(3905));const n={description:"Xadow - NFC",title:"Xadow - NFC",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_NFC",last_update:{date:"1/13/2023",author:"shuxu hu"}},r=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_NFC",id:"Seeed_Elderly/Xadow/Xadow_NFC",title:"Xadow - NFC",description:"Xadow - NFC",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_NFC.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_NFC",permalink:"/zh-CN/Xadow_NFC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_NFC.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - NFC",title:"Xadow - NFC",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_NFC",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Metal Frame",permalink:"/zh-CN/Xadow_Metal_Frame"},next:{title:"Xadow - NFC Tag",permalink:"/zh-CN/Xadow_NFC_tag"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Xadow NFC Schematic Online Viewer",id:"xadow-nfc-schematic-online-viewer",level:2},{value:"Xadow NFC Antenna Schematic Online Viewer",id:"xadow-nfc-antenna-schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Near Field Communication (NFC) is a set of short-range wireless technologies. It's behind daily applications such as access control system and mobile payment system."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_NFC/images/X_nfc_01.jpg",alt:null})),(0,i.kt)("p",null,"Xadow NFC features a highly integrated transceiver module PN532 which handles contactless communication at 13.56MHz. You can read and write a 13.56MHz tag with this module or implement point to point data exchange with two Xadow NFCs. Xadow NFC is designed to use I2C, SPI or UART communication protocols, and I2C is the default mode. In addition, we assign an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-NFC-p-1627.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Working Voltage: 3.3V"),(0,i.kt)("li",{parentName:"ul"},"Working Current:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Static Mode: 73mA"),(0,i.kt)("li",{parentName:"ul"},"Write/Read Mode: 83mA"))),(0,i.kt)("li",{parentName:"ul"},"Support host interface: I2C(default), SPI, UART."),(0,i.kt)("li",{parentName:"ul"},"Serve for contactless communication at 13.56MHz."),(0,i.kt)("li",{parentName:"ul"},"Support ISO14443 Type A and Type B protocols."),(0,i.kt)("li",{parentName:"ul"},"Max operating distance for detecting NFC tags is 28mm depending on current antenna size."),(0,i.kt)("li",{parentName:"ul"},"Support P2P communication."),(0,i.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Xadow NFC has many capabilities which integrates a PN532 NFC controller, our Arduino library supports reading/writing tags, phone-to-Xadow NFC communication, tag emulation at this time, it's a 3-in-1 allstar."),(0,i.kt)("admonition",{title:":",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"When Xadow NFC is using SPI communication protocols, there is an existing library which supports phone-to-Xadow NFC communication. The default communication mode for this product is I2C, so the library cannot use directly.\n"))),(0,i.kt)("p",null,"Before reading/writing tag, what you need to prepare is the hardware installation and the libraries."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The hardware installation as shown below:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_NFC/images/XadowNFC.jpg",alt:null})),(0,i.kt)("admonition",{title:":",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"When connect Xadow - NFC to [Xadow - Main Board](https://wiki.seeedstudio.com/Xadow_Main_Board), you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module (see four corners of each Xadow module).\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/PN532"},"PN532 library")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/don/NDEF"},"NDEF Library"),". Do not forget to install these libraries into Arduino Library. If you haven't knew clearly the operation, please refer ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/wiki/How_to_install_Arduino_Library"},"here")," for a closer look.")),(0,i.kt)("admonition",{title:":",type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"Make sure that you have folders - PN532, PN532_SPI, PN532_I2C, PN532_HSU and NDEF (from NDEF Library) in your Arduino Library folder.\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Demo 1: Write messages to tag")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the code directly by the path:File -> Example ->Ndef_dev->WriteTag.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_NFC/images/Code_Interfae.jpg",alt:null})),(0,i.kt)("p",null,'In this code, the function message.addUriRecord("',(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc%22"},'https://arduino.cc"'),') is used to write message to tag. You can replace the message "',(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc%22"},'https://arduino.cc"'),' with new message. For example, we input "do you happy?" and "hello, world" using this function.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upload the code and open the Serial Monitor, It prompts you to place a NFC tag on the NFC antenna. After a successful operation, it will prompt you to read the tag.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_NFC/images/WriteTag.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Demo 2: Read tag")),(0,i.kt)("p",null,"If you want to know whether the writing operation you have just done is successful, you can use the code:ReadTag for checking."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the code:ReadTag directly by the path:File -> Example ->Ndef_dev->ReadTag and upload it to your Xadow Main Board.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_NFC/images/ReadTag_code.bmp",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the Serial Monitor to see the tag information. Following figure shows the reading result:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_NFC/images/Read_a_Tag.jpg",alt:null})),(0,i.kt)("p",null,"It is essential to explain a NDEF message in order to have a clear recognition about the above picture. There can be multiple records in a NDEF message. For our analysis purposes we use only one NDEF records."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TNF(001)")," - The TNF field value indicates the structure of the value of the TYPE field. The value 0x01 (NFC Forum well-known type) indicates that the TYPE field contains a value that follows the RTD type name format defined in the NFC Forum RTD specification)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type Length")," - The TYPE_LENGTH field is an unsigned 8-bit integer that specifies the length in octets of the TYPE field. The TYPE_LENGTH field is always zero for certain values of the TNF field."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pay load Length")," - The PAYLOAD_LENGTH field is an unsigned integer that specifies the length in octets of the PAYLOAD field (the application payload). The size of the PAYLOAD_LENGTH field is determined by the value of the SR flag"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type(55)")," - The value of the TYPE field is an identifier describing the type of the payload, The URI record type (\u201cU\u201d)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pay Load")," - The rest of the string in UTF-8"),(0,i.kt)("h2",{id:"xadow-nfc-schematic-online-viewer"},"Xadow NFC Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"xadow-nfc-antenna-schematic-online-viewer"},"Xadow NFC Antenna Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Eagle_File.zip"},"Xadow NFC Eagle File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_NFC/resources/Xadow_NFC_Antanna.zip"},"Xadow NFC Antenna Eagle File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf"},"PN532 Datasheet"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);