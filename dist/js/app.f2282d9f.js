(function(e){function t(t){for(var r,u,c=t[0],s=t[1],i=t[2],f=0,d=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b3289":"ffb506eb","chunk-2d2086b7":"cf518cce","chunk-6287e0fa":"b4c3b70c"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var i=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1093:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showNav?n("SiteNav"):e._e(),n("router-view")],1)},a=[],u=(n("b64b"),n("5530")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("section",[n("div",{staticClass:"col1"},[n("router-link",{attrs:{to:"/"}},[n("h3",[e._v("Vuegram")])]),n("ul",{staticClass:"inline"},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1),n("li",[n("router-link",{attrs:{to:"/settings"}},[e._v("Settings")])],1),n("li",[n("a",{on:{click:e.logout}},[e._v("logout")])])])],1)])])},s=[],i=n("2f62"),f={methods:Object(u["a"])(Object(u["a"])({},Object(i["b"])({signoff:"users/logout"})),{},{logout:function(){this.signoff()}})},l=f,d=n("2877"),p=Object(d["a"])(l,c,s,!1,null,null,null),h=p.exports,m={components:{SiteNav:h},computed:Object(u["a"])(Object(u["a"])({},Object(i["c"])({userProfile:"users/user"})),{},{showNav:function(){return Object.keys(this.userProfile).length>1}})},b=m,v=(n("034f"),Object(d["a"])(b,o,a,!1,null,null,null)),g=v.exports,w=(n("45fc"),n("d3b7"),n("8c4f")),O=n("dc59");r["a"].use(w["a"]);var y=[{path:"/",name:"Dashboard",component:function(){return n.e("chunk-6287e0fa").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))},meta:{requiresAuth:!0}}],j=new w["a"]({mode:"history",base:"/",routes:y});j.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!O["a"].currentUser?n("/login"):n()}));var k,P=j,x=(n("4160"),n("159b"),n("b0c0"),n("ac1f"),n("5319"),n("ade3")),R=(n("96cf"),n("1da1")),S="SET_USER_PROFILE",_="CLEAR_USER_PROFILE",E="SET_POSTS",U={userProfile:{}},I={user:function(e){return e.userProfile}},A={login:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["a"].signInWithEmailAndPassword(n.email,n.password);case 2:r=e.sent,o=r.user,K.dispatch("users/fetchUserProfile",o);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),fetchUserProfile:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["e"].doc(n.uid).get();case 2:r=e.sent,t.commit(S,r.data()),"/login"===P.currentRoute.path&&P.replace("/");case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),signup:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("form",n),e.next=3,O["a"].createUserWithEmailAndPassword(n.email,n.password);case 3:return r=e.sent,o=r.user,e.next=7,O["e"].doc(o.uid).set({name:n.name,title:n.title});case 7:K.dispatch("users/fetchUserProfile",o);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["a"].signOut();case 2:t.commit(_),P.push("/login");case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),updateProfile:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=O["a"].currentUser.uid,e.next=3,O["e"].doc(n).update({name:t.name,title:t.title});case 3:return r=e.sent,console.log(r),K.dispatch("users/fetchUserProfile",{uid:n}),e.next=8,O["d"].where("userId","==",n).get();case 8:return o=e.sent,o.forEach((function(e){O["d"].doc(e.id).update({userName:t.name})})),e.next=12,O["b"].where("userId","==",n).get();case 12:a=e.sent,a.forEach((function(e){O["b"].doc(e.id).update({userName:t.name})}));case 14:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},C=(k={},Object(x["a"])(k,S,(function(e,t){e.userProfile=t})),Object(x["a"])(k,_,(function(e){e.userProfile={}})),k),T={namespaced:!0,state:U,getters:I,actions:A,mutations:C},L=(n("99af"),{posts:[]}),N={getPosts:function(e){return e.posts}},B={createPost:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["d"].add({createdOn:new Date,content:n.content,userId:O["a"].currentUser.uid,userName:K.state.users.userProfile.name,comments:0,likes:0});case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),setPosts:function(e,t){e.commit(E,t)},likePost:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=O["a"].currentUser.uid,o="".concat(r,"_").concat(n.id),e.next=4,O["c"].doc(o).get();case 4:if(a=e.sent,!a.exists){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,O["c"].doc(o).set({postId:n.id,userId:r});case 9:O["d"].doc(n.id).update({likes:n.likeCount+1});case 10:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},q=Object(x["a"])({},E,(function(e,t){e.posts=t})),M={namespaced:!0,state:L,getters:N,actions:B,mutations:q};r["a"].use(i["a"]),O["d"].orderBy("createdOn","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){var n=e.data();n.id=e.id,t.push(n)})),G.dispatch("post/setPosts",t),console.log(G)}));var D,G=new i["a"].Store({state:{appVersion:3},modules:{users:T,post:M}}),K=G;n("1093");r["a"].config.productionTip=!1,O["a"].onAuthStateChanged((function(e){D||(D=new r["a"]({router:P,store:K,render:function(e){return e(g)}}).$mount("#app")),e&&K.dispatch("users/fetchUserProfile",e)}))},"85ec":function(e,t,n){},dc59:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return f}));var r=n("59ca"),o=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyB7MCL8BGa09jSXf4UQNG8fhAmHkBOOkq8",authDomain:"vue-firebase-23188.firebaseapp.com",databaseURL:"https://vue-firebase-23188.firebaseio.com",projectId:"vue-firebase-23188",storageBucket:"vue-firebase-23188.appspot.com",messagingSenderId:"1017708428733",appId:"1:1017708428733:web:9767e4e63986e3e8de26d4",measurementId:"G-W9YCZKXTKB"});r["initializeApp"](o);var a=r["firestore"](),u=r["auth"](),c=a.collection("users"),s=a.collection("posts"),i=a.collection("comments"),f=a.collection("likes")}});
//# sourceMappingURL=app.f2282d9f.js.map