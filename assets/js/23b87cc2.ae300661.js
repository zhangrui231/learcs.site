"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[8743],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,m=u["".concat(l,".").concat(c)]||u[c]||k[c]||s;return t?i.createElement(m,a(a({ref:n},d),{},{components:t})):i.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},13090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>k,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const s={title:"Discussion 8 Solutions"},a="Discussion 8 | CS 61A Spring 2024",o={unversionedId:"curriculum-resource/cs61a/dis/sol-disc08",id:"curriculum-resource/cs61a/dis/sol-disc08",title:"Discussion 8 Solutions",description:"Discussion 8: Linked Lists, Efficiency",source:"@site/docs/curriculum-resource/cs61a/dis/sol-disc08.md",sourceDirName:"curriculum-resource/cs61a/dis",slug:"/curriculum-resource/cs61a/dis/sol-disc08",permalink:"/docs/curriculum-resource/cs61a/dis/sol-disc08",draft:!1,tags:[],version:"current",frontMatter:{title:"Discussion 8 Solutions"},sidebar:"tutorialSidebar",previous:{title:"Discussion 7 Solutions",permalink:"/docs/curriculum-resource/cs61a/dis/sol-disc07"},next:{title:"Discussion 9 Solutions",permalink:"/docs/curriculum-resource/cs61a/dis/sol-disc09"}},l={},p=[{value:"Discussion 8: Linked Lists, Efficiency",id:"discussion-8-linked-lists-efficiency",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Linked Lists",id:"linked-lists",level:2},{value:"Q1: Strange Loop",id:"q1-strange-loop",level:3},{value:"Q2: Sum Two Ways",id:"q2-sum-two-ways",level:3},{value:"Q3: Overlap",id:"q3-overlap",level:3},{value:"Q4: Overlap Growth",id:"q4-overlap-growth",level:3},{value:"Document the Occasion",id:"document-the-occasion",level:2},{value:"Q5: Decimal Expansion",id:"q5-decimal-expansion",level:3}],d={toc:p},u="wrapper";function k(e){let{components:n,...s}=e;return(0,r.kt)(u,(0,i.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"discussion-8--cs-61a-spring-2024"},"Discussion 8 | CS 61A Spring 2024"),(0,r.kt)("h2",{id:"discussion-8-linked-lists-efficiency"},"Discussion 8: Linked Lists, Efficiency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:t(81968).Z},"disc08.pdf"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NEW:")," From now on, we'll still use Pensieve, but we've removed the voice chat from Pensieve. Use Discord for voice chat with the course staff. It's more reliable and includes screensharing. Write to ",(0,r.kt)("inlineCode",{parentName:"p"},"@discuss")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"#discuss-queue")," channel on Discord at any time, and a member of the course staff will join your voice channel."),(0,r.kt)("p",null,"Pick someone in your group to ",(0,r.kt)("a",{parentName:"p",href:"https://cs61a.org/articles/discord"},"join Discord"),". It's fine if multiple people join, but one is enough."),(0,r.kt)("p",null,"Now switch to Pensieve:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Everyone"),": Go to ",(0,r.kt)("a",{parentName:"li",href:"http://discuss.pensieve.co/"},"discuss.pensieve.co")," and log in with your @berkeley.edu email, then enter your group number. (Your group number is the number of your Discord channel.)")),(0,r.kt)("p",null,"Once you're on Pensieve, you don't need to return to this page; Pensieve has all the same content (but more features). If for some reason Penseive doesn't work, return to this page and continue with the discussion."),(0,r.kt)("p",null,"Post in the ",(0,r.kt)("inlineCode",{parentName:"p"},"#help")," channel on ",(0,r.kt)("a",{parentName:"p",href:"https://cs61a.org/articles/discord/"},"Discord")," if you have trouble."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"If you have only 1 or 2 people in your group, you can join the other group in the room with you."),(0,r.kt)("p",null,"Everybody say your name and your birthday and then tell the group about your favorite birthday party you've attended (either for your birthday or someone else's)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pro tip:")," Groups tend not to ask for help unless they've been stuck for a looooooong time. Try asking for help sooner. We're pretty helpful! You might learn something."),(0,r.kt)("h2",{id:"linked-lists"},"Linked Lists"),(0,r.kt)("p",null,"A linked list is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," object or ",(0,r.kt)("inlineCode",{parentName:"p"},"Link.empty"),"."),(0,r.kt)("p",null,"You can mutate a ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," object ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the first element with ",(0,r.kt)("inlineCode",{parentName:"li"},"s.first = ...")),(0,r.kt)("li",{parentName:"ul"},"Change the rest of the elements with ",(0,r.kt)("inlineCode",{parentName:"li"},"s.rest = ..."))),(0,r.kt)("p",null,"You can make a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," object by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Link(4)")," makes a linked list of length 1 containing 4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Link(4, s)")," makes a linked list that starts with 4 followed by the elements of linked list ",(0,r.kt)("inlineCode",{parentName:"li"},"s"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"class Link:\n    \"\"\"A linked list is either a Link object or Link.empty\n\n    >>> s = Link(3, Link(4, Link(5)))\n    >>> s.rest\n    Link(4, Link(5))\n    >>> s.rest.rest.rest is Link.empty\n    True\n    >>> s.rest.first * 2\n    8\n    >>> print(s)\n    <3 4 5>\n    \"\"\"\n    empty = ()\n\n    def __init__(self, first, rest=empty):\n        assert rest is Link.empty or isinstance(rest, Link)\n        self.first = first\n        self.rest = rest\n\n    def __repr__(self):\n        if self.rest:\n            rest_repr = ', ' + repr(self.rest)\n        else:\n            rest_repr = ''\n        return 'Link(' + repr(self.first) + rest_repr + ')'\n\n    def __str__(self):\n        string = '<'\n        while self.rest is not Link.empty:\n            string += str(self.first) + ' '\n            self = self.rest\n        return string + str(self.first) + '>'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Facilitator:")," Pick a way for your group to draw diagrams. Paper, a whiteboard, or a tablet, are all fine. If you don't have anything like that, ask the other group in the room if they have extra paper."),(0,r.kt)("h3",{id:"q1-strange-loop"},"Q1: Strange Loop"),(0,r.kt)("p",null,"In lab, there was a ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," object with a cycle that represented an infinite repeating list of 1's."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> ones = Link(1)\n>>> ones.rest = ones\n>>> [ones.first, ones.rest.first, ones.rest.rest.first, ones.rest.rest.rest.first]\n[1, 1, 1, 1]\n>>> ones.rest is ones\nTrue\n")),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"strange_loop"),", which takes no arguments and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," object ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," for which ",(0,r.kt)("inlineCode",{parentName:"p"},"s.rest.first.rest")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,r.kt)("p",null,"Draw a picture of the linked list you want to create, then write code to create it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Facilitator:"),' When you think everyone has had a chance to read this far, please say: "So, what is this thing going to look like?"'),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"s.rest.first.rest")," to exist at all, the second element of ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),", called ",(0,r.kt)("inlineCode",{parentName:"p"},"s.rest.first"),", must itself be a linked list."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Strange loop",src:t(89099).Z,width:"912",height:"724"})),(0,r.kt)("p",null,"Making a cycle requires two steps: making a linked list without a cycle, then modifying it. First create, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"s = Link(6, Link(Link(1)))"),", then change ",(0,r.kt)("inlineCode",{parentName:"p"},"s.rest.first.rest")," to create the cycle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Your Answer")),(0,r.kt)("p",null,"Run in 61A Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def strange_loop():\n    """Return a Link s for which s.rest.first.rest is s.\n\n    >>> s = strange_loop()\n    >>> s.rest.first.rest is s\n    True\n    """\n    s = Link(1, Link(Link(2)))\n    s.rest.first.rest = s\n    return s\n\n')),(0,r.kt)("h3",{id:"q2-sum-two-ways"},"Q2: Sum Two Ways"),(0,r.kt)("p",null,"Implement both ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_rec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_iter"),". Each one takes a linked list of numbers ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and returns the sum of its elements. Use recursion to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_rec"),". Don't use recursion to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_iter"),"; use a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop instead."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Facilitator:")," Tell the group which one to start with. It's your choice. You can say: \"Let's start with the recursive version.\""),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Your Answer")),(0,r.kt)("p",null,"Run in 61A Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def sum_rec(s):\n    """\n    Returns the sum of the elements in s.\n\n    >>> a = Link(1, Link(6, Link(7)))\n    >>> sum_rec(a)\n    14\n    >>> sum_rec(Link.empty)\n    0\n    """\n    # Use a recursive call to sum_rec\n    if s == Link.empty:\n        return 0\n    return s.first + sum_rec(s.rest)\n\ndef sum_iter(s):\n    """\n    Returns the sum of the elements in s.\n\n    >>> a = Link(1, Link(6, Link(7)))\n    >>> sum_iter(a)\n    14\n    >>> sum_iter(Link.empty)\n    0\n    """\n    # Don\'t call sum_rec or sum_iter\n    total = 0\n    while s != Link.empty:\n        total, s = total + s.first, s.rest\n    return total\n\n')),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"s.first")," to the sum of the elements in ",(0,r.kt)("inlineCode",{parentName:"p"},"s.rest"),". Your base case condition should be ",(0,r.kt)("inlineCode",{parentName:"p"},"s is Link.empty")," so that you're checking whether ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," is empty before ever evaluating ",(0,r.kt)("inlineCode",{parentName:"p"},"s.first")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"s.rest"),"."),(0,r.kt)("p",null,"Introduce a new name, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"total"),", then repeatedly (in a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop) add ",(0,r.kt)("inlineCode",{parentName:"p"},"s.first")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"total")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"s = s.rest")," to advance through the linked list, as long as ",(0,r.kt)("inlineCode",{parentName:"p"},"s is not Link.empty"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Discussion time:")," When adding up numbers, the intermediate sums depend on the order."),(0,r.kt)("p",null,"(1 + 3) + 5 and 1 + (3 + 5) both equal 9, but the first one makes 4 along the way while the second makes 8 along the way. For the same linked list, will ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_rec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_iter")," both make the same intermediate sums along the way? Answer in your group's Discord ",(0,r.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X"},"channel's text chat"),'. If yes, post "Same way all day." If no, post "Sum thing is different."'),(0,r.kt)("h3",{id:"q3-overlap"},"Q3: Overlap"),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"overlap"),", which takes two linked lists of numbers called ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," that are sorted in increasing order and have no repeated elements within each list. It returns the count of how many numbers appear in both lists."),(0,r.kt)("p",null,"This can be done in ",(0,r.kt)("em",{parentName:"p"},"linear")," time in the combined length of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," by always advancing forward in the linked list whose first element is smallest until both first elements are equal (add one to the count and advance both) or one list is empty (time to return). Here's a ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/UZ9nOiyMQ8A?si=W0N2ecsTHR5p8c2z&t=137"},"lecture video clip")," about this (but the video uses Python lists instead of linked lists)."),(0,r.kt)("p",null,"Take a vote to decide whether to use recursion or iteration. Either way works (and the solutions are about the same complexity/difficulty)."),(0,r.kt)("p",null,"Want some guidance? Post ",(0,r.kt)("inlineCode",{parentName:"p"},"@discuss over here!")," and your group number to the ",(0,r.kt)("inlineCode",{parentName:"p"},"#discuss-queue")," channel on Discord."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Your Answer")),(0,r.kt)("p",null,"Run in 61A Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def overlap(s, t):\n    """For increasing s and t, count the numbers that appear in both.\n\n    >>> a = Link(3, Link(4, Link(6, Link(7, Link(9, Link(10))))))\n    >>> b = Link(1, Link(3, Link(5, Link(7, Link(8)))))\n    >>> overlap(a, b)  # 3 and 7\n    2\n    >>> overlap(a.rest, b)  # just 7\n    1\n    >>> overlap(Link(0, a), Link(0, b))\n    3\n    """\n    if s is Link.empty or t is Link.empty:\n        return 0\n    if s.first == t.first:\n        return 1 + overlap(s.rest, t.rest)\n    elif s.first < t.first:\n        return overlap(s.rest, t)\n    elif s.first > t.first:\n        return overlap(s, t.rest)\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    if s is Link.empty or t is Link.empty:\n        return 0\n    if s.first == t.first:\n        return __________________\n    elif s.first < t.first:\n        return __________________\n    elif s.first > t.first:\n        return __________________\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    k = 0\n    while s is not Link.empty and t is not Link.empty:\n        if s.first == t.first:\n            __________________\n        elif s.first < t.first:\n            __________________\n        elif s.first > t.first:\n            __________________\n    return k\n")),(0,r.kt)("h3",{id:"q4-overlap-growth"},"Q4: Overlap Growth"),(0,r.kt)("p",null,"The alternative implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"overlap")," below does not assume that ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," are sorted in increasing order. What is the order of growth of its run time in terms of the length of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),", assuming they have the same length? Choose among: ",(0,r.kt)("em",{parentName:"p"},"constant"),", ",(0,r.kt)("em",{parentName:"p"},"logarithmic"),", ",(0,r.kt)("em",{parentName:"p"},"linear"),", ",(0,r.kt)("em",{parentName:"p"},"quadratic"),", or ",(0,r.kt)("em",{parentName:"p"},"exponential"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def length(s):\n    if s is Link.empty:\n        return 0\n    else:\n        return 1 + length(s.rest)\n\ndef filter_link(f, s):\n    if s is Link.empty:\n        return s\n    else:\n        frest = filter_link(f, s.rest)\n        if f(s.first):\n            return Link(s.first, frest)\n        else:\n            return frest\n\ndef contained_in(s):\n    def f(s, x):\n        if s is Link.empty:\n            return False\n        else:\n            return s.first == x or f(s.rest, x)\n    return lambda x: f(s, x)\n\ndef overlap(s, t):\n    """For s and t with no repeats, count the numbers that appear in both.\n\n    >>> a = Link(3, Link(4, Link(6, Link(7, Link(9, Link(10))))))\n    >>> b = Link(1, Link(3, Link(5, Link(7, Link(8, Link(12))))))\n    >>> overlap(a, b)  # 3 and 7\n    2\n    >>> overlap(a.rest, b.rest)  # just 7\n    1\n    >>> overlap(Link(0, a), Link(0, b))\n    3\n    """\n    return length(filter_link(contained_in(t), s))\n')),(0,r.kt)("h2",{id:"document-the-occasion"},"Document the Occasion"),(0,r.kt)("p",null,"Please all fill out the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform"},"attendance form")," (one submission per person per week)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important:")," Please help put the furniture in the room back where you found it before you leave. Thanks!"),(0,r.kt)("p",null,"This last question is similar in complexity to an A+ question on an exam. Feel free to skip it, but it's a fun one, so try it if you have time."),(0,r.kt)("h3",{id:"q5-decimal-expansion"},"Q5: Decimal Expansion"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition.")," The ",(0,r.kt)("em",{parentName:"p"},"decimal expansion")," of a fraction ",(0,r.kt)("inlineCode",{parentName:"p"},"n/d")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"n < d")," is an infinite sequence of digits starting with the 0 before the decimal point and followed by digits that represent the tenths, hundredths, and thousands place (and so on) of the number ",(0,r.kt)("inlineCode",{parentName:"p"},"n/d"),". E.g., the decimal expansion of 2/3 is a zero followed by an infinite sequence of 6's: 0.6666666...."),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"divide"),", which takes positive integers ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"n < d"),". It returns a linked list with a cycle containing the digits of the infinite decimal expansion of ",(0,r.kt)("inlineCode",{parentName:"p"},"n/d"),". The provided ",(0,r.kt)("inlineCode",{parentName:"p"},"display")," function prints the first ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," digits after the decimal point."),(0,r.kt)("p",null,"For example, 1/22 would be represented as ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> 1/22\n0.045454545454545456\n>>> x = Link(0, Link(0, Link(4, Link(5))))\n>>> x.rest.rest.rest.rest = x.rest.rest\n>>> display(x, 20)\n0.04545454545454545454...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Your Answer")),(0,r.kt)("p",null,"Run in 61A Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def divide(n, d):\n    """Return a linked list with a cycle containing the digits of n/d.\n\n    >>> display(divide(5, 6))\n    0.8333333333...\n    >>> display(divide(2, 7))\n    0.2857142857...\n    >>> display(divide(1, 2500))\n    0.0004000000...\n    >>> display(divide(3, 11))\n    0.2727272727...\n    >>> display(divide(3, 99))\n    0.0303030303...\n    >>> display(divide(2, 31), 50)\n    0.06451612903225806451612903225806451612903225806451...\n    """\n    assert n > 0 and n < d\n    result = Link(0)  # The zero before the decimal point\n    cache = {}\n    tail = result\n    while n not in cache:\n        q, r = 10 * n // d, 10 * n % d\n        tail.rest = Link(q)\n        tail = tail.rest\n        cache[n] = tail\n        n = r\n    tail.rest = cache[n]\n    return result\n\ndef display(s, k=10):\n    """Print the first k digits of infinite linked list s as a decimal.\n\n    >>> s = Link(0, Link(8, Link(3)))\n    >>> s.rest.rest.rest = s.rest.rest\n    >>> display(s)\n    0.8333333333...\n    """\n    assert s.first == 0, f\'{s.first} is not 0\'\n    digits = f\'{s.first}.\'\n    s = s.rest\n    for _ in range(k):\n        assert s.first >= 0 and s.first < 10, f\'{s.first} is not a digit\'\n        digits += str(s.first)\n        s = s.rest\n    print(digits + \'...\')\n')),(0,r.kt)("p",null,"The decimal expansion of 1/22 could be constructed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> n, d = 1, 22\n>>> n/d\n0.045454545454545456\n>>> result = Link(0)\n>>> tail = result\n>>> q, r = 10 * n // d, 10 * n % d\n>>> tail.rest = Link(q)  # Adds the 0: 0.0\n>>> tail = tail.rest\n>>> n = r\n>>> n\n10\n>>> q, r = 10 * n // d, 10 * n % d\n>>> tail.rest = Link(q)  # Adds the 4: 0.04\n>>> tail = tail.rest\n>>> n = r\n>>> n\n12\n>>> q, r = 10 * n // d, 10 * n % d\n>>> tail.rest = Link(q)  # Adds the 5: 0.045\n>>> tail = tail.rest\n>>> n = r\n>>> n\n10\n>>> result\nLink(0, Link(0, Link(4, Link(5))))\n>>> tail.rest = result.rest.rest\n>>> display(result, 20)\n0.04545454545454545454...\n")),(0,r.kt)("p",null,"Place the division pattern from the example above in a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> q, r = 10 * n // d, 10 * n % d\n>>> tail.rest = Link(q)\n>>> tail = tail.rest\n>>> n = r\n")),(0,r.kt)("p",null,"While constructing the decimal expansion, store the ",(0,r.kt)("inlineCode",{parentName:"p"},"tail")," for each ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," in a dictionary keyed by ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),". When some ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," appears a second time, instead of constructing a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),", set its original link as the rest of the previous link. That will form a cycle of the appropriate length."))}k.isMDXComponent=!0},81968:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/files/disc08-71d04a1822f48ef7d7386ee484dab0f9.pdf"},89099:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/e7qhrNQ-2ba85459112bd9dce56ad939607eaf88.png"}}]);