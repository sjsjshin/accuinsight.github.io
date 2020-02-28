(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{153:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(6),c=(r(0),r(191)),i={title:"executeHive"},a={id:"batchpipeline/workflow/workspace/job-processing/execute-hive",title:"executeHive",description:"## executeHive\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\execute-hive.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/execute-hive",sidebar:"batchpipeline",previous:{title:"distcp",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/distcp"},next:{title:"fork",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/fork"}},p=[{value:"executeHive",id:"executehive",children:[]}],l={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"executehive"},"executeHive"),Object(c.b)("p",null,"JDBC\ub97c \ud65c\uc6a9\ud558\uc5ec \uc6d0\uaca9\uc5d0 \uc788\ub294 Hive \ud14c\uc774\ube14\uc5d0 \ub300\ud55c \uba85\ub839\uc744 \uc2e4\ud589\ud55c\ub2e4. ","[hive]"," \ub178\ub4dc\ubcf4\ub2e4 \ub354 \ud655\uc7a5\ub41c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[distcp]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/flow004_executehive_property.png",alt:"flow004"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc791\uc5c5",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"delete : \uc2e4\ud589 \uc804\uc5d0 HDFS, ICOS\uc5d0\uc11c \uc0ad\uc81c\ud560 \ud3f4\ub354 \uacbd\ub85c"),Object(c.b)("li",{parentName:"ul"},"mkdir\t\uc2e4\ud589 \uc804\uc5d0 HDFS, ICOS\uc5d0\uc11c \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c\t"))),Object(c.b)("li",{parentName:"ol"},"cluster : Hive\ub97c \uc218\ud589\ud560 \ud074\ub7ec\uc2a4\ud130(\uc9c1\uc811 \uc785\ub825 \uc120\ud0dd\uc2dc 3,4,5 \uc815\ubcf4 \uc9c1\uc811 \uc785\ub825)"),Object(c.b)("li",{parentName:"ol"},"url : JDBC Hive URL"),Object(c.b)("li",{parentName:"ol"},"user\t: Hive \uc0ac\uc6a9\uc790 \uc774\ub984\t"),Object(c.b)("li",{parentName:"ol"},"password\t: Hive \uc0ac\uc6a9\uc790 \uc554\ud638"),Object(c.b)("li",{parentName:"ol"},"sql : \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30 \uc704\ud55c SQL \uc785\ub825. SELECT\ubb38\uc740 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4. "),Object(c.b)("li",{parentName:"ol"},"version : Hive \ubc84\uc804(1.2.1, 3.1.1 \uc911 \ud0dd1)"),Object(c.b)("li",{parentName:"ol"},"retry",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"max : \uc7ac\uc2dc\ub3c4 \ud69f\uc218"),Object(c.b)("li",{parentName:"ul"},"period : \uc7ac\uc2dc\ub3c4 \uac04\uaca9(\ubd84 \ub2e8\uc704)"))),Object(c.b)("li",{parentName:"ol"},"forceOK : \ub370\uc774\ud130 \ub0b4\ubcf4\ub0b4\uae30\uac00 \uc2e4\ud328\ud574\ub3c4 \uc815\uc0c1\uc73c\ub85c \ud45c\uc2dc\ud558\uace0 \uc885\ub8cc")))}u.isMDXComponent=!0},191:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,m=b["".concat(i,".").concat(f)]||b[f]||s[f]||c;return r?o.a.createElement(m,a({ref:t},l,{components:r})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);