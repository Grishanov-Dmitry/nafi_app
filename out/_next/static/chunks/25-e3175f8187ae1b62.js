(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{5242:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var i=n(791),o=n(3428),r=n(2265),a=n(7042),c=n(5600),l=n(5843),s=n(7927),d=n(6520),u=n(5702);function m(e){return(0,u.Z)("MuiDialogContent",e)}(0,d.Z)("MuiDialogContent",["root","dividers"]);let h=(0,d.Z)("MuiDialogTitle",["root"]);var f=n(7437);let p=["className","dividers"],v=e=>{let{classes:t,dividers:n}=e;return(0,c.Z)({root:["root",n&&"dividers"]},m,t)},x=(0,l.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.dividers&&t.dividers]}})(({theme:e,ownerState:t})=>(0,o.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${h.root} + &`]:{paddingTop:0}}));var b=r.forwardRef(function(e,t){let n=(0,s.Z)({props:e,name:"MuiDialogContent"}),{className:r,dividers:c=!1}=n,l=(0,i.Z)(n,p),d=(0,o.Z)({},n,{dividers:c}),u=v(d);return(0,f.jsx)(x,(0,o.Z)({className:(0,a.Z)(u.root,r),ownerState:d,ref:t},l))})},1558:function(e,t,n){"use strict";n.d(t,{C4:function(){return c},Pd:function(){return u},QL:function(){return d},WA:function(){return m},bK:function(){return s},v6:function(){return l}});var i=n(5567),o=n(8493),r=n(3471),a=n(1537);let c={name:"ФИО",organization:"Организация",position:"Должность",expertise:"Экспертиза",phone:"Телефон",phoneSecond:"Телефон доп",email:"Email",emailSecond:"Email доп",shareDisabled:"Переданы заказчиком",comment:"Комментарий",source:"Ресурс"},l=[{field:"name",headerName:"ФИО",width:200},{field:"organization",headerName:"Организация",width:130},{field:"position",headerName:"Должность",width:130},{field:"phone",headerName:"Телефон",width:130},{field:"phoneSecond",headerName:"Телефон доп",width:160},{field:"email",headerName:"Email",width:160},{field:"emailSecond",headerName:"Email доп",width:160},{field:"source",headerName:"Источник",width:160},{field:"shareDisabled",headerName:"Переданы заказчиком",width:160,renderCell:e=>{let{row:t}=e;return!0===t.shareDisabled?"Да":"Нет"}}],s={id:"",name:"",organization:"",position:"",expertise:"",phone:"",phoneSecond:"",email:"",emailSecond:"",shareDisabled:!1,source:"",comment:""},d={admin:"admin",user:"user"},u={active:"active",blocked:"blocked"},m=[{label:"контакты",href:"contacts",icon:i.Z,id:0},{label:"расширенный поиск",href:"search",icon:o.Z,id:1},{label:"учетные записи",href:"accounts",icon:r.Z,id:2},{label:"подборка",href:"collection",icon:a.Z,id:3}]},2077:function(e,t,n){"use strict";n.r(t),n.d(t,{SnackbarContext:function(){return F},default:function(){return L},useSnackbar:function(){return W}});var i=n(7437),o=n(3649),r=n.n(o),a=n(2265),c=n(2039),l=n(7070),s=n(4124),d=n(2750),u=n(3198),m=n(663),h=n(1267),f=n(1064),p=n(5456),v=n(4313);let x=(0,p.Z)("local"),b=(0,f.UY)({common:v.ZP}),g=(0,m.xC)({reducer:(0,h.OJ)({key:"root",storage:x,keyPrefix:"redux-",whitelist:[]},b),middleware:e=>e({serializableCheck:!1,immutableCheck:!1})});(0,h.p5)(g);let{dispatch:C}=g;function S(e){let{children:t}=e;return(0,i.jsx)(u.zt,{store:g,children:t})}var w=n(9045),N=n(2277),Z=n(9104),k=n(9050),j=n(6691),I=n.n(j),E=n(4033),D={src:"/src//_next/static/media/logo.e4ba892d.svg",height:593,width:1123,blurWidth:0,blurHeight:0};n(988);var z=n(1381),y=n(881),T=n(1396),A=n.n(T),O=n(1558);let P=()=>{let e=(0,z.T)(),t=(0,E.usePathname)();(0,a.useEffect)(()=>{let n=O.WA.find(e=>null==t?void 0:t.includes(e.href));void 0!==n&&e((0,v.r7)(n.id))},[]);let n=(0,z.C)(y.ru),o=(0,E.useRouter)();(0,a.useEffect)(()=>{n||o.push("/login")},[n]);let r=(0,z.C)(y.vW),c=(0,z.C)(y.fr),l=t=>{e((0,v.r7)(t))};return(0,i.jsxs)("header",{children:[(0,i.jsx)(I(),{width:"200",height:"200",src:D,alt:"Follow us on Twitter"}),(0,i.jsx)(w.Z,{value:c,children:O.WA.map((e,t)=>(0,i.jsx)(A(),{href:e.href,onClick:()=>{l(t)},children:(0,i.jsx)(N.Z,{label:e.label,icon:(0,i.jsx)(e.icon,{fontSize:"small"})})},e.label))}),(0,i.jsxs)("div",{className:"exitBlock",children:[(0,i.jsx)(k.Z,{color:"secondary",className:"exitButton",onClick:()=>{e((0,v.NF)(!1))},startIcon:(0,i.jsx)(Z.Z,{fontSize:"medium",htmlColor:"var(--black)"}),children:"Выход"}),(0,i.jsx)("p",{className:"userName",children:r})]})]})};n(3385);let F=(0,a.createContext)(void 0);function L(e){let{children:t}=e,[n,o]=(0,a.useState)(!1),[u,m]=(0,a.useState)(""),h=()=>{o(!1)};return(0,i.jsx)(S,{children:(0,i.jsx)("html",{lang:"en",children:(0,i.jsx)(F.Provider,{value:{snackbarOpen:n,snackbarMessage:u,handleSnackbarClose:h,handleOpenSnackbar:e=>{m(e),o(!0)}},children:(0,i.jsx)(s._,{dateAdapter:d.y,adapterLocale:"de",children:(0,i.jsxs)("body",{className:r().className,children:[(0,i.jsx)(c.Z,{open:n,autoHideDuration:3e3,onClose:h,children:(0,i.jsx)(l.Z,{onClose:h,severity:"success",sx:{width:"100%"},children:u})}),(0,i.jsx)(P,{}),t]})})})})})}let W=()=>{let e=(0,a.useContext)(F);if(void 0===e)throw Error("useSnackbar must be used within a SnackbarProvider");return e}},1381:function(e,t,n){"use strict";n.d(t,{C:function(){return r},T:function(){return o}});var i=n(3198);let o=()=>(0,i.I0)(),r=i.v9},4313:function(e,t,n){"use strict";n.d(t,{NF:function(){return c},Rr:function(){return u},ZP:function(){return p},LR:function(){return h},EA:function(){return s},QZ:function(){return l},r7:function(){return m},Tr:function(){return d},A4:function(){return f}});var i=n(663),o=JSON.parse('[{"id":"11111","name":"Василий Молодцов","organization":"InterStar","position":"Developer","expertise":"Frontend","phone":"+11 111 11 111","phoneSecond":"+22 222 22 222","email":"vasily@gmail.com","emailSecond":"vasilySecond@gmail.com","source":"contacts","comment":"Хороший специалист","shareDisabled":true},{"id":"22222","name":"Ольга  Хорошова","organization":"Молодец Солюшен","position":"Дизайнер","expertise":"UI/UX","phone":"+33 333 33 333","phoneSecond":"","email":"holha@gmail.com","emailSecond":"","source":"contacts","comment":"Отличный сотрудник","shareDisabled":false},{"id":"33333","name":"Dzmitry Some","organization":"BFS solution","position":"Engineer","expertise":"Cars","phone":"+37529 1111111","phoneSecond":"","email":"someEmail@.com","emailSecond":"","source":"contacts","comment":"Can work with him","shareDisabled":true},{"id":"44444","name":"Alex Some","organization":"BFS Global","position":"Engineer","expertise":"Cars","phone":"+37529 1111111","phoneSecond":"","email":"someEmail@.com","emailSecond":"","source":"contacts","comment":"Crazy person","shareDisabled":false}]');let r=(0,i.oM)({name:"common",initialState:{isLogged:!1,userName:"Тимур Аймалетдинов",contacts:o,activeContactId:null,collectionItems:[],activeTab:0,isOpenEmailCreate:!1},reducers:{setUserName(e,t){let{payload:n}=t;e.userName=n},changeLogIn(e,t){let{payload:n}=t;e.isLogged=n},setActiveContactId(e,t){let{payload:n}=t;e.activeContactId=n},saveNewContacts(e,t){let{payload:n}=t;e.contacts=[...e.contacts,...n]},setCollectionItems(e,t){let{payload:n}=t;e.collectionItems=n},clearCollectionItems(e){e.collectionItems=[]},deleteFromCollectionById(e,t){let{payload:n}=t;e.collectionItems=e.collectionItems.filter(e=>e.id!==n)},setActiveTab(e,t){let{payload:n}=t;e.activeTab=n},setIsOpenEmailCreate(e,t){let{payload:n}=t;e.isOpenEmailCreate=n}}}),{setUserName:a,changeLogIn:c,setActiveContactId:l,saveNewContacts:s,setCollectionItems:d,clearCollectionItems:u,setActiveTab:m,deleteFromCollectionById:h,setIsOpenEmailCreate:f}=r.actions;var p=r.reducer},881:function(e,t,n){"use strict";n.d(t,{Gc:function(){return s},K2:function(){return a},QG:function(){return c},fr:function(){return d},nm:function(){return l},ru:function(){return o},vW:function(){return r},vY:function(){return u}});let i=e=>e.common,o=e=>i(e).isLogged,r=e=>i(e).userName,a=e=>i(e).contacts,c=e=>i(e).activeContactId,l=e=>{let t=c(e);return a(e).find(e=>e.id===t)},s=e=>i(e).collectionItems,d=e=>i(e).activeTab,u=e=>i(e).isOpenEmailCreate},988:function(){},3385:function(){},7254:function(e,t,n){var i=n(2601),o=void 0!==i&&i.pid?i.pid.toString(36):"";function r(){var e=Date.now(),t=r.last||e;return r.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+o+r().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+o+r().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+r().toString(36)+(t||"")}}}]);