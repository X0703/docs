import{Y as _e,d as le,b as O,h as he,j as se,Z as qe,m as xe,u as Je,n as Qe,o as Ze,_ as Ke}from"./app-3de1c7e7.js";import{c as We,am as Ge,an as et,m as tt,h as S,r as M,A as nt,o as at,B as rt,j as D,a0 as ot,T as Te,ae as it}from"./framework-1f2fdbd0.js";import{V as Me}from"./browser-6e6f2a67.js";function lt(e){return e.composedPath()[0]||null}const Re=We({render(){var e,a;return(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e)}});function ue(e){return e.composedPath()[0]}const st={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function ut(e,a,n){if(e==="mousemoveoutside"){const s=r=>{a.contains(ue(r))||n(r)};return{mousemove:s,touchstart:s}}else if(e==="clickoutside"){let s=!1;const r=f=>{s=!a.contains(ue(f))},u=f=>{s&&(a.contains(ue(f))||n(f))};return{mousedown:r,mouseup:u,touchstart:r,touchend:u}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function Ce(e,a,n){const s=st[e];let r=s.get(a);r===void 0&&s.set(a,r=new WeakMap);let u=r.get(n);return u===void 0&&r.set(n,u=ut(e,a,n)),u}function ct(e,a,n,s){if(e==="mousemoveoutside"||e==="clickoutside"){const r=Ce(e,a,n);return Object.keys(r).forEach(u=>{oe(u,document,r[u],s)}),!0}return!1}function dt(e,a,n,s){if(e==="mousemoveoutside"||e==="clickoutside"){const r=Ce(e,a,n);return Object.keys(r).forEach(u=>{J(u,document,r[u],s)}),!0}return!1}function ft(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,a=new WeakMap;function n(){e.set(this,!0)}function s(){e.set(this,!0),a.set(this,!0)}function r(o,i,d){const h=o[i];return o[i]=function(){return d.apply(o,arguments),h.apply(o,arguments)},o}function u(o,i){o[i]=Event.prototype[i]}const f=new WeakMap,P=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function R(){var o;return(o=f.get(this))!==null&&o!==void 0?o:null}function p(o,i){P!==void 0&&Object.defineProperty(o,"currentTarget",{configurable:!0,enumerable:!0,get:i??P.get})}const y={bubble:{},capture:{}},v={};function $(){const o=function(i){const{type:d,eventPhase:h,bubbles:g}=i,B=ue(i);if(h===2)return;const H=h===1?"capture":"bubble";let W=B;const T=[];for(;W===null&&(W=window),T.push(W),W!==window;)W=W.parentNode||null;const E=y.capture[d],L=y.bubble[d];if(r(i,"stopPropagation",n),r(i,"stopImmediatePropagation",s),p(i,R),H==="capture"){if(E===void 0)return;for(let k=T.length-1;k>=0&&!e.has(i);--k){const A=T[k],V=E.get(A);if(V!==void 0){f.set(i,A);for(const F of V){if(a.has(i))break;F(i)}}if(k===0&&!g&&L!==void 0){const F=L.get(A);if(F!==void 0)for(const ie of F){if(a.has(i))break;ie(i)}}}}else if(H==="bubble"){if(L===void 0)return;for(let k=0;k<T.length&&!e.has(i);++k){const A=T[k],V=L.get(A);if(V!==void 0){f.set(i,A);for(const F of V){if(a.has(i))break;F(i)}}}}u(i,"stopPropagation"),u(i,"stopImmediatePropagation"),p(i)};return o.displayName="evtdUnifiedHandler",o}function Y(){const o=function(i){const{type:d,eventPhase:h}=i;if(h!==2)return;const g=v[d];g!==void 0&&g.forEach(B=>B(i))};return o.displayName="evtdUnifiedWindowEventHandler",o}const N=$(),I=Y();function z(o,i){const d=y[o];return d[i]===void 0&&(d[i]=new Map,window.addEventListener(i,N,o==="capture")),d[i]}function U(o){return v[o]===void 0&&(v[o]=new Set,window.addEventListener(o,I)),v[o]}function Q(o,i){let d=o.get(i);return d===void 0&&o.set(i,d=new Set),d}function G(o,i,d,h){const g=y[i][d];if(g!==void 0){const B=g.get(o);if(B!==void 0&&B.has(h))return!0}return!1}function ee(o,i){const d=v[o];return!!(d!==void 0&&d.has(i))}function te(o,i,d,h){let g;if(typeof h=="object"&&h.once===!0?g=E=>{x(o,i,g,h),d(E)}:g=d,ct(o,i,g,h))return;const H=h===!0||typeof h=="object"&&h.capture===!0?"capture":"bubble",W=z(H,o),T=Q(W,i);if(T.has(g)||T.add(g),i===window){const E=U(o);E.has(g)||E.add(g)}}function x(o,i,d,h){if(dt(o,i,d,h))return;const B=h===!0||typeof h=="object"&&h.capture===!0,H=B?"capture":"bubble",W=z(H,o),T=Q(W,i);if(i===window&&!G(i,B?"bubble":"capture",o,d)&&ee(o,d)){const L=v[o];L.delete(d),L.size===0&&(window.removeEventListener(o,I),v[o]=void 0)}T.has(d)&&T.delete(d),T.size===0&&W.delete(i),W.size===0&&(window.removeEventListener(o,N,H==="capture"),y[H][o]=void 0)}return{on:te,off:x}}const{on:oe,off:J}=ft(),ht=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function mt(){return ht}function vt(e){const a={isDeactivated:!1};let n=!1;return Ge(()=>{if(a.isDeactivated=!1,!n){n=!0;return}e()}),et(()=>{a.isDeactivated=!0,n||(n=!0)}),a}const bt={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},gt=bt;function me(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.width?String(a.width):e.defaultWidth,s=e.formats[n]||e.formats[e.defaultWidth];return s}}function ae(e){return function(a,n){var s=n!=null&&n.context?String(n.context):"standalone",r;if(s==="formatting"&&e.formattingValues){var u=e.defaultFormattingWidth||e.defaultWidth,f=n!=null&&n.width?String(n.width):u;r=e.formattingValues[f]||e.formattingValues[u]}else{var P=e.defaultWidth,R=n!=null&&n.width?String(n.width):e.defaultWidth;r=e.values[R]||e.values[P]}var p=e.argumentCallback?e.argumentCallback(a):a;return r[p]}}function re(e){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.width,r=s&&e.matchPatterns[s]||e.matchPatterns[e.defaultMatchWidth],u=a.match(r);if(!u)return null;var f=u[0],P=s&&e.parsePatterns[s]||e.parsePatterns[e.defaultParseWidth],R=Array.isArray(P)?pt(P,function(v){return v.test(f)}):wt(P,function(v){return v.test(f)}),p;p=e.valueCallback?e.valueCallback(R):R,p=n.valueCallback?n.valueCallback(p):p;var y=a.slice(f.length);return{value:p,rest:y}}}function wt(e,a){for(var n in e)if(e.hasOwnProperty(n)&&a(e[n]))return n}function pt(e,a){for(var n=0;n<e.length;n++)if(a(e[n]))return n}function yt(e){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.match(e.matchPattern);if(!s)return null;var r=s[0],u=a.match(e.parsePattern);if(!u)return null;var f=e.valueCallback?e.valueCallback(u[0]):u[0];f=n.valueCallback?n.valueCallback(f):f;var P=a.slice(r.length);return{value:f,rest:P}}}var St={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Pt=function(a,n,s){var r,u=St[a];return typeof u=="string"?r=u:n===1?r=u.one:r=u.other.replace("{{count}}",n.toString()),s!=null&&s.addSuffix?s.comparison&&s.comparison>0?"in "+r:r+" ago":r};const Tt=Pt;var Mt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Rt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},xt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Wt={date:me({formats:Mt,defaultWidth:"full"}),time:me({formats:Rt,defaultWidth:"full"}),dateTime:me({formats:xt,defaultWidth:"full"})};const Ct=Wt;var Bt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ht=function(a,n,s,r){return Bt[a]};const Dt=Ht;var Et={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},kt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},zt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Lt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ft={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Xt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},jt=function(a,n){var s=Number(a),r=s%100;if(r>20||r<10)switch(r%10){case 1:return s+"st";case 2:return s+"nd";case 3:return s+"rd"}return s+"th"},Ot={ordinalNumber:jt,era:ae({values:Et,defaultWidth:"wide"}),quarter:ae({values:kt,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:ae({values:zt,defaultWidth:"wide"}),day:ae({values:Lt,defaultWidth:"wide"}),dayPeriod:ae({values:Ft,defaultWidth:"wide",formattingValues:Xt,defaultFormattingWidth:"wide"})};const $t=Ot;var Yt=/^(\d+)(th|st|nd|rd)?/i,At=/\d+/i,Nt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},It={any:[/^b/i,/^(a|c)/i]},Ut={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Vt={any:[/1/i,/2/i,/3/i,/4/i]},_t={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Jt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Zt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Kt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gt={ordinalNumber:yt({matchPattern:Yt,parsePattern:At,valueCallback:function(a){return parseInt(a,10)}}),era:re({matchPatterns:Nt,defaultMatchWidth:"wide",parsePatterns:It,defaultParseWidth:"any"}),quarter:re({matchPatterns:Ut,defaultMatchWidth:"wide",parsePatterns:Vt,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:re({matchPatterns:_t,defaultMatchWidth:"wide",parsePatterns:qt,defaultParseWidth:"any"}),day:re({matchPatterns:Jt,defaultMatchWidth:"wide",parsePatterns:Qt,defaultParseWidth:"any"}),dayPeriod:re({matchPatterns:Zt,defaultMatchWidth:"any",parsePatterns:Kt,defaultParseWidth:"any"})};const en=Gt;var tn={code:"en-US",formatDistance:Tt,formatLong:Ct,formatRelative:Dt,localize:$t,match:en,options:{weekStartsOn:0,firstWeekContainsDate:1}};const nn=tn,an={name:"en-US",locale:nn},rn=an;function fn(e){const{mergedLocaleRef:a,mergedDateLocaleRef:n}=tt(_e,null)||{},s=S(()=>{var u,f;return(f=(u=a==null?void 0:a.value)===null||u===void 0?void 0:u[e])!==null&&f!==void 0?f:gt[e]});return{dateLocaleRef:S(()=>{var u;return(u=n==null?void 0:n.value)!==null&&u!==void 0?u:rn}),localeRef:s}}const on=le("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[O(">",[le("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[O("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),O(">",[le("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),O(">, +",[le("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[he("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[O(">",[se("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),he("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[O(">",[se("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),he("disabled",[O(">",[se("scrollbar",{pointerEvents:"none"})])]),O(">",[se("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[qe(),O("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),ln=Object.assign(Object.assign({},xe.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Be=We({name:"Scrollbar",props:ln,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:n,mergedRtlRef:s}=Je(e),r=Qe("Scrollbar",s,a),u=M(null),f=M(null),P=M(null),R=M(null),p=M(null),y=M(null),v=M(null),$=M(null),Y=M(null),N=M(null),I=M(null),z=M(0),U=M(0),Q=M(!1),G=M(!1);let ee=!1,te=!1,x,o,i=0,d=0,h=0,g=0;const B=mt(),H=S(()=>{const{value:t}=$,{value:l}=y,{value:c}=N;return t===null||l===null||c===null?0:Math.min(t,c*t/l+e.size*1.5)}),W=S(()=>`${H.value}px`),T=S(()=>{const{value:t}=Y,{value:l}=v,{value:c}=I;return t===null||l===null||c===null?0:c*t/l+e.size*1.5}),E=S(()=>`${T.value}px`),L=S(()=>{const{value:t}=$,{value:l}=z,{value:c}=y,{value:m}=N;if(t===null||c===null||m===null)return 0;{const w=c-t;return w?l/w*(m-H.value):0}}),k=S(()=>`${L.value}px`),A=S(()=>{const{value:t}=Y,{value:l}=U,{value:c}=v,{value:m}=I;if(t===null||c===null||m===null)return 0;{const w=c-t;return w?l/w*(m-T.value):0}}),V=S(()=>`${A.value}px`),F=S(()=>{const{value:t}=$,{value:l}=y;return t!==null&&l!==null&&l>t}),ie=S(()=>{const{value:t}=Y,{value:l}=v;return t!==null&&l!==null&&l>t}),He=S(()=>{const{trigger:t}=e;return t==="none"||Q.value}),De=S(()=>{const{trigger:t}=e;return t==="none"||G.value}),_=S(()=>{const{container:t}=e;return t?t():f.value}),Ee=S(()=>{const{content:t}=e;return t?t():P.value}),ve=vt(()=>{e.container||be({top:z.value,left:U.value})}),ke=()=>{ve.isDeactivated||q()},ze=t=>{if(ve.isDeactivated)return;const{onResize:l}=e;l&&l(t),q()},be=(t,l)=>{if(!e.scrollable)return;if(typeof t=="number"){Z(l??0,t,0,!1,"auto");return}const{left:c,top:m,index:w,elSize:C,position:X,behavior:b,el:j,debounce:ne=!0}=t;(c!==void 0||m!==void 0)&&Z(c??0,m??0,0,!1,b),j!==void 0?Z(0,j.offsetTop,j.offsetHeight,ne,b):w!==void 0&&C!==void 0?Z(0,w*C,C,ne,b):X==="bottom"?Z(0,Number.MAX_SAFE_INTEGER,0,!1,b):X==="top"&&Z(0,0,0,!1,b)},Le=(t,l)=>{if(!e.scrollable)return;const{value:c}=_;c&&(typeof t=="object"?c.scrollBy(t):c.scrollBy(t,l||0))};function Z(t,l,c,m,w){const{value:C}=_;if(C){if(m){const{scrollTop:X,offsetHeight:b}=C;if(l>X){l+c<=X+b||C.scrollTo({left:t,top:l+c-b,behavior:w});return}}C.scrollTo({left:t,top:l,behavior:w})}}function Fe(){$e(),Ye(),q()}function Xe(){ce()}function ce(){je(),Oe()}function je(){o!==void 0&&window.clearTimeout(o),o=window.setTimeout(()=>{G.value=!1},e.duration)}function Oe(){x!==void 0&&window.clearTimeout(x),x=window.setTimeout(()=>{Q.value=!1},e.duration)}function $e(){x!==void 0&&window.clearTimeout(x),Q.value=!0}function Ye(){o!==void 0&&window.clearTimeout(o),G.value=!0}function Ae(t){const{onScroll:l}=e;l&&l(t),ge()}function ge(){const{value:t}=_;t&&(z.value=t.scrollTop,U.value=t.scrollLeft*(r!=null&&r.value?-1:1))}function Ne(){const{value:t}=Ee;t&&(y.value=t.offsetHeight,v.value=t.offsetWidth);const{value:l}=_;l&&($.value=l.offsetHeight,Y.value=l.offsetWidth);const{value:c}=p,{value:m}=R;c&&(I.value=c.offsetWidth),m&&(N.value=m.offsetHeight)}function we(){const{value:t}=_;t&&(z.value=t.scrollTop,U.value=t.scrollLeft*(r!=null&&r.value?-1:1),$.value=t.offsetHeight,Y.value=t.offsetWidth,y.value=t.scrollHeight,v.value=t.scrollWidth);const{value:l}=p,{value:c}=R;l&&(I.value=l.offsetWidth),c&&(N.value=c.offsetHeight)}function q(){e.scrollable&&(e.useUnifiedContainer?we():(Ne(),ge()))}function pe(t){var l;return!(!((l=u.value)===null||l===void 0)&&l.contains(lt(t)))}function Ie(t){t.preventDefault(),t.stopPropagation(),te=!0,oe("mousemove",window,ye,!0),oe("mouseup",window,Se,!0),d=U.value,h=r!=null&&r.value?window.innerWidth-t.clientX:t.clientX}function ye(t){if(!te)return;x!==void 0&&window.clearTimeout(x),o!==void 0&&window.clearTimeout(o);const{value:l}=Y,{value:c}=v,{value:m}=T;if(l===null||c===null)return;const C=(r!=null&&r.value?window.innerWidth-t.clientX-h:t.clientX-h)*(c-l)/(l-m),X=c-l;let b=d+C;b=Math.min(X,b),b=Math.max(b,0);const{value:j}=_;if(j){j.scrollLeft=b*(r!=null&&r.value?-1:1);const{internalOnUpdateScrollLeft:ne}=e;ne&&ne(b)}}function Se(t){t.preventDefault(),t.stopPropagation(),J("mousemove",window,ye,!0),J("mouseup",window,Se,!0),te=!1,q(),pe(t)&&ce()}function Ue(t){t.preventDefault(),t.stopPropagation(),ee=!0,oe("mousemove",window,de,!0),oe("mouseup",window,fe,!0),i=z.value,g=t.clientY}function de(t){if(!ee)return;x!==void 0&&window.clearTimeout(x),o!==void 0&&window.clearTimeout(o);const{value:l}=$,{value:c}=y,{value:m}=H;if(l===null||c===null)return;const C=(t.clientY-g)*(c-l)/(l-m),X=c-l;let b=i+C;b=Math.min(X,b),b=Math.max(b,0);const{value:j}=_;j&&(j.scrollTop=b)}function fe(t){t.preventDefault(),t.stopPropagation(),J("mousemove",window,de,!0),J("mouseup",window,fe,!0),ee=!1,q(),pe(t)&&ce()}nt(()=>{const{value:t}=ie,{value:l}=F,{value:c}=a,{value:m}=p,{value:w}=R;m&&(t?m.classList.remove(`${c}-scrollbar-rail--disabled`):m.classList.add(`${c}-scrollbar-rail--disabled`)),w&&(l?w.classList.remove(`${c}-scrollbar-rail--disabled`):w.classList.add(`${c}-scrollbar-rail--disabled`))}),at(()=>{e.container||q()}),rt(()=>{x!==void 0&&window.clearTimeout(x),o!==void 0&&window.clearTimeout(o),J("mousemove",window,de,!0),J("mouseup",window,fe,!0)});const Ve=xe("Scrollbar","-scrollbar",on,Ke,e,a),Pe=S(()=>{const{common:{cubicBezierEaseInOut:t,scrollbarBorderRadius:l,scrollbarHeight:c,scrollbarWidth:m},self:{color:w,colorHover:C}}=Ve.value;return{"--n-scrollbar-bezier":t,"--n-scrollbar-color":w,"--n-scrollbar-color-hover":C,"--n-scrollbar-border-radius":l,"--n-scrollbar-width":m,"--n-scrollbar-height":c}}),K=n?Ze("scrollbar",void 0,Pe,e):void 0;return Object.assign(Object.assign({},{scrollTo:be,scrollBy:Le,sync:q,syncUnifiedContainer:we,handleMouseEnterWrapper:Fe,handleMouseLeaveWrapper:Xe}),{mergedClsPrefix:a,rtlEnabled:r,containerScrollTop:z,wrapperRef:u,containerRef:f,contentRef:P,yRailRef:R,xRailRef:p,needYBar:F,needXBar:ie,yBarSizePx:W,xBarSizePx:E,yBarTopPx:k,xBarLeftPx:V,isShowXBar:He,isShowYBar:De,isIos:B,handleScroll:Ae,handleContentResize:ke,handleContainerResize:ze,handleYScrollMouseDown:Ue,handleXScrollMouseDown:Ie,cssVars:n?void 0:Pe,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender})},render(){var e;const{$slots:a,mergedClsPrefix:n,triggerDisplayManually:s,rtlEnabled:r,internalHoistYRail:u}=this;if(!this.scrollable)return(e=a.default)===null||e===void 0?void 0:e.call(a);const f=this.trigger==="none",P=()=>D("div",{ref:"yRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},D(f?Re:Te,f?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?D("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),R=()=>{var y,v;return(y=this.onRender)===null||y===void 0||y.call(this),D("div",it(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass,r&&`${n}-scrollbar--rtl`],style:this.cssVars,onMouseenter:s?void 0:this.handleMouseEnterWrapper,onMouseleave:s?void 0:this.handleMouseLeaveWrapper}),[this.container?(v=a.default)===null||v===void 0?void 0:v.call(a):D("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},D(Me,{onResize:this.handleContentResize},{default:()=>D("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},a)})),u?null:P(),this.xScrollable&&D("div",{ref:"xRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},D(f?Re:Te,f?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?D("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:r?this.xBarLeftPx:void 0,left:r?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},p=this.container?R():D(Me,{onResize:this.handleContainerResize},{default:R});return u?D(ot,null,p,P()):p}}),hn=Be,mn=Be;export{hn as N,Re as W,mn as X,J as a,lt as g,oe as o,fn as u};
