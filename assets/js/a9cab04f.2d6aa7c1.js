"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[5444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,c=m["".concat(s,".").concat(d)]||m[d]||h[d]||r;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,description:"cs50x problem set movies",title:"movies"},i="Movies - CS50x 2023",l={unversionedId:"curriculum-resource/cs50x/lecture8/problem set/movies",id:"curriculum-resource/cs50x/lecture8/problem set/movies",title:"movies",description:"cs50x problem set movies",source:"@site/docs/curriculum-resource/cs50x/lecture8/problem set/movies.md",sourceDirName:"curriculum-resource/cs50x/lecture8/problem set",slug:"/curriculum-resource/cs50x/lecture8/problem set/movies",permalink:"/docs/curriculum-resource/cs50x/lecture8/problem set/movies",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"cs50x problem set movies",title:"movies"},sidebar:"tutorialSidebar",previous:{title:"Problem Set",permalink:"/docs/curriculum-resource/cs50x/lecture8/problem set/"},next:{title:"fiftyville",permalink:"/docs/curriculum-resource/cs50x/lecture8/problem set/fiftyville"}},s={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Understanding",id:"understanding",level:2},{value:"Specification",id:"specification",level:2},{value:"Walkthrough",id:"walkthrough",level:2},{value:"Usage",id:"usage",level:2},{value:"Hints",id:"hints",level:2},{value:"Testing",id:"testing",level:2},{value:"How to Submit",id:"how-to-submit",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],p={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"movies---cs50x-2023"},"Movies - CS50x 2023"),(0,o.kt)("p",null,"Write SQL queries to answer questions about a database of movies."),(0,o.kt)("h2",{id:"getting-started"},(0,o.kt)("a",{parentName:"h2",href:"#getting-started"},"Getting Started")),(0,o.kt)("p",null,"Log into ",(0,o.kt)("a",{parentName:"p",href:"https://cs50.dev/"},"cs50.dev"),", click on your terminal window, and execute ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," by itself. You should find that your terminal window\u2019s prompt resembles the below:"),(0,o.kt)("p",null,"Next execute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://cdn.cs50.net/2022/fall/psets/7/movies.zip\n\n")),(0,o.kt)("p",null,"in order to download a ZIP called ",(0,o.kt)("inlineCode",{parentName:"p"},"movies.zip")," into your codespace."),(0,o.kt)("p",null,"Then execute"),(0,o.kt)("p",null,"to create a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"movies"),". You no longer need the ZIP file, so you can execute"),(0,o.kt)("p",null,"and respond with \u201cy\u201d followed by Enter at the prompt to remove the ZIP file you downloaded."),(0,o.kt)("p",null,"Now type"),(0,o.kt)("p",null,"followed by Enter to move yourself into (i.e., open) that directory. Your prompt should now resemble the below."),(0,o.kt)("p",null,"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," by itself, and you should see 13 .sql files, as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"movies.db"),"."),(0,o.kt)("p",null,"If you run into any trouble, follow these same steps again and see if you can determine where you went wrong!"),(0,o.kt)("h2",{id:"understanding"},(0,o.kt)("a",{parentName:"h2",href:"#understanding"},"Understanding")),(0,o.kt)("p",null,"Provided to you is a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"movies.db"),", a SQLite database that stores data from ",(0,o.kt)("a",{parentName:"p",href:"https://www.imdb.com/"},"IMDb")," about movies, the people who directed and starred in them, and their ratings. In a terminal window, run ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite3 movies.db")," so that you can begin executing queries on the database."),(0,o.kt)("p",null,"First, when ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite3")," prompts you to provide a query, type ",(0,o.kt)("inlineCode",{parentName:"p"},".schema")," and press enter. This will output the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statements that were used to generate each of the tables in the database. By examining those statements, you can identify the columns present in each table."),(0,o.kt)("p",null,"Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"movies")," table has an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," column that uniquely identifies each movie, as well as columns for the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," of a movie and the ",(0,o.kt)("inlineCode",{parentName:"p"},"year")," in which the movie was released. The ",(0,o.kt)("inlineCode",{parentName:"p"},"people")," table also has an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," column, and also has columns for each person\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"birth")," year."),(0,o.kt)("p",null,"Movie ratings, meanwhile, are stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ratings")," table. The first column in the table is ",(0,o.kt)("inlineCode",{parentName:"p"},"movie_id"),": a foreign key that references the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"movies")," table. The rest of the row contains data about the ",(0,o.kt)("inlineCode",{parentName:"p"},"rating")," for each movie and the number of ",(0,o.kt)("inlineCode",{parentName:"p"},"votes")," the movie has received on IMDb."),(0,o.kt)("p",null,"Finally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"stars")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"directors")," tables match people to the movies in which they acted or directed. (Only ",(0,o.kt)("a",{parentName:"p",href:"https://www.imdb.com/interfaces/"},"principal")," stars and directors are included.) Each table has just two columns: ",(0,o.kt)("inlineCode",{parentName:"p"},"movie_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"person_id"),", which reference a specific movie and person, respectively."),(0,o.kt)("p",null,"The challenge ahead of you is to write SQL queries to answer a variety of different questions by selecting data from one or more of these tables."),(0,o.kt)("h2",{id:"specification"},(0,o.kt)("a",{parentName:"h2",href:"#specification"},"Specification")),(0,o.kt)("p",null,"For each of the following problems, you should write a single SQL query that outputs the results specified by each problem. Your response must take the form of a single SQL query, though you may nest other queries inside of your query. You ",(0,o.kt)("strong",{parentName:"p"},"should not")," assume anything about the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"s of any particular movies or people: your queries should be accurate even if the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of any particular movie or person were different. Finally, each query should return only the data necessary to answer the question: if the problem only asks you to output the names of movies, for example, then your query should not also output each movie\u2019s release year."),(0,o.kt)("p",null,"You\u2019re welcome to check your queries\u2019 results against ",(0,o.kt)("a",{parentName:"p",href:"https://www.imdb.com/"},"IMDb")," itself, but realize that ratings on the website might differ from those in ",(0,o.kt)("inlineCode",{parentName:"p"},"movies.db"),", as more votes might have been cast since we downloaded the data!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"1.sql"),", write a SQL query to list the titles of all movies released in 2008.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with a single column for the title of each movie."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"2.sql"),", write a SQL query to determine the birth year of Emma Stone.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with a single column and a single row (not counting the header) containing Emma Stone\u2019s birth year."),(0,o.kt)("li",{parentName:"ul"},"You may assume that there is only one person in the database with the name Emma Stone."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"3.sql"),", write a SQL query to list the titles of all movies with a release date on or after 2018, in alphabetical order.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with a single column for the title of each movie."),(0,o.kt)("li",{parentName:"ul"},"Movies released in 2018 should be included, as should movies with release dates in the future."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"4.sql"),", write a SQL query to determine the number of movies with an IMDb rating of 10.0.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with a single column and a single row (not counting the header) containing the number of movies with a 10.0 rating."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"5.sql"),", write a SQL query to list the titles and release years of all Harry Potter movies, in chronological order.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with two columns, one for the title of each movie and one for the release year of each movie."),(0,o.kt)("li",{parentName:"ul"},"You may assume that the title of all Harry Potter movies will begin with the words \u201cHarry Potter\u201d, and that if a movie title begins with the words \u201cHarry Potter\u201d, it is a Harry Potter movie."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"6.sql"),", write a SQL query to determine the average rating of all movies released in 2012.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with a single column and a single row (not counting the header) containing the average rating."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"7.sql"),", write a SQL query to list all movies released in 2010 and their ratings, in descending order by rating. For movies with the same rating, order them alphabetically by title.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with two columns, one for the title of each movie and one for the rating of each movie."),(0,o.kt)("li",{parentName:"ul"},"Movies that do not have ratings should not be included in the result."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"8.sql"),", write a SQL query to list the names of all people who starred in Toy Story.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with a single column for the name of each person."),(0,o.kt)("li",{parentName:"ul"},"You may assume that there is only one movie in the database with the title Toy Story."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"9.sql"),", write a SQL query to list the names of all people who starred in a movie released in 2004, ordered by birth year.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Your query should output a table with a single column for the name of each person."),(0,o.kt)("li",{parentName:"ul"},"People with the same birth year may be listed in any order."),(0,o.kt)("li",{parentName:"ul"},"No need to worry about people who have no birth year listed, so long as those who do have a birth year are listed in order."),(0,o.kt)("li",{parentName:"ul"},"If a person appeared in more than one movie in 2004, they should only appear in your results once."))),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"10.sql"),", write a SQL query to list the names of all people who have directed a movie that received a rating of at least 9.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-   Your query should output a table with a single column for the name of each person.\n-   If a person directed more than one movie that received a rating of at least 9.0, they should only appear in your results once.\n")),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"11.sql"),", write a SQL query to list the titles of the five highest rated movies (in order) that Chadwick Boseman starred in, starting with the highest rated.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-   Your query should output a table with a single column for the title of each movie.\n-   You may assume that there is only one person in the database with the name Chadwick Boseman.\n")),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"12.sql"),", write a SQL query to list the titles of all movies in which both Bradley Cooper and Jennifer Lawrence starred.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-   Your query should output a table with a single column for the title of each movie.\n-   You may assume that there is only one person in the database with the name Bradley Cooper.\n-   You may assume that there is only one person in the database with the name Jennifer Lawrence.\n")),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"13.sql"),", write a SQL query to list the names of all people who starred in a movie in which Kevin Bacon also starred.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-   Your query should output a table with a single column for the name of each person.\n-   There may be multiple people named Kevin Bacon in the database. Be sure to only select the Kevin Bacon born in 1958.\n-   Kevin Bacon himself should not be included in the resulting list.\n")),(0,o.kt)("h2",{id:"walkthrough"},(0,o.kt)("a",{parentName:"h2",href:"#walkthrough"},"Walkthrough")),(0,o.kt)("h2",{id:"usage"},(0,o.kt)("a",{parentName:"h2",href:"#usage"},"Usage")),(0,o.kt)("p",null,"To test your queries in VS Code, you can query the database by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cat filename.sql | sqlite3 movies.db\n\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"filename.sql")," is the file containing your SQL query."),(0,o.kt)("p",null,"You can also run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cat filename.sql | sqlite3 movies.db > output.txt\n\n")),(0,o.kt)("p",null,"to redirect the output of the query to a text file called ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt"),". (This can be useful for checking how many rows are returned by your query!)"),(0,o.kt)("h2",{id:"hints"},(0,o.kt)("a",{parentName:"h2",href:"#hints"},"Hints")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3schools.com/sql/sql_ref_keywords.asp"},"this SQL keywords reference")," for some SQL syntax that may be helpful!"),(0,o.kt)("li",{parentName:"ul"},"See ",(0,o.kt)("a",{parentName:"li",href:"https://www.sqlstyle.guide/"},"sqlstyle.guide")," for pointers on good style in SQL, especially as your queries get more complex!")),(0,o.kt)("h2",{id:"testing"},(0,o.kt)("a",{parentName:"h2",href:"#testing"},"Testing")),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"check50")," is available for this problem, you\u2019re encouraged to instead test your code on your own for each of the following. You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite3 movies.db")," to run additional queries on the database to ensure that your result is correct."),(0,o.kt)("p",null,"If you\u2019re using the ",(0,o.kt)("inlineCode",{parentName:"p"},"movies.db")," database provided in this problem set\u2019s distribution, you should find that"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"1.sql")," results in a table with 1 column and 10,050 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"2.sql")," results in a table with 1 column and 1 row."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"3.sql")," results in a table with 1 column and 88,918 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"4.sql")," results in a table with 1 column and 1 row."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"5.sql")," results in a table with 2 columns and 12 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"6.sql")," results in a table with 1 column and 1 row."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"7.sql")," results in a table with 2 columns and 7,085 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"8.sql")," results in a table with 1 column and 4 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"9.sql")," results in a table with 1 column and 18,946 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"10.sql")," results in a table with 1 column and 3,392 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"11.sql")," results in a table with 1 column and 5 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"12.sql")," results in a table with 1 column and 4 rows."),(0,o.kt)("li",{parentName:"ul"},"Executing ",(0,o.kt)("inlineCode",{parentName:"li"},"13.sql")," results in a table with 1 column and 182 rows.")),(0,o.kt)("p",null,"Note that row counts do not include header rows that only show column names."),(0,o.kt)("p",null,"If your query returns a number of rows that is slightly different from the expected output, be sure that you\u2019re properly handling duplicates! For queries that ask for a list of names, no one person should be listed twice, but two different people who have the same name should each be listed."),(0,o.kt)("p",null,"Execute the below to evaluate the correctness of your code using ",(0,o.kt)("inlineCode",{parentName:"p"},"check50"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"check50 cs50/problems/2023/x/movies\n\n")),(0,o.kt)("h2",{id:"how-to-submit"},(0,o.kt)("a",{parentName:"h2",href:"#how-to-submit"},"How to Submit")),(0,o.kt)("p",null,"In your terminal, execute the below to submit your work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"submit50 cs50/problems/2023/x/movies\n\n")),(0,o.kt)("h2",{id:"acknowledgements"},(0,o.kt)("a",{parentName:"h2",href:"#acknowledgements"},"Acknowledgements")),(0,o.kt)("p",null,"Information courtesy of IMDb (",(0,o.kt)("a",{parentName:"p",href:"https://www.imdb.com/"},"imdb.com"),"). Used with permission."))}h.isMDXComponent=!0}}]);