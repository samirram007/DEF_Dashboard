import{u as C,r as i,j as e,z as M,x as q,y as F,a as I}from"./vendor-d27bb63f.js";import{c as j}from"./index-4d7f1e73.js";import{R as N}from"./index-3570dccd.js";function Y({countExpense:L,totalExpense:b,todayExpense:W,alldata:P,selectedRange:B,officeId:$,adminStatus:z}){const{t:l}=C(),[p,T]=i.useState({current7Days:[],previous7Days:[]}),[x,f]=i.useState(!0),[g,E]=i.useState(0),w=t=>{if(!t)return"";const s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),d=String(t.getDate()).padStart(2,"0");return`${s}-${r}-${d}`};i.useEffect(()=>{const t=new Date,s=new Date(t),r=new Date(t);r.setDate(t.getDate()-13);async function d(){const c=(await I.get(`http://115.124.120.251:5064/api/v1/dashboard/sales_list/${w(r)}/${w(s)}/${$}/${z}`)).data.graph1;if(Array.isArray(c)){const h=c.map(a=>({requestedDate:new Date(a.requestedDate),expense:a.totalExpense}));console.log(h);const y=new Date,o=new Date(y);o.setDate(y.getDate()-7);const u=h.filter(a=>{const n=new Date(a.requestedDate);return n>=o&&n<=y}),m=new Date(o);m.setDate(o.getDate()-7);const D=h.filter(a=>{const n=new Date(a.requestedDate);return n>=m&&n<o}),A=u.reduce((a,n)=>a+n.expense,0),S=D.reduce((a,n)=>a+n.expense,0),v=Math.min((A-S)/S*100,100);console.log(v),E(v),T({current7Days:u,previous7Days:D})}else console.log("Invalid data format:",c)}d()},[]);const R=["Su","Mo","Tu","We","Th","Fr","Sa"],k={grid:{left:12,right:12,top:10,bottom:20},legend:{show:!1,textStyle:{color:"white",fontSize:window.innerWidth<=768?8:12},top:20,left:"center",itemWidth:(window.innerWidth<=768,5),itemHeight:window.innerWidth<=768?8:10},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"white",left:0,right:0},boundaryGap:!1,data:p.current7Days.map(t=>{const s=new Date(t.requestedDate);return R[s.getDay()]})},yAxis:{type:"value",show:!1},tooltip:{trigger:"axis",backgroundColor:"rgba(0, 0, 0, 0)",textStyle:{fontSize:window.innerWidth<=768?10:14,color:"white"},formatter:function(t){let s="<div>";return s+=`<div>${t[0].name}</div>`,t.forEach(r=>{s+='<div style="display: flex; align-items: center;">',s+=`<span style="color: ${r.color}; margin-right: 5px;">●</span>`,s+=`<span style="font-weight: bold;">${r.seriesName}: ₹${r.value}</span>`,s+="</div>"}),s+="</div>",s}},series:[{data:p.current7Days.map(t=>t.expense),name:"This Week",type:"line",yAxisIndex:0,symbol:"none",itemStyle:{color:"pink"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 105, 180)"},{offset:1,color:"rgba(0, 0, 0, 0)"}]}},smooth:!0,lineStyle:{width:3,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:5,shadowOffsetY:5}}]};return e.jsxs("div",{className:j.card4,children:[e.jsxs("div",{className:j.cardHead,children:[e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:l("Expense")}),e.jsx("span",{children:e.jsx(M,{size:50})})]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",width:"100%",height:"30px"},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[e.jsxs("div",{className:"mb-0",style:{display:"flex",alignItems:"center"},children:[e.jsxs("span",{style:{marginRight:"5px",fontSize:window.innerWidth>600?"1.1rem":"0.8rem"},children:[" ",x?l("Today"):"7 "+l("days")]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx("span",{style:{marginRight:"2px",marginTop:"6px",fontWeight:"bold",fontSize:window.innerWidth>600?".9rem":"0.7rem"},children:"₹"}),e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"2.1rem":"1.7rem",marginRight:"5px"},children:x?W:b})]})})]}),e.jsx("div",{style:{display:window.innerWidth>600?"flex":"none",alignItems:"flex-start"},children:e.jsxs("div",{style:{backgroundColor:"rgba(255, 105, 180)",padding:"2px 4px",borderRadius:"20px",display:"inline-flex",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:g>0?"yellow":"rgba(255,0,0,0.6)"}}),e.jsx("i",{style:{marginLeft:"0px"},children:g>0?e.jsx(q,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"yellow"}}):e.jsx(F,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"rgba(255,0,0,0.6)"}})})]})})]}),e.jsx("div",{style:{display:"flex"},children:e.jsx(N,{option:k,style:{height:"80%",width:"100%"}})})]})})]})}export{Y as default};