import{j as s,n as i}from"./vendor-e79ef30a.js";import{c as e}from"./index-a21ce8ae.js";function d({userCountData:a}){return s.jsxs("div",{className:e.card1,style:{display:"flex",justifyContent:"space-between",flexDirection:"column"},children:[s.jsxs("div",{className:e.cardHead,children:[s.jsx("span",{children:"Users"}),s.jsx("span",{children:s.jsx(i,{size:50})})]}),Array.isArray(a)&&a.length>0?a.map((r,n)=>s.jsxs("div",{className:e.cardAmount,children:[s.jsxs("span",{children:[r.roleName," :"]}),s.jsx("span",{children:r.userCount})]},n)):s.jsx("div",{className:e.cardAmount,children:s.jsx("span",{children:"No user data available"})})]})}export{d as default};
