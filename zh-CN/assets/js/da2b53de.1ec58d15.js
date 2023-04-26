"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const l={description:"Edge Impulse Tuner",title:"Edge Impulse Tuner",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Edge-Impulse-Tuner",last_update:{date:"1/31/2023",author:"jianjing Huang"}},r="EON Tuner - Optimized Function in Edge Impulse",o={unversionedId:"Sensor/Wio_Terminal/Tutorial/Edge-Impulse-Tuner",id:"Sensor/Wio_Terminal/Tutorial/Edge-Impulse-Tuner",title:"Edge Impulse Tuner",description:"Edge Impulse Tuner",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Edge-Impulse-Tuner.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Edge-Impulse-Tuner",permalink:"/zh-CN/Edge-Impulse-Tuner",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Edge-Impulse-Tuner.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Edge Impulse Tuner",title:"Edge Impulse Tuner",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Edge-Impulse-Tuner",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Getting started wizard",permalink:"/zh-CN/Getting_started_wizard"},next:{title:"Accessing to GitHub using Wio Terminal",permalink:"/zh-CN/Wio-Terminal-Reading-Github"}},s={},u=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>The Postion of EON Tuner</strong>",id:"the-postion-of-eon-tuner",level:2},{value:"<strong>The Improvement of EON Tuner</strong>",id:"the-improvement-of-eon-tuner",level:2},{value:"<strong>Getting started</strong>",id:"getting-started",level:2},{value:"<strong>Hardware</strong>",id:"hardware",level:3},{value:"<strong>Software</strong>",id:"software",level:3},{value:"Machine Learning with Wio Terminal",id:"machine-learning-with-wio-terminal",level:3},{value:"Edge Impulse Training Started",id:"edge-impulse-training-started",level:4},{value:"Website Connecting with Wio Terminal",id:"website-connecting-with-wio-terminal",level:4},{value:"Data Acquisition",id:"data-acquisition",level:4},{value:"Machine Learning Model Generating",id:"machine-learning-model-generating",level:4},{value:"Using EON Tuner to Optimize ML Model",id:"using-eon-tuner-to-optimize-ml-model",level:4},{value:"Machine Learning Model Deployment",id:"machine-learning-model-deployment",level:4}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eon-tuner---optimized-function-in-edge-impulse"},"EON Tuner - Optimized Function in Edge Impulse"),(0,a.kt)("h2",{id:"introduction"},(0,a.kt)("strong",{parentName:"h2"},"Introduction")),(0,a.kt)("p",null,"Edge Impulse introduced an optimized function that can optimize embedded Machine Learning models and devices memory usage. By adjusting the parameters, it helps people who are not familiar with Machine Learning algorithms also be able to quickly select the best learning model for their application. Meanwhile, it allows the devices to use less memory and less performance which means it can help people deploy the TinyML model on certain equipment within the constraints."),(0,a.kt)("p",null,"The EON Tuner first analyzes your input data, potential signal processing blocks, and neural network architectures. Then it gives you an overview of possible model architectures that will fit your chosen device's latency and memory requirements. You can choose any of them."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"})),(0,a.kt)("h2",{id:"the-postion-of-eon-tuner"},(0,a.kt)("strong",{parentName:"h2"},"The Postion of EON Tuner")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/weizhituner.png",alt:null})),(0,a.kt)("p",null,"As you can see, the position of EON Tuner is on the left side of ",(0,a.kt)("a",{parentName:"p",href:"https://www.edgeimpulse.com/"},"Edge Impulse")," project page and just below the classification. When you finished your applications, you can easily select the Tuner to enhance your projects."),(0,a.kt)("h2",{id:"the-improvement-of-eon-tuner"},(0,a.kt)("strong",{parentName:"h2"},"The Improvement of EON Tuner")),(0,a.kt)("p",null,"This is the example that shows you the difference between using EON Tuner and not using it."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/duibi.png",alt:null})),(0,a.kt)("h2",{id:"getting-started"},(0,a.kt)("strong",{parentName:"h2"},"Getting started")),(0,a.kt)("p",null,"Here we gonna provide the audio classification project and show you the usage of EON Tuner. If you are interested in ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/AIoTs_GPS_state_tester/"},"Using LoRa to transmit data based on Wio Terminal and Edge Impulse"),", you can always click and see the example project."),(0,a.kt)("h3",{id:"hardware"},(0,a.kt)("strong",{parentName:"h3"},"Hardware")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Required")),(0,a.kt)("p",null,"In this demo you will need the devices listed as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"WioTerminal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html"},"Wio Terminal Chassis - Battery (Optional)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Connect")),(0,a.kt)("p",null,"It is connected to a computer through the Type-C cable."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png",alt:null})),(0,a.kt)("h3",{id:"software"},(0,a.kt)("strong",{parentName:"h3"},"Software")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sardware Required")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino IDE"))),(0,a.kt)("h3",{id:"machine-learning-with-wio-terminal"},"Machine Learning with Wio Terminal"),(0,a.kt)("p",null,"Here we gonna show you how to use Wio Terminal to train a Machine Learning model and use it. The project is based on the Arduino platform which means Arduino IDE and various Arduino libraries are required. If this is your first time using the Wio terminal, we recommend a guide to quickly ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Get Started with Wio Terminal"),"."),(0,a.kt)("h4",{id:"edge-impulse-training-started"},"Edge Impulse Training Started"),(0,a.kt)("p",null,"First, you need to have your own Edge Impulse account and then create a project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Open the ",(0,a.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1"},"Edge Impulse website"),", and then register an account.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots1.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Create a new project.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots2.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots3.png",alt:null})),(0,a.kt)("h4",{id:"website-connecting-with-wio-terminal"},"Website Connecting with Wio Terminal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Download the firmware ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2"},"wio-terminal-ei-1.4.0.uf2")," for the preparation of connect.")),(0,a.kt)("p",null,"Like ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Get Started with Wio Terminal")," guidelines suggested:"),(0,a.kt)("p",null,' Double dropping down the Wio Terminal (already connect to your PC ) left bottom, you will see a driver(like "Arduino (F:)" below) popup on the computer. Then you can draw the ',(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2"},"wio-terminal-ei-1.4.0.uf2")," firmware to the driver. And when you saw the driver disappear, it means the firmware has been programmed. Now you can go to the website to connect Wio Terminal."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots5.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),'. Once the firmware is set up, click "connect using WebUSB" to connect the Wio Terminal to the website.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots4.png",alt:null})),(0,a.kt)("p",null,'When "Device", "Label" and "Sensor" like below show up, it means the connection is done and the data acquisition can be activated.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots6.png",alt:null})),(0,a.kt)("h4",{id:"data-acquisition"},"Data Acquisition"),(0,a.kt)("p",null,"Now you can collect data on Edge Impulse."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5"),'. Enter "Label", "Sample length (ms.)" and click "Start sampling"'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"Label" means the categories you want to classify.'),(0,a.kt)("li",{parentName:"ul"},'"Sample length" means the time during your sampling.')))),(0,a.kt)("p",null,"The example porject we do here is audio classification, so we gonna use built-in microphone."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datashouji.png",alt:null})),(0,a.kt)("p",null,"It is highly recommended that samples the data more than 10 times. Because the recording needs to use SPI Flash which will operate erasing, the time it takes usually longer than we set.(It takes around 7 seconds in this project and yet the setup time is '3 seconds') ."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datashouji2.png",alt:null})),(0,a.kt)("h4",{id:"machine-learning-model-generating"},"Machine Learning Model Generating"),(0,a.kt)("p",null,"Once the data has been collected, you can use it to train your ML model."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6"),'. After sampling the data, click "create impulse" to process the data.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datashouji3.png",alt:null})),(0,a.kt)("p",null,'The processing block and learning block here we selected here are Audio(MFE) and Neural Network (Keras). You can find them by adding a processing block and adding a learning block. After that, click "Save Impulse" and move on.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datashouji4.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7"),'. Move to the "Spectral features" page, and then to the bottom click "Save parameters", it will move automatically to the "Generate feature" side. The data may look like:')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi.png",alt:null})),(0,a.kt)("p",null,'Here is the "Generate feature" side, it can help translate your data to the features needed in Machine Learning.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi2.png",alt:null})),(0,a.kt)("p",null,'Click "Generate feature" and the result should show up on the right:'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi3.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8"),'. Move to the "NN Classifier" page to use your features training a Machine Learning model. To the bottom of the page, click "Start training".')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi4.png",alt:null})),(0,a.kt)("p",null,"Training output is on the right of the page, When you see the output, it means the model has been generated."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots17.png",alt:null})),(0,a.kt)("p",null,"As you can see here, the output is not we expected:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/inputfail.png",alt:null})),(0,a.kt)("p",null,"It is optional that we recollect the data again, but another method here we can use is that ",(0,a.kt)("strong",{parentName:"p"},'"EON Tuner"'),"."),(0,a.kt)("h4",{id:"using-eon-tuner-to-optimize-ml-model"},"Using EON Tuner to Optimize ML Model"),(0,a.kt)("p",null,"Now we can use EON Tuner to optimize our embedded Machine Learning model."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9"),' Select "EON Tuner" on the right of the page and click "Start EON Tuner".')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/button.png",alt:null})),(0,a.kt)("p",null,"There are massive output models, the models coming first may not be suitable:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/outputfail.png",alt:null})),(0,a.kt)("p",null,"But wait a few seconds, the models are increasingly trained well and they are really to be deployed:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi5.png",alt:null})),(0,a.kt)("p",null,'Click "Select" and the website will ask you if you like to set this model as your primary model and then click "Yes":'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/dataupdate.png",alt:null})),(0,a.kt)("h4",{id:"machine-learning-model-deployment"},"Machine Learning Model Deployment"),(0,a.kt)("p",null,"Now you can deploy your new Machine Learning model to your Wio Terminal."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 10"),'. Select and click the "Deployment" column on the left.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots18.png",alt:null})),(0,a.kt)("p",null,'Then choose "Arduino Library", to the bottom select "build" to create the library needed in your Arduino. It will automatically download a zip file that includes the third-party library.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots19.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots20.png",alt:null})),(0,a.kt)("p",null,"The name of the wanted library is about the name of the project which means whatever the name you have written to the project on ",(0,a.kt)("strong",{parentName:"p"},"step 2")," will be shown here. It can help you find the correct file that you need."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots21.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 10"),". You can download the code ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/EON-Tuner/EON_tuner_HelloWorld.ino"},"here")," and open it with Arduino IDE. Change the third-party library of your own like above and then run the code.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/librarymingzi.png",alt:null})),(0,a.kt)("p",null,'Finally, click "Serial Monitor" on the Arduino IDE and say the words to Wio Terminal you setup at the "Data Acquisition". The monitor should show you the results and "how much the confidence Wio Terminal have" about the result, i.e. the accuracy.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/EON-Tuner/jieguo.png",alt:null})),(0,a.kt)("p",null,"If you are interested in what difference the tuner makes, you can skip ",(0,a.kt)("strong",{parentName:"p"},"Step 9")," and then go through same steps to check it."))}d.isMDXComponent=!0}}]);