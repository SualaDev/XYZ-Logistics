(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{787:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(40),{name:"selectPlace",props:{inputRef:{require:!0,type:String}},data:function(){return{suggestedPlaces:[],inputLocation:"lagos"}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={componentRestrictions:{country:"ng"},fields:["address_components"],strictBounds:!1,types:["address"]},t.next=3,new google.maps.places.Autocomplete(e.$parent.$refs.inputRef,n);case 3:r=t.sent,console.log(r,e.$parent.$refs.inputRef,inputRef);case 5:case"end":return t.stop()}}),t)})))()}}),c=n(12),component=Object(c.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"select-place-container"})}),[],!1,null,null,null);t.default=component.exports}}]);