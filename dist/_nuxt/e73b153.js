(window.webpackJsonp=window.webpackJsonp||[]).push([[59,5,24,29],{341:function(e,t,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(44).default)("3a644bda",content,!0,{sourceMap:!1})},342:function(e,t,n){"use strict";n.r(t);var r={name:"Button",props:{name:String},data:function(){return{}}},o=(n(343),n(16)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",[e._v(e._s(e.name))])}),[],!1,null,"21ad3dc4",null);t.default=component.exports;installComponents(component,{Button:n(342).default})},343:function(e,t,n){"use strict";n(341)},344:function(e,t,n){var r=n(43)(!1);r.push([e.i,"button[data-v-21ad3dc4]{background:#ffd60a;border-radius:8px;width:364px;height:56px;margin:0 auto;border-style:none;font-weight:400;font-size:18px;line-height:24px;cursor:pointer}",""]),e.exports=r},357:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiIHI9IjM1IiBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"},393:function(e,t,n){"use strict";var r=n(11),o=n(1),c=n(4),l=n(118),d=n(17),m=n(12),v=n(216),f=n(47),x=n(84),y=n(217),h=n(5),_=n(83).f,w=n(39).f,k=n(19).f,D=n(394),I=n(395).trim,C="Number",N=o.Number,P=N.prototype,R=o.TypeError,M=c("".slice),L=c("".charCodeAt),S=function(e){var t=y(e,"number");return"bigint"==typeof t?t:O(t)},O=function(e){var t,n,r,o,c,l,d,code,m=y(e,"number");if(x(m))throw R("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=I(m),43===(t=L(m,0))||45===t){if(88===(n=L(m,2))||120===n)return NaN}else if(48===t){switch(L(m,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+m}for(l=(c=M(m,2)).length,d=0;d<l;d++)if((code=L(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+m};if(l(C,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var z,$=function(e){var t=arguments.length<1?0:N(S(e)),n=this;return f(P,n)&&h((function(){D(n)}))?v(Object(t),n,$):t},B=r?_(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),Z=0;B.length>Z;Z++)m(N,z=B[Z])&&!m($,z)&&k($,z,w(N,z));$.prototype=P,P.constructor=$,d(o,C,$,{constructor:!0})}},394:function(e,t,n){var r=n(4);e.exports=r(1..valueOf)},395:function(e,t,n){var r=n(4),o=n(26),c=n(13),l=n(396),d=r("".replace),m="["+l+"]",v=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),x=function(e){return function(t){var n=c(o(t));return 1&e&&(n=d(n,v,"")),2&e&&(n=d(n,f,"")),n}};e.exports={start:x(1),end:x(2),trim:x(3)}},396:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},397:function(e,t,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(44).default)("4f88f238",content,!0,{sourceMap:!1})},434:function(e,t,n){"use strict";n(397)},435:function(e,t,n){var r=n(43)(!1);r.push([e.i,".map{display:none!important}",""]),e.exports=r},498:function(e,t,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(44).default)("043edede",content,!0,{sourceMap:!1})},546:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(38),{name:"selectPlace",props:{inputRef:{require:!0,type:String}},data:function(){return{suggestedPlaces:[],inputLocation:"lagos"}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={componentRestrictions:{country:"ng"},fields:["address_components"],strictBounds:!1,types:["address"]},t.next=3,new google.maps.places.Autocomplete(e.$parent.$refs.inputRef,n);case 3:r=t.sent,console.log(r,e.$parent.$refs.inputRef,inputRef);case 5:case"end":return t.stop()}}),t)})))()}}),c=n(16),component=Object(c.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"select-place-container"})}),[],!1,null,null,null);t.default=component.exports},547:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(38),{name:"directionContainer",props:{originLngLat:{required:!0,type:Object,default:{}},destinationLngLat:{required:!0,type:Object,default:{}}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var map,n,r,o,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return function(e,t){var n=e.position.lat()*(Math.PI/180),r=t.position.lat()*(Math.PI/180),o=r-n,c=(t.position.lng()-e.position.lng())*(Math.PI/180);return 12742.142*Math.asin(Math.sqrt(Math.sin(o/2)*Math.sin(o/2)+Math.cos(n)*Math.cos(r)*Math.sin(c/2)*Math.sin(c/2)))},n={zoom:15,scaleControl:!0,center:{lat:40.774102,lng:-73.971734}},t.next=5,new google.maps.Map(e.$refs.mapContainer,n);case 5:return map=t.sent,r=e.originLngLatData,o={lat:40.771209,lng:-73.9673991},t.next=10,new google.maps.Marker({position:r,map:map});case 10:return t.sent,t.next=13,new google.maps.Marker({position:o,map:map});case 13:return t.sent,t.next=16,new google.maps.Polyline({path:[r,o],map:map});case 16:return t.sent,t.next=19,new google.maps.DirectionsService;case 19:return c=t.sent,t.next=22,new google.maps.DirectionsRenderer;case 22:l=t.sent,d={origin:r,destination:o,travelMode:"DRIVING"},c.route(d,function(e,t){if("OK"===t){l.setDirections(e);var n=e.routes[0].legs[0];n?(this.distance=n.distance.text,console.log(n)):this.$toasted.show(error.message,{position:"top-center",type:"danger",duration:3500})}else window.alert("Directions request failed due to "+t)}.bind(e));case 25:case"end":return t.stop()}}),t)})))()},data:function(){return{distance:""}},computed:{originLngLatData:function(){return this.originLngLat},destinationLngLatData:function(){return this.destinationLngLat}}}),c=(n(434),n(16)),component=Object(c.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"mapContainer",staticClass:"map"})}),[],!1,null,null,null);t.default=component.exports},570:function(e,t,n){"use strict";n(498)},571:function(e,t,n){var r=n(43)(!1);r.push([e.i,'main[data-v-43bc810b]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Rubik Regular";padding:2rem}main .main[data-v-43bc810b]{width:100%}main .close[data-v-43bc810b]{display:flex;justify-content:flex-start}main .close svg[data-v-43bc810b]{font-size:20px;color:#d9b608}main .toggle[data-v-43bc810b]{display:flex;flex-direction:row;justify-content:space-between;margin:2rem 0;width:133px}main .toggle .active[data-v-43bc810b]{background-color:#ffd60a;color:#000;padding:6px 8px;border-radius:8px;cursor:pointer}main .toggle .inactive[data-v-43bc810b]{padding:6px 8px;color:#b0b0b0;cursor:pointer}main .send p[data-v-43bc810b]{margin:2.2rem 0;font-size:20px}main .send .locations .input label[data-v-43bc810b]{color:#000;font-size:15px}main .send .locations .input .input-form[data-v-43bc810b]{padding:1rem 0}main .send .locations .input .input-form svg[data-v-43bc810b]{position:absolute;margin:1rem;font-size:20px}main .send .locations .input .input-form input[data-v-43bc810b],main .send .locations .input .input-form select[data-v-43bc810b]{height:55px;width:100%;border-radius:8px;border:1px solid #b0b0b0;outline:none;padding:1rem 2.5rem}main .send .locations .input .input-form select[data-v-43bc810b]{margin-bottom:2rem;background-color:#fff}main .send .locations .input .input-form select option[data-v-43bc810b]{border-radius:8px}main .contact-info input[data-v-43bc810b]{height:55px;width:100%;border-radius:8px;border:1px solid #b0b0b0;outline:none;padding:1rem 2.5rem}main .contact-info p[data-v-43bc810b]{margin:1rem 0;font-family:"Rubik Medium";font-size:18px}main .contact-info input[data-v-43bc810b]{margin:1rem 0;color:#000}main .date p[data-v-43bc810b]{margin:1rem 0;font-family:"Rubik Medium";font-size:18px}main .date .input label[data-v-43bc810b]{color:#000;font-size:15px}main .date .input .input-form[data-v-43bc810b]{padding:1rem 0}main .date .input .input-form svg[data-v-43bc810b]{position:absolute;margin:1rem;font-size:20px}main .date .input .input-form input[data-v-43bc810b],main .date .input .input-form select[data-v-43bc810b]{height:55px;width:100%;border-radius:8px;border:1px solid #b0b0b0;outline:none;padding:1rem 2.5rem}main .date .input .input-form select[data-v-43bc810b]{margin-bottom:2rem;background-color:#fff}main .date .input .input-form select option[data-v-43bc810b]{border-radius:8px}main .yel[data-v-43bc810b]{color:#d9b608}main .red[data-v-43bc810b]{color:#c50}main .desc p[data-v-43bc810b]{font-size:18px;font-family:"Rubik Medium";margin:2rem 0}main .desc .package-description[data-v-43bc810b]{border:1px solid #b0b0b0;border-radius:8px;padding:21px 27px;display:flex;align-items:center;grid-gap:19px;gap:19px}main .desc .package-description select[data-v-43bc810b]{width:100%;background:transparent;border:none;outline:none}main .desc .more-description input[data-v-43bc810b],main .desc input[data-v-43bc810b]{height:55px;width:100%;border-radius:8px;border:1px solid #b0b0b0;outline:none;padding:1rem 2.5rem}main .desc input[data-v-43bc810b]{margin-bottom:2rem;margin-top:16px}main .payment-btn[data-v-43bc810b]{width:100%;height:50px;margin:1rem 0;background-color:#ffd60a;color:#000;border:1px solid transparent;border-radius:8px;font-size:18px;transition:all .2s ease-in-out}main .loading[data-v-43bc810b]{display:flex;justify-content:center;align-items:center;position:relative;background:grey;color:#fff}main .loading span[data-v-43bc810b]{position:absolute;right:5px;bottom:5px}main .loading span img[data-v-43bc810b]{width:20px;height:20px}main .payment-btn[data-v-43bc810b]:hover{transform:scale(1.02)}@media screen and (min-width:800px){main .main[data-v-43bc810b]{width:40%}}',""]),e.exports=r},706:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(38),n(33),n(82),n(393),n(546)),c=n(547),l={components:{TheSelectPlace:o.default,TheDirectionContainer:c.default},data:function(){return{previewImage:[],isActive:!0,send:!0,receive:!1,requestDelivery:{name:"",receiver:"",receiver_phone:"",weight:0,pickup_address:"",delivery_address:"",package_type:"",deliveryType:"pickup",regionType:this.$route.name},originLngLat:{lat:4.8472226,lng:6.974604},destinationLngLat:{},distance:"",requestPrice:0,basePrice:1e3}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={componentRestrictions:{country:"ng"},fields:["address_components","geometry"],strictBounds:!1,types:["address"]},t.next=3,new google.maps.places.Autocomplete(e.$refs.pickUpRef,n);case 3:return r=t.sent,t.next=6,new google.maps.places.Autocomplete(e.$refs.pickUpRefSend,n);case 6:return o=t.sent,t.next=9,new google.maps.places.Autocomplete(e.$refs.dropOffRef,n);case 9:return c=t.sent,t.next=12,new google.maps.places.Autocomplete(e.$refs.dropOffRefSend,n);case 12:l=t.sent,google.maps.event.addListener(o,"place_changed",(function(){console.log(o.getPlace());var t=o.getPlace();e.originLngLat={lat:t.geometry.location.lat(),lng:t.geometry.location.lng()};var n="".concat(t.address_components[0].long_name,", ").concat(t.address_components[1].long_name);e.requestDelivery.pickup_address=n})),google.maps.event.addListener(l,"place_changed",(function(){console.log(l.getPlace());var t=l.getPlace();e.destinationLngLat={lat:t.geometry.location.lat(),lng:t.geometry.location.lng()};var n="".concat(t.address_components[0].long_name,", ").concat(t.address_components[1].long_name);e.requestDelivery.delivery_address=n})),google.maps.event.addListener(r,"place_changed",(function(){console.log(r.getPlace());var t=r.getPlace();e.originLngLat={lat:t.geometry.location.lat(),lng:t.geometry.location.lng()};var n="".concat(t.address_components[0].long_name,", ").concat(t.address_components[1].long_name);e.requestDelivery.pickup_address=n})),google.maps.event.addListener(c,"place_changed",(function(){console.log(c.getPlace());var t=c.getPlace();e.destinationLngLat={lat:t.geometry.location.lat(),lng:t.geometry.location.lng()};var n="".concat(t.address_components[0].long_name,", ").concat(t.address_components[1].long_name);e.requestDelivery.delivery_address=n}));case 17:case"end":return t.stop()}}),t)})))()},methods:{toggleSend:function(){this.send=!0,this.receive=!1,this.requestDelivery.deliveryType="pickup"},toggleReceive:function(){this.receive=!0,this.send=!1,this.requestDelivery.deliveryType="dropoff"},requestDeliveryHandler:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/api/v1/request",e.requestDelivery);case 3:n=t.sent,e.$toasted.show(n.data.message,{position:"top-center",duration:2500,type:"success"}),e.requestPrice=e.basePrice+50*Number(e.requestDelivery.weight),e.$store.commit("setRequestPrice",e.requestPrice),console.log(n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),e.$toasted.show(t.t0.response.data.message,{position:"top-center",type:"danger",duration:3500}),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},computed:{loading:function(){return this.$store.state.loading}}},d=(n(570),n(16)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"main"},[r("section",{staticClass:"close"},[r("nuxt-link",{attrs:{to:"/home"}},[r("font-awesome-icon",{attrs:{icon:"x"}})],1)],1),e._v(" "),r("section",{staticClass:"toggle"},[r("p",{class:e.send?"active":"inactive",on:{click:e.toggleSend}},[e._v("Send")]),e._v(" "),r("p",{class:e.receive?"active":"inactive",on:{click:e.toggleReceive}},[e._v("\n        Receive\n      ")])]),e._v(" "),r("section",{directives:[{name:"show",rawName:"v-show",value:e.send,expression:"send"}],staticClass:"send"},[r("p",[e._v("Send an Item")]),e._v(" "),r("div",{staticClass:"locations"},[r("div",{staticClass:"input"},[r("label",{attrs:{for:"pickup"}},[e._v("Pick-up Location")]),e._v(" "),r("div",{staticClass:"input-form"},[r("font-awesome-icon",{staticClass:"yel",attrs:{icon:"location-crosshairs"}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDelivery.pickup_address,expression:"requestDelivery.pickup_address"}],ref:"pickUpRefSend",attrs:{type:"text",name:"pickup",placeholder:"Choose pick-up location"},domProps:{value:e.requestDelivery.pickup_address},on:{input:function(t){t.target.composing||e.$set(e.requestDelivery,"pickup_address",t.target.value)}}})],1)]),e._v(" "),r("div",{staticClass:"input"},[r("label",{attrs:{for:"pickup"}},[e._v("Drop-off Location")]),e._v(" "),r("div",{staticClass:"input-form"},[r("div",[r("font-awesome-icon",{staticClass:"red",attrs:{icon:"location-dot"}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDelivery.delivery_address,expression:"requestDelivery.delivery_address"}],ref:"dropOffRefSend",attrs:{type:"text",name:"pickup",placeholder:"Choose drop-off location"},domProps:{value:e.requestDelivery.delivery_address},on:{input:function(t){t.target.composing||e.$set(e.requestDelivery,"delivery_address",t.target.value)}}})],1)])])])]),e._v(" "),r("section",{directives:[{name:"show",rawName:"v-show",value:e.receive,expression:"receive"}],staticClass:"send"},[r("p",[e._v("Receive an Item")]),e._v(" "),r("div",{staticClass:"locations"},[r("div",{staticClass:"input"},[r("label",{attrs:{for:"pickup"}},[e._v("Pick-up Location")]),e._v(" "),r("div",{staticClass:"input-form"},[r("div",[r("font-awesome-icon",{staticClass:"red",attrs:{icon:"location-dot"}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDelivery.delivery_address,expression:"requestDelivery.delivery_address"}],ref:"dropOffRef",attrs:{type:"text",name:"pickup",placeholder:"Choose drop-off location"},domProps:{value:e.requestDelivery.delivery_address},on:{input:function(t){t.target.composing||e.$set(e.requestDelivery,"delivery_address",t.target.value)}}})],1)])]),e._v(" "),r("div",{staticClass:"input"},[r("label",{attrs:{for:"pickup"}},[e._v("Drop-off Location")]),e._v(" "),r("div",{staticClass:"input-form"},[r("font-awesome-icon",{staticClass:"yel",attrs:{icon:"location-crosshairs"}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDelivery.pickup_address,expression:"requestDelivery.pickup_address"}],ref:"pickUpRef",attrs:{type:"text",name:"pickup",placeholder:"Choose drop-off location"},domProps:{value:e.requestDelivery.pickup_address},on:{input:function(t){t.target.composing||e.$set(e.requestDelivery,"pickup_address",t.target.value)}}})],1)])])]),e._v(" "),r("section",{staticClass:"contact-info"},[e._m(0),e._v(" "),r("div",{staticClass:"receiver"},[r("div",{staticClass:"input"},[r("p",[e._v("Contact Information (Receiver)")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDelivery.receiver,expression:"requestDelivery.receiver"}],attrs:{type:"text",name:"pickup",placeholder:"First Name"},domProps:{value:e.requestDelivery.receiver},on:{input:function(t){t.target.composing||e.$set(e.requestDelivery,"receiver",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDelivery.receiver_phone,expression:"requestDelivery.receiver_phone"}],attrs:{type:"number",name:"pickup",placeholder:"+xxx (xxx)-xxx-xxxx",min:"0"},domProps:{value:e.requestDelivery.receiver_phone},on:{input:function(t){t.target.composing||e.$set(e.requestDelivery,"receiver_phone",t.target.value)}}}),r("input",{attrs:{type:"email",name:"pickup",placeholder:"Choose pick-up location",value:"Email Address"}})])])]),e._v(" "),r("section",{staticClass:"date"},[r("p",[e._v("Time and Date")]),e._v(" "),r("div",{staticClass:"input"},[r("div",{staticClass:"input-form"},[r("font-awesome-icon",{staticClass:"red",attrs:{icon:"calendar"}}),e._v(" "),r("input",{attrs:{type:"datetime-local",value:"2022-06-01",min:"2022-06-20",max:"2025-12-31"}})],1)])]),e._v(" "),r("div",{staticClass:"desc"},[r("p",[e._v("Package Description")]),e._v(" "),r("div",{staticClass:"package-description"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.requestDelivery.package_type,expression:"requestDelivery.package_type"}],attrs:{name:"package",id:"package"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.requestDelivery,"package_type",t.target.multiple?n:n[0])}}},[r("option",{attrs:{value:"package1",selected:"",disabled:""}},[e._v("Select Package")]),e._v(" "),r("option",{attrs:{value:"Small"}},[e._v(" Small (30 x 25 cm)")]),e._v(" "),r("option",{attrs:{value:"Medium"}},[e._v(" Medium (30 x 25 cm)")]),e._v(" "),r("option",{attrs:{value:"Big"}},[e._v(" Big (30 x 25 cm)")]),e._v(" "),r("option",{attrs:{value:"Large"}},[e._v(" Large (30 x 25 cm)")])])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDelivery.name,expression:"requestDelivery.name"}],attrs:{type:"text",placeholder:"name of package?"},domProps:{value:e.requestDelivery.name},on:{input:function(t){t.target.composing||e.$set(e.requestDelivery,"name",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.requestDelivery.weight,expression:"requestDelivery.weight",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"Weight (Kg)"},domProps:{value:e.requestDelivery.weight},on:{input:function(t){t.target.composing||e.$set(e.requestDelivery,"weight",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("button",{staticClass:"payment-btn",class:{loading:e.loading},on:{click:e.requestDeliveryHandler}},[e._v(" Continue to Payment "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[r("img",{attrs:{src:n(357),alt:"loader"}})])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input"},[n("p",[e._v("Contact Information (Sender)")]),e._v(" "),n("input",{attrs:{type:"text",name:"first name",placeholder:"First Name"}}),e._v(" "),n("input",{attrs:{type:"number",name:"number",placeholder:"+xxx (xxx)-xxx-xxxx",value:"Phone Number",min:"0"}})])}],!1,null,"43bc810b",null);t.default=component.exports;installComponents(component,{Button:n(342).default})}}]);