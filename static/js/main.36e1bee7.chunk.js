(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=n(11),i=n(2),u=n(19);var l=n(3),b=n.n(l),m=n(0);function j(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],j=u[1],f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":j(a);break;default:return}},d=function(){o(""),j("")};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),r&&l?(e(r,l),d()):alert("Enter the name!")},children:[Object(m.jsxs)("label",{className:b.a.labelTitle,children:["Name:",Object(m.jsx)("input",{type:"text",name:"name",className:b.a.input,value:r,onChange:f})]}),Object(m.jsxs)("label",{className:b.a.labelTitle,children:["Phone:",Object(m.jsx)("input",{type:"text",name:"number",className:b.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The telephone number must contain numbers and may contain spaces, dashes, parentheses and may start with +",required:!0,value:l,onChange:f})]}),Object(m.jsx)("button",{type:"submit",className:b.a.button,children:"Add contact"})]})}var f=n(8),d=n.n(f),h=function(t){var e=t.filterValue,n=t.onFilter;return Object(m.jsx)("form",{className:d.a.form,children:Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",className:d.a.input,value:e,onChange:n})]})})},O=n(6),p=n.n(O),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{className:p.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(m.jsxs)("li",{className:p.a.item,children:[Object(m.jsxs)("p",{children:[a,": "]}),Object(m.jsx)("p",{children:c}),Object(m.jsx)("button",{type:"button",className:p.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})};n(9);function _(){var t=function(t,e){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(t)))&&void 0!==n?n:e})),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(r))}),[t,r]),[r,o]}("contacts",[]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],b=o[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"title",children:"Phonebook"}),Object(m.jsx)(j,{onSubmit:function(t,e){if(n.find((function(e){return e.name===t})))alert("".concat(t," is already in contacts"));else{var a={id:Object(u.a)(),name:t,number:e};c((function(t){return[a].concat(Object(s.a)(t))}))}}}),Object(m.jsx)("h2",{className:"title",children:"Contacts"}),Object(m.jsx)(h,{filterValue:l,onFilter:function(t){b(t.target.value)}}),Object(m.jsx)(x,{contacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})}o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__7fh0r",labelTitle:"ContactForm_labelTitle__OeCC1",input:"ContactForm_input__36Ya9",button:"ContactForm_button__1kCM0"}},6:function(t,e,n){t.exports={item:"ContactList_item__3a-dA",button:"ContactList_button__2vRFc"}},8:function(t,e,n){t.exports={form:"Filter_form__2Fwzx",input:"Filter_input__3dcPP"}},9:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.36e1bee7.chunk.js.map