"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[2497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={title:"Git WTFS"},i=void 0,s={unversionedId:"curriculum-resource/cs61b/guides/git/wtfs",id:"curriculum-resource/cs61b/guides/git/wtfs",title:"Git WTFS",description:"This document is intended to help you through frequently encountered weird",source:"@site/docs/curriculum-resource/cs61b/guides/git/wtfs.md",sourceDirName:"curriculum-resource/cs61b/guides/git",slug:"/curriculum-resource/cs61b/guides/git/wtfs",permalink:"/docs/curriculum-resource/cs61b/guides/git/wtfs",draft:!1,tags:[],version:"current",frontMatter:{title:"Git WTFS"},sidebar:"tutorialSidebar",previous:{title:"Git Pull Skeleton Merge Guide",permalink:"/docs/curriculum-resource/cs61b/guides/git/skeleton-merge-guide"},next:{title:"Gitbugs",permalink:"/docs/curriculum-resource/cs61b/guides/gitbug/"}},l={},u=[{value:"fatal: refusing to merge unrelated histories",id:"fatal-refusing-to-merge-unrelated-histories",level:2},{value:"HEAD detached at ... ??",id:"head-detached-at--",level:2},{value:"Error: failed to push some refs??",id:"error-failed-to-push-some-refs",level:2},{value:"What are all these &gt;&gt;&gt;&gt; symbols in my code??",id:"what-are-all-these--symbols-in-my-code",level:2},{value:"error: You have not concluded your merge (MERGE_HEAD exists).",id:"error-you-have-not-concluded-your-merge-merge_head-exists",level:2},{value:"Please enter a commit message to explain why this merge is necessary",id:"please-enter-a-commit-message-to-explain-why-this-merge-is-necessary",level:2},{value:"fatal: &#39;skeleton&#39; does not appear to be a git repository",id:"fatal-skeleton-does-not-appear-to-be-a-git-repository",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is intended to help you through frequently encountered weird\ntechnical failure scenarios (WTFS) in Git. It will be populated as questions\narise."),(0,a.kt)("h2",{id:"fatal-refusing-to-merge-unrelated-histories"},"fatal: refusing to merge unrelated histories"),(0,a.kt)("p",null,"This usually happens when someone has changed the skeleton code after you've\npulled from it. Pull with ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-unrelated-histories"),", i.e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git pull skeleton main --allow-unrelated-histories --no-rebase\n")),(0,a.kt)("p",null,"You may need to ",(0,a.kt)("a",{parentName:"p",href:"#what-are-all-these-symbols-in-my-code"},"resolve some resulting merge conflicts"),"."),(0,a.kt)("p",null,"or, if you're pulling from your own s","*","*","*"," student repo (on a different computer\nfor example),"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git pull origin main --allow-unrelated-histories --no-rebase\n")),(0,a.kt)("h2",{id:"head-detached-at--"},"HEAD detached at ","[...]"," ??"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,a.kt)("em",{parentName:"p"},"As of the FA23 iteration of the course, this failure scenario should\nbe much less common due to the preferred")," ",(0,a.kt)("inlineCode",{parentName:"p"},"git restore"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ git status\nHEAD detached at 1193e06\nUntracked files:\n  (use "git add <file>..." to include in what will be commited)\n\n        ../seitan/\n\nnothing added to commit but untracked files preset (use "git add" to track)\n')),(0,a.kt)("p",null,"Chances are, you've probably used the ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," command without specifying\na file (or a directory). That's OK! If you haven't made any changes, you can\nfix this by using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch main"),". If everything is OK, you\nshould a message similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git switch main\nPrevious HEAD position was b405852... added tofu recipes\nSwitched to branch 'main'\n")),(0,a.kt)("p",null,"If you have made some changes (i.e. using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git status")," tells you\nthat you have modified some file(s) like the image below), there are a few\nmore steps to take."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ git status\nHEAD detached at 1193e06\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n\n        modified: kung_pao_tofu.txt\n\nUntracked files:\n  (use "git add <file>..." to include in what will be commited)\n\n        ../seitan/\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')),(0,a.kt)("p",null,"First, use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git stash"),". Your modifications may have magically\ndisappeared! Don't worry - we'll be able to retrieve them in a second!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ git stash\nSaved working directory and index state WIP on (no branch): 1193e06 added tofu\nrecipes HEAD is now at 1193e06 added tofu recipes\n\n$ git status\nHEAD detached at 1193e06\nUntracked files:\n  (use "git add <file>..." to include in what will be commited)\n\n        ../seitan/\n\nnothing added to commit but untracked files preset (use "git add" to track)\n')),(0,a.kt)("p",null,"From here, use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch main"),". You should see the all clear\nmessage from before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git switch main\nPrevious HEAD position was b405852... added tofu recipes\nSwitched to branch 'main'\n")),(0,a.kt)("p",null,"Almost done! Let's go get our changes. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"git stash pop"),". But wait, we've got\na conflict! (This may not always occur. If you don't get a conflict, you should\nbe good to go from here.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ git stash pop\nAuto-merging tofu/kung_pao_tofu.txt\nCONFLICT (content): Merge conflict in tofu/kung_pao_tofu.txt\n\n$ git status\nOn branch main\nUnmerged paths:\n  (use "git reset HEAD <file>..." to unstage)\n  (use "git add <file>..." to mark resolution)\n\n        both modified: kung_pao_tofu.txt\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\n        ../seitan/\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')),(0,a.kt)("p",null,"Now use ",(0,a.kt)("inlineCode",{parentName:"p"},"git stash drop"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git stash drop\nDropped refs/stash@{0} (57f0ac5c5480964cdf29a94ed6b87e38da823488)<Paste>\n")),(0,a.kt)("p",null,"Now we've got to fix this merge conflict. To learn how, take a look\n",(0,a.kt)("a",{parentName:"p",href:"#what-are-all-these-symbols-in-my-code"},"here"),"!"),(0,a.kt)("h2",{id:"error-failed-to-push-some-refs"},"Error: failed to push some refs??"),(0,a.kt)("p",null,"Sometimes when working with others, you'll get a message like this when you push:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git push origin main\nTo https://github.com/gilbertghang/recipes.git\n ! [rejected]     main -> main (non-fast-forward)\nerror: failed to push some refs to 'https://github.com/gilbertghang/recipes.git\"\nhint: Updates were rejected because the tip of your current branch is behind\nhint: its remote counterpart. Integrate the remote changes (e.g.\nhint: 'git pull ...') before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n")),(0,a.kt)("p",null,"What has happened here is that your remote (i.e. your online Github repository)\ncontains commits that your local repository does not have. Luckily, Git is very\ngood about telling you how to fix these errors: if you read the error message\ncarefully, you'll see that is suggests that you ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull"),". Do that, fix any\n",(0,a.kt)("a",{parentName:"p",href:"#what-are-all-these-symbols-in-my-code"},"merge conflicts"),", and push. Done!"),(0,a.kt)("h2",{id:"what-are-all-these--symbols-in-my-code"},"What are all these >>>> symbols in my code??"),(0,a.kt)("p",null,"Sometimes when you pull from a repository, you'll get a message like this when you pull:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git pull origin main\nFrom github.com:Berkeley-CS61B/course-materials-sp16\n * branch            main     -> FETCH_HEAD\nAuto-merging proj/proj0/solution/canonical/Planet.java\nCONFLICT (content): Merge conflict in proj/proj0/solution/canonical/Planet.java\nAutomatic merge failed; fix conflicts and then commit the result.\n")),(0,a.kt)("p",null,"The problem here is that the code on your computer had a conflict with the code\nin the remote repository you're pulling from, and Git couldn't figure out how\nto resolve it. Since it is unsure, Git refuses to overwrite your local code."),(0,a.kt)("p",null,"However, when you open your Planet.java, you see some kind of crazy garbage\nlike:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    public Planet(Planet p) {\n<<<<<<< HEAD\n        this.xPos = p.xPos;\n        this.yPos = p.yPos;\n=======\n        this.xxPos = p.xxPos;\n        this.yyPos = p.yyPos;\n>>>>>>> 27ddd0c71515e5cfc7f58a43bcf0e2144c127aed\n")),(0,a.kt)("p",null,"This is a good thing! Everything between ",(0,a.kt)("inlineCode",{parentName:"p"},"<<<<<<< HEAD")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"=======")," is what\nwas on your computer, and everything between ",(0,a.kt)("inlineCode",{parentName:"p"},"=======")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"27ddd0c71515e5cfc7f58a43bcf0e2144c127aed")," is what was on the remote server."),(0,a.kt)("p",null,"Your job is to look for these and resolve the merge conflict yourself. In this\ncase, the remote repository is right, so we simply delete out everything\nbetween ",(0,a.kt)("inlineCode",{parentName:"p"},"<<<<<<< HEAD")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"======="),", and also delete the\n",(0,a.kt)("inlineCode",{parentName:"p"},">>>>>>> 27ddd0c71515e5cfc7f58a43bcf0e2144c127aed")," marker, leaving:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public Planet(Planet p) {\n    this.xxPos = p.xxPos;\n    this.yyPos = p.yyPos;\n")),(0,a.kt)("p",null,"Once you've resolved all of your merge conflicts, add all the files you\nmanually edited, and commit them as usual, e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'git add Planet.java\ngit commit -m "resolved merge conflict"\ngit push origin main\n')),(0,a.kt)("h2",{id:"error-you-have-not-concluded-your-merge-merge_head-exists"},"error: You have not concluded your merge (MERGE_HEAD exists)."),(0,a.kt)("p",null,"If you see a message like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"error: You have not concluded your merge (MERGE_HEAD exists).\nhint: Please, commit your changes before merging.\nfatal: Exiting because of unfinished merge.\n")),(0,a.kt)("p",null,"Add and commit your current changes, and then pull again."),(0,a.kt)("p",null,'If, after pulling again, your terminal shows a message like "Please enter a commit message to explain why this merge is necessary," see the section directly after this one.'),(0,a.kt)("h2",{id:"please-enter-a-commit-message-to-explain-why-this-merge-is-necessary"},"Please enter a commit message to explain why this merge is necessary"),(0,a.kt)("p",null,"If you see a message like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Merge branch 'main' of https://github.com/Berkeley-CS61B/skeleton-sp24\n# Please enter a commit message to explain why this merge is necessary,\n# especially if it merges an updated upstream into a topic branch.\n#\n# Lines starting with '#' will be ignored, and an empty message aborts\n# the commit.\n")),(0,a.kt)("p",null,"Git has opened a terminal text editor for you to enter a commit message. You can leave the default commit message and exit the text editor."),(0,a.kt)("p",null,"If you see something similar to this at the bottom of your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"^G Get Help      ^O WriteOut      ^R Read File      ^Y Prev Pg      ^C Cur Pos\n")),(0,a.kt)("p",null,"This indicates you're using the Nano text editor. To quit, type Ctrl+X (both keys at the same time)."),(0,a.kt)("p",null,"If you see a bunch of tildes (",(0,a.kt)("inlineCode",{parentName:"p"},"~")," symbols) along the left side of your terminal, and you see something similar to this at the bottom of your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'".git/COMMIT_EDITMSG" 9L, 273C      13,1      All\n')),(0,a.kt)("p",null,"This indicates you're using the Vim text editor. To save and quit, type ",(0,a.kt)("inlineCode",{parentName:"p"},":wq")," - the colon key, then the letter ",(0,a.kt)("inlineCode",{parentName:"p"},"w"),", then the letter ",(0,a.kt)("inlineCode",{parentName:"p"},"q"),", one after the other (not all at the same time)."),(0,a.kt)("h2",{id:"fatal-skeleton-does-not-appear-to-be-a-git-repository"},"fatal: 'skeleton' does not appear to be a git repository"),(0,a.kt)("p",null,"If you see a message like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fatal: 'skeleton' does not appear to be a git repository\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights and the repository exists.\n")),(0,a.kt)("p",null,"Git might be having trouble finding where the skeleton repo is."),(0,a.kt)("p",null,"Try running ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote -v"),". If your repo is set up correctly, you should see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"origin  git@github.com:Berkeley-CS61B/sp24-s*** (fetch)\norigin  git@github.com:Berkeley-CS61B/sp24-s*** (push)\nskeleton  https://github.com/Berkeley-CS61B/skeleton-sp24.git (fetch)\nskeleton  https://github.com/Berkeley-CS61B/skeleton-sp24.git (push)\n")),(0,a.kt)("p",null,"If you only see the two lines corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"origin"),", and not the two lines corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"skeleton"),", then Git doesn't know where to find the skeleton repo."),(0,a.kt)("p",null,"To fix this, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git remote add skeleton https://github.com/Berkeley-CS61B/skeleton-sp24.git\n")),(0,a.kt)("p",null,"Then, run ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote -v")," again and ensure that you see two lines corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"origin")," and two lines corresponding to ",(0,a.kt)("inlineCode",{parentName:"p"},"skeleton"),"."))}p.isMDXComponent=!0}}]);