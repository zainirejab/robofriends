(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(11),n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(1),i=n(2),s=n(4),u=n(3),h=function(e){var t=e.searchchange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba  b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},m=function(e){return r.a.createElement("div",{style:{overflow:"Scroll",border:"5px solid black",height:"800px"}},e.children)},d=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?100x100"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},b=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Opps! This is not looking good!"):this.props.children}}]),n}(a.Component),v=(n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(h,{searchchange:this.onSearchChange}),r.a.createElement(m,null,r.a.createElement(f,null,r.a.createElement(b,{robots:a})))):r.a.createElement("h1",null,"Loading")}}]),n}(a.Component));c.a.render(r.a.createElement("div",null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.2ed2fc4b.chunk.js.map