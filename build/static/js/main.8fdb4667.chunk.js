(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var s=n(17),c=n.n(s),r=n(3),o=n(2),a=n(0),u=function(e){var t=e.person,n=e.setPersons,s=e.personService;return Object(a.jsxs)("div",{children:[t.name," ",t.number,Object(a.jsx)("button",{onClick:function(e){window.confirm("Delete ".concat(t.name,"?"))&&s.deletePerson(t.id).then((function(e){s.getAll().then((function(e){n(e)}))}))},children:"delete"})]})},i=function(e){var t=e.persons,n=e.setPersons,s=e.personService;return t.map((function(e,t){return Object(a.jsx)(u,{person:e,setPersons:n,personService:s},t)}))},l=n(8),f=function(e){var t=e.persons,n=e.setPersons,s=e.personService,c=e.setNotif,u=Object(o.useState)(""),i=Object(r.a)(u,2),f=i[0],j=i[1],b=Object(o.useState)(""),d=Object(r.a)(b,2),m=d[0],h=d[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=t.find((function(e){return e.name===f}));if(r){if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){var o=Object(l.a)(Object(l.a)({},r),{},{number:m});s.update(r.id,o).then((function(e){s.getAll().then((function(e){n(e)}))})).catch((function(e){404===e.response.status?(c({message:"Information of ".concat(o.name," has already been removed from server"),className:"errorNotif"}),setTimeout((function(){c({message:null,className:"successNotif"})}),5e3),s.getAll().then((function(e){n(e)}))):(c({message:e.response.data.error,className:"errorNotif"}),setTimeout((function(){c({message:null,className:"successNotif"})}),5e3))}))}}else{var a={name:f,number:m};s.create(a).then((function(e){n(t.concat(e)),c({message:"Added ".concat(a.name),className:"successNotif"}),setTimeout((function(){c({message:null,className:"successNotif"})}),5e3)})).catch((function(e){console.log(e.response),c({message:e.response.data.error,className:"errorNotif"}),setTimeout((function(){c({message:null,className:"successNotif"})}),5e3)}))}},children:[Object(a.jsxs)("div",{children:["name: ",Object(a.jsx)("input",{value:f,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsxs)("div",{children:["number: ",Object(a.jsx)("input",{value:m,onChange:function(e){return h(e.target.value)}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var t=e.setNewSearch,n=Object(o.useState)(""),s=Object(r.a)(n,2),c=s[0],u=s[1];return Object(a.jsxs)(a.Fragment,{children:["filter shown with ",Object(a.jsx)("input",{value:c,onChange:function(e){u(e.target.value),t(e.target.value)}})]})},b=n(4),d=n.n(b),m="/api/persons",h={getAll:function(){return d.a.get(m).then((function(e){return e.data}))},create:function(e){return d.a.post(m,e).then((function(e){return e.data}))},update:function(e,t){return d.a.put("".concat(m,"/").concat(e),t)},deletePerson:function(e){return d.a.delete("".concat(m,"/").concat(e))}},p=function(e){var t=e.notif;return null===t.message?null:Object(a.jsx)("div",{className:t.className,children:t.message})},O=(n(41),function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(o.useState)(""),u=Object(r.a)(c,2),l=u[0],b=u[1],d=Object(o.useState)({message:null,className:"successNotif"}),m=Object(r.a)(d,2),O=m[0],v=m[1],g=l?n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})):n;return Object(o.useEffect)((function(){h.getAll().then((function(e){s(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(p,{notif:O}),Object(a.jsx)(j,{setNewSearch:b}),Object(a.jsx)("h2",{children:"add a new"}),Object(a.jsx)(f,{persons:n,setPersons:s,personService:h,setNotif:v}),Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsx)(i,{persons:g,setPersons:s,personService:h})]})});c.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8fdb4667.chunk.js.map