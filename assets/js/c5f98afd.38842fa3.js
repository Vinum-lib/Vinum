"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[520],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:2},i="Observing State",l={unversionedId:"Basics/Observing State",id:"Basics/Observing State",title:"Observing State",description:"State observation is a fundemental tool that allows you to bind some functions that will run whenever an update is ran in an observed state object- that is Observe.",source:"@site/docs/Basics/Observing State.md",sourceDirName:"Basics",slug:"/Basics/Observing State",permalink:"/Vinum/docs/Basics/Observing State",draft:!1,editUrl:"https://github.com/Plothan/Vinum/edit/master/docs/Basics/Observing State.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Holding State",permalink:"/Vinum/docs/Basics/Holding State"},next:{title:"Calculating State",permalink:"/Vinum/docs/Basics/Calculating State"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"What is a Change",id:"what-is-a-change",level:2},{value:"Binding Vs onChange",id:"binding-vs-onchange",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"observing-state"},"Observing State"),(0,r.kt)("p",null,"State observation is a fundemental tool that allows you to bind some functions that will run whenever an update is ran in an observed state object- that is ",(0,r.kt)("inlineCode",{parentName:"p"},"Observe"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local value = Hold(100, function(oldValue, newValue)\n    return true\nend)\n\nlocal valueObserver = Observe(value, function(newValue)\n    return true\nend)\n\nlocal disconnector = valueObserver:onChange(function(newValue)\n    print(newValue)\nend)\n\nvalue:set(40) -- 40 is printed\ndisconnector()\nvalue:set(40) -- 40 isn't printed\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"In order to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Observe"),", we first need to import its constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local Observe = Vinum.Observe\n")),(0,r.kt)("p",null,"To create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Observe")," ",(0,r.kt)("em",{parentName:"p"},"(known as Observer)"),", we feed its constructor a state object to listen to, and a Processor function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local holder = Hold(true, function()\n    return true \nend)\n\nlocal observer = Observe(holder, function(newValue)\n    return true\nend)\n")),(0,r.kt)("p",null,"Now to connect a function to our ",(0,r.kt)("inlineCode",{parentName:"p"},"observer")," object, we use its ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," method, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local disconnector = observer:onChange(function(newValue)\n    print(newValue)\nend)\n")),(0,r.kt)("p",null,"Additionally, the ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," method returns a function that disconnects the connection you just connected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"disconnector()\n\nholder:set(false)\n-- newValue isn't printed\n")),(0,r.kt)("p",null,"And to bind a function, you can use its ",(0,r.kt)("inlineCode",{parentName:"p"},"onBind")," method, which immediately fires the given function, and then acts the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local anotherDisconnector = observer:onBind(function(newValue)\n    print(newValue)\nend)\n-- false is printed\nholder:set(true)\n-- true is printed\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-a-change"},"What is a Change"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"change")," in Vinum is a very flexible term, and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"heavily depends on your code")),"."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Usage"),"'s example, a change means any change that occured in ",(0,r.kt)("inlineCode",{parentName:"p"},"holder"),", so any ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," calls that set the same value, an update will take place- this is because the processors we defined for both of them returned true always."),(0,r.kt)("p",null,"However, in another example, we might modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"holder"),"'s processor to refuse any change that returns the same value as our old one- this heavily changes the term ",(0,r.kt)("inlineCode",{parentName:"p"},"change"),' in this situation, as now, a "change" means any change to the value that does indeed affect the value. '),(0,r.kt)("p",null,"Additionally, we might modify our ",(0,r.kt)("inlineCode",{parentName:"p"},"observer")," processor so that any calls that set a number that isn't even, will not result in an update- alongside the same modification that we applied to our holder's processor in the first example."),(0,r.kt)("p",null,"This means that a change means in this ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"situation")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any changes that result in the same value will not cause an update"),(0,r.kt)("li",{parentName:"ul"},"Any changes that result in a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"number"))," that is even.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"binding-vs-onchange"},"Binding Vs onChange"),(0,r.kt)("p",null,"Observers offer two methods that allow for:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connection that will fire once a change occurs- which is ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange")),(0,r.kt)("li",{parentName:"ol"},"Bindings that will fire the moment they are provided, and connect a connection- which is ",(0,r.kt)("inlineCode",{parentName:"li"},"onBind"))),(0,r.kt)("p",null,"onChange has a very simple and low-level usecase, which is just a connector that connects functions that will run once a change occurs. This is a very fundamental behavior that allows you to do ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"everything")),"- However, because it does only care about a low-level case, sometimes it forces you to write behavior twice or x more such as binding an state to an instance's property."),(0,r.kt)("p",null,"On the other hands, onBind has a very specific usecase to support, which is to make binding more declarative."),(0,r.kt)("p",null,"Take this for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local function alwaysTrue()\n    return true\nend\nlocal counters = Hold(100, alwaysTrue)\nlocal observer = Observe(counters, alwaysTrue)\n\nthisInstance.PropertyName = counters:get()\nobserver:onChange(function(newValue)\n    thisInstance.PropertyName = newValue\nend)\n")),(0,r.kt)("p",null,"This ",(0,r.kt)("strong",{parentName:"p"},"works"),", although it forces you to write the setting behavior twice, both in 7 & 8. "),(0,r.kt)("p",null,"So instead, you can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local function alwaysTrue()\n    return true\nend\nlocal counters = Hold(100, alwaysTrue)\nlocal observer = Observe(counters, alwaysTrue)\n\nobserver:onBind(function(newValue)\n    thisInstance.PropertyName = newValue\nend)\n")),(0,r.kt)("p",null,"Technically speaking, ",(0,r.kt)("inlineCode",{parentName:"p"},"onBind")," is a form of a wrapper that internally uses ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," added to the standard library to make universal code more understandable to general Vinum users."))}p.isMDXComponent=!0}}]);