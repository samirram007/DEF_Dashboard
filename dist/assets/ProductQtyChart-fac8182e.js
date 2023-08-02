import{_ as B}from"./index-a21ce8ae.js";import{r as f,l as J,j as t,g as z,w as X,x as K,y as Z,z as tt,C as et}from"./vendor-e79ef30a.js";import{E as ot,M as at,l as T,F as nt}from"./index-7afafb5e.js";const lt="_piechart_5d763_11",rt="_chartContainer_5d763_23",st="_legendButtonContainer_5d763_49",it="_legendButton_5d763_49",dt="_codeBlockIcon_5d763_133",ct="_lightMode_5d763_191",pt="_dateFilter_5d763_195",ft="_officefilter_5d763_351",ht="_topContainer_5d763_443",ut="_darkMode_5d763_463",_t="_iconsContainer_5d763_631",gt="_icon_5d763_631",mt="_exportOptions_5d763_715",xt="_exportOption_5d763_715",bt="_tableContainer_5d763_975",yt="_table_5d763_975",Ct="_summaryHeader_5d763_1011",St="_periodHeader_5d763_1019",wt="_closeButton_5d763_1051",kt="_tableWrapper_5d763_1081",Ft="_loadingOverlay_5d763_1089",vt="_loadingSpinner_5d763_1115",jt="_boldOption_5d763_1127",Nt="_optionGroup_5d763_1137",e={piechart:lt,chartContainer:rt,"legend-text":"_legend-text_5d763_31",legendButtonContainer:st,legendButton:it,codeBlockIcon:dt,lightMode:ct,"label-text":"_label-text_5d763_191",dateFilter:pt,officefilter:ft,topContainer:ht,darkMode:ut,"theme-container":"_theme-container_5d763_473",iconsContainer:_t,icon:gt,exportOptions:mt,exportOption:xt,tableContainer:bt,table:yt,summaryHeader:Ct,periodHeader:St,closeButton:wt,tableWrapper:kt,loadingOverlay:Ft,loadingSpinner:vt,boldOption:jt,optionGroup:Nt},Ot=({themeMode:m,selectedRange:x,selectedOffice:P,isAdmin:D})=>{const[b,H]=f.useState([]),[k,F]=f.useState(!1),W=f.useRef(null),I=f.useRef(null),[v,O]=f.useState(!1),[L,Q]=f.useState([]),[C,j]=f.useState(!1),[R,E]=f.useState(!1),M=[{name:"Product Name",label:"Product"},{name:"Quantity",label:"Quantity"},{name:"Sales",label:"Sales(₹)"}],A={selectableRowsHeader:!1,filter:!1,download:!1,print:!1,viewColumns:!1,search:!1,responsive:"standard",selectableRows:"none",rowsPerPage:10,rowsPerPageOptions:[10,25,50],tableBodyHeight:"238px",elevation:0,fixedHeader:!1,textLabels:{pagination:{rowsPerPage:"Rows"}}};f.useEffect(()=>{E(!0);const r=y(x[0]),h=y(x[1]);J.get(`http://115.124.120.251:5064/api/v1/dashboard/sales_list/${r}/${h}/${P}/${D}`).then(i=>{const o=i.data.graph2;let n={},_={},p={},g={};if(o.forEach(d=>{const{lstproduct:c}=d;c.forEach(a=>{let{productName:s,totalSales:l,color:N,qty:S,unitShortName:$}=a;l!==0&&(n[s]?(n[s]+=l,p[s]+=S):(n[s]=l,_[s]=N,p[s]=S,g[s]=$))})}),n){let d=[],c=[];for(let a in n)d.push({productName:a,totalSale:n[a],color:_[a],totalQty:p[a],unit:g[a]}),c.push({"Product Name":a,Sales:n[a],Quantity:`${p[a]} ${g[a]}`});Q(c),H(d)}}).catch(i=>{}).finally(()=>{E(!1)})},[x,P,D]);const G=()=>{b.length>0&&O(!v),F(!1),j(!1)},Y={tooltip:{trigger:"item",formatter:"<b>{b}</b><br><b>Total Qty:</b> {c}",textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{orient:"vertical",backgroundColor:m==="dark"?"#111111df":"rgb(249 249 249 / 97%)",left:"8px",top:"0",borderRadius:7,padding:10,show:v,shadowColor:"#ececec",borderColor:"rgba(57, 50, 50, 0.7)",borderWidth:1,itemGap:10,textStyle:{color:m==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=1496?12:14,padding:4},type:"scroll",scroll:{show:!0,orient:"horizontal"}},graphic:{type:"text",left:"center",top:"top",style:{text:"Product Quantity",fill:m==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=1496?16:18,fontWeight:"bold"}},series:[{name:"Product Qty",type:"pie",radius:["35%","70%"],center:["50%","50%"],roseType:"radius",selectedMode:"single",avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:9,fontWeight:"bold"}},data:b.length>0?b.map((r,h)=>({value:r.totalQty,name:r.productName,itemStyle:{color:r.color}})):[],labelLine:{length:30,length2:10},itemStyle:{borderWidth:2,borderColor:"#ffffff00",borderRadius:4}}]},U=async()=>{const r=y(x[0]),h=y(x[1]),i=await B(()=>import("./exceljs.min-75f8aaff.js").then(n=>n.e),["assets/exceljs.min-75f8aaff.js","assets/vendor-e79ef30a.js"]),u=new i.Workbook,o=u.addWorksheet("Data");fetch(T).then(n=>n.blob()).then(n=>{const _=new FileReader;_.onload=function(){const p=_.result,g=u.addImage({base64:p,extension:"png"});o.addImage(g,{tl:{col:0,row:0},ext:{width:100,height:70}});const d=o.getCell("A2");d.value="Product Wise Summary Data",d.font={bold:!0,color:{argb:"000000"},size:14},d.alignment={vertical:"middle",horizontal:"center"},o.mergeCells("A2:C2");const c=o.getCell("A3");c.value=`Period: ${r} to ${h}`,c.font={bold:!0,color:{argb:"000000"},size:12},c.alignment={horizontal:"center"},o.mergeCells("A3:C3"),o.getColumn(1).width=50,o.getColumn(2).width=15;const a=o.addRow(["Product Name","Quantity","Total Sale"]);a.font={bold:!0,color:{argb:"000000"},size:12},a.eachCell(l=>{l.font={bold:!0,color:{argb:"000000"},size:12},l.border={bottom:{style:"thin",color:{argb:"000000"}}}}),b.forEach(l=>{o.addRow([l.productName,`${l.totalQty} ${l.unit}`,`₹${l.totalSale}`])});const s=`product_wise_summary_data_${Date.now()}.xlsx`;u.xlsx.writeBuffer().then(l=>{nt.saveAs(new Blob([l]),s)})},_.readAsDataURL(n)})},y=r=>{if(!r)return"";const h=r.getFullYear(),i=String(r.getMonth()+1).padStart(2,"0"),u=String(r.getDate()).padStart(2,"0");return`${h}-${i}-${u}`},q=async()=>{const r=y(x[0]),h=y(x[1]);B(()=>import("./index-7afafb5e.js").then(i=>i.j),["assets/index-7afafb5e.js","assets/vendor-e79ef30a.js","assets/index-a21ce8ae.js","assets/index-4855f2f2.css"]).then(i=>{let u=i.default;const o=new u,n=[["Product Name","Quantity","Total Sale"]],_={1:{halign:"right"},2:{halign:"right"}},p={fontSize:12,fontStyle:"bold",halign:"center"},g={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},d=T,c=35,a=20;o.addImage(d,"PNG",15,12,c,a);const s=[["Product Wise Summary Data"]];o.autoTable({head:s,body:[],headStyles:{...p,fillColor:g.summaryHeader,textColor:"#FFFFFF"},margin:{top:30}});const l=[[`Period: ${r} to ${h}`]];o.autoTable({startY:39.5,head:l,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30}});const N=b.map(w=>[w.productName,`${w.totalQty} ${w.unit}`,w.totalSale.toFixed(2)]),S={startY:o.autoTable.previous.finalY+1,head:n,body:N,headStyles:{...p,fillColor:g.secondHeader,textColor:"#FFFFFF"},columnStyles:_};o.autoTable(S);const $=`product_wise_summary_data_${Date.now()}.pdf`;o.save($)})},V=()=>{O(!1),F(!k)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:`${e.chartContainer} ${m==="dark"?e.darkMode:e.lightMode}`,children:[t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[t.jsxs("button",{className:e.legendButton,onClick:G,children:[t.jsx("img",{src:"http://115.124.120.251:5007/images/code-block.png",alt:"Code Block Icon",className:e.codeBlockIcon,title:"Legends",style:{filter:v?"opacity(0.4)":"opacity(1)",transition:"all .25s ease-in-out"}})," "]}),t.jsx("div",{className:"d-flex g-0",ref:W,children:t.jsxs("div",{className:`${e.iconsContainer} d-flex justify-content-center align-items-center`,children:[C?t.jsx("div",{className:`${e.icon} ${m==="dark"?e.darkMode:e.lightMode}`,children:t.jsx("div",{children:t.jsx(z,{style:{fontSize:"1.1rem"},onClick:()=>{j(!C)}})})}):t.jsx("div",{className:`${e.icon} ${m==="dark"?e.darkMode:e.lightMode} px-2 py-1`,onClick:V,children:k?t.jsx(z,{style:{fontSize:"1.1rem"}}):t.jsx(X,{style:{fontSize:"1.1rem"}})}),k&&t.jsxs("div",{className:`${e.exportOptions} ${m==="dark"?e.darkMode:e.lightMode}`,ref:I,children:[t.jsxs("div",{className:e.exportOption,onClick:()=>{j(!C),F(!1)},children:[t.jsx(K,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:"Export to Table"})]}),t.jsxs("div",{className:e.exportOption,onClick:U,children:[t.jsx(Z,{style:{fontSize:"1.1rem",color:"green"}}),t.jsx("span",{children:"Export to Excel"})]}),t.jsxs("div",{className:e.exportOption,onClick:q,children:[t.jsx(tt,{style:{fontSize:"1.1rem",color:"red"}}),t.jsx("span",{children:"Export to PDF"})]})]})]})})]})}),R&&t.jsx("div",{className:e.loadingOverlay,children:t.jsx(et,{disableShrink:!0})}),C?t.jsx("div",{className:"container-fluid",children:t.jsx(at,{data:L,columns:M,options:A})}):t.jsx(ot,{option:Y,style:{height:"300px",width:"100%",maxWidth:"2300px"},className:e.piechart},b.length)]})})};export{Ot as default};
