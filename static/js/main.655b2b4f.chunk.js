(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),s=n(3),o=n(4),u=n(5),m=n(7),l=n(6),d=n(2),b=n.n(d),j=(n(17),n(0)),p=function(e){var t=e.id,n=e.name,a=e.number,r=e.onInputValue,c=e.onSubmit;return Object(j.jsxs)("form",{className:"Form",children:[Object(j.jsxs)("label",{className:"Label",children:["Name",Object(j.jsx)("input",{id:t,className:"Input",value:n,onChange:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:"Label",children:["Number",Object(j.jsx)("input",{id:t,className:"Input",value:a,onChange:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:"Button",type:"submit",onClick:c,children:"Add contact"})]})};p.protoTypes={id:b.a.string.isRequired,name:b.a.string.isRequired,number:b.a.string.isRequired};var h=p,O=n(10),f=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",number:""},e.onInputValue=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(O.a)({},a,r))},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsx)(h,{id:this.nameInputId,name:t,number:n,onInputValue:this.onInputValue,onSubmit:this.onSubmit})}}]),n}(a.Component),v=(n(19),function(e){var t=e.contacts,n=e.onSubmit;return Object(j.jsx)("section",{className:"Contacts",children:Object(j.jsx)("ul",{className:"ContactsList",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(j.jsxs)("li",{className:"Item",children:[Object(j.jsxs)("span",{className:"Name",children:[a,":"]}),Object(j.jsx)("span",{className:"Number",children:r}),Object(j.jsx)("button",{className:"ButtonDelete",type:"submit",onClick:n,id:t,children:"Delete"})]},t)}))})})});v.protoTypes={contacts:b.a.arrayOf(b.a.shape({id:b.a.string.isRequired,name:b.a.string.isRequired,number:b.a.string.isRequired})).isRequired};var x=v,C=(n(20),function(e){var t=e.onInputFilter;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"FindTitle",children:"Find contacts by name"}),Object(j.jsx)("input",{className:"InputFilter",onChange:t,type:"text",name:"filter"})]})}),g=n(25),N=(n(21),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:""},e.addContact=function(t){var n=t.name,a=t.number,r={id:Object(g.a)(),name:n,number:a};if(""!==n&&""!==a){if(e.state.contacts.map((function(e){return e.name})).includes(r.name))return void alert("Contact already exist");e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(s.a)(t))}}))}},e.deleteContact=function(t){t.preventDefault();var n=t.currentTarget.id,a=e.state.contacts.filter((function(e){return e.id!==n}));e.setState({contacts:Object(s.a)(a)})},e.onInputFilter=function(t){var n=t.currentTarget.value,a=e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(n)}));e.setState(n?{contacts:Object(s.a)(a)}:{contacts:Object(s.a)(e.state.contacts)})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.name;return console.log(t),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"Title",children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addContact}),Object(j.jsx)("h2",{className:"Title",children:"Contacts"}),Object(j.jsx)(C,{onInputFilter:this.onInputFilter}),Object(j.jsx)(x,{contacts:t,name:n,onSubmit:this.deleteContact})]})}}]),n}(a.Component));n(22);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.655b2b4f.chunk.js.map