(window.webpackJsonp=window.webpackJsonp||[]).push([[58,5],{341:function(e,t,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(44).default)("3a644bda",content,!0,{sourceMap:!1})},342:function(e,t,n){"use strict";n.r(t);var o={name:"Button",props:{name:String},data:function(){return{}}},r=(n(343),n(16)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",[e._v(e._s(e.name))])}),[],!1,null,"21ad3dc4",null);t.default=component.exports;installComponents(component,{Button:n(342).default})},343:function(e,t,n){"use strict";n(341)},344:function(e,t,n){var o=n(43)(!1);o.push([e.i,"button[data-v-21ad3dc4]{background:#ffd60a;border-radius:8px;width:364px;height:56px;margin:0 auto;border-style:none;font-weight:400;font-size:18px;line-height:24px;cursor:pointer}",""]),e.exports=o},357:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMTAiIHI9IjM1IiBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+"},393:function(e,t,n){"use strict";var o=n(11),r=n(1),c=n(4),l=n(118),d=n(17),m=n(12),v=n(216),f=n(47),x=n(84),_=n(217),h=n(5),y=n(83).f,k=n(39).f,w=n(19).f,I=n(394),D=n(395).trim,N="Number",C=r.Number,P=C.prototype,R=r.TypeError,M=c("".slice),S=c("".charCodeAt),L=function(e){var t=_(e,"number");return"bigint"==typeof t?t:z(t)},z=function(e){var t,n,o,r,c,l,d,code,m=_(e,"number");if(x(m))throw R("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=D(m),43===(t=S(m,0))||45===t){if(88===(n=S(m,2))||120===n)return NaN}else if(48===t){switch(S(m,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+m}for(l=(c=M(m,2)).length,d=0;d<l;d++)if((code=S(c,d))<48||code>r)return NaN;return parseInt(c,o)}return+m};if(l(N,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var Z,B=function(e){var t=arguments.length<1?0:C(L(e)),n=this;return f(P,n)&&h((function(){I(n)}))?v(Object(t),n,B):t},O=o?y(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;O.length>E;E++)m(C,Z=O[E])&&!m(B,Z)&&w(B,Z,k(C,Z));B.prototype=P,P.constructor=B,d(r,N,B,{constructor:!0})}},394:function(e,t,n){var o=n(4);e.exports=o(1..valueOf)},395:function(e,t,n){var o=n(4),r=n(26),c=n(13),l=n(396),d=o("".replace),m="["+l+"]",v=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),x=function(e){return function(t){var n=c(r(t));return 1&e&&(n=d(n,v,"")),2&e&&(n=d(n,f,"")),n}};e.exports={start:x(1),end:x(2),trim:x(3)}},396:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},497:function(e,t,n){var content=n(569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(44).default)("8821bbfa",content,!0,{sourceMap:!1})},568:function(e,t,n){"use strict";n(497)},569:function(e,t,n){var o=n(43)(!1);o.push([e.i,'main[data-v-3925eb0f]{display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Rubik Regular";padding:2rem}main .main[data-v-3925eb0f]{width:100%}main .close[data-v-3925eb0f]{display:flex;justify-content:flex-start}main .close svg[data-v-3925eb0f]{font-size:20px;color:#d9b608}main .toggle[data-v-3925eb0f]{display:flex;flex-direction:row;justify-content:space-between;margin:2rem 0;width:133px}main .toggle .active[data-v-3925eb0f]{background-color:#ffd60a;color:#000;padding:6px 8px;border-radius:8px;cursor:pointer}main .toggle .inactive[data-v-3925eb0f]{padding:6px 8px;color:#b0b0b0;cursor:pointer}main .send p[data-v-3925eb0f]{margin:2.2rem 0;font-size:20px}main .send .locations .input label[data-v-3925eb0f]{color:#000;font-size:15px}main .send .locations .input .input-form[data-v-3925eb0f]{padding:1rem 0}main .send .locations .input .input-form svg[data-v-3925eb0f]{position:absolute;margin:1rem;font-size:20px}main .send .locations .input .input-form input[data-v-3925eb0f],main .send .locations .input .input-form select[data-v-3925eb0f]{height:55px;width:100%;border-radius:8px;border:1px solid #b0b0b0;outline:none;padding:1rem 2.5rem}main .send .locations .input .input-form select[data-v-3925eb0f]{margin-bottom:2rem;background-color:#fff}main .send .locations .input .input-form select option[data-v-3925eb0f]{border-radius:8px}main .contact-info input[data-v-3925eb0f]{height:55px;width:100%;border-radius:8px;border:1px solid #b0b0b0;outline:none;padding:1rem 2.5rem}main .contact-info p[data-v-3925eb0f]{margin:1rem 0;font-family:"Rubik Medium";font-size:18px}main .contact-info input[data-v-3925eb0f]{margin:1rem 0;color:#000}main .date p[data-v-3925eb0f]{margin:1rem 0;font-family:"Rubik Medium";font-size:18px}main .date .input label[data-v-3925eb0f]{color:#000;font-size:15px}main .date .input .input-form[data-v-3925eb0f]{padding:1rem 0}main .date .input .input-form svg[data-v-3925eb0f]{position:absolute;margin:1rem;font-size:20px}main .date .input .input-form input[data-v-3925eb0f],main .date .input .input-form select[data-v-3925eb0f]{height:55px;width:100%;border-radius:8px;border:1px solid #b0b0b0;outline:none;padding:1rem 2.5rem}main .date .input .input-form select[data-v-3925eb0f]{margin-bottom:2rem;background-color:#fff}main .date .input .input-form select option[data-v-3925eb0f]{border-radius:8px}main .yel[data-v-3925eb0f]{color:#d9b608}main .red[data-v-3925eb0f]{color:#c50}main .desc p[data-v-3925eb0f]{font-size:18px;font-family:"Rubik Medium";margin:2rem 0}main .desc .package-description[data-v-3925eb0f]{border:1px solid #b0b0b0;border-radius:8px;padding:21px 27px;display:flex;align-items:center;grid-gap:19px;gap:19px}main .desc .package-description select[data-v-3925eb0f]{width:100%;background:transparent;border:none;outline:none}main .desc .more-description input[data-v-3925eb0f],main .desc input[data-v-3925eb0f]{height:55px;width:100%;border-radius:8px;border:1px solid #b0b0b0;outline:none;padding:1rem 2.5rem}main .desc input[data-v-3925eb0f]{margin-bottom:2rem;margin-top:16px}main .payment-btn[data-v-3925eb0f]{width:100%;height:50px;margin:1rem 0;background-color:#ffd60a;color:#000;border:1px solid transparent;border-radius:8px;font-size:18px;transition:all .2s ease-in-out}main .loading[data-v-3925eb0f]{display:flex;justify-content:center;align-items:center;position:relative;background:grey;color:#fff}main .loading span[data-v-3925eb0f]{position:absolute;right:5px;bottom:5px}main .loading span img[data-v-3925eb0f]{width:20px;height:20px}main .payment-btn[data-v-3925eb0f]:hover{transform:scale(1.02)}@media screen and (min-width:800px){main .main[data-v-3925eb0f]{width:40%}}',""]),e.exports=o},705:function(e,t,n){"use strict";n.r(t);var o=n(9),r=(n(38),n(82),n(33),n(393),{mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={fields:["address_components","geometry"],strictBounds:!1,types:["address"]},t.next=3,new google.maps.places.Autocomplete(e.$refs.pickUpRef,n);case 3:return o=t.sent,t.next=6,new google.maps.places.Autocomplete(e.$refs.pickUpSendRef,n);case 6:return r=t.sent,t.next=9,new google.maps.places.Autocomplete(e.$refs.dropOffRef,n);case 9:return c=t.sent,t.next=12,new google.maps.places.Autocomplete(e.$refs.dropOffSendRef,n);case 12:l=t.sent,google.maps.event.addListener(r,"place_changed",(function(){var t;console.log(r.getPlace());var n=r.getPlace();e.originLngLat={lat:n.geometry.location.lat(),lng:n.geometry.location.lng()};var o="".concat(n.address_components[0].long_name,", ").concat(n.address_components[1].long_name,", ").concat(null===(t=n.address_components[4])||void 0===t?void 0:t.long_name);e.requestDetails.pickup_address=o})),google.maps.event.addListener(l,"place_changed",(function(){var t;console.log(l.getPlace());var n=l.getPlace();e.destinationLngLat={lat:n.geometry.location.lat(),lng:n.geometry.location.lng()};var o="".concat(n.address_components[0].long_name,", ").concat(n.address_components[1].long_name,", ").concat(null===(t=n.address_components[4])||void 0===t?void 0:t.long_name);e.requestDetails.delivery_address=o})),google.maps.event.addListener(o,"place_changed",(function(){var t;console.log(o.getPlace());var n=o.getPlace();e.originLngLat={lat:n.geometry.location.lat(),lng:n.geometry.location.lng()};var r="".concat(n.address_components[0].long_name,", ").concat(n.address_components[1].long_name,", ").concat(null===(t=n.address_components[4])||void 0===t?void 0:t.long_name);e.requestDetails.pickup_address=r})),google.maps.event.addListener(c,"place_changed",(function(){var t;console.log(c.getPlace());var n=c.getPlace();e.destinationLngLat={lat:n.geometry.location.lat(),lng:n.geometry.location.lng()};var o="".concat(n.address_components[0].long_name,", ").concat(n.address_components[1].long_name,", ").concat(null===(t=n.address_components[4])||void 0===t?void 0:t.long_name);e.requestDetails.delivery_address=o}));case 17:case"end":return t.stop()}}),t)})))()},data:function(){return{previewImage:[],isActive:!0,send:!0,receive:!1,requestDetails:{name:"",receiver:"",receiver_phone:"",weight:0,pickup_address:"",delivery_address:"",deliveryType:"pickup",package_type:"",regionType:this.$route.name},originLngLat:{lat:4.8472226,lng:6.974604},destinationLngLat:{},distance:"",requestPrice:0,basePrice:5e3}},methods:{toggleSend:function(){this.send=!0,this.receive=!1,this.requestDetails.deliveryType="pickup"},toggleReceive:function(){this.receive=!0,this.send=!1,this.requestDetails.deliveryType="dropoff"},requestDeliveryHandler:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/api/v1/request",e.requestDetails);case 3:n=t.sent,e.$toasted.show(n.data.message,{position:"top-center",duration:2500,type:"success"}),e.requestPrice=e.basePrice+50*Number(e.requestDetails.weight),e.$store.commit("setRequestPrice",e.requestPrice),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.$toasted.show(t.t0.response.data.message,{position:"top-center",type:"danger",duration:3500});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},computed:{loading:function(){return this.$store.state.loading}}}),c=(n(568),n(16)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("div",{staticClass:"main"},[o("section",{staticClass:"close"},[o("nuxt-link",{attrs:{to:"/home"}},[o("font-awesome-icon",{attrs:{icon:"x"}})],1)],1),e._v(" "),o("section",{staticClass:"toggle"},[o("p",{class:e.send?"active":"inactive",on:{click:e.toggleSend}},[e._v("Send")]),e._v(" "),o("p",{class:e.receive?"active":"inactive",on:{click:e.toggleReceive}},[e._v("\n        Receive\n      ")])]),e._v(" "),o("section",{directives:[{name:"show",rawName:"v-show",value:e.send,expression:"send"}],staticClass:"send"},[o("p",[e._v("Send an Item")]),e._v(" "),o("div",{staticClass:"locations"},[o("div",{staticClass:"input"},[o("label",{attrs:{for:"pickup"}},[e._v("Pick-up Location")]),e._v(" "),o("div",{staticClass:"input-form"},[o("font-awesome-icon",{staticClass:"yel",attrs:{icon:"location-crosshairs"}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDetails.pickup_address,expression:"requestDetails.pickup_address"}],ref:"pickUpSendRef",attrs:{type:"text",name:"pickup",placeholder:"Choose pick-up location"},domProps:{value:e.requestDetails.pickup_address},on:{input:function(t){t.target.composing||e.$set(e.requestDetails,"pickup_address",t.target.value)}}})],1)]),e._v(" "),o("div",{staticClass:"input"},[o("label",{attrs:{for:"pickup"}},[e._v("Drop-off Location")]),e._v(" "),o("div",{staticClass:"input-form"},[o("div",[o("font-awesome-icon",{staticClass:"red",attrs:{icon:"location-dot"}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDetails.delivery_address,expression:"requestDetails.delivery_address"}],ref:"dropOffSendRef",attrs:{type:"text",name:"pickup",placeholder:"Choose drop-off location"},domProps:{value:e.requestDetails.delivery_address},on:{input:function(t){t.target.composing||e.$set(e.requestDetails,"delivery_address",t.target.value)}}})],1)])])])]),e._v(" "),o("section",{directives:[{name:"show",rawName:"v-show",value:e.receive,expression:"receive"}],staticClass:"send"},[o("p",[e._v("Receive an Item")]),e._v(" "),o("div",{staticClass:"locations"},[o("div",{staticClass:"input"},[o("label",{attrs:{for:"pickup"}},[e._v("Pick-up Location")]),e._v(" "),o("div",{staticClass:"input-form"},[o("div",[o("font-awesome-icon",{staticClass:"red",attrs:{icon:"location-dot"}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDetails.pickup_address,expression:"requestDetails.pickup_address"}],ref:"pickUpRef",attrs:{type:"text",name:"pickup",placeholder:"Choose pick-up location"},domProps:{value:e.requestDetails.pickup_address},on:{input:function(t){t.target.composing||e.$set(e.requestDetails,"pickup_address",t.target.value)}}})],1)])]),e._v(" "),o("div",{staticClass:"input"},[o("label",{attrs:{for:"pickup"}},[e._v("Drop-off Location")]),e._v(" "),o("div",{staticClass:"input-form"},[o("font-awesome-icon",{staticClass:"yel",attrs:{icon:"location-crosshairs"}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDetails.delivery_address,expression:"requestDetails.delivery_address"}],ref:"dropOffRef",attrs:{type:"text",name:"pickup",placeholder:"Choose drop-off location"},domProps:{value:e.requestDetails.delivery_address},on:{input:function(t){t.target.composing||e.$set(e.requestDetails,"delivery_address",t.target.value)}}})],1)])])]),e._v(" "),o("section",{staticClass:"contact-info"},[e._m(0),e._v(" "),o("div",{staticClass:"receiver"},[o("div",{staticClass:"input"},[o("p",[e._v("Contact Information (Receiver)")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDetails.receiver,expression:"requestDetails.receiver"}],attrs:{type:"text",name:"pickup",value:"First Name"},domProps:{value:e.requestDetails.receiver},on:{input:function(t){t.target.composing||e.$set(e.requestDetails,"receiver",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDetails.receiver_phone,expression:"requestDetails.receiver_phone"}],attrs:{type:"number",name:"pickup",placeholder:"+xxx (xxx)-xxx-xxxx",value:"Phone Number",min:"0"},domProps:{value:e.requestDetails.receiver_phone},on:{input:function(t){t.target.composing||e.$set(e.requestDetails,"receiver_phone",t.target.value)}}}),e._v(" "),o("input",{attrs:{type:"email",name:"pickup",placeholder:"Choose pick-up location",value:"Email Address"}})])])]),e._v(" "),o("section",{staticClass:"date"},[o("p",[e._v("Time and Date")]),e._v(" "),o("div",{staticClass:"input"},[o("div",{staticClass:"input-form"},[o("font-awesome-icon",{staticClass:"red",attrs:{icon:"calendar"}}),e._v(" "),o("input",{attrs:{type:"date",value:"2022-06-01",min:"2022-06-20",max:"2025-12-31"}})],1)])]),e._v(" "),o("div",{staticClass:"desc"},[o("p",[e._v("Package Description")]),e._v(" "),o("div",{staticClass:"package-description"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.requestDetails.package_type,expression:"requestDetails.package_type"}],attrs:{name:"package",id:"package"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.requestDetails,"package_type",t.target.multiple?n:n[0])}}},[o("option",{attrs:{value:"package1",selected:"",disabled:""}},[e._v("Select Package")]),e._v(" "),o("option",{attrs:{value:"Small"}},[e._v(" Small (30 x 25 cm)")]),e._v(" "),o("option",{attrs:{value:"Medium"}},[e._v(" Medium (30 x 25 cm)")]),e._v(" "),o("option",{attrs:{value:"Big"}},[e._v(" Big (30 x 25 cm)")]),e._v(" "),o("option",{attrs:{value:"Large"}},[e._v(" Large (30 x 25 cm)")])])]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.requestDetails.name,expression:"requestDetails.name"}],attrs:{type:"text",placeholder:"name of package?"},domProps:{value:e.requestDetails.name},on:{input:function(t){t.target.composing||e.$set(e.requestDetails,"name",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.requestDetails.weight,expression:"requestDetails.weight",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"Weight (Kg)"},domProps:{value:e.requestDetails.weight},on:{input:function(t){t.target.composing||e.$set(e.requestDetails,"weight",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),o("button",{staticClass:"payment-btn",class:{loading:e.loading},on:{click:e.requestDeliveryHandler}},[e._v(" Continue to Payment "),o("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[o("img",{attrs:{src:n(357),alt:"loader"}})])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input"},[n("p",[e._v("Contact Information (Sender)")]),e._v(" "),n("input",{attrs:{type:"text",name:"pickup",value:"First Name"}}),e._v(" "),n("input",{attrs:{type:"number",name:"pickup",placeholder:"+xxx (xxx)-xxx-xxxx",value:"Phone Number",min:"0"}}),n("input",{attrs:{type:"email",name:"pickup",placeholder:"Choose pick-up location",value:"Email Address"}})])}],!1,null,"3925eb0f",null);t.default=component.exports;installComponents(component,{Button:n(342).default})}}]);