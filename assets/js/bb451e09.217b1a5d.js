"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62596],{3905:(t,e,s)=>{s.d(e,{Zo:()=>p,kt:()=>c});var n=s(67294);function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function r(t,e){if(null==t)return{};var s,n,a=function(t,e){if(null==t)return{};var s,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)s=i[n],e.indexOf(s)>=0||(a[s]=t[s]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)s=i[n],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(a[s]=t[s])}return a}var l=n.createContext({}),m=function(t){var e=n.useContext(l),s=e;return t&&(s="function"==typeof t?t(e):o(o({},e),t)),s},p=function(t){var e=m(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var s=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),d=m(s),h=a,c=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return s?n.createElement(c,o(o({ref:e},p),{},{components:s})):n.createElement(c,o({ref:e},p))}));function c(t,e){var s=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=s.length,o=new Array(i);o[0]=h;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r[d]="string"==typeof t?t:a,o[1]=r;for(var m=2;m<i;m++)o[m]=s[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}h.displayName="MDXCreateElement"},13062:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var n=s(87462),a=(s(67294),s(3905));const i={description:"ODYSSEY - X86J41x5",title:"Getting Started with Home Assistant",tags:["ODYSSEY","Home Assistant"],keywords:["ODYSSEY","Home Assistant"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86-Home-Assistant",last_update:{date:"03/16/2023",author:"Lakshantha"}},o="Getting Started with Home Assistant on ODYSSEY-X86",r={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/ODYSSEY-X86-Home-Assistant",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/ODYSSEY-X86-Home-Assistant",title:"Getting Started with Home Assistant",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/ODYSSEY-X86-Home-Assistant.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY",slug:"/ODYSSEY-X86-Home-Assistant",permalink:"/ODYSSEY-X86-Home-Assistant",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Home-Assistant_for_ODYSSEY/ODYSSEY-X86-Home-Assistant.md",tags:[{label:"ODYSSEY",permalink:"/tags/odyssey"},{label:"Home Assistant",permalink:"/tags/home-assistant"}],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1678924800,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{description:"ODYSSEY - X86J41x5",title:"Getting Started with Home Assistant",tags:["ODYSSEY","Home Assistant"],keywords:["ODYSSEY","Home Assistant"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86-Home-Assistant",last_update:{date:"03/16/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"LTE Modules for ODYSSEY",permalink:"/ODYSSEY-X86J4105-LTE-Module"},next:{title:"How to Customize Home Assistant",permalink:"/ODYSSEY-Home-Assistant-Customize"}},l={},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is Home Assistant?",id:"what-is-home-assistant",level:2},{value:"Different installation methods",id:"different-installation-methods",level:2},{value:"Installation Method for ODYSSEY - X86",id:"installation-method-for-odyssey---x86",level:2},{value:"Why not Home Assistant Container?",id:"why-not-home-assistant-container",level:3},{value:"Let&#39;s build it!",id:"lets-build-it",level:2},{value:"Run Home Assistant from a USB flash drive",id:"run-home-assistant-from-a-usb-flash-drive",level:3},{value:"Run Home Assistant from external HDD/ SSD, M.2 SSD, eMMC",id:"run-home-assistant-from-external-hdd-ssd-m2-ssd-emmc",level:3},{value:"View Home Assistant Dashboard UI on web browser",id:"view-home-assistant-dashboard-ui-on-web-browser",level:2},{value:"View Home Assistant Dashboard UI in Kiosk mode on reTerminal",id:"view-home-assistant-dashboard-ui-in-kiosk-mode-on-reterminal",level:2},{value:"Bonus",id:"bonus",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:m};function d(t){let{components:e,...s}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-home-assistant-on-odyssey-x86"},"Getting Started with Home Assistant on ODYSSEY-X86"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/thumb.png"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This wiki will walkthrough step-by-step on how you can turn your ordinary house into a smart one just by using an ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html"},"ODYSSEY-X86"),"! By the end of this wiki, you will be able to view a beautiful dashboard on your PC, tablet, smartphone, reTerminal and be able to control your home appliances and view other information such as sensor data right at your fingertips. So, let's get started!"),(0,a.kt)("h2",{id:"what-is-home-assistant"},"What is Home Assistant?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io"},"Home Assistant")," is a free and open-source software for home automation designed to be a central control system for smart home devices, which can be referred to as a smart home hub. It offers you home automation without needing the cloud, which means your home automation system is not dependent on remote servers or an internet connection. This local control means, you can have far better security than cloud connected devices. Also, it offers greater reliability when it comes to keep it running 24x7. "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/1.png"})),(0,a.kt)("p",null,"It is flexible to use and very easy to get started even for beginners with the great documentation offered by Home Assistant. Also, there is an active community on ",(0,a.kt)("a",{parentName:"p",href:"https://community.home-assistant.io"},"Home Assistant Forum")," with many members who will be there to help you if you come across any issues when building and running Home Assistant."),(0,a.kt)("p",null,"After setting up Home Assistant, it can be accessed through a web-based user interface by using companion apps for Android and iOS, or by voice commands via a supported virtual assistant such as Google Assistant or Amazon Alexa."),(0,a.kt)("p",null,"If you want to quickly experience a demo on your web browser, please ",(0,a.kt)("a",{parentName:"p",href:"https://demo.home-assistant.io"},"click here"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/3.png"})),(0,a.kt)("h2",{id:"different-installation-methods"},"Different installation methods"),(0,a.kt)("p",null,"Home Assistant is supported to run on different hardware such as a Raspberry Pi, ODROID, ASUS Tinkerboard, Intel NUC, Windows/ Linux/ Mac PCs. And with this, comes different methods of installation on different hardware. To learn more about all these installation methods please visit ",(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation"},"this page"),"."),(0,a.kt)("p",null,"As you can see below, there are 4 main types of installation methods and not all Home Assistant features are supported by all installation methods."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:650,src:"https://files.seeedstudio.com/wiki/Home-Assistant/2.png"})),(0,a.kt)("h2",{id:"installation-method-for-odyssey---x86"},"Installation Method for ODYSSEY - X86"),(0,a.kt)("p",null,"According to Home Assistant, the two recommended methods of Home Assistant installation are ",(0,a.kt)("strong",{parentName:"p"},"OS and Container method"),". Here we will use ",(0,a.kt)("strong",{parentName:"p"},"OS method")," because it will give access to all the features of Home Assistant."),(0,a.kt)("h3",{id:"why-not-home-assistant-container"},"Why not Home Assistant Container?"),(0,a.kt)("p",null,"If we install Home Assistant Container on ODYSSEY-X86, we will be missing out on several Home Assistant features. So we will skip on that installation. However, if you want to explore this installation method, you can follow ",(0,a.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/generic-x86-64#install-home-assistant-container"},"this guide"),"."),(0,a.kt)("h2",{id:"lets-build-it"},"Let's build it!"),(0,a.kt)("p",null,"Now let's go through the process of installing Home Assistant OS on ODYSSEY-X86. "),(0,a.kt)("p",null,"There are different ways to install Home Assistant OS on ODYSSEY-X86. The most simplest way would be to directly flash the Home Assistant OS image to a USB flash drive, connect the USB drive to ODYSSEY-X86 and run Home Assistant from it."),(0,a.kt)("p",null,"The other way would be to install Home Assistant OS on a different storage device such as an external HDD, SSD, M.2 SSD and the onboard eMMC(for ODYSSEY-X86 eMMC version). This method can guarantee that you have a reliable storage device in comparison with a USB drive. "),(0,a.kt)("p",null,"We will explain how to install Home Assistant OS in both methods!"),(0,a.kt)("h3",{id:"run-home-assistant-from-a-usb-flash-drive"},"Run Home Assistant from a USB flash drive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Connect a USB flash drive to your PC")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," It is recommended to use a flash drive with at least 16GB of storage capacity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Download and install ",(0,a.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher"},"Balena Etcher")," according to your operating system ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Open Balena Etcher and select ",(0,a.kt)("strong",{parentName:"p"},"Flash from URL")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/20.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Copy and paste the below URL inside the empty box and click ",(0,a.kt)("strong",{parentName:"li"},"OK"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/21.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Once the image is downloaded, click ",(0,a.kt)("strong",{parentName:"li"},"Select target")," and select the connected USB flash drive")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/23.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Click ",(0,a.kt)("strong",{parentName:"li"},"Flash")," to start writing the image to the USB flash drive")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/24.png"})),(0,a.kt)("p",null,"If the flashing process is successful, you will see the below output"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/25.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 7.")," Connect this USB flash drive to one of the USB ports on the ODYSSEY-X86 and turn on the board ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 8.")," Keep pressing ",(0,a.kt)("strong",{parentName:"p"},"DELETE")," key to enter BIOS"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9.")," Go to ",(0,a.kt)("strong",{parentName:"li"},"Boot")," tab, select ",(0,a.kt)("strong",{parentName:"li"},"Boot Option #1")," and select ",(0,a.kt)("strong",{parentName:"li"},"UEFI: OS (USB)")," and click ",(0,a.kt)("strong",{parentName:"li"},"Yes")," for the pop-up")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/27.jpg"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg"})),(0,a.kt)("p",null,"Now ODYSSEY-X86 will reboot and use the connected USB drive as the boot device. After successful booting into Home Assistant OS, you will see the below output "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png"})),(0,a.kt)("h3",{id:"run-home-assistant-from-external-hdd-ssd-m2-ssd-emmc"},"Run Home Assistant from external HDD/ SSD, M.2 SSD, eMMC"),(0,a.kt)("p",null,"In this method, we will first create a bootable USB drive with Ubuntu Desktop and then boot ODYSSEY-X86 from it. After that we will flash Home Assistant OS to a drive (external HDD/ SSD, M.2 SSD, onboard eMMC) while we are inside the Ubuntu system and run Home Assistant from that drive."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the latest Ubuntu Desktop image from ",(0,a.kt)("a",{parentName:"p",href:"https://ubuntu.com/download/desktop"},"here"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Connect a USB flash drive to your PC "))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," It is recommended to use a flash drive with at least 8GB of storage capacity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Download and install ",(0,a.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher"},"Balena Etcher")," according to your operating system ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Open Balena Etcher, select ",(0,a.kt)("strong",{parentName:"p"},"Flash from file")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Click on downloaded ",(0,a.kt)("strong",{parentName:"li"},".iso file")," and click ",(0,a.kt)("strong",{parentName:"li"},"Open"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/3.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Click ",(0,a.kt)("strong",{parentName:"li"},"Select target"),", select the connected USB flash drive and click ",(0,a.kt)("strong",{parentName:"li"},"Select"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/4.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/5.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Click ",(0,a.kt)("strong",{parentName:"li"},"Flash")," to flash Ubuntu server to USB flash drive")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/6.png"})),(0,a.kt)("p",null,"If the flashing process is successful, you will see the below output"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8.")," Connect this USB flash drive to one of the USB ports on the ODYSSEY-X86, connect a storage drive (external HDD/ SSD, M.2 SSD) and power on the board")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Make sure a keyboard, mouse and a display is connected to ODYSSEY-X86"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9.")," Keep pressing ",(0,a.kt)("strong",{parentName:"li"},"DELETE")," key to enter BIOS")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/7.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 10.")," Go to ",(0,a.kt)("strong",{parentName:"li"},"Boot")," tab, select ",(0,a.kt)("strong",{parentName:"li"},"Boot Option #1")," and select ",(0,a.kt)("strong",{parentName:"li"},"UEFI: USB, Partition 2"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/8.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 11.")," Go to ",(0,a.kt)("strong",{parentName:"li"},"Save & Exit")," tab, click ",(0,a.kt)("strong",{parentName:"li"},"Save Changes and Reset")," and click ",(0,a.kt)("strong",{parentName:"li"},"Yes")," for the pop-up")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/9.jpg"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/10.jpg"})),(0,a.kt)("p",null,"Now ODYSSEY-X86 will reboot and use the connected USB drive as the boot device. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 12.")," Select ",(0,a.kt)("strong",{parentName:"li"},"Try or Install Ubuntu"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/11.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 13.")," Click ",(0,a.kt)("strong",{parentName:"li"},"Try Ubuntu"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/12.jpg"})),(0,a.kt)("p",null,"After a few seconds, it will boot into Ubuntu Desktop"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/13.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 14.")," Open a terminal window by pressing ",(0,a.kt)("strong",{parentName:"li"},"Ctrl+Alt+T"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/14.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 15.")," Type the following command to download Home Assistant OS image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/home-assistant/operating-system/releases/download/9.0/haos_generic-x86-64-9.0.img.xz\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 16.")," Extract the file by using the below command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"unxz haos_generic-x86-64-9.0.img.xz\n")),(0,a.kt)("p",null,"This will extract the above ",(0,a.kt)("strong",{parentName:"p"},".img.xz")," into ",(0,a.kt)("strong",{parentName:"p"},".img")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 17.")," Type ",(0,a.kt)("strong",{parentName:"li"},"lsblk")," to list the connected storage drives. Here we have connected an HDD drive via the SATA port.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:650,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/15.png"})),(0,a.kt)("p",null,"As you can see, the drive which is already running Ubuntu OS (USB flash drive) is ",(0,a.kt)("strong",{parentName:"p"},"sdb")," with several partitions and mountpoints. We can also identify this drive from the ",(0,a.kt)("strong",{parentName:"p"},"SIZE"),". This means the drive ",(0,a.kt)("strong",{parentName:"p"},"sda")," is the connected HDD drive."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 18.")," Enter the command below to flash the Home Assistant OS image to the connected HDD drive. In this case, drive ",(0,a.kt)("strong",{parentName:"li"},"sda"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dd if=haos_generic-x86-64-9.0.img of=/dev/sda status=progress\n")),(0,a.kt)("p",null,"Wait a few minutes until the process is completed"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/16.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 19.")," Type the following to reboot ODYSSEY-X86")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 20.")," Remove the USB flash drive and press ",(0,a.kt)("strong",{parentName:"li"},"ENTER")," when you see the below prompt")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/17.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 21.")," Enter BIOS as explained before and change the boot drive to the connected drive")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/18.png"})),(0,a.kt)("p",null,"Now ODYSSEY-X86 will reboot and use the connected drive as the boot device. After successful booting into Home Assistant OS, you will see the below output"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant-X86/19.png"})),(0,a.kt)("h2",{id:"view-home-assistant-dashboard-ui-on-web-browser"},"View Home Assistant Dashboard UI on web browser"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Open a web browser on a PC, tablet, smartphone type the following URL ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"homeassistant.local:8123\n")),(0,a.kt)("p",null,"It will take some time to finish the initial start up process"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Once finished starting up, create an account and follow through the initial set up instuctions ")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/13.png"})),(0,a.kt)("p",null,"After that you will see your welcome dashboard as follows"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/15.png"})),(0,a.kt)("h2",{id:"view-home-assistant-dashboard-ui-in-kiosk-mode-on-reterminal"},"View Home Assistant Dashboard UI in Kiosk mode on reTerminal"),(0,a.kt)("p",null,"To be able to view the Home Assistant Dashboard UI on ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html"},"reTerminal")," LCD, we will use Chromium web browser which already comes with Raspberry Pi OS. We will set up Chromium so that it will autostart on full-screen mode after reTerminal is booted up."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Turn on reTerminal and make sure Raspberry Pi OS is already installed. If not, you can follow ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal"},"this wiki"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to the following directory"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd /etc/xdg/lxsession/LXDE-pi/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Open ",(0,a.kt)("strong",{parentName:"li"},"autostart")," file with ",(0,a.kt)("strong",{parentName:"li"},"nano text editor"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano autostart\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Add the following line to the end of the file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Reboot reTerminal ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot \n")),(0,a.kt)("p",null,"Now when reTerminal boots up, Home Assistant dashboard UI will open in full-screen window !"),(0,a.kt)("h2",{id:"bonus"},"Bonus"),(0,a.kt)("p",null,"After integrating smart lights, temperature, humidity sensors, CCTV and more, a complete Smart Home dashboard on Home Assistant will look like below "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/16.png"})),(0,a.kt)("video",{style:{display:"block",maxWidth:"100%"},id:"video",controls:!0,preload:"none",poster:"https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png"},(0,a.kt)("source",{id:"mp4",src:"https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4",type:"video/mp4"})),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". "),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);