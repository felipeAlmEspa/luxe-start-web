(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2968:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2093,23)),Promise.resolve().then(s.t.bind(s,7735,23)),Promise.resolve().then(s.bind(s,8301)),Promise.resolve().then(s.t.bind(s,347,23)),Promise.resolve().then(s.bind(s,6072))},8301:(e,t,s)=>{"use strict";s.d(t,{MyHeader:()=>y});var i=s(5155);let a=(0,s(4057).A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);var r=s(7893),n=s(3100),l=s(4637),o=s(1461),u=s(77),h=s(8318),c=s(3168),d=s(3010),f=s(2115),m=s(123),p=s(6658);let y=()=>{let[e,t]=(0,f.useState)("Mis muebles"),s=(0,p.useRouter)(),y=(0,m.w)(e=>e.cargaInicial);(0,f.useEffect)(()=>{y()},[y]);let g=(0,m.w)(e=>e.state.listaFavoritos),v=(0,f.useCallback)(e=>{e instanceof Set&&t([...e][0].toString())},[]),b=(0,f.useCallback)(()=>{s.push("/pages/favoritos")},[s]);return(0,i.jsx)("div",{className:"fixe top-0 left-0 w-full z-50 bg-white shadow-md",children:(0,i.jsxs)("nav",{className:"bg-white",children:[(0,i.jsxs)("div",{className:"flex justify-between pl-3 pr-3",children:[(0,i.jsxs)("div",{className:"text-black grid grid-cols-3 gap-2",children:[(0,i.jsx)("small",{children:"Whatsapp: 099999999"}),(0,i.jsx)("small",{children:"tuemailaqui@gmail.com"})]}),(0,i.jsx)("div",{className:"text-black",children:(0,i.jsx)("small",{children:"Cuneca - Ecuador"})})]}),(0,i.jsx)(l.y,{}),(0,i.jsx)("div",{className:"w-full grid",children:(0,i.jsxs)("div",{className:"flex pb-2 pt-2 flex-col sm:flex-row",children:[(0,i.jsx)("div",{className:"w-full sm:w-1/3 sm:text-left text-center",children:(0,i.jsxs)(o.T,{className:"bg-transparent text-black relative",color:"primary",onPress:()=>s.push("/"),children:[(0,i.jsx)(a,{className:"w-15 h-15"}),(0,i.jsx)("strong",{children:"Inicio"})]})}),(0,i.jsx)("div",{className:"w-full sm:w-1/3 text-center",children:(0,i.jsx)("h1",{className:"text-xl sm:text-3xl font-serif",children:"MUEBLER\xcdA LUXE"})}),(0,i.jsxs)("div",{className:"w-full sm:w-1/3 flex justify-center sm:justify-end",children:[(0,i.jsx)("div",{className:"sm:hidden",children:(0,i.jsxs)(u.A,{children:[(0,i.jsx)(h.b,{children:(0,i.jsx)(o.T,{variant:"bordered",children:e})}),(0,i.jsxs)(c.y,{disallowEmptySelection:!0,"aria-label":"Single selection example",selectedKeys:e,selectionMode:"single",variant:"flat",onSelectionChange:v,children:[(0,i.jsx)(d.Y,{onPress:b,children:(0,i.jsxs)("div",{className:"flex justify-between relative",children:[(0,i.jsx)("small",{children:"Favoritos"}),(0,i.jsx)(r.A,{className:"w-7 h-7"}),g.length>0&&(0,i.jsx)("span",{className:"absolute text-center -top-1 -right-2 bg-primary text-white text-xs font-bold px-1 py-1 rounded-full w-6 h-6",children:g.length})]})},"Favoritos"),(0,i.jsx)(d.Y,{children:(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("small",{children:"Carrito"}),(0,i.jsx)(n.A,{})]})},"Carrito")]})]})}),(0,i.jsxs)("div",{className:"hidden sm:flex",children:[(0,i.jsxs)(o.T,{className:"bg-transparent text-black relative",color:"primary",onPress:()=>s.push("/pages/favoritos"),children:[(0,i.jsx)("small",{children:"Favoritos"}),(0,i.jsx)(r.A,{className:"w-7 h-7"}),g.length>0&&(0,i.jsx)("span",{className:"absolute top-1 right-2 bg-primary text-white text-xs font-bold px-1 py-1 rounded-full w-6 h-6",children:g.length})]}),(0,i.jsxs)(o.T,{className:"bg-transparent text-black",color:"primary",children:[(0,i.jsx)("small",{children:"Carrito"}),(0,i.jsx)(n.A,{})]})]})]})]})})]})})}},6072:(e,t,s)=>{"use strict";s.d(t,{Providers:()=>w});var i=s(5155),a=s(4403),r=s(7702),n=s(5586),l=s(9323),o=class extends l.Q{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,s){let i=t.queryKey,n=t.queryHash??(0,a.F$)(i,t),l=this.get(n);return l||(l=new r.X({client:e,queryKey:i,queryHash:n,options:e.defaultQueryOptions(t),state:s,defaultOptions:e.getQueryDefaults(i)}),this.add(l)),l}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){n.j.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,a.MK)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,a.MK)(e,t)):t}notify(e){n.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){n.j.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){n.j.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=s(2955),h=s(4267),c=class extends u.k{#t;#s;#i;constructor(e){super(),this.mutationId=e.mutationId,this.#s=e.mutationCache,this.#t=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#t.includes(e)||(this.#t.push(e),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#t=this.#t.filter(t=>t!==e),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(e){this.#i=(0,h.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{this.#a({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let t="pending"===this.state.status,s=!this.#i.canStart();try{if(!t){this.#a({type:"pending",variables:e,isPaused:s}),await this.#s.config.onMutate?.(e,this);let t=await this.options.onMutate?.(e);t!==this.state.context&&this.#a({type:"pending",context:t,variables:e,isPaused:s})}let i=await this.#i.start();return await this.#s.config.onSuccess?.(i,e,this.state.context,this),await this.options.onSuccess?.(i,e,this.state.context),await this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,e,this.state.context),this.#a({type:"success",data:i}),i}catch(t){try{throw await this.#s.config.onError?.(t,e,this.state.context,this),await this.options.onError?.(t,e,this.state.context),await this.#s.config.onSettled?.(void 0,t,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,t,e,this.state.context),t}finally{this.#a({type:"error",error:t})}}finally{this.#s.runNext(this)}}#a(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),n.j.batch(()=>{this.#t.forEach(t=>{t.onMutationUpdate(e)}),this.#s.notify({mutation:this,type:"updated",action:e})})}},d=class extends l.Q{constructor(e={}){super(),this.config=e,this.#r=new Set,this.#n=new Map,this.#l=0}#r;#n;#l;build(e,t,s){let i=new c({mutationCache:this,mutationId:++this.#l,options:e.defaultMutationOptions(t),state:s});return this.add(i),i}add(e){this.#r.add(e);let t=f(e);if("string"==typeof t){let s=this.#n.get(t);s?s.push(e):this.#n.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#r.delete(e)){let t=f(e);if("string"==typeof t){let s=this.#n.get(t);if(s){if(s.length>1){let t=s.indexOf(e);-1!==t&&s.splice(t,1)}else s[0]===e&&this.#n.delete(t)}}}this.notify({type:"removed",mutation:e})}canRun(e){let t=f(e);if("string"!=typeof t)return!0;{let s=this.#n.get(t),i=s?.find(e=>"pending"===e.state.status);return!i||i===e}}runNext(e){let t=f(e);if("string"!=typeof t)return Promise.resolve();{let s=this.#n.get(t)?.find(t=>t!==e&&t.state.isPaused);return s?.continue()??Promise.resolve()}}clear(){n.j.batch(()=>{this.#r.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#r.clear(),this.#n.clear()})}getAll(){return Array.from(this.#r)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,a.nJ)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,a.nJ)(e,t))}notify(e){n.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return n.j.batch(()=>Promise.all(e.map(e=>e.continue().catch(a.lQ))))}};function f(e){return e.options.scope?.id}var m=s(4017),p=s(8248);function y(e){return{onFetch:(t,s)=>{let i=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],l=t.state.data?.pageParams||[],o={pages:[],pageParams:[]},u=0,h=async()=>{let s=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?s=!0:t.signal.addEventListener("abort",()=>{s=!0}),t.signal)})},c=(0,a.ZM)(t.options,t.fetchOptions),d=async(e,i,r)=>{if(s)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let n={client:t.client,queryKey:t.queryKey,pageParam:i,direction:r?"backward":"forward",meta:t.options.meta};h(n);let l=await c(n),{maxPages:o}=t.options,u=r?a.ZZ:a.y9;return{pages:u(e.pages,l,o),pageParams:u(e.pageParams,i,o)}};if(r&&n.length){let e="backward"===r,t={pages:n,pageParams:l},s=(e?function(e,{pages:t,pageParams:s}){return t.length>0?e.getPreviousPageParam?.(t[0],t,s[0],s):void 0}:g)(i,t);o=await d(t,s,e)}else{let t=e??n.length;do{let e=0===u?l[0]??i.initialPageParam:g(i,o);if(u>0&&null==e)break;o=await d(o,e),u++}while(u<t)}return o};t.options.persister?t.fetchFn=()=>t.options.persister?.(h,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=h}}}function g(e,{pages:t,pageParams:s}){let i=t.length-1;return t.length>0?e.getNextPageParam(t[i],t,s[i],s):void 0}var v=class{#o;#s;#u;#h;#c;#d;#f;#m;constructor(e={}){this.#o=e.queryCache||new o,this.#s=e.mutationCache||new d,this.#u=e.defaultOptions||{},this.#h=new Map,this.#c=new Map,this.#d=0}mount(){this.#d++,1===this.#d&&(this.#f=m.m.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#m=p.t.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#d--,0===this.#d&&(this.#f?.(),this.#f=void 0,this.#m?.(),this.#m=void 0)}isFetching(e){return this.#o.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#s.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),s=this.#o.build(this,t),i=s.state.data;return void 0===i?this.fetchQuery(e):(e.revalidateIfStale&&s.isStaleByTime((0,a.d2)(t.staleTime,s))&&this.prefetchQuery(t),Promise.resolve(i))}getQueriesData(e){return this.#o.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,s){let i=this.defaultQueryOptions({queryKey:e}),r=this.#o.get(i.queryHash),n=r?.state.data,l=(0,a.Zw)(t,n);if(void 0!==l)return this.#o.build(this,i).setData(l,{...s,manual:!0})}setQueriesData(e,t,s){return n.j.batch(()=>this.#o.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,s)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#o.get(t.queryHash)?.state}removeQueries(e){let t=this.#o;n.j.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let s=this.#o,i={type:"active",...e};return n.j.batch(()=>(s.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(i,t)))}cancelQueries(e,t={}){let s={revert:!0,...t};return Promise.all(n.j.batch(()=>this.#o.findAll(e).map(e=>e.cancel(s)))).then(a.lQ).catch(a.lQ)}invalidateQueries(e,t={}){return n.j.batch(()=>{if(this.#o.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")return Promise.resolve();let s={...e,type:e?.refetchType??e?.type??"active"};return this.refetchQueries(s,t)})}refetchQueries(e,t={}){let s={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(n.j.batch(()=>this.#o.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,s);return s.throwOnError||(t=t.catch(a.lQ)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(a.lQ)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let s=this.#o.build(this,t);return s.isStaleByTime((0,a.d2)(t.staleTime,s))?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(a.lQ).catch(a.lQ)}fetchInfiniteQuery(e){return e.behavior=y(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(a.lQ).catch(a.lQ)}ensureInfiniteQueryData(e){return e.behavior=y(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return p.t.isOnline()?this.#s.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#s}getDefaultOptions(){return this.#u}setDefaultOptions(e){this.#u=e}setQueryDefaults(e,t){this.#h.set((0,a.EN)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#h.values()],s={};return t.forEach(t=>{(0,a.Cp)(e,t.queryKey)&&Object.assign(s,t.defaultOptions)}),s}setMutationDefaults(e,t){this.#c.set((0,a.EN)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#c.values()],s={};return t.forEach(t=>{(0,a.Cp)(e,t.mutationKey)&&(s={...s,...t.defaultOptions})}),s}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#u.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,a.F$)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===a.hT&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#u.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#o.clear(),this.#s.clear()}},b=s(5906),x=s(2115);function w(e){let{children:t}=e,[s]=(0,x.useState)(()=>new v);return(0,i.jsx)(b.Ht,{client:s,children:t})}},123:(e,t,s)=>{"use strict";s.d(t,{w:()=>r});var i=s(9827),a=s(6404);let r=(0,i.v)(e=>({state:{listaFavoritos:[]},setState:t=>e(e=>{let s={...e.state,...t};return a.q.setItem("muebles",s.listaFavoritos),{state:s}}),addFavorito:t=>e(e=>{let s=[...e.state.listaFavoritos,t];return a.q.setItem("muebles",s),{state:{...e.state,listaFavoritos:s}}}),removeFavorito:t=>e(e=>{let s=e.state.listaFavoritos.filter(e=>e.id!==t);return a.q.setItem("muebles",s),{state:{...e.state,listaFavoritos:s}}}),updateFavorito:t=>e(e=>{let s=e.state.listaFavoritos.map(e=>e.id===t.id?t:e);return a.q.setItem("muebles",s),{state:{...e.state,listaFavoritos:s}}}),cargaInicial:()=>e(()=>{var e;return{state:{listaFavoritos:null!==(e=a.q.getItem("muebles"))&&void 0!==e?e:[]}}})}))},6404:(e,t,s)=>{"use strict";s.d(t,{q:()=>i});class i{static setItem(e,t){localStorage.setItem(e,JSON.stringify(t))}static getItem(e){let t=localStorage.getItem(e);return t?JSON.parse(t):null}static removeItem(e){localStorage.removeItem(e)}static addMueble(e){let t=this.getItem("muebles")||[];t.push(e),this.setItem("muebles",t)}static removeMueble(e){let t=this.getItem("muebles")||[];t=t.filter(t=>t.id!==e),this.setItem("muebles",t)}static clear(){localStorage.clear()}}},347:()=>{},2093:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},7735:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[777,690,526,882,441,517,358],()=>t(2968)),_N_E=e.O()}]);