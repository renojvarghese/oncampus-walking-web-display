(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},33:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(16),l=a.n(r),i=(a(31),a(5)),o=a(6),s=a(8),m=a(7),u=a(9),d=(a(33),a(35),a(46)),h=a(47),E=a(45),p=function(e){var t=e.onChange,a=e.placeholder,n=void 0===a?"Search":a;return c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{className:"search-input",onChange:t,placeholder:n}))},b=function(e){var t=e.onClick,a=e.children;return c.a.createElement("div",{className:"search-btn-container"},c.a.createElement("button",{className:"search-btn",onClick:t},a))},v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"search-container"},c.a.createElement(p,null),c.a.createElement(b,null,"Submit"))}}]),t}(n.Component),j=function(e){var t=e.name,a=void 0===t?"PARTICPANT ID":t,n=e.start,r=void 0===n?"10/12":n,l=e.end,i=void 0===l?"Present":l,o=e.miles,s=void 0===o?100:o;return c.a.createElement("div",{className:"part-box"},c.a.createElement("div",{className:"part-name"},a),c.a.createElement("div",{className:"part-start"},"Start Time: ",r),c.a.createElement("div",{className:"part-end"},"End Time:",i),c.a.createElement("div",{className:"part-miles"},"Total Miles: ",s," mi"))},O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"part-container"},c.a.createElement(E.a,{to:"/map"},c.a.createElement(j,null)),c.a.createElement(E.a,{to:"/map"},c.a.createElement(j,null)))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E.a,{to:"/"},c.a.createElement("a",null,"Signout")),c.a.createElement(v,null),c.a.createElement(O,null))}}]),t}(c.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"login-form"},c.a.createElement("div",{className:"input-box"},c.a.createElement("label",null,"NetId"),c.a.createElement("input",{type:"text",placeholder:"Enter Netid"})),c.a.createElement("div",{className:"input-box"},c.a.createElement("label",null,"Password"),c.a.createElement("input",{type:"password",placeholder:"enter password"})),c.a.createElement(E.a,{to:"/dashboard"},c.a.createElement("button",{className:"btn login"},"Login"))))}}]),t}(c.a.Component),g=a(14),w=a(21),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={start:new Date,end:new Date},a.changeStart=a.changeStart.bind(Object(g.a)(Object(g.a)(a))),a.changeEnd=a.changeEnd.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"changeStart",value:function(e){this.setState({start:e})}},{key:"changeEnd",value:function(e){this.setState({end:e})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E.a,{to:"/dashboard"},c.a.createElement("a",null,"Back")),c.a.createElement("div",{className:"map-container"},c.a.createElement("div",{className:"map"},"Insert Map Here"),c.a.createElement("div",{className:"dates"},c.a.createElement("div",null,c.a.createElement("label",null,"Start Date:"),c.a.createElement(w.a,{selected:this.state.start,onChange:this.changeStart})),c.a.createElement("div",null,c.a.createElement("label",null,"End Date:"),c.a.createElement(w.a,{selected:this.state.start,onChange:this.changeEnd})))))}}]),t}(c.a.Component),k=function(){return c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement(h.a,{path:"/",exact:!0,component:N}),c.a.createElement(h.a,{path:"/dashboard",exact:!0,component:f}),c.a.createElement(h.a,{path:"/map",exact:!0,component:y})))},C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(k,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.298885da.chunk.js.map