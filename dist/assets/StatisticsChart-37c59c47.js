import{_ as P}from"./index-b6087290.js";import{r as m,u as Z,y as ee,j as t,z as B,h as te,A as ae,B as oe,C as ne,E as se,a as le}from"./vendor-bb7ccaa2.js";import{L as re,a as ie,E as de,M as ce,l as H,F as pe}from"./index-9c60a02f.js";const fe="_chartContainer_1mphg_1",xe="_lightMode_1mphg_47",me="_dateFilter_1mphg_51",he="_officefilter_1mphg_207",ge="_topContainer_1mphg_299",ue="_darkMode_1mphg_319",_e="_iconsContainer_1mphg_487",be="_icon_1mphg_487",ye="_exportOptions_1mphg_571",Se="_exportOption_1mphg_571",Ce="_tableContainer_1mphg_825",we="_table_1mphg_825",Fe="_summaryHeader_1mphg_861",De="_periodHeader_1mphg_869",ve="_closeButton_1mphg_901",Ee="_tableWrapper_1mphg_931",ke="_loadingOverlay_1mphg_939",je="_NoDataOverlay_1mphg_963",Ie="_loadingSpinner_1mphg_991",Ne="_boldOption_1mphg_1003",Oe="_optionGroup_1mphg_1013",n={chartContainer:fe,lightMode:xe,"label-text":"_label-text_1mphg_47",dateFilter:me,officefilter:he,topContainer:ge,darkMode:ue,"theme-container":"_theme-container_1mphg_329",iconsContainer:_e,icon:be,exportOptions:ye,exportOption:Se,tableContainer:Ce,table:we,summaryHeader:Fe,periodHeader:De,closeButton:ve,tableWrapper:Ee,loadingOverlay:ke,NoDataOverlay:je,loadingSpinner:Ie,boldOption:Ne,optionGroup:Oe},Te=({selectedRange:f,themeMode:i,selectedOffice:k,isAdmin:G,alldata:z,isLoading:T})=>{const[c,R]=m.useState([]),[j,D]=m.useState(!1),I=m.useRef(null),N=m.useRef(null),[q,M]=m.useState(!0),[W,V]=m.useState([]),[y,O]=m.useState(!1),{t:a}=Z(),Y=[{name:"requestedDate",label:a("Date")},{name:"sales",label:`${a("Sales")}(₹)`},{name:"expense",label:`${a("Expense")}(₹)`}],U={selectableRowsHeader:!1,filter:!1,download:!1,print:!1,viewColumns:!1,search:!1,responsive:"standard",selectableRows:"none",rowsPerPage:10,rowsPerPageOptions:[10,25,50],tableBodyHeight:"228px",elevation:0,fixedHeader:!1,textLabels:{pagination:{rowsPerPage:a("Rows")}}};m.useEffect(()=>{const e=S(f[0]),s=S(f[1]);e&&s&&k&&(()=>{const x=z;if(Array.isArray(x.graph1)){const o=x.graph1.map(d=>({requestedDate:d.requestedDate,sales:d.totalIncome,expense:d.totalExpense}));let C=o.filter(d=>d.sales!==0||d.expense!==0);const u=o.reduce((d,h)=>d+h.sales,0).toFixed(2),_=o.reduce((d,h)=>d+h.expense,0).toFixed(2);C.push({requestedDate:a("Total"),sales:u,expense:_}),V(C),R(x.graph1)}})()},[f,k,G,z]);const L=(c.filter(e=>e.totalIncome>0).reduce((e,s)=>e+s.totalIncome,0)/c.filter(e=>e.totalIncome>0).length).toFixed(2);m.useEffect(()=>{if(f[0]&&f[1]){const e=new Date(f[0]),s=new Date(f[1]),r=ee(s,e)+1;M(r<=7)}},[f,k]);const J={color:["#66BA69","#E81A1A","#FFC107"],title:{textStyle:{color:i==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",formatter:function(e){for(var s=`<b>${a("Date")}:</b> `+e[0].name+"<br/>",r=0;r<e.length;r++)s+="<b>"+e[r].seriesName+":</b> "+e[r].value+"<br/>";return s},textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{top:window.innerWidth>550?0:270,data:[a("Sales"),a("Expense"),a("Average Sales")],textStyle:{color:i==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:window.innerWidth<=768?"7%":"4%",right:"3%",top:"10%",bottom:c.length>0?"15%":"20%",containLabel:c.length>0},xAxis:{type:"category",name:window.innerWidth>550?a("Date"):"",nameLocation:"middle",nameGap:35,nameTextStyle:{color:i==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},boundaryGap:!0,data:c.map(e=>e.requestedDate),axisLine:{lineStyle:{color:i==="dark"?"#ffffff":"#000000"}},axisLabel:{color:i==="dark"?"#ffffff":"#000000"}},yAxis:[{type:"value",name:(window.innerWidth>550,""),nameLocation:"middle",nameGap:42,nameTextStyle:{color:i==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},axisLine:{lineStyle:{color:i==="dark"?"#ffffff":"#000000"}},axisLabel:{color:i==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e4?e/1e3+"k":e},splitLine:{show:!0,lineStyle:{color:i==="dark"?"grey":"silver",type:"dashed"}}},{type:"value",show:!1},{type:"value",show:!1}],series:q?[{name:a("Sales"),type:"bar",data:c.map(e=>e.totalIncome),yAxisIndex:0},{name:a("Expense"),type:"bar",data:c.map(e=>e.totalExpense),yAxisIndex:0},{name:a("Average Sales"),type:"line",yAxisIndex:0,smooth:!0,lineStyle:{color:"#FFC107",width:2,type:"dashed"},data:c.map(()=>L)}]:[{name:a("Sales"),type:"line",smooth:!0,data:c.map(e=>e.totalIncome),yAxisIndex:0},{name:a("Expense"),type:"line",smooth:!0,data:c.map(e=>e.totalExpense),yAxisIndex:0},{name:a("Average Sales"),type:"line",yAxisIndex:0,smooth:!0,lineStyle:{color:"#FFC107",width:2,type:"dashed"},data:c.map(()=>L)}]},X=async()=>{const e=S(f[0]),s=S(f[1]),r=await P(()=>import("./exceljs.min-5c8bcce4.js").then(_=>_.e),["assets/exceljs.min-5c8bcce4.js","assets/vendor-bb7ccaa2.js"]),x=new r.Workbook,o=x.addWorksheet("Graph Data"),C=await le.get(H,{responseType:"blob"}),u=new FileReader;u.onload=function(){const _=u.result,d=x.addImage({base64:_,extension:"png"});o.addImage(d,{tl:{col:0,row:0},ext:{width:100,height:60}});const h=o.getCell("A1");h.value=a("Sales-Expense Summary"),h.font={bold:!0,color:{argb:"000000"},size:14},h.alignment={vertical:"middle",horizontal:"center"},o.mergeCells("A1:C1");const b=o.getCell("A2");b.value=`${a("Period")}: ${e} ${a("to")} ${s}`,b.font={bold:!0,color:{argb:"000000"},size:12},b.alignment={horizontal:"center"},o.mergeCells("A2:C2"),o.getColumn(1).width=50,o.getColumn(2).width=15,o.getColumn(3).width=15;const v=o.addRow([a("Date"),a("Sales"),a("Expense")]);v.font={bold:!0,color:{argb:"000000"},size:12,underline:!0},v.eachCell(l=>{l.font={bold:!0,color:{argb:"000000"},size:12},l.border={bottom:{style:"thin",color:{argb:"000000"}}}});const w=c.filter(l=>l.totalIncome!==0||l.totalExpense!==0);w.forEach(l=>{const g=o.addRow([l.requestedDate,Number(l.totalIncome),Number(l.totalExpense)]);g.getCell(2).numFmt="0.00",g.getCell(3).numFmt="0.00"});const F=o.addRow([a("Total"),"",""]);F.font={bold:!0,color:{argb:"000000"},size:12};const A=w.reduce((l,g)=>l+g.totalIncome,0),$=w.reduce((l,g)=>l+g.totalExpense,0),E=o.getCell(`B${F.number}`);E.value=`₹${A.toFixed(2)}`,E.alignment={horizontal:"right"};const p=o.getCell(`C${F.number}`);p.value=`₹${$.toFixed(2)}`,p.alignment={horizontal:"right"},x.xlsx.writeBuffer().then(l=>{const g=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});pe.saveAs(g,"sales-expense.xlsx")})},u.readAsDataURL(C.data)},K=()=>{const e=S(f[0]),s=S(f[1]);P(()=>import("./index-9c60a02f.js").then(r=>r.j),["assets/index-9c60a02f.js","assets/vendor-bb7ccaa2.js","assets/index-b6087290.js","assets/index-4da97eed.css"]).then(r=>{let x=r.default;const o=new x;o.setFontSize(12);const C=H,u=35,_=20;o.addImage(C,"PNG",15,9,u,_);const d=[["Sales-Expense Summary"]];o.autoTable({startY:27,head:d,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:20,bottom:0}});const h=[[`Period: ${e} to ${s}`]];o.autoTable({startY:36,head:h,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30}});const b=c.filter(p=>p.totalIncome!==0||p.totalExpense!==0),v=b.map(p=>[p.requestedDate,p.totalIncome.toFixed(2),p.totalExpense.toFixed(2)]),w=b.reduce((p,l)=>p+l.totalIncome,0),F=b.reduce((p,l)=>p+l.totalExpense,0);(w!==0||F!==0)&&v.push(["Total",`${w.toFixed(2)}`,`${F.toFixed(2)}`]);const A=["Date","Sales","Expense"],$={1:{halign:"right"},2:{halign:"right"}},E={fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#75AAF0",textColor:"#FFFFFF"};o.autoTable(A,v,{startY:45,headStyles:E,columnStyles:$}),o.save("sales-expense.pdf")})};m.useEffect(()=>{const e=s=>{I.current&&!I.current.contains(s.target)&&N.current&&!N.current.contains(s.target)&&s.target.tagName!=="svg"&&s.target.tagName!=="path"&&D(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const Q=()=>{D(!j)},S=e=>{if(!e)return"";const s=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),x=String(e.getDate()).padStart(2,"0");return`${s}-${r}-${x}`};return t.jsxs("div",{className:`${n.chartContainer} ${i==="dark"?n.darkMode:n.lightMode}`,children:[t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[t.jsx("div",{className:`fw-bold fs-5 ${i==="dark"?n.darkMode:n.lightMode}`,children:a("Sales-Expense")}),t.jsxs("div",{className:n.exportOption,onClick:()=>{O(!y),D(!1)},children:[t.jsx(B,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:a("View Table")})]}),t.jsx("div",{className:"d-flex g-0",ref:I,children:t.jsxs("div",{className:`${n.iconsContainer} d-flex justify-content-center align-items-center`,children:[t.jsx("div",{className:`${n.icon} ${i==="dark"?n.darkMode:n.lightMode} px-2 py-1`,onClick:Q,children:j?t.jsx(te,{style:{fontSize:"1.1rem"}}):t.jsx(ae,{style:{fontSize:"1.1rem"}})}),j&&t.jsxs("div",{className:`${n.exportOptions} ${i==="dark"?n.darkMode:n.lightMode}`,ref:N,children:[y?t.jsxs("div",{className:n.exportOption,onClick:()=>{O(!y),D(!1)},children:[t.jsx(oe,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),t.jsx("span",{children:a("View Graph")})]}):t.jsxs("div",{className:n.exportOption,onClick:()=>{O(!y),D(!1)},children:[t.jsx(B,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:a("View Table")})]}),t.jsxs("div",{className:n.exportOption,onClick:X,children:[t.jsx(ne,{style:{fontSize:"1.1rem",color:"green"}}),t.jsx("span",{children:a("Export to Excel")})]}),t.jsxs("div",{className:n.exportOption,onClick:K,children:[t.jsx(se,{style:{fontSize:"1.1rem",color:"red"}}),t.jsx("span",{children:a("Export to PDF")})]})]})]})})]})}),T&&t.jsx("div",{className:n.NoDataOverlay,children:t.jsx(re,{animationData:ie,loop:!0})}),W.length==1&&!y&&!T?t.jsx("div",{className:`${n.NoDataOverlay} fs-5`,children:a("No Data Found")}):"",y?t.jsx("div",{className:"container-fluid mt-2",children:t.jsx(ce,{data:W,columns:Y,options:U})}):t.jsx(de,{option:J,style:{height:"300px",width:"100%",maxWidth:"2300px"},className:i==="dark"?n.darkMode:n.lightMode})]})};export{Te as default};
