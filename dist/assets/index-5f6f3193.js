import{a as V,t as S,u as we,b as Y,s as me,e as ue,c as pe,d as he,f as xe,g as Se,r as t,h as ye,j as e,F as $e,i as ve,k as Pe,l as be,D as Ne,m as De,S as p,n as Ee,o as Ce,p as Te}from"./vendor-fe8b2466.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function f(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function h(o){if(o.ep)return;o.ep=!0;const a=f(o);fetch(o.href,a)}})();const je="modulepreload",Oe=function(i){return"/"+i},_e={},$=function(r,f,h){if(!f||f.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(f.map(a=>{if(a=Oe(a),a in _e)return;_e[a]=!0;const m=a.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(!!h)for(let O=o.length-1;O>=0;O--){const l=o[O];if(l.href===a&&(!m||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":je,m||(v.as="script",v.crossOrigin=""),v.href=a,document.head.appendChild(v),m)return new Promise((O,l)=>{v.addEventListener("load",O),v.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>r()).catch(a=>{const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=a,window.dispatchEvent(m),!m.defaultPrevented)throw a})},ke="_container_1vdz2_1",Re="_dashboard_1vdz2_33",Ie="_dashboardHead_1vdz2_47",Le="_head_1vdz2_61",Ae="_durationButton_1vdz2_99",We="_lightMode_1vdz2_117",Fe="_cards_1vdz2_117",Ve="_darkMode_1vdz2_133",ze="_card1_1vdz2_151",Me="_card2_1vdz2_171",Be="_card3_1vdz2_191",Ue="_card4_1vdz2_213",Qe="_cardHead_1vdz2_297",Ye="_cardAmount_1vdz2_331",He="_container2_1vdz2_439",Ge="_cardHeadLight_1vdz2_1151",Ke="_cardAmountLight_1vdz2_1159",qe="_switchIcon_1vdz2_1167",j={container:ke,dashboard:Re,dashboardHead:Ie,head:Le,durationButton:Ae,lightMode:We,cards:Fe,darkMode:Ve,card1:ze,card2:Me,card3:Be,card4:Ue,cardHead:Qe,cardAmount:Ye,container2:He,cardHeadLight:Ge,cardAmountLight:Ke,switchIcon:qe},Je="_container_nli5c_3",Xe="_title_nli5c_27",Ze="_cards_nli5c_49",et="_card_nli5c_49",tt="_arrowIcon_nli5c_107",at="_durationButton_nli5c_131",st="_lightMode_nli5c_151",ot="_dateFilter_nli5c_169",nt="_officefilter_nli5c_277",it="_boldOption_nli5c_377",ct="_topContainer_nli5c_465",rt="_darkMode_nli5c_489",lt="_dateRangePicker_nli5c_761",g={container:Je,"rs-picker-toggle-textbox":"_rs-picker-toggle-textbox_nli5c_19","rs-stack-item":"_rs-stack-item_nli5c_21","theme2-container":"_theme2-container_nli5c_23",title:Xe,cards:Ze,card:et,arrowIcon:tt,durationButton:at,lightMode:st,dateFilter:ot,officefilter:nt,boldOption:it,topContainer:ct,darkMode:rt,dateRangePicker:lt};const ge=i=>{if(!i)return"";const r=i.getFullYear(),f=String(i.getMonth()+1).padStart(2,"0"),h=String(i.getDate()).padStart(2,"0");return`${r}-${f}-${h}`};async function dt(i,r,f,h){try{let o=await V.get(`http://115.124.120.251:5064/api/v1/dashboard/sales_list/${ge(i)}/${ge(r)}/${f}/${h}`);const{data:a}=o;return a}catch(o){console.log(o)}}const mt=S.lazy(()=>$(()=>import("./StatisticsChart-bd186731.js"),["assets/StatisticsChart-bd186731.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-2af61519.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/StatisticsChart-5ea32f12.css"])),ut=S.lazy(()=>$(()=>import("./StatisticsChart2-231c7eb4.js"),["assets/StatisticsChart2-231c7eb4.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-2af61519.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/StatisticsChart2-088722a5.css"])),pt=S.lazy(()=>$(()=>import("./OrdersPieChart-4ca55ab7.js"),["assets/OrdersPieChart-4ca55ab7.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-2af61519.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/OrdersPieChart-6ea8c40b.css"])),ft=S.lazy(()=>$(()=>import("./SalesCustomer-477a751c.js"),["assets/SalesCustomer-477a751c.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-2af61519.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/SalesCustomer-5b24a586.css"])),ht=S.lazy(()=>$(()=>import("./SalesProductStacked-af957179.js"),["assets/SalesProductStacked-af957179.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-2af61519.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/SalesProductStacked-93b57222.css"])),xt=S.lazy(()=>$(()=>import("./PaymentMode-208794a2.js"),["assets/PaymentMode-208794a2.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-2af61519.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/PaymentMode-d4f9808e.css"])),yt=S.lazy(()=>$(()=>import("./NewExCustomer-ae8a79e7.js"),["assets/NewExCustomer-ae8a79e7.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-2af61519.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/SalesCustomer-5b24a586.css"])),_t=S.lazy(()=>$(()=>import("./NewExCustomerBar-d385f966.js"),["assets/NewExCustomerBar-d385f966.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-2af61519.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/SalesCustomer-5b24a586.css"])),gt=({themeMode:i,officeId:r,adminStatus:f,userId:h,userOfficeName:o})=>{const{t:a}=we(),m=[{label:a("Today"),value:[new Date,new Date],placement:"left"},{label:a("Yesterday"),value:[Y(new Date,-1),Y(new Date,-1)],placement:"left"},{label:a("This week"),value:[me(new Date),ue(new Date)],placement:"left"},{label:a("Last 7 days"),value:[pe(new Date,6),new Date],placement:"left"},{label:a("Last 30 days"),value:[pe(new Date,29),new Date],placement:"left"},{label:a("This month"),value:[he(new Date),new Date],placement:"left"},{label:a("Last month"),value:[he(xe(new Date,-1)),Se(xe(new Date,-1))],placement:"left"},{label:a("This year"),value:[new Date(new Date().getFullYear(),0,1),new Date],placement:"left"},{label:a("Last year"),value:[new Date(new Date().getFullYear()-1,0,1),new Date(new Date().getFullYear(),0,0)],placement:"left"},{label:a("Last week"),closeOverlay:!1,value:s=>{const[c=new Date]=s||[];return[Y(me(c,{weekStartsOn:0}),-7),Y(ue(c,{weekStartsOn:0}),-7)]},appearance:"default"},{label:a("Next week"),closeOverlay:!1,value:s=>{const[c=new Date]=s||[];return[Y(me(c,{weekStartsOn:0}),7),Y(ue(c,{weekStartsOn:0}),7)]},appearance:"default"}],[d,z]=t.useState([ye(pe(new Date,6)),ye(new Date)]),[v,O]=t.useState([]),[l,H]=t.useState(r),[x,G]=t.useState(f),[M,A]=t.useState([]),[K,q]=t.useState([]),[W,J]=t.useState([]),[P,k]=t.useState(!0),[n,ae]=t.useState(""),[b,se]=t.useState([]),[R,B]=t.useState(!0),[de,oe]=t.useState([]),[I,X]=t.useState(r),[Z,ne]=t.useState(""),[N,ie]=t.useState(""),[F,U]=t.useState(!0),[w,ee]=t.useState(!0),[L,ce]=t.useState([]),[D,E]=t.useState(!0);t.useEffect(()=>{(async()=>{try{if(h&&r){const _=await(await V.get(`http://115.124.120.251:5064/api/v1/dashboard/dropdown_list/${h}`)).data;if(_){ae(o),ie(o),H(r),G(f),X(r),O(_);let T=[];_.map(C=>{T.push({officeId:C.OfficeId,officeName:C.OfficeName,officeType:C.OfficeTypeName})}),A(T.filter(C=>C.officeType==="Company")),q(T.filter(C=>C.officeType==="Wholesale Pumps")),J(T.filter(C=>C.officeType==="Retail Pumps")),oe({officeId:r,adminStatus:f,userOfficeName:o})}}}catch(c){console.log("Error fetching office data:",c)}})()},[h,r,f]),t.useEffect(()=>{l&&re(),te(l,x)},[l,d,x]);const re=async()=>{B(!0);let s=await dt(d[0],d[1],l,x);s&&(se(s),B(!1))},le=async s=>{U(!0),s===null?z([null,null]):(B(!0),z(s))},y=async s=>{const c=s.target.selectedOptions[0];ne({state:!1,Ovalue:s.target.value});const _=c.getAttribute("data-isadmin");H(s.target.value),G(_),ie(s.target.selectedOptions[0].getAttribute("data-officename"))},u=(s,c)=>window.innerWidth>500||s.length<=c?s:s.substring(0,c)+"...";async function te(s,c){const _=Q(d[0]),T=Q(d[1]);if(s!==void 0&&c!==void 0){E(!0);const C=`http://115.124.120.251:5064/api/v1/dashboard/customer_list/${_}/${T}/${s}/${c}`,fe=await(await V.get(C)).data;fe&&(ce(fe),E(!1))}}const Q=s=>{if(!s)return"";const c=s.getFullYear(),_=String(s.getMonth()+1).padStart(2,"0"),T=String(s.getDate()).padStart(2,"0");return`${c}-${_}-${T}`};return e.jsxs("div",{className:`${g.container} ${i==="dark"?"theme-container":"theme2-container"} pb-5`,children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-0",children:[e.jsxs("div",{className:`fs-${window.innerWidth<=768?3:2} mx-sm-0 mx-md-3 fw-bold noselect`,children:[e.jsx("span",{className:"me-2 ms-md-1  ms-2 text-primary",children:e.jsx($e,{style:{cursor:"pointer"},onClick:()=>ee(!w)})})," ",a("Sales Overview")]}),e.jsxs("button",{className:"btn btn-primary btn-lg mx-2 d-flex align-items-center shadow border-2 border-white",type:"submit",onClick:()=>k(!P),children:[e.jsx("span",{className:"d-flex",children:P?e.jsx(ve,{style:{fontSize:"1.4rem",marginRight:window.innerWidth>500?"4px":"0px"}}):e.jsx(Pe,{style:{fontSize:"1.2rem",marginRight:window.innerWidth>500?"8px":"0px"}})}),"  ",window.innerWidth>500?a(P?"Close":"Filter"):""]})]}),e.jsx("div",{style:{visibility:P?"visible":"hidden",opacity:P?1:0,height:P?window.innerWidth>=768?"85px":"130px":0,marginBottom:P?"10px":0},className:`${g.topContainer} ${i==="dark"?g.darkMode:g.lightMode}`,children:e.jsxs("div",{className:"row d-flex justify-content-start flex-wrap align-items-center mx-0 mx-sm-2 mx-md-0 w-100",style:{width:"100% !important"},children:[e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center pw-md-0 mx-0 ",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3  ms-1 ms-lg-2",children:e.jsx(be,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsx(Ne,{ranges:m,size:"lg",showOneCalendar:!0,style:{color:"black",width:"100%"},value:d,onChange:le,appearance:"default",className:`${g.dateRangePicker}`})]}),e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center mx-0",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3 ms-1 ms-lg-2 mt-1",children:e.jsx(De,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsxs("select",{value:Z.state?Z.Ovalue:null,className:"form-select form-select-lg","aria-label":"Default select example",id:"office",onChange:y,style:{paddingBottom:"4px !important",paddingTop:"4px !important"},children:[M.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("option",{value:I,"data-officename":n,"data-isretail":"-1","data-isadmin":"6",className:`${g.boldOption}`,children:[a("Entities"),"(",u(n,10),")"]})," "]}):"",M.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:I,"data-officename":n,"data-isretail":"0","data-isadmin":"4",className:`${g.boldOption}`,children:["  ",a("Companies"),"(",u(n,10),")"]})}):"",M.map(s=>e.jsxs("option",{value:s.officeId,"data-officename":s.officeName,"data-isadmin":"5",className:`${g.optionGroup}`,children:["      ",u(s.officeName,20)]},s.officeId)),K.length>1||W.length>1?e.jsxs(e.Fragment,{children:[" ",e.jsxs("option",{value:I,"data-officename":n,"data-isretail":"-1","data-isadmin":"1",className:`${g.boldOption}`,children:["  ",a("Pumps"),"(",u(n,10),")"]})]}):"",K.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:I,"data-officename":n,"data-isretail":"0","data-isadmin":"3",className:`${g.boldOption}`,children:["   ",a("Wholesale Pumps")]})}):"",K.map(s=>e.jsxs("option",{value:s.officeId,"data-officename":s.officeName,"data-isadmin":"0",className:`${g.optionGroup}`,children:["      ",u(s.officeName,20)]},s.officeId)),W.length>0?e.jsxs("option",{value:I,"data-officename":n,"data-isretail":"1","data-isadmin":"2",className:`${g.boldOption}`,children:["   ",a("Retail Pumps")]}):"",W.map(s=>e.jsxs("option",{value:s.officeId,"data-officename":s.officeName,"data-isadmin":"0",className:`${g.optionGroup}`,children:["      ",s.officeName]},s.officeId))]})]})]})}),e.jsx("div",{className:`${window.innerWidth>550?"container-fluid":""}`,children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 col-lg-8",children:e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(mt,{selectedRange:d,themeMode:i,selectedOffice:l,isAdmin:x,alldata:b,isLoading:R,officeName:N,showGraph:w})})}),e.jsx("div",{className:"col-md-12 col-lg-4",children:e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(pt,{selectedRange:d,themeMode:i,selectedOffice:l,isAdmin:x,alldata:b,isLoading:R,officeName:N,showGraph:w})})}),e.jsx("div",{className:"col-md-12 col-lg-6 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(ft,{selectedRange:d,themeMode:i,selectedOffice:l,isAdmin:x,officeName:N,alldata:b,isLoading:R,showGraph:w})})}),e.jsx("div",{className:"col-md-12 col-lg-6 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(ut,{selectedRange:d,themeMode:i,selectedOffice:l,isAdmin:x,alldata:b,isLoading:R,setSelectedOfficeName:ae,showGraph:w,selectedOfficeNameLocal:N,setSelectedOfficeNameLocal:ie,SelectedOfficeName:n,setSelectedOffice:H,setIsAdmin:G,setCompanies:A,setWholesales:q,setRetails:J,originallist:de,setOfficeIdLocal:X,officeIdLocal:I,setOptionvalue:ne})})}),e.jsx("div",{className:"col-md-12 col-lg-8 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(ht,{selectedRange:d,themeMode:i,selectedOffice:l,isAdmin:x,officeName:N,alldata:b,isLoading:R,showGraph:w,setSelectedRange:z,isDateRangeActive:F,setIsDateRangeActive:U})})}),e.jsx("div",{className:"col-md-12 col-lg-4 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(xt,{selectedRange:d,themeMode:i,selectedOffice:l,isAdmin:x,officeName:N,alldata:b,isLoading:R,showGraph:w})})}),e.jsx("div",{className:"col-md-12 col-lg-4 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(yt,{selectedRange:d,themeMode:i,selectedOffice:l,isAdmin:x,officeName:N,newExData:L,isLoading:D,showGraph:w})})}),e.jsx("div",{className:"col-md-12 col-lg-8 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(_t,{selectedRange:d,themeMode:i,selectedOffice:l,isAdmin:x,officeName:N,newExData:L,isLoading:D,showGraph:w})})})]})})]})},wt=S.lazy(()=>$(()=>import("./UserCard-f5d78eb2.js"),["assets/UserCard-f5d78eb2.js","assets/vendor-fe8b2466.js"])),St=S.lazy(()=>$(()=>import("./OfficeCard-7cc06155.js"),["assets/OfficeCard-7cc06155.js","assets/vendor-fe8b2466.js"])),$t=S.lazy(()=>$(()=>import("./SalesCard-4ee0cd56.js"),["assets/SalesCard-4ee0cd56.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js"])),vt=S.lazy(()=>$(()=>import("./ExpenseCard-b030bffe.js"),["assets/ExpenseCard-b030bffe.js","assets/vendor-fe8b2466.js","assets/index-e2efe08c.js"])),Pt=()=>{const r=new URLSearchParams(window.location.search).get("theme")||"light",{t:f,i18n:h}=we();r==="light"?(document.documentElement.style.setProperty("--rs-body","rgb(210 210 210)"),document.documentElement.style.setProperty("--text-color","#282829d4"),document.documentElement.style.setProperty("--option-color","white"),document.documentElement.style.setProperty("--backgroundOverlay","rgb(249 249 249 / 81%)"),document.documentElement.style.setProperty("--bs-table-bg","#ffffff00")):(document.documentElement.style.setProperty("--rs-body","#111111"),document.documentElement.style.setProperty("--text-color","white"),document.documentElement.style.setProperty("--option-color","#111111"),document.documentElement.style.setProperty("--backgroundOverlay","#1a1c2db8"),document.documentElement.style.setProperty("--bs-table-bg","#00000000"));const[o,a]=t.useState(0),[m,d]=t.useState(0),[z,v]=t.useState(0),[O,l]=t.useState(0),[H,x]=t.useState(0),[G,M]=t.useState(0),A=r,[K,q]=t.useState(""),[W,J]=t.useState(""),[P,k]=t.useState(""),[n,ae]=t.useState(window.innerWidth),[b,se]=t.useState({}),[R,B]=t.useState(""),[de,oe]=t.useState(0),[I,X]=t.useState(0),[Z,ne]=t.useState([]),N=()=>{ae(window.innerWidth)};return t.useEffect(()=>(window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)}),[]),t.useEffect(()=>{(async()=>{try{const F=new URLSearchParams(window.location.search),U=F.get("userId"),w=F.get("jwtToken");let ee="";if(w&&(ee=JSON.parse(atob(w.split(".")[1]))),h.changeLanguage(F.get("lang")||"en"),U){q(U);const L=`http://115.124.120.251:5059/api/Auth/User/${U}`,D=await(await V.get(L)).data;J(D),B(D.officeName),D.roleName==="CompanyAdmin"?k(6):(D.roleName,k(0));const re=`http://115.124.120.251:5064/api/v1/dashboard/card_details_list/${D.officeId}/${D.roleName==="PumpUser"||D.roleName==="CompanyAdmin"?1:0}`,y=await(await V.get(re)).data;se(y);const u=y.userCount||[],te=y.officeCount||[],Q=y.incomeDetails.total,s=y.incomeDetails.count,c=y.expenseDetails.total,_=y.expenseDetails.count;X(y.incomeDetailsCurrentDay.total),oe(y.expenseDetailsCurrentDay.total),ne(y.graph1),a(u),d(te),v(Q),l(c),x(s),M(_)}else if(ee){const L=ee.sub;if(L){q(L);const ce=`http://115.124.120.251:5059/api/Auth/User/${L}`,E=await(await V.get(ce)).data;J(E),B(E.officeName),E.roleName==="CompanyAdmin"?k(6):(E.roleName,k(0));const le=`http://115.124.120.251:5064/api/v1/dashboard/card_details_list/${E.officeId}/${E.roleName==="PumpUser"||E.roleName==="CompanyAdmin"?1:0}`,u=await(await V.get(le)).data;se(u);const te=u.userCount||[],Q=u.officeCount||[],s=u.incomeDetails.total,c=u.incomeDetails.count,_=u.expenseDetails.total,T=u.expenseDetails.count;X(u.incomeDetailsCurrentDay.total),oe(u.expenseDetailsCurrentDay.total),a(te),d(Q),v(s),l(_),x(c),M(T)}}}catch(F){console.log("Error fetching data:",F)}})()},[]),e.jsx("div",{className:`${j.container} ${A==="dark"?j.darkMode:j.lightMode} ${j.scrollableContainer}`,children:e.jsxs("div",{className:`${j.dashboard} `,children:[e.jsx("div",{className:`${j.dashboardHead} ${j.container2}  ${A==="dark"?"theme-container":"theme2-container"}`,style:{minWidth:"100%"},children:e.jsxs("div",{className:`${j.cards} mb-1 ${A==="dark"?j.darkMode:j.lightMode}`,children:[e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:b?e.jsx(wt,{userCountData:o}):e.jsx(p,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:b?e.jsx(St,{officeCountData:m}):e.jsx(p,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:b?e.jsx($t,{totalIncome:z,countIncome:H,todaySales:I,officeId:W.officeId,adminStatus:P,salesCardData:Z}):e.jsx(p,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(t.Suspense,{fallback:e.jsx(p,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:b?e.jsx(vt,{totalExpense:O,countExpense:G,todayExpense:de,officeId:W.officeId,adminStatus:P,expenseCardData:Z}):e.jsx(p,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})})]})}),e.jsx(gt,{themeMode:A,officeId:W.officeId,adminStatus:P,userId:K,userOfficeName:R})]})})};const bt=()=>e.jsx("div",{id:"dashboard",children:e.jsx(Pt,{})});const Nt="Users",Dt="Office",Et="Sales",Ct="Expense",Tt="days",jt="CompanyAdmin",Ot="PumpUser",kt="PumpAdmin",Rt="Company",It="Filter",Lt="Close",At="Entities",Wt="Companies",Ft="Pumps",Vt="Today",zt="Yesterday",Mt="Total",Bt="Period",Ut="Quantity",Qt="to",Yt="Product",Ht="Rows",Gt="Sale",Kt="Qty",qt="of",Jt="Name",Xt="Mobile",Zt="Vehicle",ea="Top",ta="Visit",aa="Payment",sa="Count",oa="Card",na="UPI",ia="Cash",ca="NetBanking",ra={Users:Nt,Office:Dt,Sales:Et,Expense:Ct,days:Tt,CompanyAdmin:jt,PumpUser:Ot,PumpAdmin:kt,Company:Rt,"Retail Pumps":"Retail Pumps","Wholesale Pumps":"Wholesale Pumps","Sales Overview":"Sales Overview","Sales-Expense":"Sales-Expense","Product Volume":"Product Volume","Product Quantity":"Product Quantity","Total Sales by Business Entity":"Total Sales by Business Entity","Average Sales":"Average Sales",Date:"Date",Filter:It,Close:Lt,"No office data available":"No office data available","No user data available":"No user data available","Total Sales":"Total Sales","Total Qty":"Total Qty","View Table":"View Table","View Graph":"View Graph","Export to Excel":"Export to Excel","Export to PDF":"Export to PDF",Entities:At,Companies:Wt,Pumps:Ft,Today:Vt,Yesterday:zt,"This week":"This week","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","This month":"This month","Last month":"Last month","This year":"This year","Last year":"Last year","Last week":"Last week","Next week":"Next week",Total:Mt,Period:Bt,"Sales-Expense Summary":"Sales-Expense Summary","Product Wise Summary Data":"Product Wise Summary Data","Product Name":"Product Name","Office Name":"Office Name",Quantity:Ut,to:Qt,Product:Yt,"No Data Found":"No Data Found",Rows:Ht,"Total Sale":"Total Sale","Product Wise":"Product Wise",Sale:Gt,Qty:Kt,of:qt,"Top Customers":"Top Customers",Name:Jt,Mobile:Xt,Vehicle:Zt,Top:ea,Visit:ta,"Sales (Day Wise)":"Sales (Day Wise)","Sales (Month Wise)":"Sales (Month Wise)","Sales (Year Wise)":"Sales (Year Wise)","Payment Mode":"Payment Mode",Payment:aa,Count:sa,Card:oa,UPI:na,Cash:ia,NetBanking:ca},la="उपयोगकर्ता",da="कार्यालय",ma="बिक्री",ua="खर्च",pa="दिन",fa="कंपनी प्रशासक",ha="पंप उपयोगकर्ता",xa="पंप व्यवस्थापक",ya="कंपनी",_a="फ़िल्टर",ga="बंद करें",wa="संस्थान",Sa="कंपनियाँ",$a="पंप",va="आज",Pa="कल",ba="कुल",Na="अवधि",Da="मात्रा",Ea="से",Ca="उत्पाद",Ta="पंक्तियाँ",ja="बिक्री",Oa="मात्रा",ka="की",Ra="नाम",Ia="मोबाइल",La="वाहन",Aa="शीर्ष",Wa="यात्रा",Fa="भुगतान",Va="गणना",za="कार्ड",Ma="यूपीआई",Ba="नकद",Ua="नेट बैंकिंग",Qa={Users:la,Office:da,Sales:ma,Expense:ua,days:pa,CompanyAdmin:fa,PumpUser:ha,PumpAdmin:xa,Company:ya,"Retail Pumps":"खुदरा पंप","Wholesale Pumps":"थोक पंप","Sales Overview":"बिक्री अवलोकन","Sales-Expense":"बिक्री-खर्च","Product Volume":"उत्पाद आयतन","Product Quantity":"उत्पाद मात्रा","Total Sales by Business Entity":"व्यवसायिक एकाधिकारी द्वारा कुल बिक्री","Average Sales":"औसत बिक्री",Date:"तारीख",Filter:_a,Close:ga,"No office data available":"कोई कार्यालय डेटा उपलब्ध नहीं है","No user data available":"कोई उपयोगकर्ता डेटा उपलब्ध नहीं है","Total Sales":"कुल बिक्री","Total Qty":"कुल मात्रा","View Table":"टेबल देखें","View Graph":"ग्राफ़ देखें","Export to Excel":"एक्सेल में निर्यात करें","Export to PDF":"पीडीएफ में निर्यात करें",Entities:wa,Companies:Sa,Pumps:$a,Today:va,Yesterday:Pa,"This week":"इस सप्ताह","Last 7 days":"पिछले 7 दिन","Last 30 days":"पिछले 30 दिन","This month":"इस महीने","Last month":"पिछले महीने","This year":"इस साल","Last year":"पिछले साल","Last week":"पिछले सप्ताह","Next week":"अगले सप्ताह","Sales-Expense Summary":"बिक्री-व्यय सारांश","Sales-Expense Summary Data":"बिक्री-व्यय सारांश डेटा",Total:ba,"Sub Total":"उप कुल","Total Expenses":"कुल व्यय","Total Profit":"कुल लाभ",Period:Na,"Product Name":"उत्पाद का नाम","Office Name":"कार्यालय का नाम",Quantity:Da,to:Ea,Product:Ca,"No Data Found":"कोई डेटा नहीं मिला",Rows:Ta,"Product Wise Summary Data":"उत्पाद वार संक्षिप्त आंकड़े","Total Sale":"कुल बिक्री","Product Wise":"उत्पाद वार",Sale:ja,Qty:Oa,of:ka,"Top Customers":"शीर्ष ग्राहक",Name:Ra,Mobile:Ia,Vehicle:La,Top:Aa,Visit:Wa,"Sales (Day Wise)":"दिन के आधार पर बिक्री","Sales (Month Wise)":"महीने के आधार पर बिक्री","Sales (Year Wise)":"वर्ष के आधार पर बिक्री","Payment Mode":"भुगतान मोड",Payment:Fa,Count:Va,Card:za,UPI:Ma,Cash:Ba,NetBanking:Ua},Ya="ব্যবহারকারী",Ha="অফিস",Ga="বিক্রয়",Ka="ব্যয়",qa="দিন",Ja="কোম্পানি প্রশাসক",Xa="পাম্প ব্যবহারকারী",Za="পাম্প প্রশাসক",es="কোম্পানি",ts="ফিল্টার",as="বন্ধ করুন",ss="ইণ্টিটি",os="কোম্পানি",ns="পাম্প",is="আজ",cs="গতকাল",rs="মোট",ls="সময়কাল",ds="পরিমাণ",ms="থেকে",us="পণ্য",ps="সারি",fs="বিক্রি",hs="পরিমাণ",xs="এর",ys="নাম",_s="মোবাইল",gs="যানবাহন",ws="শীর্ষ",Ss="দর্শন",$s="পেমেন্ট",vs="গণনা",Ps="কার্ড",bs="উপি",Ns="নগদ",Ds="নেটব্যাংকিং",Es={Users:Ya,Office:Ha,Sales:Ga,Expense:Ka,days:qa,CompanyAdmin:Ja,PumpUser:Xa,PumpAdmin:Za,Company:es,"Retail Pumps":"রিটেল পাম্প","Wholesale Pumps":"হোলসেল পাম্প","Sales Overview":"বিক্রয় ওভারভিউ","Sales-Expense":"বিক্রয়-ব্যয়","Product Volume":"প্রোডাক্ট আয়তন","Product Quantity":"প্রোডাক্ট পরিমাণ","Total Sales by Business Entity":"ব্যবসায় ইণ্টিটি অনুসারে মোট বিক্রয়","Average Sales":"গড় বিক্রয়",Date:"তারিখ",Filter:ts,Close:as,"No office data available":"কোন অফিস তথ্য পাওয়া যায়নি","No user data available":"কোন ব্যবহারকারী তথ্য পাওয়া যায়নি","Total Sales":"মোট বিক্রয়","Total Qty":"মোট পরিমাণ","View Table":"টেবিল দেখুন","View Graph":"গ্রাফ দেখুন","Export to Excel":"এক্সেলে রপ্তানি করুন","Export to PDF":"পিডিএফে রপ্তানি করুন",Entities:ss,Companies:os,Pumps:ns,Today:is,Yesterday:cs,"This week":"এই সপ্তাহ","Last 7 days":"গত ৭ দিন","Last 30 days":"গত ৩০ দিন","This month":"এই মাস","Last month":"গত মাস","This year":"এই বছর","Last year":"গত বছর","Last week":"গত সপ্তাহ","Next week":"পরবর্তী সপ্তাহ","Sales-Expense Summary":"বিক্রয়-ব্যয় সারাংশ","Sales-Expense Summary Data":"বিক্রয়-ব্যয় সারাংশ ডেটা",Total:rs,"Sub Total":"উপ মোট","Total Expenses":"মোট ব্যয়",Period:ls,"Product Name":"পণ্যের নাম","Office Name":"অফিসের নাম",Quantity:ds,to:ms,Product:us,"No Data Found":"কোন ডেটা পাওয়া যায়নি",Rows:ps,"Product Wise Summary Data":"পণ্য ভিত্তিক সংক্ষিপ্ত উপাদান","Total Sale":"মোট বিক্রি","Product Wise":"পণ্য অনুযায়ী",Sale:fs,Qty:hs,of:xs,"Top Customers":"শীর্ষ গ্রাহকগণ",Name:ys,Mobile:_s,Vehicle:gs,Top:ws,Visit:Ss,"Sales (Day Wise)":"দিনভিত্তিক বিক্রয়","Sales (Month Wise)":"মাসিক বিক্রয়","Sales (Year Wise)":"বার্ষিক বিক্রয়","Payment Mode":"পেমেন্ট মোড",Payment:$s,Count:vs,Card:Ps,UPI:bs,Cash:Ns,NetBanking:Ds},Cs={en:{translation:ra},hi:{translation:Qa},bn:{translation:Es}};Ee.use(Ce).init({resources:Cs,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});Te.createRoot(document.getElementById("root")).render(e.jsx(bt,{}));export{$ as _,j as c};
