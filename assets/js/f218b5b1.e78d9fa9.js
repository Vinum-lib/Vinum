"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36845:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={},o="Contribution to The Vinum Project",s={type:"mdx",permalink:"/Vinum/Contributing",source:"@site/pages/Contributing.md",title:"Contribution to The Vinum Project",description:"Vinum as a project welcomes contributions from the community as a whole, however, we expect the community to read this guidelines thoroughly so that nobody's time is wasted.",frontMatter:{}},l=[{value:"What is a Contribution",id:"what-is-a-contribution",level:3},{value:"Issues: Feature Suggestion",id:"issues-feature-suggestion",level:3},{value:"Issues: Bug Reports",id:"issues-bug-reports",level:3},{value:"Third-party: Bindings",id:"third-party-bindings",level:2},{value:"Versioning: X=Y: Z",id:"versioning-xy-z",level:3},{value:"Use Public APIs <em>only</em>",id:"use-public-apis-only",level:3},{value:"Don&#39;t Recode",id:"dont-recode",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribution-to-the-vinum-project"},"Contribution to The Vinum Project"),(0,i.kt)("p",null,"Vinum as a project welcomes contributions from the community as a whole, however, we expect the community to read this guidelines thoroughly so that nobody's time is wasted."),(0,i.kt)("h3",{id:"what-is-a-contribution"},"What is a Contribution"),(0,i.kt)("p",null,"You might say that contribution is any change in Vinum's codebase by the community, and you are right! However, contribution isn't restricted to Vinum's own codebase, in fact, any library that is supposed to port Vinum to another language ",(0,i.kt)("em",{parentName:"p"},"(roblox-ts)"),", any binding library is considered as a contribution to the Vinum Project ",(0,i.kt)("em",{parentName:"p"},"(the keyword here is Vinum Project)"),"."),(0,i.kt)("p",null,'So, a "contribution" can be:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A pull request that implements a feature -- still not available for public"),(0,i.kt)("li",{parentName:"ul"},"An issue describing a bug or a feature"),(0,i.kt)("li",{parentName:"ul"},"Developing bindings for other librarys, most notably UI view ones"),(0,i.kt)("li",{parentName:"ul"},"Developing ports for other languages, most notably roblox-ts. -- still not available for public")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Important! The guidelines for ports and bindings are solely meant to be followed by the respective libraries maintainers with how they implement their library, rather than a strict guidelines for repository management.")),(0,i.kt)("h3",{id:"issues-feature-suggestion"},"Issues: Feature Suggestion"),(0,i.kt)("p",null,"Vinum welcomes feature suggestions/requests from the community, however it is important to know what type of features we are specifically looking for."),(0,i.kt)("p",null,"These are what we generally accept:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Styling imperative tasks with declarative API")," - Vinum's standard library should offer tools that perform imperative tasks in a declarative style."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Should be fast and readable")," - Vinum's standard tools should generally be fast, and on top of that, have an understandable codebase/API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Should have a global use case")," - Vinum's standard library should only contain tools that have a universal use between Vinum's projects.")),(0,i.kt)("p",null,"These are what we generally reject:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prefers writability over readability"),' - Vinum\'s standard library code should be implemented in a readable way, and avoid some "writability optimizations" such as abbreviated names like RS for replicated storage.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Is magic")," - We generally tend to reject features that are considered magic systems that Just Work.")),(0,i.kt)("p",null,"If you believe that your feature respects our guidelines, and would like to open and issue, please continue:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You are the first one to suggest it")," - You make sure of that by searching for issues that are either closed/opened in Github's issue tracker."),(0,i.kt)("li",{parentName:"ul"},"Only if this feature hasn't been suggested before, make sure that:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The meta information is valid")," - Titles should be properly sensible, and descriptions should be provided."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API suggestions shouldn't generally be suggested, but feel free to put some examples")," - Vinum doesn't generally accept API designs, however, it's okay to put some examples."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Be patient - all project maintainers are voluteers"),", so it will likely take some time to respond.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Don't bump or chase up your issue - commenting 'Any updates on this?' does not add value to the conversation, and only clutters the issue.")))),(0,i.kt)("h3",{id:"issues-bug-reports"},"Issues: Bug Reports"),(0,i.kt)("p",null,"Vinum welcomes bug reports, so that we make it better- however, make sure that you follow the guidelines for bug reports so that nobody's time is wasted. Here is what you do when you find a bug:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You are the first one to report it")," - You make sure of that by searching for issues that are either closed/opened in Github's issue tracker."),(0,i.kt)("li",{parentName:"ul"},"Only if this bug hasn't been reported before, make sure that:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"The meta information is valid")," - Titles should be properly sensible, and descriptions and repro files should be provided."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Be patient - all project maintainers are voluteers"),", so it will likely take some time to respond.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Don't bump or chase up your issue - commenting 'Any updates on this?' does not add value to the conversation, and only clutters the issue.")))),(0,i.kt)("h2",{id:"third-party-bindings"},"Third-party: Bindings"),(0,i.kt)("p",null,"Bindings are simply put, a collection of libraries that have a single goal, which to make usage between two libraries easier."),(0,i.kt)("p",null,'Vinum, as a project, has a certain guidelines to ensure a somewhat "standard" feel across community-made bindings.'),(0,i.kt)("h3",{id:"versioning-xy-z"},"Versioning: ","[X=Y]",": Z"),(0,i.kt)("p",null,"The versioning for Bindings is advised to follow a specific format, which is ","[X=Y]",": Z; The X is the current version of the library we are binding to, while Y is the version of Vinum we are binding with, and Z is the binding version."),(0,i.kt)("h3",{id:"use-public-apis-only"},"Use Public APIs ",(0,i.kt)("em",{parentName:"h3"},"only")),(0,i.kt)("p",null,"You should generally use the APIs you are provided with- this is the case with Vinum, and the other library."),(0,i.kt)("h3",{id:"dont-recode"},"Don't Recode"),(0,i.kt)("p",null,'You shouldn\'t generally recode places, or offer "rewrites" of certain features so that you can support Vinum.'),(0,i.kt)("p",null,"i.e:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local function VNew(name, props)\n    -- rewrite the whole New function just to allow binding to Vinum objects.\nend\n")))}p.isMDXComponent=!0}}]);