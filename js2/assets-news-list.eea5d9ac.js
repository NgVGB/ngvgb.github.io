import{t as o,g as l}from"./utils.210206c0.js";/* empty css               */import{V as m,g as _,a as p,o as u}from"./download.8ce1dd7f.js";import{L as g}from"./login.a135329a.js";import{i as c}from"./index.c5f79010.js";import"./index.c47b052e.js";import"./basic.4f4229e7.js";import"./index.6a3ce157.js";import"https://aihelp.net/webchat/aihelp.js";import"./aihelp.819524fd.js";function d(){import("data:text/javascript,")}const{replaceTimeStampTag:h}=Cmssdk;c();const r=5;new m({el:"#news",components:{Login:g},data:function(){return{page:1,total_page:0,menu:[],news_list:[],currentActive:{},newsCache:new Map}},created:async function(){const{data:t}=await _(),{primary_label_list:e=[]}=t,i=e.find(s=>s.label_id===o),{secondary_label_list:n,default_secondary_label_id:a}=i;this.menu=n.slice(0,3),this.currentActive=n.find(s=>s.label_id===a)||n[0],this.setLabelData(),c()},filters:{timeFilter(t){const e=new Date(Math.floor(t)*1e3);return`${e.getFullYear()}.${e.getMonth()+1}.${e.getDate()}`}},methods:{switchActive:function(t){this.currentActive=t,this.page=1,this.total_page=0,this.setLabelData()},setLabelData:async function(){const{data:t}=await p({primary_label_id:o.toString(),secondary_label_id:String(this.currentActive.label_id),get_num:r,lang:l(),offset:(this.page-1)*r}),{info_content:e=[],total_num:i=0}=t;this.total_page=Math.ceil(i/r);const n=(e||[]).map(a=>(a.content_part=h(a.content_part||""),a.content_part=new DOMParser().parseFromString(a.content_part,"text/html").documentElement.textContent,a));this.news_list=n,this.newsCache.set(String(this.currentActive.label_id),n)},toNews:u,toPage:function(t){t>this.total_page||t!==this.page&&(t<=0||(this.page=t,this.setLabelData()))}}});export{d as __vite_legacy_guard};
