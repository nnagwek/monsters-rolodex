(this["webpackJsonpmonsters-app"]=this["webpackJsonpmonsters-app"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),r=n(12),a=n.n(r),o=(n(22),n(13)),i=n(14),h=n(17),l=n(16),u=(n(23),n(15)),d=n.n(u),j=(n(42),n(43),n(0)),m=function(e){return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(j.jsxs)("h2",{children:[" ",e.monster.name]},e.monster.id),Object(j.jsx)("p",{children:e.monster.email})]})},p=function(e){return Object(j.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(j.jsx)(m,{monster:e},e.id)}))})},b=(n(45),function(e){var t=e.placeholder,n=e.handleChange;return Object(j.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://jsonplaceholder.typicode.com/users").then((function(t){console.log(t.data),e.setState({monsters:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:" Monster's Rolodex"}),Object(j.jsx)(b,{placeholder:"search monsters",handleChange:this.handleChange}),Object(j.jsx)(p,{monsters:s})]})}}]),n}(s.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.6348de1e.chunk.js.map