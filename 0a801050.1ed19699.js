(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return u}));var t=n(1),a=n(6),i=(n(0),n(376)),o={title:"standardScaler"},c={id:"pipeline/workflow/workspace/feature-engineering/standardScaler",isDocsHomePage:!1,title:"standardScaler",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/feature-engineering/standardScaler.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/standardScaler",sidebar:"pipeline",previous:{title:"outlierRemover",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/outlierRemover"},next:{title:"maxAbsScaler",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/maxAbsScaler"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function u(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"\uac01 Feature\uc758 \ud3c9\uade0\uc744 0 \ubd84\uc0b0\uc744 1\ub85c\ub9cc\ub4dc\ub294 \uc2a4\ud0e0\ub2e4\ub4dc \uc2a4\ucf00\uc77c\ub7ec \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[standardScaler]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4. "),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"Property"),Object(i.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(i.b)("p",null,Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/feature-engineering/standardScaler001.png",alt:"standardScaler001"}))),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"col : \ub300\uc0c1 \uceec\ub7fc\ub4e4 \uc120\ud0dd(\uc22b\uc790\ud615 \uceec\ub7fc\ub9cc \uc9c0\uc6d0)"),Object(i.b)("li",{parentName:"ol"},"withMean : \ud3c9\uade0\uac12\uc774 0\uc73c\ub85c \ub418\ub3c4\ub85d \uc2a4\ucf00\uc77c\ub9c1"),Object(i.b)("li",{parentName:"ol"},"withStandard : \ud45c\uc900\ud3b8\ucc28\ub85c \uc2a4\ucf00\uc77c\ub9c1")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"[ICOS\ubd88\ub7ec\uc624\uae30]",", ","[standardScaler]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131"),Object(i.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/standardScaler002.png"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"standardScaler\ub97c \uc801\uc6a9\ud560 \ub300\uc0c1 \uceec\ub7fc(col)\uc744 'price'\ub85c \uc120\ud0dd, 'withMean', 'withStandard' \uccb4\ud06c \ud6c4 \uc2e4\ud589 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc74c -> price\uceec\ub7fc\uc758 \uac12\uc744 standardScaler\ub85c \uc2a4\ucf00\uc77c\ub9c1 "),Object(i.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/standardScaler003.png"}))))}u.isMDXComponent=!0},376:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=t,f=d["".concat(o,".").concat(b)]||d[b]||s[b]||i;return n?a.a.createElement(f,c(c({ref:r},p),{},{components:n})):a.a.createElement(f,c({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);