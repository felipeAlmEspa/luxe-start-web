(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2968:(t,e,s)=>{Promise.resolve().then(s.t.bind(s,2093,23)),Promise.resolve().then(s.t.bind(s,7735,23)),Promise.resolve().then(s.bind(s,8301)),Promise.resolve().then(s.t.bind(s,347,23)),Promise.resolve().then(s.bind(s,6072))},8301:(t,e,s)=>{"use strict";s.d(e,{MyHeader:()=>y});var i=s(5155);let a=(0,s(4057).A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);var r=s(7893),n=s(3100),l=s(4637),o=s(1461),u=s(77),h=s(8318),c=s(3168),d=s(3010),f=s(2115),m=s(123),p=s(6658);let y=()=>{let[t,e]=(0,f.useState)("Mis muebles"),s=(0,p.useRouter)(),y=(0,m.w)(t=>t.cargaInicial);(0,f.useEffect)(()=>{y()},[y]);let g=(0,m.w)(t=>t.state.listaFavoritos),v=(0,f.useCallback)(t=>{t instanceof Set&&e([...t][0].toString())},[]),b=(0,f.useCallback)(()=>{s.push("/pages/favoritos")},[s]);return(0,i.jsx)("div",{className:"fixe top-0 left-0 w-full z-50 bg-white shadow-md",children:(0,i.jsxs)("nav",{className:"bg-white",children:[(0,i.jsxs)("div",{className:"flex justify-between pl-3 pr-3",children:[(0,i.jsxs)("div",{className:"text-black grid grid-cols-3 gap-2",children:[(0,i.jsx)("small",{children:"Whatsapp: 099999999"}),(0,i.jsx)("small",{children:"tuemailaqui@gmail.com"})]}),(0,i.jsx)("div",{className:"text-black",children:(0,i.jsx)("small",{children:"Cuneca - Ecuador"})})]}),(0,i.jsx)(l.y,{}),(0,i.jsx)("div",{className:"w-full grid",children:(0,i.jsxs)("div",{className:"flex pb-2 pt-2 flex-col sm:flex-row",children:[(0,i.jsx)("div",{className:"w-full sm:w-1/3 sm:text-left text-center",children:(0,i.jsxs)(o.T,{className:"bg-transparent text-black relative",color:"primary",onPress:()=>s.push("/"),children:[(0,i.jsx)(a,{className:"w-15 h-15"}),(0,i.jsx)("strong",{children:"Inicio"})]})}),(0,i.jsx)("div",{className:"w-full sm:w-1/3 text-center",children:(0,i.jsx)("h1",{className:"text-xl sm:text-3xl font-serif",children:"MUEBLER\xcdA LUXE"})}),(0,i.jsxs)("div",{className:"w-full sm:w-1/3 flex justify-center sm:justify-end",children:[(0,i.jsx)("div",{className:"sm:hidden",children:(0,i.jsxs)(u.A,{children:[(0,i.jsx)(h.b,{children:(0,i.jsx)(o.T,{variant:"bordered",children:t})}),(0,i.jsxs)(c.y,{disallowEmptySelection:!0,"aria-label":"Single selection example",selectedKeys:t,selectionMode:"single",variant:"flat",onSelectionChange:v,children:[(0,i.jsx)(d.Y,{onPress:b,children:(0,i.jsxs)("div",{className:"flex justify-between relative",children:[(0,i.jsx)("small",{children:"Favoritos"}),(0,i.jsx)(r.A,{className:"w-7 h-7"}),g.length>0&&(0,i.jsx)("span",{className:"absolute text-center -top-1 -right-2 bg-primary text-white text-xs font-bold px-1 py-1 rounded-full w-6 h-6",children:g.length})]})},"Favoritos"),(0,i.jsx)(d.Y,{children:(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("small",{children:"Carrito"}),(0,i.jsx)(n.A,{})]})},"Carrito")]})]})}),(0,i.jsxs)("div",{className:"hidden sm:flex",children:[(0,i.jsxs)(o.T,{className:"bg-transparent text-black relative",color:"primary",onPress:()=>s.push("/pages/favoritos"),children:[(0,i.jsx)("small",{children:"Favoritos"}),(0,i.jsx)(r.A,{className:"w-7 h-7"}),g.length>0&&(0,i.jsx)("span",{className:"absolute top-1 right-2 bg-primary text-white text-xs font-bold px-1 py-1 rounded-full w-6 h-6",children:g.length})]}),(0,i.jsxs)(o.T,{className:"bg-transparent text-black",color:"primary",children:[(0,i.jsx)("small",{children:"Carrito"}),(0,i.jsx)(n.A,{})]})]})]})]})})]})})}},6072:(t,e,s)=>{"use strict";s.d(e,{Providers:()=>w});var i=s(5155),a=s(4403),r=s(7702),n=s(5586),l=s(9323),o=class extends l.Q{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){let i=e.queryKey,n=e.queryHash??(0,a.F$)(i,e),l=this.get(n);return l||(l=new r.X({client:t,queryKey:i,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(l)),l}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.j.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,a.MK)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,a.MK)(t,e)):e}notify(t){n.j.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.j.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.j.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},u=s(2955),h=s(4267),c=class extends u.k{#e;#s;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.mutationCache,this.#e=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){this.#i=(0,h.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#a({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let e="pending"===this.state.status,s=!this.#i.canStart();try{if(!e){this.#a({type:"pending",variables:t,isPaused:s}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#a({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#i.start();return await this.#s.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#a({type:"success",data:i}),i}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#a({type:"error",error:e})}}finally{this.#s.runNext(this)}}#a(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.j.batch(()=>{this.#e.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}},d=class extends l.Q{constructor(t={}){super(),this.config=t,this.#r=new Set,this.#n=new Map,this.#l=0}#r;#n;#l;build(t,e,s){let i=new c({mutationCache:this,mutationId:++this.#l,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#r.add(t);let e=f(t);if("string"==typeof e){let s=this.#n.get(e);s?s.push(t):this.#n.set(e,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#r.delete(t)){let e=f(t);if("string"==typeof e){let s=this.#n.get(e);if(s){if(s.length>1){let e=s.indexOf(t);-1!==e&&s.splice(e,1)}else s[0]===t&&this.#n.delete(e)}}}this.notify({type:"removed",mutation:t})}canRun(t){let e=f(t);if("string"!=typeof e)return!0;{let s=this.#n.get(e),i=s?.find(t=>"pending"===t.state.status);return!i||i===t}}runNext(t){let e=f(t);if("string"!=typeof e)return Promise.resolve();{let s=this.#n.get(e)?.find(e=>e!==t&&e.state.isPaused);return s?.continue()??Promise.resolve()}}clear(){n.j.batch(()=>{this.#r.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#r.clear(),this.#n.clear()})}getAll(){return Array.from(this.#r)}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,a.nJ)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,a.nJ)(t,e))}notify(t){n.j.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return n.j.batch(()=>Promise.all(t.map(t=>t.continue().catch(a.lQ))))}};function f(t){return t.options.scope?.id}var m=s(4017),p=s(8248);function y(t){return{onFetch:(e,s)=>{let i=e.options,r=e.fetchOptions?.meta?.fetchMore?.direction,n=e.state.data?.pages||[],l=e.state.data?.pageParams||[],o={pages:[],pageParams:[]},u=0,h=async()=>{let s=!1,h=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},c=(0,a.ZM)(e.options,e.fetchOptions),d=async(t,i,r)=>{if(s)return Promise.reject();if(null==i&&t.pages.length)return Promise.resolve(t);let n={client:e.client,queryKey:e.queryKey,pageParam:i,direction:r?"backward":"forward",meta:e.options.meta};h(n);let l=await c(n),{maxPages:o}=e.options,u=r?a.ZZ:a.y9;return{pages:u(t.pages,l,o),pageParams:u(t.pageParams,i,o)}};if(r&&n.length){let t="backward"===r,e={pages:n,pageParams:l},s=(t?function(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}:g)(i,e);o=await d(e,s,t)}else{let e=t??n.length;do{let t=0===u?l[0]??i.initialPageParam:g(i,o);if(u>0&&null==t)break;o=await d(o,t),u++}while(u<e)}return o};e.options.persister?e.fetchFn=()=>e.options.persister?.(h,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=h}}}function g(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}var v=class{#o;#s;#u;#h;#c;#d;#f;#m;constructor(t={}){this.#o=t.queryCache||new o,this.#s=t.mutationCache||new d,this.#u=t.defaultOptions||{},this.#h=new Map,this.#c=new Map,this.#d=0}mount(){this.#d++,1===this.#d&&(this.#f=m.m.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#m=p.t.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#d--,0===this.#d&&(this.#f?.(),this.#f=void 0,this.#m?.(),this.#m=void 0)}isFetching(t){return this.#o.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#s.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.defaultQueryOptions(t),s=this.#o.build(this,e),i=s.state.data;return void 0===i?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime((0,a.d2)(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return this.#o.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),r=this.#o.get(i.queryHash),n=r?.state.data,l=(0,a.Zw)(e,n);if(void 0!==l)return this.#o.build(this,i).setData(l,{...s,manual:!0})}setQueriesData(t,e,s){return n.j.batch(()=>this.#o.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state}removeQueries(t){let e=this.#o;n.j.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#o,i={type:"active",...t};return n.j.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t,e={}){let s={revert:!0,...e};return Promise.all(n.j.batch(()=>this.#o.findAll(t).map(t=>t.cancel(s)))).then(a.lQ).catch(a.lQ)}invalidateQueries(t,e={}){return n.j.batch(()=>{if(this.#o.findAll(t).forEach(t=>{t.invalidate()}),t?.refetchType==="none")return Promise.resolve();let s={...t,type:t?.refetchType??t?.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t,e={}){let s={...e,cancelRefetch:e.cancelRefetch??!0};return Promise.all(n.j.batch(()=>this.#o.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(a.lQ)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(a.lQ)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#o.build(this,e);return s.isStaleByTime((0,a.d2)(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(a.lQ).catch(a.lQ)}fetchInfiniteQuery(t){return t.behavior=y(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(a.lQ).catch(a.lQ)}ensureInfiniteQueryData(t){return t.behavior=y(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return p.t.isOnline()?this.#s.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#s}getDefaultOptions(){return this.#u}setDefaultOptions(t){this.#u=t}setQueryDefaults(t,e){this.#h.set((0,a.EN)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#h.values()],s={};return e.forEach(e=>{(0,a.Cp)(t,e.queryKey)&&Object.assign(s,e.defaultOptions)}),s}setMutationDefaults(t,e){this.#c.set((0,a.EN)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#c.values()],s={};return e.forEach(e=>{(0,a.Cp)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#u.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,a.F$)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===a.hT&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#u.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#o.clear(),this.#s.clear()}},b=s(5906),x=s(2115);function w(t){let{children:e}=t,[s]=(0,x.useState)(()=>new v);return(0,i.jsx)(b.Ht,{client:s,children:e})}},123:(t,e,s)=>{"use strict";s.d(e,{w:()=>r});var i=s(9827),a=s(6404);let r=(0,i.v)(t=>({state:{listaFavoritos:[]},setState:e=>t(t=>{let s={...t.state,...e};return a.q.setItem("muebles",s.listaFavoritos),{state:s}}),addFavorito:e=>t(t=>{let s=[...t.state.listaFavoritos,e];return a.q.setItem("muebles",s),{state:{...t.state,listaFavoritos:s}}}),removeFavorito:e=>t(t=>{let s=t.state.listaFavoritos.filter(t=>t.id!==e);return a.q.setItem("muebles",s),{state:{...t.state,listaFavoritos:s}}}),updateFavorito:e=>t(t=>{let s=t.state.listaFavoritos.map(t=>t.id===e.id?e:t);return a.q.setItem("muebles",s),{state:{...t.state,listaFavoritos:s}}}),cargaInicial:()=>t(()=>{var t;return{state:{listaFavoritos:null!==(t=a.q.getItem("muebles"))&&void 0!==t?t:[]}}})}))},6404:(t,e,s)=>{"use strict";s.d(e,{q:()=>i});class i{static setItem(t,e){localStorage.setItem(t,JSON.stringify(e))}static getItem(t){let e=localStorage.getItem(t);return e?JSON.parse(e):null}static removeItem(t){localStorage.removeItem(t)}static addMueble(t){let e=this.getItem("muebles")||[];e.push(t),this.setItem("muebles",e)}static removeMueble(t){let e=this.getItem("muebles")||[];e=e.filter(e=>e.id!==t),this.setItem("muebles",e)}static clear(){localStorage.clear()}}},347:()=>{},2093:t=>{t.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_2d4bf9",variable:"__variable_2d4bf9"}},7735:t=>{t.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_392911",variable:"__variable_392911"}}},t=>{var e=e=>t(t.s=e);t.O(0,[777,690,526,882,441,517,358],()=>e(2968)),_N_E=t.O()}]);