import{u as A,r,j as e}from"./vendor-36ea1262.js";import{c as g}from"./Dashboard-b6156e2a.js";import{v as q,m as I,t as M}from"./index.esm-39a9cba4.js";import"./index-c2d2ef7a.js";import"./install-b5fa7292.js";import"./assertThisInitialized-a147f0d7.js";function B({totalExpense:u,todayExpense:D,expenseCardData:l,ReactECharts:v}){const{t:d}=A(),[h,j]=r.useState([]),[x,p]=r.useState(!1),[y,S]=r.useState(0);r.useEffect(()=>{async function i(){if(l){const t=l,a=new Date;if(new Date(a).setDate(a.getDate()-13),Array.isArray(t)){const f=t.map(s=>({requestedDate:new Date(s.requestedDate),expense:s.totalExpense}));j(t.slice(-7));const c=new Date,o=new Date(c);o.setDate(c.getDate()-7);const T=f.filter(s=>{const n=new Date(s.requestedDate);return n>=o&&n<=c}),w=new Date(o);w.setDate(o.getDate()-7);const z=f.filter(s=>{const n=new Date(s.requestedDate);return n>=w&&n<o}),E=T.reduce((s,n)=>s+n.expense,0),m=z.reduce((s,n)=>s+n.expense,0),k=Math.min((E-m)/m*100,100);S(k)}}else console.log("Invalid data format:",data)}i()},[l]);const b=["Su","Mo","Tu","We","Th","Fr","Sa"],W={grid:{left:12,right:12,top:10,bottom:20},legend:{show:!1,textStyle:{color:"white",fontSize:window.innerWidth<=768?8:12},top:20,left:"center",itemWidth:(window.innerWidth<=768,5),itemHeight:window.innerWidth<=768?8:10},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"white",left:0,right:0},boundaryGap:!1,data:h.map(i=>{const t=new Date(i.requestedDate);return b[t.getDay()]})},yAxis:{type:"value",show:!1},tooltip:{trigger:"axis",backgroundColor:"rgba(0, 0, 0, 0)",textStyle:{fontSize:window.innerWidth<=768?10:14,color:"white"},formatter:function(i){let t="<div>";return t+=`<div>${i[0].name}</div>`,i.forEach(a=>{t+='<div style="display: flex; align-items: center;">',t+=`<span style="color: ${a.color}; margin-right: 5px;">●</span>`,t+=`<span style="font-weight: bold;">${a.seriesName}: ₹${a.value}</span>`,t+="</div>"}),t+="</div>",t}},series:[{data:h.map(i=>i.totalExpense),name:"This Week",type:"line",yAxisIndex:0,symbol:"none",itemStyle:{color:"pink"},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255, 105, 180)"},{offset:1,color:"rgba(0, 0, 0, 0)"}]}},smooth:!0,lineStyle:{width:3,shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:5,shadowOffsetY:5}}]};return e.jsxs("div",{className:g.card4,onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[e.jsxs("div",{className:g.cardHead,children:[e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:d("Expense")}),e.jsx("span",{children:e.jsx(q,{size:50})})]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",width:"100%",height:"30px"},children:[e.jsxs("div",{className:"mb-0",style:{display:"flex",alignItems:"center"},children:[e.jsxs("span",{style:{marginRight:"5px",fontSize:window.innerWidth>600?"1.1rem":"0.8rem"},children:[" ",x?"7 "+d("days"):d("Today")]}),e.jsx("div",{children:e.jsxs("div",{style:{display:"flex"},children:[e.jsx("span",{style:{marginRight:"2px",marginTop:"6px",fontWeight:"bold",fontSize:window.innerWidth>600?".9rem":"0.7rem"},children:"₹"}),e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"2.1rem":"1.7rem",marginRight:"5px"},children:x?u:D})]})})]}),e.jsx("div",{style:{display:window.innerWidth>600?"flex":"none",alignItems:"flex-start"},children:e.jsxs("div",{style:{backgroundColor:"rgba(255, 105, 180)",padding:"2px 4px",borderRadius:"20px",display:"inline-flex",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:"bold",fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:y>0?"yellow":"rgba(255,0,0,0.6)"}}),e.jsx("i",{style:{marginLeft:"0px"},children:y>0?e.jsx(I,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"yellow"}}):e.jsx(M,{style:{fontSize:window.innerWidth>600?"0.9rem":"0.7rem",color:"rgba(255,0,0,0.6)"}})})]})})]}),e.jsx("div",{style:{display:"flex"},children:e.jsx(v,{option:W,style:{height:"80%",width:"100%"}})})]})})]})}export{B as default};
