(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),s=(a(49),a(12)),i=a(13),o=a(15),u=a(14),m=a(16),p=a(108),h=a(111),f=a(110),d=a(7),b=a.n(d),E=a(17),g=function(e){e.source;var t=e.title,a=e.description,n=e.url,c=e.image,l=e.publishtime;e.content;return console.log(e.publishtime.slice(0,10)),r.a.createElement("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"},r.a.createElement("img",{src:c,className:"db w-100 br2 br--top",alt:"news picture"}),r.a.createElement("div",{className:"pa2 ph3-ns pb3-ns"},r.a.createElement("div",{className:"dt w-100 mt1"},r.a.createElement("div",{className:"dtc"},r.a.createElement("a",{href:n,target:"_blank",name:"news",rel:"noopener noreferrer"},r.a.createElement("h1",{className:"f5 f4-ns mv0"},t))),r.a.createElement("div",{className:"dtc tr"},r.a.createElement("h2",{className:"f5 mv0"}))),r.a.createElement("p",{className:"f6 lh-copy measure mt2 mid-gray"},a),r.a.createElement("p",{className:" d-flex justify-content-end "},r.a.createElement("i",{className:"f6 gray far fa-calendar-alt"}," ",l.slice(0,10)))))},v=a(5),w=a(18),y=function(e){var t=e.toplist,a=[],n=[],c=[],l=[],s=[],i=[];if(t.length>0)for(var o=0;o<3;o++)n[o]=t[o].url,a[o]=t[o].urlToImage,c[o]=t[o].author,l[o]=t[o].description,s[o]=t[o].title,i[o]=t[o].content;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"w-70-l w-70-m h-100"},r.a.createElement(w.c,null,r.a.createElement(w.b,null,r.a.createElement(v.Card,{shadow:0,style:{width:"auto",height:"500px",background:"url(".concat(a[0],") center / cover"),margin:"0"}},r.a.createElement(v.CardTitle,{expand:!0}),r.a.createElement(v.CardActions,{style:{height:"auto",padding:"16px",background:"rgba(0,0,0,0.5)"}},r.a.createElement("span",{style:{color:"#fff",fontWeight:"500"}},r.a.createElement("h5",null,s[0]))))),r.a.createElement(w.a,null,r.a.createElement(v.Card,{shadow:0,style:{width:"auto",height:"500px",background:"url(".concat(a[0],") center / cover"),margin:"0"}},r.a.createElement(v.CardTitle,{expand:!0}),r.a.createElement(v.CardActions,{style:{height:"auto",padding:"16px",background:"rgba(0,0,0,0.5)"}},r.a.createElement("span",{style:{color:"#fff",fontWeight:"500"}},r.a.createElement("p",null,i[0]))),r.a.createElement("div",{className:"text-center ma2"},r.a.createElement("a",{href:n[0],target:"_blank",id:"viewNews",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"View News"))))))),r.a.createElement("div",{className:"w-30-l w-30-m"},r.a.createElement("div",{className:"h-50"},r.a.createElement(w.c,null,r.a.createElement(w.b,null,r.a.createElement(v.Card,{shadow:0,style:{width:"auto",height:"250px",background:"url(".concat(a[1],") center / cover"),margin:"auto"}},r.a.createElement(v.CardTitle,{expand:!0}),r.a.createElement(v.CardActions,{style:{height:"auto",padding:"16px",background:"rgba(0,0,0,0.5)"}},r.a.createElement("span",{style:{color:"#fff",fontSize:"12px",fontWeight:"500"}},r.a.createElement("p",null,s[1]))))),r.a.createElement(w.a,null,r.a.createElement(v.Card,{shadow:0,style:{width:"auto",height:"250px",background:"url(".concat(a[1],") center / cover"),margin:"auto"}},r.a.createElement(v.CardTitle,{expand:!0}),r.a.createElement(v.CardActions,{style:{height:"auto",padding:"16px",background:"rgba(0,0,0,0.5)"}},r.a.createElement("span",{className:"f7",style:{color:"#fff",fontWeight:"500"}},r.a.createElement("p",null,l[1]))),r.a.createElement("div",{className:"text-center ma2"},r.a.createElement("a",{href:n[1],target:"_blank",id:"viewNews",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"View News"))))))),r.a.createElement("div",{className:"h-50"},r.a.createElement(w.c,null,r.a.createElement(w.b,null,r.a.createElement(v.Card,{shadow:0,style:{width:"auto",height:"250px",background:"url(".concat(a[2],") center / cover"),margin:"auto"}},r.a.createElement(v.CardTitle,{expand:!0}),r.a.createElement(v.CardActions,{style:{height:"auto",padding:"16px",background:"rgba(0,0,0,0.5)"}},r.a.createElement("span",{style:{color:"#fff",fontSize:"12px",fontWeight:"500"}},r.a.createElement("p",null,s[2]))))),r.a.createElement(w.a,null,r.a.createElement(v.Card,{shadow:0,style:{width:"auto",height:"250px",background:"url(".concat(a[2],") center / cover"),margin:"auto"}},r.a.createElement(v.CardTitle,{expand:!0}),r.a.createElement(v.CardActions,{style:{height:"auto",padding:"16px",background:"rgba(0,0,0,0.5)"}},r.a.createElement("span",{className:"f7",style:{color:"#fff",fontWeight:"500"}},r.a.createElement("p",null,l[2]))),r.a.createElement("div",{className:"text-center ma2"},r.a.createElement("a",{href:n[2],target:"_blank",id:"viewNews",rel:"noopener noreferrer"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"View News")))))))))},N=function(e){var t=e.list,a=e.toplist;return r.a.createElement("div",null,r.a.createElement(y,{toplist:a}),r.a.createElement("div",{className:"flex flex-wrap"},t.map(function(e,t){return r.a.createElement(g,{key:t,source:e.source.name,title:e.title,description:e.description,url:e.url,image:e.urlToImage,publishtime:e.publishedAt,content:e.content})})))},k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={list:[],toplist:[]},e}var a;return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:(a=Object(E.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"&apiKey=a23409695d934c95a1b8d3f8e943aae3",e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=sg".concat("&apiKey=a23409695d934c95a1b8d3f8e943aae3"));case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent).articles=a.articles.filter(function(e,t){return e.urlToImage}),this.setState({list:a.articles.filter(function(e,t){return t>2})}),this.setState({toplist:a.articles.filter(function(e,t){return t<3})});case 10:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(N,{list:this.state.list,toplist:this.state.toplist}))}}]),t}(n.Component),x=a(19),j=(a(22),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={list:[],toplist:[]},e}var a;return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:(a=Object(E.a)(b.a.mark(function e(){var t,a,n,r,c,l,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="&apiKey=a23409695d934c95a1b8d3f8e943aae3",e.next=3,fetch("https://newsapi.org/v2/top-headlines?sources=the-verge".concat(a));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,fetch("https://newsapi.org/v2/top-headlines?sources=hacker-news".concat(a));case 9:return c=e.sent,e.next=12,c.json();case 12:l=e.sent,s=l.articles.filter(function(e,t){return e.urlToImage}),r.articles=(t=r.articles).concat.apply(t,Object(x.a)(s)),console.log(r.articles),this.setState({list:r.articles.filter(function(e,t){return t>2})}),this.setState({toplist:r.articles.filter(function(e,t){return t<3})});case 18:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(N,{list:this.state.list,toplist:this.state.toplist}))}}]),t}(n.Component)),O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={list:[],toplist:[]},e}var a;return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:(a=Object(E.a)(b.a.mark(function e(){var t,a,n,r,c,l,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="&apiKey=a23409695d934c95a1b8d3f8e943aae3",e.next=3,fetch("https://newsapi.org/v2/top-headlines?sources=cnbc".concat(a));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,fetch("https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal".concat(a));case 9:return c=e.sent,e.next=12,c.json();case 12:l=e.sent,s=l.articles.filter(function(e,t){return e.urlToImage}),r.articles=(t=r.articles).concat.apply(t,Object(x.a)(s)),this.setState({list:r.articles.filter(function(e,t){return t>2})}),this.setState({toplist:r.articles.filter(function(e,t){return t<3})});case 17:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(N,{list:this.state.list,toplist:this.state.toplist}))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={list:[],toplist:[]},e}var a;return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:(a=Object(E.a)(b.a.mark(function e(){var t,a,n,r,c,l,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="&apiKey=a23409695d934c95a1b8d3f8e943aae3",e.next=3,fetch("https://newsapi.org/v2/top-headlines?sources=espn".concat(a));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,fetch("https://newsapi.org/v2/top-headlines?sources=bbc-sport".concat(a));case 9:return c=e.sent,e.next=12,c.json();case 12:l=e.sent,s=l.articles.filter(function(e,t){return e.urlToImage}),r.articles=(t=r.articles).concat.apply(t,Object(x.a)(s)),this.setState({list:r.articles.filter(function(e,t){return t>2})}),this.setState({toplist:r.articles.filter(function(e,t){return t<3})});case 17:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(N,{list:this.state.list,toplist:this.state.toplist}))}}]),t}(n.Component),T=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={list:[],toplist:[]},e}var a;return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:(a=Object(E.a)(b.a.mark(function e(){var t,a,n,r,c,l,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="&apiKey=a23409695d934c95a1b8d3f8e943aae3",e.next=3,fetch("https://newsapi.org/v2/top-headlines?sources=daily-mail".concat(a));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,fetch("https://newsapi.org/v2/top-headlines?sources=mashable".concat(a));case 9:return c=e.sent,e.next=12,c.json();case 12:l=e.sent,s=l.articles.filter(function(e,t){return e.urlToImage}),r.articles=(t=r.articles).concat.apply(t,Object(x.a)(s)),this.setState({list:r.articles.filter(function(e,t){return t>2})}),this.setState({toplist:r.articles.filter(function(e,t){return t<3})});case 17:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(N,{list:this.state.list,toplist:this.state.toplist}))}}]),t}(n.Component),S=function(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:k}),r.a.createElement(f.a,{path:"/Tech",component:j}),r.a.createElement(f.a,{path:"/Business",component:O}),r.a.createElement(f.a,{path:"/Sport",component:C}),r.a.createElement(f.a,{path:"/Entertainment",component:T}))},I=function(e){return r.a.createElement("footer",{className:"pv4 ph3 ph5-m ph6-l black"},r.a.createElement("hr",null),r.a.createElement("small",{className:"f6 db tc"},"\xa9 2018 ",r.a.createElement("b",{className:"ttu"},"DrewELOPER INC"),"., All Rights Reserved"),r.a.createElement("div",{className:"tc mt3"},r.a.createElement("a",{href:"/",title:"Help",className:"f6 dib ph2 link black dim"},"Language"),r.a.createElement("a",{href:"/",title:"Terms",className:"f6 dib ph2 link black dim"},"Terms of Use"),r.a.createElement("a",{href:"/",title:"Privacy",className:"f6 dib ph2 link black dim"},"Privacy")))},A=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("header",{className:"bg-white black-80 tc pv4 avenir"},r.a.createElement("h1",{className:"mt2 mb0 baskerville i fw6 f1 animated infinite pulse delay-2s"},"CCB NEWS"),r.a.createElement("h2",{className:"mt2 mb0 f6 fw4 ttu tracked"},"BRINGS YOU THE LATEST NEWS"),r.a.createElement("nav",{className:"bt bb tc mw7 center mt4"},r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l",to:"/"},"HOME"),r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l",to:"/Tech"},"TECH"),r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l",to:"/Business"},"BUSINESS"),r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l",to:"/Sport"},"SPORT"),r.a.createElement(p.a,{className:"f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l",to:"/Entertainment"},"ENTERTAINMENT"))),r.a.createElement("div",{className:"container"},r.a.createElement(S,null)),r.a.createElement(I,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(109);l.a.render(r.a.createElement(W.a,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,a){},44:function(e,t,a){e.exports=a(107)},49:function(e,t,a){}},[[44,2,1]]]);
//# sourceMappingURL=main.a3d79668.chunk.js.map