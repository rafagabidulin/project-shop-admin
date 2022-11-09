"use strict";(self.webpackChunkproject_structure=self.webpackChunkproject_structure||[]).push([[197],{348:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(856);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{url:t="",sorted:s={id:e.find(e=>e.sortable).id,order:"asc"},isSortLocally:n=!1,step:r=20,start:a=1,end:l=a+r,range:o,rowTemplate:d=((e,t)=>`\n      <div class="sortable-table__row">\n        ${e}\n      </div>`)}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,"element",void 0),i(this,"subElements",{}),i(this,"data",[]),i(this,"loading",!1),i(this,"start",1),i(this,"step",20),i(this,"end",this.start+this.step),i(this,"onWindowScroll",async()=>{const{bottom:e}=this.element.getBoundingClientRect(),{id:t,order:s}=this.sorted;if(e<document.documentElement.clientHeight&&!this.loading&&!this.isSortLocally){this.start=this.end,this.end=this.start+this.step,this.loading=!0;const e=await this.loadData(t,s,this.start,this.end);this.update(e),this.loading=!1}}),i(this,"onHeaderClick",async e=>{const t=e.target.closest('[data-sortable="true"]');if(!t)return;this.start=0,this.end=this.start+this.step;const s="asc"===t.dataset.order?"desc":"asc";t.dataset.order=s;t.querySelector(".sortable-table__sort-arrow")||t.append(this.subElements.arrow),this.isSortLocally?this.sortOnClient(t.dataset.id,s,this.start,this.end):this.sortOnServer(t.dataset.id,s,this.start,this.end)}),this.headersConfig=e,this.url=t,this.sorted=s,this.isSortLocally=n,this.step=r,this.start=a,this.end=l,this.range=o,this.rowTemplate=d,this.render()}getTemplate(){return`\n      <div class="sortable-table">\n        ${this.getTableHeader()}\n        ${this.getTableBody(this.data)}\n\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">\n          <div>\n            <p>No products satisfies your filter criteria</p>\n          </div>\n        </div>\n      </div>  \n      `}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}getTableHeader(){return`\n      <div data-element="header" class="sortable-table__header sortable-table__row">\n        ${this.headersConfig.map(e=>this.getHeaderRow(e)).join("")}\n      </div>`}getHeaderRow(e){let{id:t,title:s,sortable:n}=e;return`\n      <div\n        class="sortable-table__cell"\n        data-id="${t}"\n        data-sortable="${n}"\n        data-order="${this.sorted.id===t?this.sorted.order:"asc"}"\n      >\n        <span>${s}</span>\n        ${this.getHeaderSortingArrow(t)}\n      </div>`}getHeaderSortingArrow(e){return(this.sorted.id===e?this.sorted.order:"")?'<span data-element="arrow" class="sortable-table__sort-arrow">\n          <span class="sort-arrow"></span>\n        </span>':""}getTableBody(e){return`\n      <div data-element="body" class="sortable-table__body">\n        ${this.getTableRows(e)}\n      </div>`}getTableRows(e){return e.map(e=>this.rowTemplate(this.getTableRow(e),e)).join("")}getTableRow(e){return this.headersConfig.map(e=>{let{id:t,template:s}=e;return{id:t,template:s}}).map(t=>{let{id:s,template:n}=t;return n?n(e[s]):`<div class="sortable-table__cell">${e[s]}</div>`}).join("")}async render(){const{id:e,order:t}=this.sorted,s=document.createElement("div");s.innerHTML=this.getTemplate();const n=s.firstElementChild;this.element=n,this.subElements=this.getSubElements(n);const i=await this.loadData(e,t,this.start,this.end);this.renderRows(i),this.initEventListeners()}async loadData(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.start,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.end;const r=new URL(this.url,"https://course-js.javascript.ru/");r.searchParams.set("_sort",e),r.searchParams.set("_order",t),r.searchParams.set("_start",s),r.searchParams.set("_end",i),this.element.classList.add("sortable-table_loading");const a=await(0,n.Z)(r.toString());return this.element.classList.remove("sortable-table_loading"),a}sortOnClient(e,t){const s=this.sortData(e,t);this.subElements.body.innerHTML=this.getTableRows(s)}async sortOnServer(e,t,s,n){const i=await this.loadData(e,t,s,n);this.renderRows(i)}renderRows(e){e.length?(this.element.classList.remove("sortable-table_empty"),this.addRows(e)):this.element.classList.add("sortable-table_empty")}addRows(e){this.data=e,this.subElements.body.innerHTML=this.getTableRows(e)}sortData(e,t){const s=[...this.data],n=this.headersConfig.find(t=>t.id===e),{sortType:i}=n,r={asc:1,desc:-1}[t];return s.sort((t,s)=>{switch(i){case"number":return r*(t[e]-s[e]);case"string":return r*t[e].localeCompare(s[e],["ru","en"]);default:return r*(t[e]-s[e])}})}update(e){const t=document.createElement("div");this.data=[...this.data,...e],t.innerHTML=this.renderRows(e),this.subElements.body.append(...t.childNodes)}initEventListeners(){this.subElements.header.addEventListener("pointerdown",this.onHeaderClick),window.addEventListener("scroll",this.onWindowScroll)}remove(){this.element&&this.element.remove()}destroy(){this.remove(),this.element=null,this.subElements={},window.removeEventListener("scroll",this.onWindowScroll)}}},63:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var n=s(348);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class r{constructor(){let{min:e=0,max:t=4e3,formatValue:s=(e=>"$"+e),selected:n={from:e,to:t}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,"element",void 0),i(this,"subElements",{}),i(this,"onThumbPointerMove",e=>{e.preventDefault();const{left:t,right:s,width:n}=this.subElements.inner.getBoundingClientRect();if(this.dragging===this.subElements.thumbLeft){let s=(e.clientX-t+this.shiftX)/n;s<0&&(s=0),s*=100;const i=parseFloat(this.subElements.thumbRight.style.right);s+i>100&&(s=100-i),this.dragging.style.left=this.subElements.progress.style.left=s+"%",this.subElements.from.innerHTML=this.formatValue(this.getValue().from)}if(this.dragging===this.subElements.thumbRight){let t=(s-e.clientX-this.shiftX)/n;t<0&&(t=0),t*=100;const i=parseFloat(this.subElements.thumbLeft.style.left);i+t>100&&(t=100-i),this.dragging.style.right=this.subElements.progress.style.right=t+"%",this.subElements.to.innerHTML=this.formatValue(this.getValue().to)}}),i(this,"onThumbPointerUp",()=>{this.element.classList.remove("range-slider_dragging"),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp),this.element.dispatchEvent(new CustomEvent("range-select",{detail:this.getValue(),bubbles:!0}))}),this.min=e,this.max=t,this.formatValue=s,this.selected=n,this.render()}get template(){const{from:e,to:t}=this.selected;return`<div class="range-slider">\n      <span data-element="from">${this.formatValue(e)}</span>\n      <div data-element="inner" class="range-slider__inner">\n        <span data-element="progress" class="range-slider__progress"></span>\n        <span data-element="thumbLeft" class="range-slider__thumb-left"></span>\n        <span data-element="thumbRight" class="range-slider__thumb-right"></span>\n      </div>\n      <span data-element="to">${this.formatValue(t)}</span>\n    </div>`}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.element.ondragstart=()=>!1,this.subElements=this.getSubElements(e),this.initEventListeners(),this.update()}initEventListeners(){const{thumbLeft:e,thumbRight:t}=this.subElements;e.addEventListener("pointerdown",e=>this.onThumbPointerDown(e)),t.addEventListener("pointerdown",e=>this.onThumbPointerDown(e))}getSubElements(e){const t={},s=e.querySelectorAll("[data-element]");for(const e of s){t[e.dataset.element]=e}return t}remove(){this.element.remove()}destroy(){this.remove(),document.removeEventListener("pointermove",this.onThumbPointerMove),document.removeEventListener("pointerup",this.onThumbPointerUp)}update(){const e=this.max-this.min,t=Math.floor((this.selected.from-this.min)/e*100)+"%",s=Math.floor((this.max-this.selected.to)/e*100)+"%";this.subElements.progress.style.left=t,this.subElements.progress.style.right=s,this.subElements.thumbLeft.style.left=t,this.subElements.thumbRight.style.right=s}onThumbPointerDown(e){const t=e.target;e.preventDefault();const{left:s,right:n}=t.getBoundingClientRect();t===this.subElements.thumbLeft?this.shiftX=n-e.clientX:this.shiftX=s-e.clientX,this.dragging=t,this.element.classList.add("range-slider_dragging"),document.addEventListener("pointermove",this.onThumbPointerMove),document.addEventListener("pointerup",this.onThumbPointerUp)}getValue(){const e=this.max-this.min,{left:t}=this.subElements.thumbLeft.style,{right:s}=this.subElements.thumbRight.style;return{from:Math.round(this.min+.01*parseFloat(t)*e),to:Math.round(this.max-.01*parseFloat(s)*e)}}}const a=[{id:"images",title:"Image",sortable:!1,template:e=>`\n          <div class="sortable-table__cell">\n            <img class="sortable-table-image" alt="Image" src="${e[0].url}">\n          </div>\n        `},{id:"title",title:"Name",sortable:!0,sortType:"string"},{id:"quantity",title:"Quantity",sortable:!0,sortType:"number"},{id:"price",title:"Price",sortable:!0,sortType:"number"},{id:"status",title:"Status",sortable:!0,sortType:"number",template:e=>`<div class="sortable-table__cell">\n          ${e>0?"Active":"Inactive"}\n        </div>`}];var l=s(856);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class d{constructor(){o(this,"element",void 0),o(this,"subElements",{}),o(this,"components",{}),o(this,"range",{min:0,max:4e3}),o(this,"url",new URL("api/rest/products","https://course-js.javascript.ru/")),o(this,"onSliderRangeSelect",e=>{const{from:t,to:s}=e.detail;this.url.searchParams.set("price_gte",t),this.url.searchParams.set("price_lte",s),this.update()}),o(this,"onFilterNameInput",e=>{setTimeout(()=>{if(!e.target.value.length)return this.url.searchParams.delete("title_like"),void this.update();this.url.searchParams.set("title_like",e.target.value),this.update()},500)}),o(this,"onFilterStatusChange",e=>{if(""!==e.target.value)return this.url.searchParams.set("status",e.target.value),void this.update();this.url.searchParams.delete("status"),this.update()})}getTemplate(){return'\n      <div class="products-list">\n        <div class="content__top-panel">\n          <h1 class="page-title">Products</h1>\n          <a href="/products/add" class="button-primary">Add product</a>\n        </div>\n        <div class="content-box content-box_small">\n          <form class="form-inline">\n            <div class="form-group">\n              <label class="form-label">Sort by:</label>\n              <input type="text" data-element="filterName" class="form-control" placeholder="Product name">\n            </div>\n            <div class="form-group" data-element="sliderContainer">\n              <label class="form-label">Price:</label>\n            </div>\n            <div class="form-group">\n              <label class="form-label">Status:</label>\n              <select class="form-control" data-element="filterStatus">\n                <option value="" selected="">Any</option>\n                <option value="1">Active</option>\n                <option value="0">Inactive</option>\n              </select>\n            </div>\n          </form>\n        </div>\n        <div data-element="productsContainer" class="products-list__container"></div>\n      </div>'}getSubElements(){return[...this.element.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}initComponents(){const e=new r({min:this.range.min,max:this.range.max}),t=new n.Z(a,{url:"api/rest/products?_embed=subcategory.category",range:this.range,rowTemplate:(e,t)=>`<a href="/products/${t.id}" class="sortable-table__row">${e}</a>`});this.components={doubleSlider:e,sortableTable:t}}getComponents(){const{sliderContainer:e,productsContainer:t}=this.subElements;e.append(this.components.doubleSlider.element),t.append(this.components.sortableTable.element)}async render(){const e=document.createElement("div");return e.innerHTML=this.getTemplate(),this.element=e.firstElementChild,this.subElements=this.getSubElements(),this.initComponents(),this.getComponents(),this.initEventListeners(),this.element}async update(){const e=await(0,l.Z)(this.url);this.components.sortableTable.update(e)}initEventListeners(){this.components.doubleSlider.element.addEventListener("range-select",this.onSliderRangeSelect),this.subElements.filterName.addEventListener("input",this.onFilterNameInput),this.subElements.filterStatus.addEventListener("change",this.onFilterStatusChange)}remove(){this.element&&this.element.remove}destroy(){this.remove(),this.element=null,this.subElements={},this.components={},Object.values(this.components).forEach(e=>{e.destroy()})}}},856:(e,t,s)=>{async function n(e,t){let s,n;try{s=await fetch(e.toString(),t)}catch(e){throw new i(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{n=await s.json(),e=n.error&&n.error.message||n.data&&n.data.error&&n.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new i(s,n,t)}try{return await s.json()}catch(e){throw new i(s,null,e.message)}}s.d(t,{Z:()=>n});class i extends Error{constructor(e,t,s){var n,i,r;super(s),r="FetchError",(i="name")in(n=this)?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof i&&alert(e.reason.message)})}}]);
//# sourceMappingURL=products-list-index-js-197.js.map