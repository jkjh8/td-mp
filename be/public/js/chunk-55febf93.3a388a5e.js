(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55febf93"],{"0fd9":function(e,t,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),l=(a("4b85"),a("2b0e")),r=a("d9f7"),c=a("80d2"),s=["sm","md","lg","xl"],o=["start","end","center"];function u(e,t){return s.reduce((function(a,n){return a[e+Object(c["G"])(n)]=t(),a}),{})}var d=function(e){return[].concat(o,["baseline","stretch"]).includes(e)},p=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(e){return[].concat(o,["space-between","space-around"]).includes(e)},f=u("justify",(function(){return{type:String,default:null,validator:v}})),g=function(e){return[].concat(o,["space-between","space-around","stretch"]).includes(e)},h=u("alignContent",(function(){return{type:String,default:null,validator:g}})),m={align:Object.keys(p),justify:Object.keys(f),alignContent:Object.keys(h)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(e,t,a){var n=b[e];if(null!=a){if(t){var i=t.replace(e,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var x=new Map;t["a"]=l["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},p),{},{justify:{type:String,default:null,validator:v}},f),{},{alignContent:{type:String,default:null,validator:g}},h),render:function(e,t){var a=t.props,i=t.data,l=t.children,c="";for(var s in a)c+=String(a[s]);var o=x.get(c);return o||function(){var e,t;for(t in o=[],m)m[t].forEach((function(e){var n=a[e],i=y(t,e,n);i&&o.push(i)}));o.push((e={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(e,"align-".concat(a.align),a.align),Object(n["a"])(e,"justify-".concat(a.justify),a.justify),Object(n["a"])(e,"align-content-".concat(a.alignContent),a.alignContent),e)),x.set(c,o)}(),e(a.tag,Object(r["a"])(i,{staticClass:"row",class:o}),l)}})},2059:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[a("Header",{on:{dialog:function(t){e.updateDialog=!e.updateDialog}}})],1),a("v-divider"),a("v-card-text",[a("Table"),a("v-dialog",{staticStyle:{"background-color":"white"},attrs:{"max-width":"800px"},model:{value:e.updateDialog,callback:function(t){e.updateDialog=t},expression:"updateDialog"}},[a("FilelistTable",{staticClass:"pa-0 ma-0",attrs:{singleSelect:!1},on:{dialog:function(t){e.updateDialog=!e.updateDialog}}})],1)],1)],1)],1)},i=[],l=a("9391"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{dense:""}},[a("v-col",{attrs:{cols:"7"}},[a("h4",[e._v("PLAY LIST : "+e._s(e.items[e.playlistId].label))])]),a("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"3"}},[a("v-select",{attrs:{items:e.items,"item-text":"label","item-value":"id",outlined:"","hide-details":"",dense:""},on:{change:function(t){return e.setPlaylistId(""+e.selected)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),a("v-col",{staticClass:"text-right pa-0 ma-0",attrs:{cols:"2"}},[a("v-btn",{attrs:{icon:"",color:"green darken-4"},on:{click:e.playli}},[a("v-icon",[e._v("mdi-play")])],1),a("v-btn",{attrs:{icon:"",color:"red darken-4"},on:{click:e.stop}},[a("v-icon",[e._v("mdi-stop")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("dialog")}}},[a("v-icon",[e._v("mdi-plus-circle-outline")])],1)],1)],1)},c=[],s=(a("96cf"),a("1da1")),o={mixins:[l["a"]],created:function(){this.selected=this.playlistId},data:function(){return{items:[{label:"Playlist 1",id:0},{label:"Playlist 2",id:1},{label:"Playlist 3",id:2},{label:"Playlist 4",id:3},{label:"Playlist 5",id:4},{label:"Playlist 6",id:5},{label:"Playlist 7",id:6},{label:"Playlist 8",id:7}],selected:this.playlistId}},methods:{playli:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/api/playli/"+e.playlistId);case 2:case"end":return t.stop()}}),t)})))()},stop:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/api/stop");case 2:case"end":return t.stop()}}),t)})))()}}},u=o,d=(a("7a85"),a("2877")),p=a("6544"),v=a.n(p),f=a("8336"),g=a("62ad"),h=a("132d"),m=a("0fd9"),b=a("b974"),y=Object(d["a"])(u,r,c,!1,null,null,null),x=y.exports;v()(y,{VBtn:f["a"],VCol:g["a"],VIcon:h["a"],VRow:m["a"],VSelect:b["a"]});var w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[e._v(" Index ")]),a("th",[e._v(" Name ")]),a("th",[e._v(" Length ")]),a("th",{staticClass:"text-center"},[e._v(" Actions ")])])]),e._l(e.playlist,(function(t,n){return a("tr",{key:n},[a("td",{staticClass:"text-center"},[e._v(" "+e._s(t.playid+1)+" ")]),a("td",{staticClass:"text-left"},[e._v(e._s(t.name))]),a("td",[e._v(e._s(e.times(t.duration)))]),a("td",{staticClass:"text-center"},[a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.changeList(n,n-1)}}},[a("v-icon",[e._v("mdi-chevron-up")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.changeList(n,n+1)}}},[a("v-icon",[e._v("mdi-chevron-down")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.playid(n)}}},[a("v-icon",[e._v("mdi-play")])],1),a("v-btn",{attrs:{color:"red darken-4",icon:""},on:{click:function(t){return e.deleteList(n)}}},[a("v-icon",[e._v("mdi-delete")])],1)],1)])}))]},proxy:!0}])})},k=[],_=(a("4160"),a("a434"),a("159b"),a("7444")),j={mixins:[l["a"],_["a"]],methods:{changeList:function(e,t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,l,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=0,l=a.playlist.length-1,l<t&&(t=i),t<i&&(t=l),n.next=6,a.playlist.splice(t,0,a.playlist.splice(e,1)[0]);case 6:return r=[],n.next=9,a.playlist.forEach((function(e,t){e.playid=t,r.push(e)}));case 9:a.setPlaylist(a.playlistId,r);case 10:case"end":return n.stop()}}),n)})))()},deleteList:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.playlist.splice(e,1),a.next=3,t.playlist.forEach((function(e,a){t.playlist[a].playid=a}));case 3:t.setPlaylist(t.playlistId,t.playlist);case 4:case"end":return a.stop()}}),a)})))()},playid:function(e){this.$axios.get("/api/playid/"+this.playlistId+"/"+e)}}},C=j,S=a("1f4f"),V=Object(d["a"])(C,w,k,!1,null,null,null),O=V.exports;v()(V,{VBtn:f["a"],VIcon:h["a"],VSimpleTable:S["a"]});var P=a("3615"),D={mixins:[l["a"]],components:{Header:x,Table:O,FilelistTable:P["a"]},data:function(){return{updateDialog:!1}},created:function(){this.getPlaylist(this.playlistId)}},I=D,$=a("b0af"),T=a("99d9"),R=a("a523"),L=a("169a"),E=a("ce7e"),A=Object(d["a"])(I,n,i,!1,null,null,null);t["default"]=A.exports;v()(A,{VCard:$["a"],VCardText:T["b"],VCardTitle:T["c"],VContainer:R["a"],VDialog:L["a"],VDivider:E["a"]})},3615:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[a("v-col",{staticClass:"text-left",attrs:{cols:""}},[a("h4",[e._v("ADD PLAYLIST")])]),a("v-col",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),a("v-card-text",[a("v-data-table",{attrs:{headers:e.headers,items:e.filelist,search:e.search,"item-key":"name","show-select":"","single-select":e.singleSelect},scopedSlots:e._u([{key:"item.duration",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.times(a.duration))+" ")]}},{key:"item.size",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.bytes(a.size))+" ")]}},{key:"item.preview",fn:function(t){var n=t.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.preview(n.name)}}},[a("v-icon",{attrs:{color:"green darken-4"}},[e._v(" mdi-play ")])],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:e.addPlaylist}},[a("v-icon",[e._v("mdi-check-circle-outline")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("dialog")}}},[a("v-icon",[e._v("mdi-close-circle-outline")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"800px"},model:{value:e.previewDialog,callback:function(t){e.previewDialog=t},expression:"previewDialog"}},[a("Preview",{attrs:{"video-source":e.videoSource}})],1)],1)},i=[],l=(a("99af"),a("96cf"),a("1da1")),r=a("7444"),c=a("9391"),s=a("db61"),o={props:["singleSelect"],components:{Preview:s["a"]},mixins:[c["a"],r["a"]],data:function(){return{previewDialog:!1,videoSource:"",search:"",selected:[],headers:[{text:"Name",value:"name"},{text:"Type",value:"type"},{text:"Length",value:"duration"},{text:"Size",value:"size"},{text:"Preview",value:"preview"}]}},created:function(){this.getFilelist()},methods:{resetSelected:function(){this.selected=[]},delete:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.selected,0!==a.length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.$axios.post("/api/filelist/del",a);case 5:n=t.sent,i=n.data,e.$store.dispatch("filelist/updateFilelist",i),e.resetSelected();case 9:case"end":return t.stop()}}),t)})))()},preview:function(e){this.previewDialog=!0,this.videoSource={width:800,autoplay:!0,sources:[{type:"video/mp4",src:"http://".concat(window.location.hostname,"/api/filelist/preview/").concat(e)}]}},addPlaylist:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.singleSelect){t.next=4;break}e.$emit("click",e.selected),t.next=11;break;case 4:return t.next=6,e.$axios.post("/api/addPlaylist",{id:e.playlistId,file:e.selected});case 6:a=t.sent,n=a.data,e.$store.dispatch("playlist/updatePlaylist",n),e.$emit("dialog"),e.selected=[];case 11:case"end":return t.stop()}}),t)})))()}}},u=o,d=(a("b22a"),a("2877")),p=a("6544"),v=a.n(p),f=a("8336"),g=a("b0af"),h=a("99d9"),m=a("62ad"),b=a("a523"),y=a("8fea"),x=a("169a"),w=a("132d"),k=a("2fa4"),_=a("8654"),j=Object(d["a"])(u,n,i,!1,null,null,null);t["a"]=j.exports;v()(j,{VBtn:f["a"],VCard:g["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:m["a"],VContainer:b["a"],VDataTable:y["a"],VDialog:x["a"],VIcon:w["a"],VSpacer:k["a"],VTextField:_["a"]})},"58c0":function(e,t,a){},"7a85":function(e,t,a){"use strict";a("e2b4")},b22a:function(e,t,a){"use strict";a("58c0")},e2b4:function(e,t,a){}}]);
//# sourceMappingURL=chunk-55febf93.3a388a5e.js.map