(this["webpackJsonpreact-apps-firststeps"]=this["webpackJsonpreact-apps-firststeps"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(2),i=n.n(o),s=(n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))}),r=n(3),d=n(4),l=n(6),h=n(5),u=n(0),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isLogin:!1,input:"",user:"",message:""},e.handleOnChange=function(t){e.setState({input:t.target.value})},e.handleKeyUp=function(t){"Enter"===t.key&&e.handleButton()},e.handleButton=function(){e.state.isLogin?e.setState({input:"",isLogin:!e.state.isLogin,message:"Good by ".concat(e.state.user,", You are logged out")}):e.setState({user:e.state.input,isLogin:!e.state.isLogin,message:"Welcome "+e.state.input+"! You are logged in"})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)("center",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("input",{style:{width:"250px",textAlign:"center"},type:"text",placeholder:"Wer bist du?",value:this.state.isLogin?"":this.state.input,onChange:this.handleOnChange,onKeyUp:this.handleKeyUp})}),Object(u.jsx)("button",{onClick:function(){return e.handleButton()},children:this.state.isLogin?"log out":"log in"}),Object(u.jsx)("p",{children:this.state.message})]})})}}]),n}(c.Component),p=0,b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={imageLink:"https://www.fillmurray.com/400/200"},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=function(){++p%2?e.setState({imageLink:"https://www.fillmurray.com/g/400/200"}):e.setState({imageLink:"https://www.fillmurray.com/400/200"})};return Object(u.jsx)("div",{children:Object(u.jsxs)("center",{children:[Object(u.jsx)("img",{onClick:t,onMouseOver:function(){console.log("over")},src:this.state.imageLink}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," ",Object(u.jsx)("button",{onClick:t,children:"Change It!"})]})})}}]),n}(c.Component),m=n(9),O=n(7);n(16);var x=function(e){var t=1==!e.data.completed?"":"checked";return Object(u.jsxs)("div",{className:"todo-item",children:[Object(u.jsx)("input",{type:"checkbox",checked:e.data.completed,onChange:function(){console.log("".concat(e.data.id,".todo-item changed to ").concat(e.data.completed))},onClick:function(){return e.checkIt(e.data.id)}}),Object(u.jsx)("p",{className:t,children:e.data.text}),Object(u.jsx)("button",{className:"btn delete",onClick:function(){return e.deleteTodo(e.data)},children:Object(u.jsx)("i",{className:"fa fa-trash"})})]})},g=[{id:1,text:"tu was zu tun",completed:!0},{id:2,text:"geh wohin zu gehen",completed:!1},{id:3,text:"mach das Zimmer sauber",completed:!1},{id:4,text:"Besuch dein Mama",completed:!0}],f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={data:g,newTodo:"",ok:null,change:0,event:"",isLoading:!0},e.checkIt=function(t){var n=Object(O.a)(e.state.data),c=n.indexOf(t);n[c].completed=!n[c].completed,e.setState({data:n})},e.checkItV1=function(t){var n;e.setState({data:Object(O.a)(e.state.data).map((function(e){return e.id===t&&(e.completed=!e.completed,n=Object(m.a)({},e)),e}))}),n.completed?e.setState({event:'"'.concat(n.text,'" is now "Completed"')}):e.setState({event:'"'.concat(n.text,'" is now "Uncompleted"')})},e.checkItV2=function(t){var n=Object(O.a)(e.state.data).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));e.setState({data:n})},e.setNewTodo=function(t){e.setState({newTodo:t.target.value})},e.addTodo=function(t){if("Enter"===t.key){var n={id:e.state.data.length+1,text:e.state.newTodo,completed:!1};if(e.state.newTodo){e.setState({newTodo:""});var c=[].concat(Object(O.a)(e.state.data),[n]);e.setState({data:c}),e.setState({event:'"'.concat(n.text,'" is added')})}}},e.deleteTodo=function(t){var n=t.id;e.setState({data:e.state.data.filter((function(e){return e.id!=n}))}),console.log("todo number ".concat(t.text," is deleted")),e.setState({event:'"'.concat(t.text,'" is deleted')})},e.howManyOk=function(){var t=Object(O.a)(e.state.data),n=0;t=t.map((function(e){return e.completed&&n++,e})),e.setState({ok:n})},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.data!==this.state.data&&(console.log("DidUpdate"),this.setState({change:this.state.change+1}),this.howManyOk())}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoading:!1})}),1500),this.howManyOk()}},{key:"render",value:function(){var e=this,t=this.state.data.map((function(t){return Object(u.jsx)(x,{data:t,checkIt:e.checkItV1,deleteTodo:e.deleteTodo},t.id)})),n=this.state.data.length,c=this.state.ok,a=n-c;return Object(u.jsxs)("div",{className:"todo-list",children:[Object(u.jsxs)("h1",{children:["ToDO List (",this.state.data.length,")"]}),c>0&&!this.state.isLoading&&Object(u.jsxs)("p",{children:["Completed : ",c]}),a>0&&!this.state.isLoading&&Object(u.jsxs)("p",{children:["Uncompleted : ",a]}),this.state.isLoading?Object(u.jsx)("p",{children:"Loading..."}):t,Object(u.jsx)("input",{placeholder:"add new toDo!",type:"text",onKeyUp:this.addTodo,onChange:this.setNewTodo,value:this.state.newTodo}),Object(u.jsxs)("p",{children:["Update Nu :"," "+this.state.change]}),Object(u.jsx)("p",{children:this.state.event})]})}}]),n}(c.Component),v=[{id:"1",name:"Pencil",price:1,description:"Perfect for those who can't remember things! 5/5 Highly recommend."},{id:"2",name:"Housing",price:0,description:"Housing provided for out-of-state students or those who can't commute"},{id:"3",name:"Computer Rental",price:300,description:"Don't have a computer? No problem!"},{id:"4",name:"Coffee",price:2,description:"Wake up!"},{id:"5",name:"Snacks",price:0,description:"Free snacks!"},{id:"6",name:"Rubber Duckies",price:3.5,description:"To help you solve your hardest coding problems."},{id:"7",name:"Fidget Spinner",price:21.99,description:"Because we like to pretend we're in high school."},{id:"8",name:"Sticker Set",price:14.99,description:"To prove to other devs you know a lot."}];var y=function(e){var t={border:"1px solid #ddd",padding:"8px"},n={border:"1px solid #ddd",padding:"8px",backgroundColor:"#bbb"},c={border:"1px solid #ddd",padding:"8px",color:"#fff"},a=e.data.map((function(e){return Object(u.jsxs)("tr",{style:0==e.price?n:t,children:[Object(u.jsx)("td",{style:t,children:e.id}),Object(u.jsx)("td",{style:t,children:e.name}),Object(u.jsx)("td",{style:0==e.price?c:t,children:e.price.toLocaleString("de-De",{style:"currency",currency:"EUR"})}),Object(u.jsx)("td",{style:t,children:e.description})]},e.id)}));return Object(u.jsxs)("table",{style:{borderCollapse:"collapse",width:"100%"},children:[Object(u.jsx)("caption",{children:Object(u.jsx)("h1",{children:"Products"})}),Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{style:{border:"1px solid #ddd",padding:"8px"},children:[Object(u.jsx)("th",{children:"id"}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{style:{width:70},children:"Price"}),Object(u.jsx)("th",{children:"Description"})]})}),Object(u.jsx)("tbody",{children:a})]})};var k=function(){return Object(u.jsx)(y,{data:v})};var w=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.product.name}),Object(u.jsxs)("p",{children:[e.product.price.toLocaleString("en-US",{style:"currency",currency:"USD"})," - ",e.product.description]})]})};var S=function(){var e=v.map((function(e){return Object(u.jsx)(w,{product:e},e.id)}));return Object(u.jsx)("div",{children:e})},L=n.p+"static/media/logo.6ce24c58.svg";n(17);var C=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:L,className:"App-logo",alt:"logo"}),Object(u.jsxs)("p",{children:["Edit ",Object(u.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(u.jsx)("span",{style:{color:"red"},children:"los!"})]})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root5")),i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root4")),i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root3")),i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root2")),i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root1")),i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),s()}},[[18,1,2]]]);
//# sourceMappingURL=main.33adf7d2.chunk.js.map