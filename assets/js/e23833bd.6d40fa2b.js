"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[9488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=c;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[m]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9343:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:2,description:"cs50x lab4  Volume",title:"volume"},o="Lab 4: Volume - CS50x 2023",r={unversionedId:"curriculum-resource/cs50x/lecture5/lab/volume",id:"curriculum-resource/cs50x/lecture5/lab/volume",title:"volume",description:"cs50x lab4  Volume",source:"@site/docs/curriculum-resource/cs50x/lecture5/lab/volume.md",sourceDirName:"curriculum-resource/cs50x/lecture5/lab",slug:"/curriculum-resource/cs50x/lecture5/lab/volume",permalink:"/docs/curriculum-resource/cs50x/lecture5/lab/volume",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"cs50x lab4  Volume",title:"volume"},sidebar:"tutorialSidebar",previous:{title:"smiley",permalink:"/docs/curriculum-resource/cs50x/lecture5/lab/smiley"},next:{title:"Data Structures",permalink:"/docs/curriculum-resource/cs50x/lecture6/"}},u={},p=[{value:"WAV Files",id:"wav-files",level:2},{value:"Types",id:"types",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Walkthrough",id:"walkthrough",level:3},{value:"Hints",id:"hints",level:3},{value:"How to Test Your Code",id:"how-to-test-your-code",level:3},{value:"How to Submit",id:"how-to-submit",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lab-4-volume---cs50x-2023"},"Lab 4: Volume - CS50x 2023"),(0,l.kt)("p",null,"Write a program to modify the volume of an audio file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ ./volume INPUT.wav OUTPUT.wav 2.0\n\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"INPUT.wav")," is the name of an original audio file and ",(0,l.kt)("inlineCode",{parentName:"p"},"OUTPUT.wav")," is the name of an audio file with a volume that has been scaled by the given factor (e.g., 2.0)."),(0,l.kt)("h2",{id:"wav-files"},(0,l.kt)("a",{parentName:"h2",href:"#wav-files"},"WAV Files")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.fileformat.com/audio/wav/"},"WAV files")," are a common file format for representing audio. WAV files store audio as a sequence of \u201csamples\u201d: numbers that represent the value of some audio signal at a particular point in time. WAV files begin with a 44-byte \u201cheader\u201d that contains information about the file itself, including the size of the file, the number of samples per second, and the size of each sample. After the header, the WAV file contains a sequence of samples, each a single 2-byte (16-bit) integer representing the audio signal at a particular point in time."),(0,l.kt)("p",null,"Scaling each sample value by a given factor has the effect of changing the volume of the audio. Multiplying each sample value by 2.0, for example, will have the effect of doubling the volume of the origin audio. Multiplying each sample by 0.5, meanwhile, will have the effect of cutting the volume in half."),(0,l.kt)("h2",{id:"types"},(0,l.kt)("a",{parentName:"h2",href:"#types"},"Types")),(0,l.kt)("p",null,"So far, we\u2019ve seen a number of different types in C, including ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"char"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"float"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"long"),". Inside a header file called ",(0,l.kt)("inlineCode",{parentName:"p"},"stdint.h")," are the declarations of a number of other types that allow us to very precisely define the size (in bits) and sign (signed or unsigned) of an integer. Two types in particular will be useful to us in this lab."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uint8_t")," is a type that stores an 8-bit unsigned (i.e., not negative) integer. We can treat each byte of a WAV file\u2019s header as a ",(0,l.kt)("inlineCode",{parentName:"li"},"uint8_t")," value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int16_t")," is a type that stores a 16-bit signed (i.e., positive or negative) integer. We can treat each sample of audio in a WAV file as an ",(0,l.kt)("inlineCode",{parentName:"li"},"int16_t")," value.")),(0,l.kt)("h2",{id:"getting-started"},(0,l.kt)("a",{parentName:"h2",href:"#getting-started"},"Getting Started")),(0,l.kt)("p",null,"Open ",(0,l.kt)("a",{parentName:"p",href:"https://cs50.dev/"},"VS Code"),"."),(0,l.kt)("p",null,"Start by clicking inside your terminal window, then execute ",(0,l.kt)("inlineCode",{parentName:"p"},"cd")," by itself. You should find that its \u201cprompt\u201d resembles the below."),(0,l.kt)("p",null,"Click inside of that terminal window and then execute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"wget https://cdn.cs50.net/2022/fall/labs/4/volume.zip\n\n")),(0,l.kt)("p",null,"followed by Enter in order to download a ZIP called ",(0,l.kt)("inlineCode",{parentName:"p"},"volume.zip")," in your codespace. Take care not to overlook the space between ",(0,l.kt)("inlineCode",{parentName:"p"},"wget")," and the following URL, or any other character for that matter!"),(0,l.kt)("p",null,"Now execute"),(0,l.kt)("p",null,"to create a folder called ",(0,l.kt)("inlineCode",{parentName:"p"},"volume"),". You no longer need the ZIP file, so you can execute"),(0,l.kt)("p",null,"and respond with \u201cy\u201d followed by Enter at the prompt to remove the ZIP file you downloaded."),(0,l.kt)("p",null,"Now type"),(0,l.kt)("p",null,"followed by Enter to move yourself into (i.e., open) that directory. Your prompt should now resemble the below."),(0,l.kt)("p",null,"If all was successful, you should execute"),(0,l.kt)("p",null,"and you should see a ",(0,l.kt)("inlineCode",{parentName:"p"},"volume.c")," file alongside an ",(0,l.kt)("inlineCode",{parentName:"p"},"input.wav")," file."),(0,l.kt)("p",null,"If you run into any trouble, follow these same steps again and see if you can determine where you went wrong!"),(0,l.kt)("h2",{id:"implementation-details"},(0,l.kt)("a",{parentName:"h2",href:"#implementation-details"},"Implementation Details")),(0,l.kt)("p",null,"Complete the implementation of ",(0,l.kt)("inlineCode",{parentName:"p"},"volume.c"),", such that it changes the volume of a sound file by a given factor."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The program accepts three command-line arguments: ",(0,l.kt)("inlineCode",{parentName:"li"},"input")," represents the name of the original audio file, ",(0,l.kt)("inlineCode",{parentName:"li"},"output")," represents the name of the new audio file that should be generated, and ",(0,l.kt)("inlineCode",{parentName:"li"},"factor")," is the amount by which the volume of the original audio file should be scaled.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For example, if ",(0,l.kt)("inlineCode",{parentName:"li"},"factor")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"2.0"),", then your program should double the volume of the audio file in ",(0,l.kt)("inlineCode",{parentName:"li"},"input")," and save the newly generated audio file in ",(0,l.kt)("inlineCode",{parentName:"li"},"output"),"."))),(0,l.kt)("li",{parentName:"ul"},"Your program should first read the header from the input file and write the header to the output file. Recall that this header is always exactly 44 bytes long.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Note that ",(0,l.kt)("inlineCode",{parentName:"li"},"volume.c")," already defines a variable for you called ",(0,l.kt)("inlineCode",{parentName:"li"},"HEADER_SIZE"),", equal to the number of bytes in the header."))),(0,l.kt)("li",{parentName:"ul"},"Your program should then read the rest of the data from the WAV file, one 16-bit (2-byte) sample at a time. Your program should multiply each sample by the ",(0,l.kt)("inlineCode",{parentName:"li"},"factor")," and write the new sample to the output file.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You may assume that the WAV file will use 16-bit signed values as samples. In practice, WAV files can have varying numbers of bits per sample, but we\u2019ll assume 16-bit samples for this lab."))),(0,l.kt)("li",{parentName:"ul"},"Your program, if it uses ",(0,l.kt)("inlineCode",{parentName:"li"},"malloc"),", must not leak any memory.")),(0,l.kt)("h3",{id:"walkthrough"},(0,l.kt)("a",{parentName:"h3",href:"#walkthrough"},"Walkthrough")),(0,l.kt)("h3",{id:"hints"},(0,l.kt)("a",{parentName:"h3",href:"#hints"},"Hints")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You\u2019ll likely want to create an array of bytes to store the data from the WAV file header that you\u2019ll read from the input file. Using the ",(0,l.kt)("inlineCode",{parentName:"li"},"uint8_t")," type to represent a byte, you can create an array of ",(0,l.kt)("inlineCode",{parentName:"li"},"n")," bytes for your header with syntax like")),(0,l.kt)("p",null,"replacing ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," with the number of bytes. You can then use ",(0,l.kt)("inlineCode",{parentName:"p"},"header")," as an argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"fread")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"fwrite")," to read into or write from the header."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You\u2019ll likely want to create a \u201cbuffer\u201d in which to store audio samples that you read from the WAV file. Using the ",(0,l.kt)("inlineCode",{parentName:"li"},"int16_t")," type to store an audio sample, you can create a buffer variable with syntax like")),(0,l.kt)("p",null,"You can then use ",(0,l.kt)("inlineCode",{parentName:"p"},"&buffer")," as an argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"fread")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"fwrite")," to read into or write from the buffer. (Recall that the ",(0,l.kt)("inlineCode",{parentName:"p"},"&")," operator is used to get the address of the variable.)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You may find the documentation for ",(0,l.kt)("a",{parentName:"li",href:"https://man.cs50.io/3/fread"},(0,l.kt)("inlineCode",{parentName:"a"},"fread"))," and ",(0,l.kt)("a",{parentName:"li",href:"https://man.cs50.io/3/fwrite"},(0,l.kt)("inlineCode",{parentName:"a"},"fwrite"))," helpful here.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In particular, note that both functions accept the following arguments:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ptr"),": a pointer to the location in memory to store data (when reading from a file) or from which to write data (when writing data to a file)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"size"),": the number of bytes in an item of data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nmemb"),": the number of items of data (each of ",(0,l.kt)("inlineCode",{parentName:"li"},"size")," bytes) to read or write"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stream"),": the file pointer to be read from or written to"))),(0,l.kt)("li",{parentName:"ul"},"Per its documentation, ",(0,l.kt)("inlineCode",{parentName:"li"},"fread")," will return the number of items of data successfully read. You may find this useful to check for when you\u2019ve reached the end of the file!")))),(0,l.kt)("p",null,"Not sure how to solve?"),(0,l.kt)("h3",{id:"how-to-test-your-code"},(0,l.kt)("a",{parentName:"h3",href:"#how-to-test-your-code"},"How to Test Your Code")),(0,l.kt)("p",null,"Your program should behave per the examples below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ ./volume input.wav output.wav 2.0\n\n")),(0,l.kt)("p",null,"When you listen to ",(0,l.kt)("inlineCode",{parentName:"p"},"output.wav")," (as by control-clicking on ",(0,l.kt)("inlineCode",{parentName:"p"},"output.wav")," in the file browser, choosing ",(0,l.kt)("strong",{parentName:"p"},"Download"),", and then opening the file in an audio player on your computer), it should be twice as loud as ",(0,l.kt)("inlineCode",{parentName:"p"},"input.wav"),"!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ ./volume input.wav output.wav 0.5\n\n")),(0,l.kt)("p",null,"When you listen to ",(0,l.kt)("inlineCode",{parentName:"p"},"output.wav"),", it should be half as loud as ",(0,l.kt)("inlineCode",{parentName:"p"},"input.wav"),"!"),(0,l.kt)("p",null,"Execute the below to evaluate the correctness of your code using ",(0,l.kt)("inlineCode",{parentName:"p"},"check50"),". But be sure to compile and test it yourself as well!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"check50 cs50/labs/2023/x/volume\n\n")),(0,l.kt)("p",null,"Execute the below to evaluate the style of your code using ",(0,l.kt)("inlineCode",{parentName:"p"},"style50"),"."),(0,l.kt)("h2",{id:"how-to-submit"},(0,l.kt)("a",{parentName:"h2",href:"#how-to-submit"},"How to Submit")),(0,l.kt)("p",null,"In your terminal, execute the below to submit your work."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"submit50 cs50/labs/2023/x/volume\n\n")))}d.isMDXComponent=!0}}]);