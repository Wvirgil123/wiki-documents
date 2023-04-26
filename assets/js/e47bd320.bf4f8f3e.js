"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={description:"Anomaly detection for Predictive Maintenance",title:"Anomaly detection for Predictive Maintenance",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-6",last_update:{date:"1/30/2023",author:"jianjing Huang"}},r="Wio Terminal Edge Impulse Anomaly Detection for Predictive Maintenance",l={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-6",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-6",title:"Anomaly detection for Predictive Maintenance",description:"Anomaly detection for Predictive Maintenance",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-6.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/Wio-Terminal-TinyML-EI-6",permalink:"/Wio-Terminal-TinyML-EI-6",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-6.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Anomaly detection for Predictive Maintenance",title:"Anomaly detection for Predictive Maintenance",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-6",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Distinguishing Beverage",permalink:"/Wio-Terminal-TinyML-EI-5"},next:{title:"TensorFlow Lite Micro Getting Started",permalink:"/Wio-Terminal-TinyML-TFLM-1"}},s={},c=[{value:"Anomaly detection and predictive maintenance in a nutshell",id:"anomaly-detection-and-predictive-maintenance-in-a-nutshell",level:2},{value:"Collecting the data and training the model",id:"collecting-the-data-and-training-the-model",level:2},{value:"Deployment and testing",id:"deployment-and-testing",level:2},{value:"Utilizing new release of Blynk IoT platform",id:"utilizing-new-release-of-blynk-iot-platform",level:2},{value:"Reference",id:"reference",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wio-terminal-edge-impulse-anomaly-detection-for-predictive-maintenance"},"Wio Terminal Edge Impulse Anomaly Detection for Predictive Maintenance"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"})),(0,a.kt)("p",null,"In this project, we will use data from Wio Terminal built-in accelerometer, perform anomaly detection on-device and then send data to Blynk Edgent Cloud."),(0,a.kt)("p",null,"Anomalies. Or specifically anomaly detection for predictive maintenance. We\u2019re going to be using data from Wio Terminal built-in accelerometer, perform neural network model inference and anomaly detection on-device and then send data to new version of Blynk IoT platform with plethora of new features, which fully supports Wio Terminal."),(0,a.kt)("p",null,"For full tutorial and video demonstration, have a look at the accompanying video:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gXs-h3eeT1U",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("p",null,"That\u2019s WHAT, now for HOW part, let\u2019s start with an example that might be more familiar."),(0,a.kt)("h2",{id:"anomaly-detection-and-predictive-maintenance-in-a-nutshell"},"Anomaly detection and predictive maintenance in a nutshell"),(0,a.kt)("p",null,"If you train a simple image recognition model to recognize let\u2019s say 5 different classes of animals (tiger, elephant, bear, snake and giraffe) and then give it an image of a person, it will make a prediction to the best of it\u2019s abilities and possibly say it\u2019s an elephant. Cue the laughter of ordinary folks, who do not really understand much about internal works of this particular model and computer vision in general."),(0,a.kt)("p",null,"Of course, the model didn\u2019t do anything wrong \u2013 it processed the image, calculated the features present and then output classification result based on these features. Although if we plot the features from classes and cluster them, we would see that ideally the human image features are far from any class cluster and thus represent an \u201coutlier\u201d."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/knowing_all_about_outliers_in_machine_learning_sample_points_in_green_are_near_to_each_other.png"})),(0,a.kt)("p",null,"Which of course could be just a very weird image of one of the animals, but in most of cases it\u2019s much more likely that it\u2019s an object model wasn\u2019t trained to recognize."),(0,a.kt)("p",null,"For computer vision and speech recognition tasks we often have \u201cbackground\u201d class to deal with this problem, which basically represents anything that is not the classes of interest. In some situations, we really just want our model to be able to interpret all the data as \u201cnormal\u201d and \u201cabnormal\u201d. It doesn\u2019t matter what are the exact characteristics of \u201cabnormal\u201d \u2013 they can be wildly different, the important thing is, if \u201cabnormal\u201d class is detected, some measures need to be implemented. What I described now is the premise behind using Machine Learning for predictive maintenance. We monitor the state of device, be it air conditioner, water pump or other machinery with sensors and based on profile of known \u201cnormal\u201d operation, trying to detect when something goes SLIGHTLY wrong, before it goes SERIOUSLY wrong."),(0,a.kt)("h2",{id:"collecting-the-data-and-training-the-model"},"Collecting the data and training the model"),(0,a.kt)("p",null,"For this project I installed Wio Terminal on a water pump on our office\u2019s outside patio, which has some plants and fish."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_04_2007-1536x864.png"})),(0,a.kt)("p",null,"Then I collected two categories of samples \u2013 idle and normal operation and trained a simple model to recognize these two based on Spectral Features processing block output."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-1.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-2.png"})),(0,a.kt)("p",null,"For exact parameters of processing and learning blocks, you can have a look at the public version of the project I shared. The only significant tweak I made was changing filter from low to high, which made the features of different classes more prominent. Distinguishing between idle and normal pump operation of course proven to be really easy. More challenging task was malfunction detection. To simulate malfunction I would take the water pump out of the tank \u2013 this basically lead to sound and vibration levels decreasing."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"})),(0,a.kt)("p",null,"Looking at the malfunction sample, at the feature explorer on the accX RMS, accY RMS and accZ RMS axes, we see that is is halfway between idle and normal operation samples."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-3-1536x906.png"})),(0,a.kt)("p",null,"We can use this to our advantage by training a new (second) network that creates clusters around data that we have seen before, and compares incoming data against these clusters. If the distance from a cluster is too large the sample is flagged the sample as an anomaly."),(0,a.kt)("p",null,"After trial and error I found that very low cluster count and distance threshold of 0.5 works the best for anomaly detection, but this is very case-specific and depends on your data. One thing that helped to increase the accuracy was fixing Wio Terminal on the water pump firmly with glue \u2013 for actual device you can use screws. Before fixing firmly, Wio Terminal was wobbling randomly, which was introducing too much noise into normal operation samples."),(0,a.kt)("h2",{id:"deployment-and-testing"},"Deployment and testing"),(0,a.kt)("p",null,"After the model is trained and tested using Live classification mode it is time to deploy it back to the device. We compile and download the Arduino library, extract it to Arduino libraries folder and then modify nano33_ble_sense_accelerometer sketch to match the accelerometer we have in Wio Terminal. For simple test we use LCD screen that lights red if anomaly is detected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#define ANOMALY_THRESHOLD 0.5\n\n/* Includes ---------------------------------------------------------------- */\n#include <wio_anomaly_detection_inference.h>\n#include"LIS3DHTR.h"\n#include"TFT_eSPI.h"\n\nTFT_eSPI tft;\nLIS3DHTR<TwoWire> lis;\n\n/* Constant defines -------------------------------------------------------- */\n#define CONVERT_G_TO_MS2    9.80665f\n\n/* Private variables ------------------------------------------------------- */\nstatic bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal\n\n/**\n* @brief      Arduino setup function\n*/\nvoid setup()\n{\n    // put your setup code here, to run once:\n    Serial.begin(115200);\n    //while (!Serial) {delay(10);}\n    \n    Serial.println("Edge Impulse Inferencing Demo");\n    \n    tft.begin();\n    tft.setRotation(3);\n    \n    lis.begin(Wire1);\n \n    if (!lis.available()) {\n    Serial.println("Failed to initialize IMU!");\n    while (1);\n    }\n    else {\n        ei_printf("IMU initialized\\r\\n");\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz \n    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g\n   \n\n    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {\n        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\\n");\n        return;\n    }\n}\n\n/**\n* @brief      Printf function uses vsnprintf and output using Arduino Serial\n*\n* @param[in]  format     Variable argument list\n*/\nvoid ei_printf(const char *format, ...) {\n   static char print_buf[1024] = { 0 };\n\n   va_list args;\n   va_start(args, format);\n   int r = vsnprintf(print_buf, sizeof(print_buf), format, args);\n   va_end(args);\n\n   if (r > 0) {\n       Serial.write(print_buf);\n   }\n}\n\n/**\n* @brief      Get data and run inferencing\n*\n* @param[in]  debug  Get debug info if true\n*/\nvoid loop()\n{\n\n    ei_printf("Sampling...\\n");\n\n    // Allocate a buffer here for the values we\'ll read from the IMU\n    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };\n\n    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {\n        // Determine the next tick (and then sleep later)\n        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);\n\n        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);\n        buffer[ix + 0] *= CONVERT_G_TO_MS2;\n        buffer[ix + 1] *= CONVERT_G_TO_MS2;\n        buffer[ix + 2] *= CONVERT_G_TO_MS2;\n\n        delayMicroseconds(next_tick - micros());\n    }\n\n    // Turn the raw buffer in a signal which we can the classify\n    signal_t signal;\n    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);\n    if (err != 0) {\n        ei_printf("Failed to create signal from buffer (%d)\\n", err);\n        return;\n    }\n\n    // Run the classifier\n    ei_impulse_result_t result = { 0 };\n\n    err = run_classifier(&signal, &result, debug_nn);\n    if (err != EI_IMPULSE_OK) {\n        ei_printf("ERR: Failed to run classifier (%d)\\n", err);\n        return;\n    }\n\n    // print the predictions\n    ei_printf("Predictions ");\n    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",\n        result.timing.dsp, result.timing.classification, result.timing.anomaly);\n    ei_printf(": \\n");\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n\n  if (result.anomaly > ANOMALY_THRESHOLD)\n  {       \n    tft.fillScreen(TFT_RED);\n    tft.setFreeFont(&FreeSansBoldOblique12pt7b);\n    tft.drawString("Anomaly detected", 20, 80);\n    delay(1000);\n    tft.fillScreen(TFT_WHITE);\n  }\n    \n#endif\n}\n\n#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER\n#error "Invalid model for current sensor"\n#endif\n')),(0,a.kt)("p",null,"Of course, for real application, this sort of notification is not likely going to work, because there is no person to constantly watch over it."),(0,a.kt)("h2",{id:"utilizing-new-release-of-blynk-iot-platform"},"Utilizing new release of Blynk IoT platform"),(0,a.kt)("p",null,"To make this demo useful, we\u2019re going to use Blynk IoT platform."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/b641e2030c1c47fbc7161c98a7e5d998.jpg"})),(0,a.kt)("p",null,"The Blynk IoT platform includes such features as a web dashboard to monitor devices, manage who access the data, a WI-FI manager for easy setup procedure, new approach to device model creation and others."),(0,a.kt)("p",null,"Go to blynk.cloud, register an account or create a new one. Then create a new template \u2013 templates are digital models of the device which can be inherited by multiple devices with similar functionality. The power of templates is an instant update of device data model no matter the size of your devices fleet."),(0,a.kt)("p",null,"Choose Arduino Uno as hardware and Wi-Fi as connection type. Then populate Datastreams and Dashboard tabs as in the following screenshots and save the changes."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-4-1536x551.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-5.png"})),(0,a.kt)("p",null,"We\u2019re not using Metadata or Events tabs in this project. The main purpose of device template main components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metadata \u2013 additional data about the device you can configure."),(0,a.kt)("li",{parentName:"ul"},"Datastreams \u2013 an entity to define the data that flows in and out from device. Overall, it\u2019s very similar to Virtual Pins (which can be used too)."),(0,a.kt)("li",{parentName:"ul"},"Events \u2013 a list of important alerts and notifications."),(0,a.kt)("li",{parentName:"ul"},"Web Dashboard \u2013 A set of Widgets in the Web app"),(0,a.kt)("li",{parentName:"ul"},"Mobile Dashboard \u2013 A set of Widgets in the Mobile app")),(0,a.kt)("p",null,"Create a new device in My Devices tab \u2013 choose the template you have created and give it a unique name."),(0,a.kt)("p",null,"Now the web interface is ready to receive the data from our device. Download the example sketch from Seeed Wio Terminal example sketches repository \u2013 besides main sketch file it also contains helper files, where Wi-Fi manager code is located. In the main sketch file, the data collection/data processing/inference code we used for testing with LCD screen was moved to run_inference() function. The class ID of the class with highest confidence (if the confidence is above set threshold) is saved inside best_result global variable and together with light and sound sensors data is being sent to Blynk server at periodic intervals. Remember to change BLYNK_TEMPLATE_ID and BLYNK_DEVICE_NAME to the ones from you Device template."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-6.png"})),(0,a.kt)("p",null,"After you upload the code to Wio Terminal, it will create a hot spot, which you can connect to with your phone. Upon connection you will be automatically re-directed to a simple configuration page, where you need to enter your WiFi credentials, your API token (you can find it by clicking on your device in My Devices tab and then going to Device Info) and then click on Connect. Then Wio Terminal will connect to WiFi network and Blynk cloud server and start sending the data. You can press on device in My Devices tab and see the pretty graphs and status message. You can see the test results towards the end of the video."),(0,a.kt)("p",null,"Obviously, same approach can be applied to detecting irregularities in other machinery operation \u2013 we can use accelerometer for pretty much everything with moving parts, since these produce vibration we can measure. If device emits audible sounds, we can use microphone too. A combination of sensors might even work better. Are there any other good applications where predictive maintenance can be used? Write your ideas in the comments! Hope this article and video were useful for you!"),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/31205/latest"},"Edge Impulse Public project"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_5_Anomaly_Detection"},"Project Github")))))}u.isMDXComponent=!0}}]);