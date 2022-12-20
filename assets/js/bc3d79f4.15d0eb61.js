"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:1},i="Holding State",l={unversionedId:"Basics/Holding State",id:"Basics/Holding State",title:"Holding State",description:"In Vinum, one of the most basic tools that are provided is Hold- hence the name Holding State is chosen. They are useful for holding data, and allowing them to be used by other Vinum objects.",source:"@site/docs/Basics/Holding State.md",sourceDirName:"Basics",slug:"/Basics/Holding State",permalink:"/Vinum/docs/Basics/Holding State",draft:!1,editUrl:"https://github.com/Plothan/Vinum/edit/master/docs/Basics/Holding State.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Vinum",permalink:"/Vinum/docs/intro"},next:{title:"Observing State",permalink:"/Vinum/docs/Basics/Observing State"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Problem with Luau Variables",id:"problem-with-luau-variables",level:2},{value:"The Fix: Better Variables",id:"the-fix-better-variables",level:2},{value:"A Side benefit: Standard Method Of Reading",id:"a-side-benefit-standard-method-of-reading",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"holding-state"},"Holding State"),(0,o.kt)("p",null,"In Vinum, one of the most basic tools that are provided is ",(0,o.kt)("inlineCode",{parentName:"p"},"Hold"),"- hence the name ",(0,o.kt)("inlineCode",{parentName:"p"},"Holding State")," is chosen. They are useful for holding data, and allowing them to be used by other Vinum objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local value = Hold(100, function(oldValue, newValue)\n    return true\nend)\n\nprint(value:get()) -- 100\nvalue:set(50)\nprint(value:get()) -- 50\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"In order to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Hold"),", you must import its constructor, which you can do by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local Hold = Vinum.Hold\n")),(0,o.kt)("p",null,"And to create a Hold object (more known as a Holder), we pass an initial value, and a Processor- for now, you don't need to fully understand what a Processor is, just treat it as a function that allows you to drop/allow updates."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local holder = Hold(100, function(oldValue, newValue)\n    return true\nend)\n")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Storing nils as initial values is considered very dangerious, and is recommended to refrain from\ndepending on, as any possible outcome from doing so is considered undefinied behavior/")),(0,o.kt)("p",null,"To write to our Holder object, we use its ",(0,o.kt)("inlineCode",{parentName:"p"},":set()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"holder:set(400)\n")),(0,o.kt)("p",null,"This writes to our holder object ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"if"))," our definied Processor function allowed it, which in our case, any write request is allowed and normally processed."),(0,o.kt)("p",null,"Now, to read from our holder object, we use its ",(0,o.kt)("inlineCode",{parentName:"p"},":get()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"print(holder:get()) -- 400\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"problem-with-luau-variables"},"Problem with Luau Variables"),(0,o.kt)("p",null,"Variables in Luau aren't ",(0,o.kt)("em",{parentName:"p"},"reactive"),", meaning that they don't capture their dependencies and they don't recompute once a dependency changes."),(0,o.kt)("p",null,"This can be very problematic as it is a gateway for hard to find bugs that are often data desynchronization."),(0,o.kt)("p",null,"Consider this code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local coins = 100\nlocal price = 50\n\nlocal finalCoins = coins - price\n")),(0,o.kt)("p",null,"This is simple and if you tested it, it works fines, however, ",(0,o.kt)("inlineCode",{parentName:"p"},"finalCoins")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"isn't"))," reactive, meaning that any changes either to ",(0,o.kt)("inlineCode",{parentName:"p"},"coins")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," don't cause ",(0,o.kt)("inlineCode",{parentName:"p"},"finalCoins")," to update as well."),(0,o.kt)("p",null,'You could obviously fix this in this example, however even using a "scalable" solution wouldn\'t be even quite scalable. An implementation of this totally awesome solution is to have a setter function for each variable, like the following:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"\nlocal coins = 100\nlocal price = 50\n\nlocal finalCoins = coins - price\n\nlocal function setCoins(newValue)\n    coins = newValue\n\n    finalCoins = coins - price\nend\n\nlocal function setPrice(newValue)\n    price = newValue\n\n    finalCoins = coins - price\nend\n\nsetPrice(1)\nsetCoins(2)\n\nprint(finalCoins) -- 1\n")),(0,o.kt)("p",null,"In this example, we eliminated the issue where we needed to repeat the process of updating every dependent, however, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"the setting code is still concerned with its respective owner's dependents")),'- that means, that adding on more dependencies to an object will result in a much more complex code base- after all, we did all of this just to satisfy our "reactive" needs for an object that only has ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"2 dependencies")),". "),(0,o.kt)("h2",{id:"the-fix-better-variables"},"The Fix: Better Variables"),(0,o.kt)("p",null,"To satisfy our ",(0,o.kt)("em",{parentName:"p"},"reactive")," state management needs, we need to fundamentally extend what a variable can do. Unlike luau variables, which aren't really reactive, and aren't self-aware- our solution objects need to be very aware of their dependencies and dependents, and to have a way for us to safely read and write."),(0,o.kt)("p",null,"Both technically and internally speaking, all the objects Vinum provide you aren't really self-aware on their own, instead, they use an internal object that is called ",(0,o.kt)("inlineCode",{parentName:"p"},"graph")," that manages their dependencies."),(0,o.kt)("p",null,'These objects contain a list of dependencies, which are used for the "self-aware" guarantee, which is also a helpful feature for future optimizations. In addition, they also contain a list of dependents, which is used for actually upating places that are currently using the said ',(0,o.kt)("inlineCode",{parentName:"p"},"graph"),"'s owner."),(0,o.kt)("p",null,"From an user standpoint, Vinum addresses this problem by providing you tools like ",(0,o.kt)("inlineCode",{parentName:"p"},"Hold"),', which are direct replacements for variables that are being used as "state ',(0,o.kt)("strong",{parentName:"p"},"hold"),'ers". This is because they give a way to read data ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"and"))," a way to write to that data- making ",(0,o.kt)("inlineCode",{parentName:"p"},"holders")," a literal variables that are embodied as an object."),(0,o.kt)("h3",{id:"a-side-benefit-standard-method-of-reading"},"A Side benefit: Standard Method Of Reading"),(0,o.kt)("p",null,'A side benefit that we gain from such approach is that we have a "standard" way of reading across same-paradigm objects, not caring about how that data is accessed, making it easy for us to build more reusable and robust code.'),(0,o.kt)("p",null,"For example, let's have a look at this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local function AlwaysTrue()\n    return true\nend\n\nlocal X = Hold(true, AlwaysTrue)\nlocal Y = Hold(false, AlwaysTrue)\n\nlocal function makeBinding(state, instance, propName)\n    return Vinum.Observe(state, AlwaysTrue):onBind(function(newValue)\n        instance[propName] = newValue\n    end)\nend\n\nmakeBinding(X, Part, Anchored)\nmakeBinding(Y, anotherPart, Anchored)\n")),(0,o.kt)("p",null,"Here, we just wrote a function that creates an Observe, and connects a binding using them, which sets the newValue to the instance's propName. For now, you don't need to understand Observes at all, just know that they are objects that fire all of their connections once there is a change in their dependency."),(0,o.kt)("p",null,"Aside from that, we are ",(0,o.kt)("strong",{parentName:"p"},"reusing")," ",(0,o.kt)("inlineCode",{parentName:"p"},"makeBinding")," for two different objects, ",(0,o.kt)("em",{parentName:"p"},"and soon enough, you will see that it is so flexible that you can reuse makeBinding with almost every other state object"),"."))}c.isMDXComponent=!0}}]);