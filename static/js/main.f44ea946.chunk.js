(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(9),s=n.n(i),c=n(7),o=n(3),u=n(4),d=n(6),l=n(5),m=n(10),b=n(1),j=n.n(b),p=(n(17),n(0)),h=function(e){var t=e.id,n=e.name,a=e.number,r=e.onInputValue,i=e.onSubmit;return Object(p.jsxs)("form",{className:"Form",children:[Object(p.jsxs)("label",{className:"Label",children:["Name",Object(p.jsx)("input",{id:t,className:"Input",value:n,onChange:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:"Label",children:["Number",Object(p.jsx)("input",{id:t,className:"Input",value:a,onChange:r,type:"tel",name:"number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:"Button",type:"submit",onClick:i,children:"Add contact"})]})};h.protoTypes={id:j.a.string.isRequired,name:j.a.string.isRequired,number:j.a.string.isRequired};var f=h,O=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",number:""},e.onInputValue=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(p.jsx)(f,{id:this.nameInputId,name:t,number:n,onInputValue:this.onInputValue,onSubmit:this.onSubmit})}}]),n}(a.Component),v=(n(19),function(e){var t=e.contacts,n=e.filteredContacts,a=e.onSubmit,r=[];return r=n||t,Object(p.jsx)("section",{className:"Contacts",children:Object(p.jsx)("ul",{className:"ContactsList",children:r.map((function(e){var t=e.id,n=e.name,r=e.number;return Object(p.jsxs)("li",{className:"Item",children:[Object(p.jsxs)("span",{className:"Name",children:[n,":"]}),Object(p.jsx)("span",{className:"Number",children:r}),Object(p.jsx)("button",{className:"ButtonDelete",type:"submit",onClick:a,id:t,children:"Delete"})]},t)}))})})});v.protoTypes={contacts:j.a.arrayOf(j.a.shape({id:j.a.string.isRequired,name:j.a.string.isRequired,number:j.a.string.isRequired})).isRequired,filteredContacts:j.a.arrayOf(j.a.shape({id:j.a.string.isRequired,name:j.a.string.isRequired,number:j.a.string.isRequired})).isRequired,renderContacts:j.a.arrayOf(j.a.shape({id:j.a.string.isRequired,name:j.a.string.isRequired,number:j.a.string.isRequired})).isRequired};var C=v,g=(n(20),function(e){var t=e.onInputFilter;return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"FindTitle",children:"Find contacts by name"}),Object(p.jsx)("input",{className:"InputFilter",onChange:t,type:"text",name:"filter"})]})}),x=n(25),N=(n(21),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:""},e.addContact=function(t){var n=t.name,a=t.number,r={id:Object(x.a)(),name:n,number:a};if(""!==n&&""!==a){if(e.state.contacts.map((function(e){return e.name})).includes(r.name))return void alert("Contact already exist");e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(c.a)(t))}}))}},e.deleteContact=function(t){t.preventDefault();var n=t.currentTarget.id,a=e.state.contacts.filter((function(e){return e.id!==n}));e.setState({contacts:Object(c.a)(a)})},e.onInputFilter=function(t){var n=t.currentTarget.value,a=e.state.contacts;console.log(a);var r=e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(n)}));e.setState({filteredContacts:Object(c.a)(r)})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filteredContacts,a=e.name;return console.log(t),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"Title",children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.addContact}),Object(p.jsx)("h2",{className:"Title",children:"Contacts"}),Object(p.jsx)(g,{onInputFilter:this.onInputFilter}),Object(p.jsx)(C,{contacts:t,filteredContacts:n,name:a,onSubmit:this.deleteContact})]})}}]),n}(a.Component));n(22);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f44ea946.chunk.js.map