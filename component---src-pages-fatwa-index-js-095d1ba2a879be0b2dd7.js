(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{C4PE:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return r}));var n=a("FdF9"),i=a("TEpc"),l=function(e){var t,a=e.data,l=null==a||null===(t=a.allMarkdownRemark)||void 0===t?void 0:t.nodes.map((function(e){return{title:e.frontmatter.title,slug:e.fields.slug,excerpt:e.excerpt}}));return n.default.createElement(i.a,{list:l,title:"Фетвы"})};l.displayName="PagesFatwa",t.default=l;var r="973469189"},TEpc:function(e,t,a){"use strict";var n=a("FdF9"),i=a("83Zx"),l=a("nVvx"),r=a("zLVn"),o=a("vOnD"),c=a("Wbzz"),d=new Intl.DateTimeFormat("ru-RU",{year:"numeric",month:"long",day:"numeric"}),m=Object(o.a)((function(e){var t=e.datetime,a=Object(r.a)(e,["datetime"]);return n.default.createElement("time",Object.assign({dateTime:t.toISOString()},a),d.format(t))})).withConfig({displayName:"component__Time",componentId:"sc-1l3zttr-0"})(["font-size:14px;padding:0.5em 1em;color:white;background-color:#33a67f;"]);m.displayName="Time";var u=Object(o.a)((function(e){var t=e.slug,a=e.title,i=e.excerpt,l=e.date,o=Object(r.a)(e,["slug","title","excerpt","date"]);return n.default.createElement("article",o,l&&n.default.createElement(m,{datetime:l}),n.default.createElement("h2",null,n.default.createElement(c.Link,{to:t},a)),n.default.createElement("p",null,i))})).withConfig({displayName:"component__Annotation",componentId:"sc-1l3zttr-1"})(["position:relative;padding-top:0.1em;a{text-decoration:none;color:rgb(36,116,97);font-size:21px;}","{top:-1.5em;position:absolute;}"],m);u.displayName="Annotation";var s=u,p=function(e){var t=Date.parse(e.split("/")[2].substring(0,10));if(!isNaN(t))return new Date(t)},f=Object(o.a)((function(e){var t=e.list,a=Object(r.a)(e,["list"]);return n.default.createElement("ul",a,t.map((function(e){var t=e.slug,a=Object(r.a)(e,["slug"]);return n.default.createElement("li",{key:t},n.default.createElement(s,Object.assign({slug:t,date:p(t)},a)))})))})).withConfig({displayName:"list__List",componentId:"vvvplj-0"})(["list-style:none;margin:0;padding:0;li{background-color:#e7f2ef;padding:0.1em 1em;margin:2em 0;}"]);f.displayName="List";var g=f,v=o.a.h1.withConfig({displayName:"header__Header",componentId:"ivi3c6-0"})(["color:rgb(53,53,53);text-transform:uppercase;font-size:21px;margin:2em 0 1em;padding:0 0.7em;"]);v.displayName="Header";var b=v,E=function(e){var t=e.list,a=e.title;return n.default.createElement(i.a,null,n.default.createElement(l.a,{title:a}),n.default.createElement(b,null,a),n.default.createElement(g,{list:t}))};E.displayName="PageList";t.a=E}}]);
//# sourceMappingURL=component---src-pages-fatwa-index-js-095d1ba2a879be0b2dd7.js.map