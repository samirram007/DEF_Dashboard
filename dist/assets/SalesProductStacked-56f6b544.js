import{_ as he}from"./index-e40c2807.js";import{r as p,u as We,M as Be,j as o,T as Te,Q as Pe,R as Ie,U as Le,V as K,i as Ee,B as qe,C as ze,G as Ae,H as He,I as Ge,a as q}from"./vendor-776b30b8.js";import{l as Ue}from"./ReactToastify-9380c2b8.js";import{k as Ve,Q as O,l as fe,f as Je,a as Qe}from"./NotoSansDevanagari-VariableFont_wdth_wght-cc11332b.js";import"./jspdf.es.min-4b9d738f.js";const Xe="_piechart_wa0ri_11",Ke="_chartContainer_wa0ri_23",Ze="_legendButtonContainer_wa0ri_49",Re="_legendButton_wa0ri_49",et="_codeBlockIcon_wa0ri_133",tt="_lightMode_wa0ri_191",at="_dateFilter_wa0ri_195",ot="_officefilter_wa0ri_351",nt="_topContainer_wa0ri_443",st="_darkMode_wa0ri_463",rt="_iconsContainer_wa0ri_631",lt="_icon_wa0ri_631",it="_exportOptions_wa0ri_715",ct="_exportOption_wa0ri_715",dt="_NoDataOverlay_wa0ri_861",ut="_tableContainer_wa0ri_993",ht="_table_wa0ri_993",ft="_summaryHeader_wa0ri_1029",gt="_periodHeader_wa0ri_1037",pt="_closeButton_wa0ri_1069",mt="_tableWrapper_wa0ri_1099",St="_loadingOverlay_wa0ri_1107",Dt="_loadingSpinner_wa0ri_1133",wt="_boldOption_wa0ri_1145",yt="_optionGroup_wa0ri_1155",g={piechart:Xe,chartContainer:Ke,"legend-text":"_legend-text_wa0ri_31",legendButtonContainer:Ze,legendButton:Re,codeBlockIcon:et,lightMode:tt,"label-text":"_label-text_wa0ri_191",dateFilter:at,officefilter:ot,topContainer:nt,darkMode:st,"theme-container":"_theme-container_wa0ri_473",iconsContainer:rt,icon:lt,exportOptions:it,exportOption:ct,NoDataOverlay:dt,tableContainer:ut,table:ht,summaryHeader:ft,periodHeader:gt,closeButton:pt,tableWrapper:mt,loadingOverlay:St,loadingSpinner:Dt,boldOption:wt,optionGroup:yt},vt=({echarts:ge,ReactECharts:pe,themeMode:x,selectedRange:c,selectedOffice:xt,showGraph:Z,isAdmin:bt,alldata:z,officeName:T,isLoading:R,setSelectedRange:P,isDateRangeActive:I,setIsDateRangeActive:ee})=>{p.useState([]);const[A,k]=p.useState(!1),H=p.useRef(null),G=p.useRef(null),U=p.useRef(null),{t:i}=We(),[V,J]=p.useState(!1),[j,F]=p.useState([]),[Y,L]=p.useState(!1),[h,M]=p.useState("Sales (Day Wise)"),[te,me]=p.useState([]),[ae,Se]=p.useState([]),[oe,De]=p.useState([]),[we,ye]=p.useState([]),[Q,ne]=p.useState([]),[xe,se]=p.useState([]),[re,be]=p.useState({}),[Fe,le]=p.useState(!0);p.useEffect(()=>{if(z.graph2){const t=z.graph2;le(!0);let e={},n=[],s=Array.from(new Set(t.flatMap(a=>a.lstproduct.map(l=>l.productId)))),r=Array.from(new Set(t.map(a=>a.requestedDate.split("-"))));const m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if(s.map(a=>{e[a]={productName:"",color:"",daySales:{},monthSales:{},yearSales:{}},r.map(l=>{e[a].yearSales[l[0]]="",e[a].monthSales[l[0]]=e[a].monthSales[l[0]]||{},e[a].monthSales[l[0]][m[parseInt(l[1])-1]]=""}),t.map(l=>{e[a].daySales[l.requestedDate]=""})}),t.map(a=>{n.push(a.requestedDate);const l=a.requestedDate;a.lstproduct.map(u=>{const w=u.color,d=u.productId,$=u.productName,W=u.totalSales;e[d].productName=$,e[d].color=w,e[d].daySales[l]=W.toFixed(2);const[b,de]=l.split("-"),B=new Date(l+"T00:00:00").toLocaleString("en-us",{month:"short"});e[d].monthSales[b]||(e[d].monthSales[b]={}),e[d].monthSales[b][B]||(e[d].monthSales[b][B]=0),e[d].monthSales[b][B]+=W,e[d].yearSales[b]||(e[d].yearSales[b]=0),e[d].yearSales[b]+=W})}),Object.values(e).length>0){let a=Object.keys(Object.values(e)[0].yearSales).map(S=>parseInt(S)),l=Object.keys(Object.values(e)[0].monthSales).flatMap(S=>Object.keys(Object.values(e)[0].monthSales[S]).map(u=>`${u} ${S}`));ne(l),se(a),l.length>=12||a.length>1?(I==!0||h=="Sales (Day Wise)")&&M("Sales (Year Wise)"):l.length>1&&(I==!0||h=="Sales (Day Wise)")&&M("Sales (Month Wise)")}else ne([]),se([]);be(e),ye(n);const D=t.flatMap((a,l)=>a.lstproduct.map(S=>({requestedDate:v(a.requestedDate),totalSales:parseFloat(S.totalSales),productName:S.productName})));Se([...D,{requestedDate:i("Total"),productName:"",totalSales:D.reduce((a,l)=>a+l.totalSales,0)}]);let y=Object.values(e).map(a=>({monthSales:a.monthSales,productName:a.productName})).flatMap(a=>{const l=a.productName;return Object.keys(a.monthSales).flatMap(u=>Object.keys(a.monthSales[u]).map(w=>({requestedDate:`${w} ${u}`,totalSales:a.monthSales[u][w],productName:l})))}).filter(a=>a.totalSales>0);y.sort((a,l)=>{const S=new Date(a.requestedDate),u=new Date(l.requestedDate);return S-u}),me([...y,{requestedDate:i("Total"),productName:"",totalSales:y.reduce((a,l)=>a+l.totalSales,0)}]);const f=Object.values(e).flatMap(a=>Object.entries(a.yearSales).map(l=>({requestedDate:l[0],productName:a.productName,totalSales:l[1]}))).filter(a=>a.totalSales>0);De([...f,{requestedDate:i("Total"),productName:"",totalSales:f.reduce((a,l)=>a+l.totalSales,0)}]),h==="Sales (Day Wise)"?F([...D,{requestedDate:i("Total"),productName:"",totalSales:D.reduce((a,l)=>a+l.totalSales,0)}]):h==="Sales (Month Wise)"?F([...y,{requestedDate:i("Total"),productName:"",totalSales:y.reduce((a,l)=>a+l.totalSales,0)}]):h==="Sales (Year Wise)"&&F([...f,{requestedDate:i("Total"),productName:"",totalSales:f.reduce((a,l)=>a+l.totalSales,0)}])}},[z]),p.useEffect(()=>{L(!Z)},[Z]);function ie(t,e){var n=parseInt(t.substring(1,3),16),s=parseInt(t.substring(3,5),16),r=parseInt(t.substring(5,7),16);n=parseInt(n*(100+e)/100),s=parseInt(s*(100+e)/100),r=parseInt(r*(100+e)/100),n=n<255?n:255,s=s<255?s:255,r=r<255?r:255,n=Math.round(n),s=Math.round(s),r=Math.round(r);var m=n.toString(16).length==1?"0"+n.toString(16):n.toString(16),D=s.toString(16).length==1?"0"+s.toString(16):s.toString(16),_=r.toString(16).length==1?"0"+r.toString(16):r.toString(16);return"#"+m+D+_}const _e={tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{formatter:function(t){return t[0].value[0]+"h"}}}},legend:{orient:"vertical",backgroundColor:x==="dark"?"#111111df":"rgb(249 249 249 / 97%)",left:"8px",top:"0",borderRadius:7,padding:10,show:V,shadowColor:"#ececec",borderColor:"rgba(57, 50, 50, 0.7)",borderWidth:1,itemGap:10,textStyle:{color:x==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=1496?12:14,padding:4},type:"scroll",scroll:{show:!0,orient:"horizontal"}},grid:{left:"3%",right:"4%",top:"10%",bottom:"3%",containLabel:!0},xAxis:{axisLabel:{rotate:window.innerWidth<768?45:0,hideOverlap:!0,formatter:h==="Sales (Day Wise)"?"{d} {MMM}":null,color:x==="dark"?"#ffffff":"#000000"},type:h==="Sales (Day Wise)"?"time":"category",axisPointer:{label:{formatter:function(t){if(h==="Sales (Day Wise)"){let e=new Date(t.value);return v(e)}else return t.value}}},data:h==="Sales (Day Wise)"?we:h==="Sales (Month Wise)"?Q:xe},yAxis:{axisLabel:{color:x==="dark"?"#ffffff":"#000000"},formatter:t=>t>=1e4?t/1e3+"k":t,type:"value"},series:Object.values(re).map(t=>({name:t.productName,type:"bar",stack:"total",barWidth:"40%",label:{show:!1},itemStyle:{borderRadius:[5,5,5,5],color:new ge.graphic.LinearGradient(0,1,0,0,[{offset:1,color:ie(t.color,40)},{offset:0,color:ie(t.color,80)}])},data:h==="Sales (Day Wise)"?Object.entries(t.daySales):h==="Sales (Month Wise)"?[].concat(...Object.values(t.monthSales).map(e=>Object.values(e).map(n=>n&&parseFloat(n).toFixed(2)))):Object.values(t.yearSales).map(e=>e.toFixed(2))}))},ce=t=>{let e="";const n=new Uint8Array(t),s=n.byteLength;for(let r=0;r<s;r++)e+=String.fromCharCode(n[r]);return window.btoa(e)},v=t=>{if(!t)return"";let e=new Date(t);const n=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${s}-${n}`},$e=async()=>{const t=O.loading("Please wait..."),e=v(c[0]),n=v(c[1]),s=await he(()=>import("./exceljs.min-1857c812.js").then(D=>D.e),["assets/exceljs.min-1857c812.js","assets/vendor-776b30b8.js"]),r=new s.Workbook,m=r.addWorksheet("Data");fetch(fe).then(D=>D.blob()).then(async D=>{const _=new FileReader;_.onload=async function(){const E=_.result,y=r.addImage({base64:E,extension:"png"});m.addImage(y,{tl:{col:0,row:0},ext:{width:100,height:60}});const N=m.getCell("A1");N.value=`${i("Products Summary Data")} (${T})`,N.font={bold:!0,color:{argb:"000000"},size:14},N.alignment={vertical:"middle",horizontal:"center"},m.mergeCells("A1:D1");const f=m.getCell("A2");f.value=`${i("Period")}: ${e} ${i("to")} ${n}`,f.font={bold:!0,color:{argb:"000000"},size:12},f.alignment={horizontal:"center"},m.mergeCells("A2:D2"),m.getColumn(1).width=15,m.getColumn(2).width=50,m.getColumn(3).width=15,m.getColumn(4).width=15;const a=m.addRow([i("#"),i("Dates"),i("Product Name"),i("Sales")]);a.font={bold:!0,color:{argb:"000000"},size:12},a.eachCell(u=>{u.font={bold:!0,color:{argb:"000000"},size:12},u.border={bottom:{style:"thin",color:{argb:"000000"}}}}),j.forEach((u,w)=>{if(w!==j.length-1){const d=m.addRow([w+1,u.requestedDate,u.productName,u.totalSales.toFixed(2)]);d.getCell(1).alignment={horizontal:"left"},d.getCell(2).alignment={horizontal:"left"},d.getCell(3).alignment={horizontal:"right"},d.getCell(4).alignment={horizontal:"right"}}else{const d=m.addRow(["",i("Total"),"",""]);d.font={bold:!0,color:{argb:"000000"},size:12};const $=m.getCell(`D${d.number}`);$.value=`₹ ${u.totalSales.toFixed(2)}`,$.alignment={horizontal:"right"}}});const S=`${Date.now()}Products_Summary_by${h}_${T}_${e}_${n}.xlsx`;r.xlsx.writeBuffer().then(async u=>{const w=new FormData;w.append("file",new Blob([u]),S);try{const d=await q.post("http://115.124.120.251:5064/api/uploader",w,{headers:{"Content-Type":"multipart/form-data"}});d.status==200?O.update(t,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):O.update(t,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const $=d.data.url;window.location.href=`http://115.124.120.251:5064/static/downloads/${$}`}catch(d){console.error("Error saving Excel file:",d)}})},_.readAsDataURL(D)})},Ce=async()=>{const t=O.loading("Please wait..."),e=v(c[0]),n=v(c[1]),r=new URLSearchParams(window.location.search).get("lang"),m=await q.get(Je,{responseType:"arraybuffer"}),D=ce(m.data),_=await q.get(Qe,{responseType:"arraybuffer"}),E=ce(_.data);he(()=>import("./jspdf.es.min-4b9d738f.js").then(y=>y.j),["assets/jspdf.es.min-4b9d738f.js","assets/index-e40c2807.js","assets/vendor-776b30b8.js","assets/index-0653e607.css"]).then(async y=>{let N=y.default;const f=new N;f.addFileToVFS("NotoSansBengali.ttf",D),f.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),f.setFont("NotoSansBengali"),f.addFileToVFS("NotoSansDevanagari.ttf",E),f.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),f.setFont("NotoSansDevanagari");const a=[[i("#"),i("Dates"),i("Product Name"),i("Sales")]],l={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},S={fontSize:12,fontStyle:"bold",halign:"center"},u={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},w=fe,d=35,$=20;f.addImage(w,"PNG",15,12,d,$);const W=[[`${i("Products Summary Data")} (${T})`]];f.autoTable({head:W,body:[],headStyles:{...S,fillColor:u.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const b=[[`${i("Period")}: ${e} ${i("to")} ${n}`]];f.autoTable({startY:39.5,head:b,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let de=j.map((C,X)=>[X+1,C.requestedDate,C.productName,`₹ ${C.totalSales.toFixed(2)}`]);const B={startY:f.autoTable.previous.finalY+1,head:a,body:de,headStyles:{...S,fillColor:u.secondHeader,textColor:"#FFFFFF"},columnStyles:l,styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};f.autoTable(B);const ke=`${Date.now()}Products_Summary_by${h}_${T}_${e}_${n}.pdf`,Ye=f.output("blob"),ue=new FormData;ue.append("file",Ye,ke);try{const C=await q.post("http://115.124.120.251:5064/api/uploader",ue,{headers:{"Content-Type":"multipart/form-data"}});C.status==200?O.update(t,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):O.update(t,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const X=await C.data.url;window.location.href=`http://115.124.120.251:5064/static/downloads/${X}`}catch(C){console.error("Error saving PDF file:",C)}})};p.useEffect(()=>{const t=e=>{H.current&&!H.current.contains(e.target)&&G.current&&!G.current.contains(e.target)&&e.target.tagName!=="svg"&&e.target.tagName!=="path"&&k(!1),U.current&&!U.current.contains(e.target)&&J(!1)};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]);const Me=()=>{J(!1),k(!A),h==="Sales (Day Wise)"?F(ae):h==="Sales (Month Wise)"?F(te):h==="Sales (Year Wise)"&&F(oe)},je=t=>{if(M(t.target.value),t.target.value==="Sales (Day Wise)")F(ae);else if(t.target.value==="Sales (Month Wise)"){if(F(te),I===!1){const e=new Date(c[0]),n=new Date(c[1]),s=new Date(e.getFullYear(),0,1);let r;n.getFullYear()===new Date().getFullYear()&&n.getMonth()>new Date().getMonth()?r=new Date(n.getFullYear(),new Date().getMonth(),new Date().getDate()):n.getFullYear()===new Date().getFullYear()&&n.getMonth()<=new Date().getMonth()?r=new Date(n.getFullYear(),new Date().getMonth(),new Date().getDate()):r=new Date(n.getFullYear(),11,31),(`${c[0].getFullYear()}-${c[0].getMonth()+1}-${c[0].getDate()}`!=`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`||`${c[1].getFullYear()}-${c[1].getMonth()+1}-${c[1].getDate()}`!=`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`)&&P([s,r])}}else if(t.target.value==="Sales (Year Wise)"&&(F(oe),I===!1)){const e=new Date(c[0]),n=new Date(c[1]),s=new Date(e.getFullYear(),0,1);let r;n.getFullYear()===new Date().getFullYear()?r=new Date(n.getFullYear(),new Date().getMonth(),new Date().getDate()):r=new Date(n.getFullYear(),11,31),(`${c[0].getFullYear()}-${c[0].getMonth()+1}-${c[0].getDate()}`!=`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`||`${c[1].getFullYear()}-${c[1].getMonth()+1}-${c[1].getDate()}`!=`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`)&&P([s,r])}},ve=t=>{if(t&&t.data&&t.dataIndex>=0){if(h==="Sales (Month Wise)"){const e=new Date(Q[t.dataIndex]),n=new Date(e.getFullYear(),e.getMonth(),1);ee(!1);let s;e.getFullYear()===new Date().getFullYear()&&e.getMonth()===new Date().getMonth()?s=new Date(e.getFullYear(),new Date().getMonth(),new Date().getDate()):s=new Date(e.getFullYear(),e.getMonth()+1,0),P([n,s]),M("Sales (Day Wise)")}if(h==="Sales (Year Wise)"){ee(!1),M("Sales (Month Wise)");const e=new Date(Q[t.dataIndex]),n=new Date(e.getFullYear(),0,1);let s;e.getFullYear()===new Date().getFullYear()?s=new Date(e.getFullYear(),new Date().getMonth(),new Date().getDate()):s=new Date(e.getFullYear()+1,0,0),(`${c[0].getFullYear()}-${c[0].getMonth()+1}-${c[0].getDate()}`!=`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`||`${c[1].getFullYear()}-${c[1].getMonth()+1}-${c[1].getDate()}`!=`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`)&&P([n,s])}}},Ne=Be({typography:{button:{textTransform:"none"}}}),Oe=()=>{le(!1),J(!V),k(!1),L(!1)};return o.jsx(o.Fragment,{children:o.jsxs("div",{ref:U,className:`${g.chartContainer} ${x==="dark"?g.darkMode:g.lightMode}`,children:[o.jsx(Ve,{position:"top-center",theme:x}),o.jsx("div",{className:"container-fluid",children:o.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[o.jsxs("button",{className:g.legendButton,onClick:Oe,children:[o.jsx("img",{src:"http://115.124.120.251:5007/images/code-block.png",alt:"Code Block Icon",className:g.codeBlockIcon,title:"Legends",style:{filter:V?"opacity(0.4)":"opacity(1)",transition:"all .25s ease-in-out"}})," "]}),o.jsxs("div",{className:"d-flex align-items-center",children:[o.jsx("div",{className:`fw-bold me-2 fs-${window.innerWidth<=768?7:5} ${x==="dark"?g.darkMode:g.lightMode}`,children:i("")}),o.jsx(Te,{theme:Ne,children:o.jsxs(Pe,{sx:{mx:1,mt:1,minWidth:190},size:"small",children:[o.jsx(Ie,{id:"demo-simple-select-helper-label",style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},children:i("Product Wise")}),o.jsxs(Le,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:h,onChange:je,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},label:i("Product Wise"),children:[o.jsx(K,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Sales (Day Wise)",children:i("Sales (Day Wise)")}),o.jsx(K,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Sales (Month Wise)",children:i("Sales (Month Wise)")}),o.jsx(K,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Sales (Year Wise)",children:i("Sales (Year Wise)")})]})]})})]}),o.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:H,children:o.jsxs("div",{className:`${g.iconsContainer} d-flex justify-content-center align-items-center`,children:[o.jsx("div",{className:`${g.icon} ${x==="dark"?g.darkMode:g.lightMode} px-2 py-1`,onClick:Me,children:A?o.jsx(Ee,{style:{fontSize:"1.1rem"}}):o.jsx(qe,{style:{fontSize:"1.1rem"}})}),A&&o.jsxs("div",{className:`${g.exportOptions} ${x==="dark"?g.darkMode:g.lightMode}`,ref:G,children:[Y?o.jsxs("div",{className:g.exportOption,onClick:()=>{L(!Y),k(!1)},children:[o.jsx(Ae,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),o.jsx("span",{children:i("View Graph")})]}):o.jsxs("div",{className:g.exportOption,onClick:()=>{L(!Y),k(!1)},children:[o.jsx(ze,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),o.jsx("span",{children:i("View Table")})]}),o.jsxs("div",{className:g.exportOption,onClick:$e,children:[o.jsx(He,{style:{fontSize:"1.1rem",color:"green"}}),o.jsx("span",{children:i("Export to Excel")})]}),o.jsxs("div",{className:g.exportOption,onClick:Ce,children:[o.jsx(Ge,{style:{fontSize:"1.1rem",color:"red"}}),o.jsx("span",{children:i("Export to PDF")})]})]})]})})]})}),R&&o.jsx("div",{className:g.loadingOverlay,children:o.jsx("img",{src:Ue,alt:"Loading...",width:50,height:50})}),j.length==1&&!Y&&!R?o.jsx("div",{className:`${g.NoDataOverlay} fs-5`,children:i("No Data Found")}):"",Y?o.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"333px"},children:o.jsxs("table",{className:`table  ${x=="dark"?"table-dark":""}`,children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{scope:"col",children:"#"}),o.jsx("th",{scope:"col",children:i("Date")}),o.jsx("th",{scope:"col",children:i(h)}),o.jsxs("th",{scope:"col",children:[i("Sales"),"(₹)"]})]})}),o.jsx("tbody",{children:j.map((t,e)=>o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:j.length-1===e?"":e+1}),o.jsx("td",{children:t.requestedDate}),o.jsx("td",{children:t.productName}),o.jsx("td",{children:parseFloat(t.totalSales).toFixed(2)})]},`${t.requestedDate} ${t.productName}`))})]})}):o.jsx(pe,{option:_e,notMerge:Fe,style:{height:"341px",width:"100%",maxWidth:"2300px"},className:g.piechart,onEvents:{click:ve}},re.length)]})})};export{vt as default};
