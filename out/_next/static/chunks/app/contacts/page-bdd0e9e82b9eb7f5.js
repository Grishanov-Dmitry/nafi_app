(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{67:function(){},2061:function(){},9326:function(e,n,l){Promise.resolve().then(l.bind(l,1183))},1183:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return O}});var a=l(7437),i=l(9050),t=l(3457),s=l(7254),o=l.n(s),r=l(7504);l(9262);var c=l(4313),d=l(1381),h=l(1558);let m=()=>{let e=(0,d.T)(),n=async n=>{let l=n.target.files[0];if(l){let n=new FileReader;n.onload=n=>{let l=new Uint8Array(n.target.result),a=r.ij(l,{type:"array"}),i=a.SheetNames[0],t=a.Sheets[i],s=r.P6.sheet_to_json(t,{header:1,defval:""}),d=[];s.forEach((e,n)=>{let l={...h.bK};0!==n&&(Object.keys(h.C4).forEach((n,a)=>{"shareDisabled"===n?l[n]="да"===e[a].toLowerCase():l[n]=e[a]}),l.id=o()(),l.source="contact",d.push(l))}),e((0,c.EA)(d))},n.readAsArrayBuffer(l)}};return(0,a.jsx)("div",{className:"addContactBlock",children:(0,a.jsxs)(t.Z,{spacing:2,paddingBottom:3,direction:"column",children:[(0,a.jsx)(i.Z,{size:"small",variant:"contained",onClick:()=>e((0,c.QZ)(o()())),children:"Добавить Контакт"}),(0,a.jsxs)("label",{style:{display:"inline-block",position:"relative"},children:[(0,a.jsx)(i.Z,{variant:"contained",component:"span",children:"Импортировать Контакты"}),(0,a.jsx)("input",{type:"file",style:{display:"none"},onChange:n})]})]})})};var x=l(2265),u=l(1975),p=l(4498),j=l(3027),f=l(5242),b=l(3226),v=l(2653),g=l(9245),y=l(182),Z=l(1469),C=l(5446),k=l(2834),w=l(1086),N=l.n(w),S=l(881);let _=[{label:"ФИО",name:"name"},{label:"Организация",name:"organization"},{label:"Должность",name:"position"},{label:"Экспертиза",name:"expertise"},{label:"Телефон",name:"phone"},{label:"Телефон 2",name:"phoneSecond"},{label:"Email",name:"email",type:"email"},{label:"Email 2",name:"emailSecond",type:"email"}],E=["name","email","phone"],R=()=>{let e=(0,d.C)(S.nm),n=(0,d.C)(S.QG),l=(0,d.T)();if(null===n)return null;let[t,s]=(0,x.useState)(null!=e?e:{id:n,name:"",organization:"",position:"",expertise:"",phone:"",phoneSecond:"",email:"",emailSecond:"",source:"",comment:"",shareDisabled:!1}),o=e=>{let{name:n,value:l}=e.target;s(e=>({...e,[n]:l}))};return(0,a.jsx)(j.Z,{maxWidth:"md",fullWidth:!0,open:!0,className:"p-1",children:(0,a.jsxs)(f.Z,{className:"p-7 flex flex-col",children:[(0,a.jsx)(b.Z,{variant:"h4",children:"Карточка эксперта"}),(0,a.jsx)(v.Z,{edge:"end",color:"inherit",onClick:()=>{l((0,c.QZ)(null))},"aria-label":"close",style:{position:"absolute",top:20,right:50},children:(0,a.jsx)(p.Z,{})}),(0,a.jsx)(g.Z,{display:"flex",flexWrap:"wrap",marginBottom:6,children:_.map(e=>{let{label:n,name:l,type:i="text"}=e;return(0,a.jsx)(u.Z,{className:N().textField,label:n,variant:"outlined",name:l,value:t[l],onChange:o,margin:"normal",type:i},l)})}),(0,a.jsx)(y.Z,{control:(0,a.jsx)(Z.Z,{checked:t.shareDisabled,onChange:e=>{s(n=>({...n,shareDisabled:e.target.checked}))},name:"hasReadRules",color:"primary"}),label:"Отметьте, если контакты эксперта были переданы Заказчиком и их нельзя использовать для других исследований"}),(0,a.jsx)(b.Z,{variant:"caption",children:"Укажите дополнительную информацию об эксперте, проекты, в которых он давал интервью, историю общения и другую информацию, которую в будущем можно учитывать при рекруте"}),(0,a.jsx)(C.u,{minRows:10,placeholder:"Комментарий",name:"comment",value:t.comment,onChange:o,style:{width:"100%",marginTop:"16px",padding:"8px",minHeight:"100px",border:"1px solid silver",borderRadius:"5px"}}),(0,a.jsxs)(k.Z,{className:"flex justify-between alain-center",children:[null!==e&&(0,a.jsx)(i.Z,{color:"secondary",children:"Delete"}),(0,a.jsx)(i.Z,{color:"primary",onClick:()=>{E.every(e=>t[e].length>0)&&(l((0,c.EA)([t])),l((0,c.QZ)(null)))},className:"ml-auto",children:"Save"})]})]})})};var A=l(6971),Q=l(3249),z=l(6521),D=l(2077);let T=()=>{let e=(0,d.T)(),[n,l]=(0,x.useState)([]),t=(0,d.C)(S.K2),s=[...h.v6,{field:"actions",type:"actions",width:80,getActions:n=>[(0,a.jsx)(A.u,{icon:(0,a.jsx)(z.Z,{}),label:"Изменить",onClick:()=>e((0,c.QZ)(n.id)),showInMenu:!0},12)]}],{handleOpenSnackbar:o}=(0,D.useSnackbar)();return(0,a.jsxs)("div",{className:"flex-1 w-full overflow-auto px-4 flex flex-col",children:[(0,a.jsx)(i.Z,{className:"ml-auto mb-5",variant:"contained",component:"span",onClick:()=>{e((0,c.Tr)(n)),o("В подборку добавлено контактов: ".concat(n.length," "))},children:"Добавить в подборку"}),(0,a.jsx)(Q._$,{rows:t,columns:s,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10],checkboxSelection:!0,onRowSelectionModelChange:e=>{l(t.filter(n=>e.includes(n.id)))}})]})},B=()=>(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Должность, экспертиза, продукт"}),(0,a.jsx)(u.Z,{label:"Поиск",variant:"outlined",name:"search",value:"",margin:"normal"}),(0,a.jsx)("h2",{className:"my-3 font-bold",children:"Что искать"}),_.map(e=>{let{label:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(Z.Z,{})," ",n]},n)}),(0,a.jsx)("h2",{className:"my-3 font-bold",children:"Где искать"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(Z.Z,{}),"База экспертов"]}),(0,a.jsx)(i.Z,{variant:"contained",children:"Найти"})]}),F=()=>null!==(0,d.C)(S.QG)?(0,a.jsx)(R,{}):(0,a.jsxs)("div",{className:"h-full flex",children:[(0,a.jsxs)("nav",{className:"p-3 w-44",children:[(0,a.jsx)(m,{}),(0,a.jsx)(B,{})]}),(0,a.jsx)(T,{})]});function O(){return(0,a.jsx)("div",{children:(0,a.jsx)(F,{})})}},9262:function(){},1086:function(e){e.exports={textField:"styles_textField__RjHb5"}}},function(e){e.O(0,[425,71,414,398,107,847,25,971,938,744],function(){return e(e.s=9326)}),_N_E=e.O()}]);