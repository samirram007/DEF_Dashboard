import{u as l,j as s}from"./vendor-36ea1262.js";import{c as e,a as c}from"./Dashboard-b6156e2a.js";import"./index-c2d2ef7a.js";import"./index.esm-39a9cba4.js";import"./install-b5fa7292.js";import"./assertThisInitialized-a147f0d7.js";function x({officeCountData:i}){const{t:n}=l();return s.jsxs("div",{className:e.card2,style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[s.jsxs("div",{className:e.cardHead,children:[s.jsx("span",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:n("Office")}),s.jsx("span",{children:s.jsx(c,{size:50})})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column"},children:Array.isArray(i)&&i.length>0?i.map((r,a)=>s.jsxs("div",{className:e.cardAmount,children:[s.jsxs("span",{style:{fontSize:window.innerWidth>600?".9rem":"0.8rem"},children:[n(r.officeType)," :"]}),s.jsx("span",{children:r.officeCount})]},a)):s.jsx("div",{className:e.cardAmount,children:s.jsx("span",{children:n("No office data available")})})})]})}export{x as default};