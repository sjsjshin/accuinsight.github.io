(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(399)),i={title:"S3 \ub0b4\ubcf4\ub0b4\uae30"},p={id:"pipeline/workflow/workspace/export-data/s3",title:"S3 \ub0b4\ubcf4\ub0b4\uae30",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/export-data/s3.md",permalink:"/docs/pipeline/workflow/workspace/export-data/s3",sidebar:"pipeline",previous:{title:"RDB \ub0b4\ubcf4\ub0b4\uae30",permalink:"/docs/pipeline/workflow/workspace/export-data/rdb"},next:{title:"decision",permalink:"/docs/pipeline/workflow/workspace/job-processing/decision"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Property",id:"property",children:[]}],c={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \uacb0\uacfc\ub97c S3\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ub0b4\ubcf4\ub0b4\uae30]","\ub178\ub4dc \uc911 ","[S3\ub0b4\ubcf4\ub0b4\uae30]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/export-data/expdata009_s3_main.png",alt:"expdata009"})),"  "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h3",{id:"property"},"Property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825  "),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/export-data/expdata010_s3_property.png",width:"500px",height:"600px"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"file : \ub370\uc774\ud130 \uc800\uc7a5 \uacbd\ub85c \uc124\uc815(S3 \ubc84\ud0b7 \uc120\ud0dd\uc2dc 8.credential \uc790\ub3d9 \uc785\ub825)"),Object(o.b)("li",{parentName:"ol"},"folder : \ub370\uc774\ud130 \uc800\uc7a5 \ud3f4\ub354\uba85. \ub0a0\uc9dc \ud45c\ud604\uc2dd \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \ub0a0\uc9dc\ub85c \uce58\ud658 \uac00\ub2a5(\uc0ac\uc6a9\ubc29\ubc95\uc740 ","[hdfs\ub0b4\ubcf4\ub0b4\uae30]"," \ucc38\uace0)"),Object(o.b)("li",{parentName:"ol"},"filename : \uc800\uc7a5\ud30c\uc77c\uba85"),Object(o.b)("li",{parentName:"ol"},"format : \ubd88\ub7ec\uc62c \ud30c\uc77c\uc758 \ud615\uc2dd \uc9c0\uc815(json, parquet, csv \uc911 \ud0dd1)"),Object(o.b)("li",{parentName:"ol"},"mode : \uc800\uc7a5\ubaa8\ub4dc \uc124\uc815",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"error : \ud30c\uc77c\uc774 \uc788\uc73c\uba74 \uc5d0\ub7ec \ucc98\ub9ac"),Object(o.b)("li",{parentName:"ul"},"append : \ub2e4\ub978 \uc774\ub984\uc73c\ub85c \ud30c\uc77c \ucd94\uac00  "),Object(o.b)("li",{parentName:"ul"},"overwrite : \uae30\uc874 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uace0 \ucd94\uac00"),Object(o.b)("li",{parentName:"ul"},"ignore : \ud30c\uc77c\uc774 \uc788\uc73c\uba74 \uc800\uc7a5\ud558\uc9c0 \uc54a\uace0, \uc5d0\ub7ec \ucc98\ub9ac\ub3c4 \ud558\uc9c0 \uc54a\uc74c"))),Object(o.b)("li",{parentName:"ol"},"header : \ud5e4\ub354 \uc5ec\ubd80 (true, false \uc911 \ud0dd1)"),Object(o.b)("li",{parentName:"ol"},"option : key, value \uc124\uc815 (null\uc744 \ubb38\uc790\uc5f4\ub85c \uc778\uc2dd\ud558\ub294 \uac83\uc744 \ubc29\uc9c0 \ud560 \uc218 \uc788\uc74c)"),Object(o.b)("li",{parentName:"ol"},"credential : 1.file \uc785\ub825\ud56d\ubaa9\uc5d0\uc11c \uc2a4\ud1a0\ub9ac\uc9c0, \ubc84\ud0b7\uc815\ubcf4\ub97c \uc785\ub825\uc2dc \uc790\ub3d9 \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"catalogDataset",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Catalog Dataset \ub4f1\ub85d\uc5ec\ubd80 : Catalog Dataset\uc744 \ub4f1\ub85d\ud560 \uacbd\uc6b0 \uccb4\ud06c"),Object(o.b)("li",{parentName:"ul"},"targetBucket : Catalog Bucket \uc9c0\uc815"),Object(o.b)("li",{parentName:"ul"},"Dataset Name : Catalog Dataset \uba85 \uc785\ub825"),Object(o.b)("li",{parentName:"ul"},"Catalog user id : Catalog user id \uc785\ub825")))))}b.isMDXComponent=!0},399:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return r?a.a.createElement(f,p({ref:t},c,{components:r})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);