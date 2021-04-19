(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),s=n.n(c),i=n(8),o=n(3),u=n(4),m=n(6),l=n(5),b=n(10),d=n(2),j=n.n(d),h=(n(17),n(0)),p=function(e){var t=e.id,n=e.name,a=e.number,r=e.onInputValue,c=e.onSubmit;return Object(h.jsxs)("form",{className:"Form",children:[Object(h.jsxs)("label",{className:"Label",children:["Name",Object(h.jsx)("input",{id:t,className:"Input",value:n,onChange:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{className:"Label",children:["Number",Object(h.jsx)("input",{id:t,className:"Input",value:a,onChange:r,type:"text",name:"number"})]}),Object(h.jsx)("button",{className:"Button",type:"submit",onClick:c,children:"Add contact"})]})};p.protoTypes={id:j.a.string.isRequired,name:j.a.string.isRequired,number:j.a.string.isRequired};var O=p,f=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.onInputValue=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(h.jsx)(O,{id:this.nameInputId,name:t,number:n,onInputValue:this.onInputValue,onSubmit:this.onSubmit})}}]),n}(a.Component),v=(n(19),function(e){var t=e.contacts,n=e.onSubmit;return Object(h.jsx)("section",{className:"Contacts",children:Object(h.jsx)("ul",{className:"ContactsList",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(h.jsxs)("li",{className:"Item",children:[Object(h.jsxs)("span",{className:"Name",children:[a,":"]}),Object(h.jsx)("span",{className:"Number",children:r}),Object(h.jsx)("button",{className:"ButtonDelete",type:"submit",onClick:n,id:t,children:"Delete"})]},t)}))})})});v.protoTypes={contacts:j.a.arrayOf(j.a.shape({id:j.a.string.isRequired,name:j.a.string.isRequired,number:j.a.string.isRequired})).isRequired};var x=v,g=n(24),N=(n(20),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:""},e.addContact=function(t){var n=t.name,a=t.number,r={id:Object(g.a)(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(i.a)(t))}}))},e.deleteContact=function(t){t.preventDefault();var n=t.currentTarget.id,a=e.state.contacts.filter((function(e){return e.id!==n}));e.setState({contacts:Object(i.a)(a)})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.name;return console.log(t),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:"Title",children:"Phonebook"}),Object(h.jsx)(f,{onSubmit:this.addContact}),Object(h.jsx)("h2",{className:"Title",children:"Contacts"}),Object(h.jsx)(x,{contacts:t,name:n,onSubmit:this.deleteContact})]})}}]),n}(a.Component));n(21);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a373bd5c.chunk.js.map