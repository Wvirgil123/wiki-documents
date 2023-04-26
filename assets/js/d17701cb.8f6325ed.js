"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91298],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={description:"Traffic Management DeepStream SDK",title:"Traffic Management DeepStream SDK",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Traffic-Management-DeepStream-SDK",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},o="Intelligent Traffic Management System using DeepStream SDK",p={unversionedId:"Edge/reComputer/Application/Traffic-Management-DeepStream-SDK",id:"Edge/reComputer/Application/Traffic-Management-DeepStream-SDK",title:"Traffic Management DeepStream SDK",description:"Traffic Management DeepStream SDK",source:"@site/docs/Edge/reComputer/Application/Traffic-Management-DeepStream-SDK.md",sourceDirName:"Edge/reComputer/Application",slug:"/Traffic-Management-DeepStream-SDK",permalink:"/Traffic-Management-DeepStream-SDK",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Application/Traffic-Management-DeepStream-SDK.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Traffic Management DeepStream SDK",title:"Traffic Management DeepStream SDK",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Traffic-Management-DeepStream-SDK",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"DashCamNet with Jetson Xavier NX Multicamera",permalink:"/DashCamNet-with-Jetson-Xavier-NX-Multicamera"},next:{title:"Few-Shot Object Detection",permalink:"/YOLOv5-Object-Detection-Jetson"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"What is DeepStream SDK?",id:"what-is-deepstream-sdk",level:2},{value:"Hardware supported",id:"hardware-supported",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intelligent-traffic-management-system-using-deepstream-sdk"},"Intelligent Traffic Management System using DeepStream SDK"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"As cities are growing day-by-day, so is the number of vehicles on the roads. Because of this, the traffic congestion also grows rapidly and this in turn can heavily impact on the development of a country. This wiki proposes a solution for this issue using AI vision. The streaming video from already depolyed CCTV cameras at every traffic light can be captured, perform object detection to detect all the vehicles and then control the traffic lights according to the vehicle congestion. Furthermore this data can be sent to a database along with the vehicle make and the number of pedestrians for further analysis."),(0,r.kt)("p",null,"For this AI vision application, we will use DeepStream SDK by NVIDIA and perform inference at the edge on an NVIDIA Jetson device. Also, we will use a pre-trained model for this task from ",(0,r.kt)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/models"},"NVIDIA NGC Model Catalog")," to make the deployment process fast and easy. NVIDIA NGC Model Catalog provides a large number of pre-trained models for many other different applications as well."),(0,r.kt)("h2",{id:"what-is-deepstream-sdk"},"What is DeepStream SDK?"),(0,r.kt)("p",null,"NVIDIA\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/deepstream-sdk"},"DeepStream SDK")," delivers a complete streaming analytics toolkit for AI-based multi-sensor processing, video, audio and image understanding. DeepStream brings development flexibility by giving developers the option to develop in C/C++,Python, or use low-code graphical programming with Graph Composer. DeepStream ships with various hardware accelerated plugins and extensions."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://developer.nvidia.com/sites/default/files/akamai/ds-workflow.png"})),(0,r.kt)("p",null,"DeepStream is built for both developers and enterprises and offers extensive AI model support for popular object detection and segmentation models such as state of the art SSD, YOLO, FasterRCNN, and MaskRCNN. You can also integrate custom functions and libraries in DeepStream."),(0,r.kt)("p",null,"Deepstream offers the flexibility from rapid prototyping to full production level solutions. It also allows you to choose your inference path. With native integration to NVIDIA Triton Inference Server, you can deploy models in native frameworks such as PyTorch and TensorFlow for inference. Using NVIDIA TensorRT for high throughput inference with options for multi-GPU, multi-stream and batching support option, you can achieve the best possible performance."),(0,r.kt)("h2",{id:"hardware-supported"},"Hardware supported"),(0,r.kt)("p",null,"DeepStream SDK is supported by the following hardware:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kits by Seeed:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"reComputer J1010 built with Jetson Nano"),(0,r.kt)("li",{parentName:"ul"},"reComputer J1020 built with Jetson Nano"),(0,r.kt)("li",{parentName:"ul"},"reComputer J2011 built with Jetson Xavier NX 8GB"),(0,r.kt)("li",{parentName:"ul"},"reComputer J2012 built with Jetson Xavier NX 16GB"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Carrier Boards by Seeed:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Jetson Mate"),(0,r.kt)("li",{parentName:"ul"},"Jetson SUB Mini PC"),(0,r.kt)("li",{parentName:"ul"},"Jetson Xavier AGX H01 Kit"),(0,r.kt)("li",{parentName:"ul"},"A203 Carrier Board"),(0,r.kt)("li",{parentName:"ul"},"A203 (Version 2) Carrier Board"),(0,r.kt)("li",{parentName:"ul"},"A205 Carrier Board"),(0,r.kt)("li",{parentName:"ul"},"A206 Carrier Board"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Official Development Kits by NVIDIA:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson Nano Developer Kit"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson Xavier NX Developer Kit"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson AGX Xavier Developer Kit"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson TX2 Developer Kit"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson AGX Orin Developer Kit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Official SoMs by NVIDIA:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson Nano module"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson Xavier NX module"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson TX2 NX module"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson TX2 module"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson AGX Xavier module")))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any of the above Jetson devices running JetPack"),(0,r.kt)("li",{parentName:"ul"},"Keyboard and HDMI display"),(0,r.kt)("li",{parentName:"ul"},"Host PC with Windows, Linux or Mac"),(0,r.kt)("li",{parentName:"ul"},"USB webcam or MIPI CSI camera supported by your Jetson device")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Here we will use ",(0,r.kt)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/dashcamnet"},"DashCamNet model")," which acts as the primary detector, detecting the objects of interest and for each detected car the ",(0,r.kt)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehicletypenet"},"VehicleTypeNet model")," and ",(0,r.kt)("a",{parentName:"p",href:"https://catalog.ngc.nvidia.com/orgs/nvidia/teams/tao/models/vehiclemakenet"},"VehicleMakeNet model")," act as secondary classifiers determining the type of the car and the make of the car respectively. VehicleTypeNet classifies the following: coupe, sedan, SUV, van, large vehicle and truck. Whereas VehicleMakeNet classifies following cars: Acura, Audi, BMW, Chevrolet, Chrysler, Dodge, Ford, GMC, Honda, Hyundai, Infiniti, Jeep, Kia, Lexus, Mazda, Mercedes, Nissan, Subaru, Toyota, and Volkswagen."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The below workflow is tested on a ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1010")," running ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack-sdk-461"},"JetPack 4.6.1"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Make sure you have properly installed all the ",(0,r.kt)("strong",{parentName:"p"},"SDK Components")," and ",(0,r.kt)("strong",{parentName:"p"},"DeepStream SDK")," on the Jetson device. (check ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Tutorial-of-A20X-Carrier-Boards/"},"this wiki")," for a reference on installation)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," It is recommended to use ",(0,r.kt)("strong",{parentName:"p"},"NVIDIA SDK Manager")," to install all the SDK components and DeepStream SDK"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Download the configuration files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/NVIDIA-AI-IOT/deepstream_reference_apps.git\ncd deepstream_reference_apps/deepstream_app_tao_configs/\nsudo cp -a * /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Download the models"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install -y wget zip\ncd /opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/\nsudo ./download_models.sh\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Open ",(0,r.kt)("strong",{parentName:"p"},"deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"vi deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," Change ",(0,r.kt)("strong",{parentName:"p"},"sync=1")," to ",(0,r.kt)("strong",{parentName:"p"},"sync=0")," under ","[sink0]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[sink0]\nenable=1\n#Type - 1=FakeSink 2=EglSink 3=File\ntype=2\nsync=0\nsource-id=0\ngpu-id=0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6:")," Under ","[primary-gie]",", change model-engine-file to ",(0,r.kt)("strong",{parentName:"p"},"../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[primary-gie]\nenable=1\ngpu-id=0\n# Modify as necessary\nmodel-engine-file=../../models/tao_pretrained_models/dashcamnet/resnet18_dashcamnet_pruned.etlt_b1_gpu0_fp16.engine\nbatch-size=1\n#Required by the app for OSD, not a plugin property\nbbox-border-color0=1;0;0;1\nbbox-border-color1=0;1;1;1\nbbox-border-color2=0;0;1;1\nbbox-border-color3=0;1;0;1\ngie-unique-id=1\nconfig-file=config_infer_primary_dashcamnet.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 7:")," Under ","[secondary-gie0]",", change model-engine-file to ",(0,r.kt)("strong",{parentName:"p"},"../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[secondary-gie0]\nenable=1\nmodel-engine-file=../../models/tao_pretrained_models/vehiclemakenet/resnet18_vehiclemakenet_pruned.etlt_b4_gpu0_fp16.engine\ngpu-id=0\nbatch-size=4\ngie-unique-id=4\noperate-on-gie-id=1\noperate-on-class-ids=0;\nconfig-file=config_infer_secondary_vehiclemakenet.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 8:")," Under ","[secondary-gie1]",", change model-engine-file to ",(0,r.kt)("strong",{parentName:"p"},"../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"[secondary-gie1]\nenable=1\nmodel-engine-file=../../models/tao_pretrained_models/vehicletypenet/resnet18_vehicletypenet_pruned.etlt_b4_gpu0_fp16.engine\ngpu-id=0\nbatch-size=4\ngie-unique-id=5\noperate-on-gie-id=1\noperate-on-class-ids=0;\nconfig-file=config_infer_secondary_vehicletypenet.txt\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 9:")," Connect camera, keyboard, HDMI display to Jetson device and execute the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo deepstream-app -c deepstream_app_source1_dashcamnet_vehiclemakenet_vehicletypenet.txt\n")),(0,r.kt)("p",null,"Now you can visualize the demo on the connected HDMI display as follows"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/DeepStream/demo-optimized.gif"})),(0,r.kt)("p",null,"If you want to try other demos available under ",(0,r.kt)("strong",{parentName:"p"},"/opt/nvidia/deepstream/deepstream/samples/configs/tao_pretrained_models/"),", you can simply run them as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo deepstream-app -c deepstream_app_source1_$MODEL.txt\n")),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);