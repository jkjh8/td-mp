(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64d10ccf"],{2059:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-title",[n("Header",{on:{dialog:function(e){t.updateDialog=!t.updateDialog}}})],1),n("v-divider"),n("v-card-text",[n("Table"),n("v-dialog",{staticStyle:{"background-color":"white"},attrs:{"max-width":"800px"},model:{value:t.updateDialog,callback:function(e){t.updateDialog=e},expression:"updateDialog"}},[n("FilelistTable",{staticClass:"pa-0 ma-0",on:{dialog:function(e){t.updateDialog=!t.updateDialog}}})],1)],1)],1)],1)},i=[],l=n("9391"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"7"}},[n("h4",[t._v("PLAY LIST : "+t._s(t.items[t.playlistId].label))])]),n("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"3"}},[n("v-select",{attrs:{items:t.items,"item-text":"label","item-value":"id",outlined:"","hide-details":"",dense:""},on:{change:function(e){return t.setPlaylistId(""+t.selected)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("v-col",{staticClass:"text-right pa-0 ma-0",attrs:{cols:"2"}},[n("v-btn",{attrs:{icon:"",color:"green darken-4"},on:{click:t.playli}},[n("v-icon",[t._v("mdi-play")])],1),n("v-btn",{attrs:{icon:"",color:"red darken-4"},on:{click:t.stop}},[n("v-icon",[t._v("mdi-stop")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("dialog")}}},[n("v-icon",[t._v("mdi-plus-circle-outline")])],1)],1)],1)},c=[],o={mixins:[l["a"]],created:function(){this.selected=this.playlistId},data:function(){return{items:[{label:"Playlist 1",id:0},{label:"Playlist 2",id:1},{label:"Playlist 3",id:2},{label:"Playlist 4",id:3},{label:"Playlist 5",id:4},{label:"Playlist 6",id:5},{label:"Playlist 7",id:6},{label:"Playlist 8",id:7}],selected:this.playlistId}},methods:{playli:function(){this.$axios.get("/api/playli/"+this.playlistId).then((function(t){console.log(t)}))},stop:function(){this.$axios.get("/api/stop").then((function(t){console.log(t)}))}}},s=o,u=(n("7a85"),n("2877")),d=n("6544"),f=n.n(d),p=n("8336"),v=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),b=n("5530"),g=(n("4b85"),n("2b0e")),y=n("d9f7"),h=n("80d2"),m=["sm","md","lg","xl"],x=function(){return m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),w=function(){return m.reduce((function(t,e){return t["offset"+Object(h["E"])(e)]={type:[String,Number],default:null},t}),{})}(),j=function(){return m.reduce((function(t,e){return t["order"+Object(h["E"])(e)]={type:[String,Number],default:null},t}),{})}(),k={col:Object.keys(x),offset:Object.keys(w),order:Object.keys(j)};function _(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var S=new Map,O=g["a"].extend({name:"v-col",functional:!0,props:Object(b["a"])(Object(b["a"])(Object(b["a"])(Object(b["a"])({cols:{type:[Boolean,String,Number],default:!1}},x),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,i=e.children,l=(e.parent,"");for(var r in n)l+=String(n[r]);var c=S.get(l);return c||function(){var t,e;for(e in c=[],k)k[e].forEach((function(t){var a=n[t],i=_(e,t,a);i&&c.push(i)}));var a=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!a||!n.cols},Object(v["a"])(t,"col-".concat(n.cols),n.cols),Object(v["a"])(t,"offset-".concat(n.offset),n.offset),Object(v["a"])(t,"order-".concat(n.order),n.order),Object(v["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(l,c)}(),t(n.tag,Object(y["a"])(a,{class:c}),i)}}),C=n("132d"),V=(n("99af"),n("2532"),["sm","md","lg","xl"]),P=["start","end","center"];function D(t,e){return V.reduce((function(n,a){return n[t+Object(h["E"])(a)]=e(),n}),{})}var I=function(t){return[].concat(P,["baseline","stretch"]).includes(t)},L=D("align",(function(){return{type:String,default:null,validator:I}})),$=function(t){return[].concat(P,["space-between","space-around"]).includes(t)},T=D("justify",(function(){return{type:String,default:null,validator:$}})),E=function(t){return[].concat(P,["space-between","space-around","stretch"]).includes(t)},N=D("alignContent",(function(){return{type:String,default:null,validator:E}})),B={align:Object.keys(L),justify:Object.keys(T),alignContent:Object.keys(N)},R={align:"align",justify:"justify",alignContent:"align-content"};function A(t,e,n){var a=R[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var z=new Map,F=g["a"].extend({name:"v-row",functional:!0,props:Object(b["a"])(Object(b["a"])(Object(b["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:I}},L),{},{justify:{type:String,default:null,validator:$}},T),{},{alignContent:{type:String,default:null,validator:E}},N),render:function(t,e){var n=e.props,a=e.data,i=e.children,l="";for(var r in n)l+=String(n[r]);var c=z.get(l);return c||function(){var t,e;for(e in c=[],B)B[e].forEach((function(t){var a=n[t],i=A(e,t,a);i&&c.push(i)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(v["a"])(t,"align-".concat(n.align),n.align),Object(v["a"])(t,"justify-".concat(n.justify),n.justify),Object(v["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),z.set(l,c)}(),t(n.tag,Object(y["a"])(a,{staticClass:"row",class:c}),i)}}),G=n("b974"),H=Object(u["a"])(s,r,c,!1,null,null,null),J=H.exports;f()(H,{VBtn:p["a"],VCol:O,VIcon:C["a"],VRow:F,VSelect:G["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center"},[t._v(" Index ")]),n("th",[t._v(" Name ")]),n("th",[t._v(" Length ")]),n("th",{staticClass:"text-center"},[t._v(" Actions ")])])]),t._l(t.playlist,(function(e,a){return n("tr",{key:a},[n("td",{staticClass:"text-center"},[t._v(" "+t._s(e.playid+1)+" ")]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(t.times(e.duration)))]),n("td",{staticClass:"text-center"},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.changeList(a,a-1)}}},[n("v-icon",[t._v("mdi-chevron-up")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.changeList(a,a+1)}}},[n("v-icon",[t._v("mdi-chevron-down")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.playid(a)}}},[n("v-icon",[t._v("mdi-play")])],1),n("v-btn",{attrs:{color:"red darken-4",icon:""},on:{click:function(e){return t.deleteList(a)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)])}))]},proxy:!0}])})},Y=[],W=(n("a434"),n("96cf"),n("1da1")),q=n("7444"),K={mixins:[l["a"],q["a"]],methods:{changeList:function(t,e){var n=this;return Object(W["a"])(regeneratorRuntime.mark((function a(){var i,l,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=0,l=n.playlist.length-1,l<e&&(e=i),e<i&&(e=l),a.next=6,n.playlist.splice(e,0,n.playlist.splice(t,1)[0]);case 6:return r=[],a.next=9,n.playlist.forEach((function(t,e){t.playid=e,r.push(t)}));case 9:n.setPlaylist(n.playlistId,r);case 10:case"end":return a.stop()}}),a)})))()},deleteList:function(t){var e=this;return Object(W["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.playlist.splice(t,1),n.next=3,e.playlist.forEach((function(t,n){e.playlist[n].playid=n}));case 3:e.setPlaylist(e.playlistId,e.playlist);case 4:case"end":return n.stop()}}),n)})))()},playid:function(t){this.$axios.get("/api/playid/"+this.playlistId+"/"+t)}}},Q=K,U=n("1f4f"),X=Object(u["a"])(Q,M,Y,!1,null,null,null),Z=X.exports;f()(X,{VBtn:p["a"],VIcon:C["a"],VSimpleTable:U["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-card-title",[n("h4",[t._v("ADD PLAYLIST")])]),n("v-card-text",[n("v-data-table",{attrs:{headers:t.headers,items:t.filelist,"item-key":"name","show-select":""},scopedSlots:t._u([{key:"item.duration",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.times(n.duration))+" ")]}},{key:"item.size",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.bytes(n.size))+" ")]}},{key:"item.preview",fn:function(e){var a=e.item;return[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.preview(a.name)}}},[n("v-icon",{attrs:{color:"green darken-4"}},[t._v(" mdi-play ")])],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:t.addPlaylist}},[n("v-icon",[t._v("mdi-check-circle-outline")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("dialog")}}},[n("v-icon",[t._v("mdi-close-circle-outline")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"800px"},model:{value:t.previewDialog,callback:function(e){t.previewDialog=e},expression:"previewDialog"}},[n("Preview",{attrs:{"video-source":t.videoSource}})],1)],1)},et=[],nt=n("db61"),at={components:{Preview:nt["a"]},mixins:[l["a"],q["a"]],data:function(){return{previewDialog:!1,videoSource:"",selected:[],headers:[{text:"Name",value:"name"},{text:"Type",value:"type"},{text:"Length",value:"duration"},{text:"Size",value:"size"},{text:"Preview",value:"preview"}]}},created:function(){this.getFilelist()},methods:{resetSelected:function(){this.selected=[]},delete:function(){var t=this;return Object(W["a"])(regeneratorRuntime.mark((function e(){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.selected,0!==n.length){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.$axios.post("/api/filelist/del",n);case 5:a=e.sent,i=a.data,t.$store.dispatch("filelist/updateFilelist",i),t.resetSelected();case 9:case"end":return e.stop()}}),e)})))()},preview:function(t){this.previewDialog=!0,this.videoSource={width:800,autoplay:!0,sources:[{type:"video/mp4",src:"http://".concat(window.location.hostname,":3000/api/filelist/preview/").concat(t)}]}},addPlaylist:function(){var t=this;this.$axios.post("/api/addPlaylist",{id:this.playlistId,file:this.selected}).then((function(e){t.$store.dispatch("playlist/updatePlaylist",e.data)})),this.$emit("dialog"),this.selected=[]}}},it=at,lt=n("b0af"),rt=n("99d9"),ct=n("a523"),ot=n("8fea"),st=n("169a"),ut=n("2fa4"),dt=Object(u["a"])(it,tt,et,!1,null,null,null),ft=dt.exports;f()(dt,{VBtn:p["a"],VCard:lt["a"],VCardActions:rt["a"],VCardText:rt["b"],VCardTitle:rt["c"],VContainer:ct["a"],VDataTable:ot["a"],VDialog:st["a"],VIcon:C["a"],VSpacer:ut["a"]});var pt={mixins:[l["a"]],components:{Header:J,Table:Z,FilelistTable:ft},data:function(){return{updateDialog:!1}},created:function(){this.getPlaylist(this.playlistId)}},vt=pt,bt=n("ce7e"),gt=Object(u["a"])(vt,a,i,!1,null,null,null);e["default"]=gt.exports;f()(gt,{VCard:lt["a"],VCardText:rt["b"],VCardTitle:rt["c"],VContainer:ct["a"],VDialog:st["a"],VDivider:bt["a"]})},"7a85":function(t,e,n){"use strict";n("e2b4")},e2b4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-64d10ccf.332f745f.js.map