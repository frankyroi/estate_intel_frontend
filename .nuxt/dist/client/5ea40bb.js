(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{261:function(e,t,r){"use strict";r.r(t);var o=r(7),n=(r(45),r(10),{data:function(){return{processing:!1,password:"coolToolsGr8Work",email:"elroifrancis@gmail.com",strategy:"local"}},methods:{interactiveLogin:function(){var e=this;this.processing=!0,this.login({username:this.email,password:this.password,strategy:this.stategy||"local"}).catch((function(e){console.error("Error:login() e.response",e.response)})).finally((function(){e.processing=!1}))},login:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,l,c,d,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.username,n=void 0===o?t.email:o,l=e.password,c=void 0===l?t.password:l,d=e.strategy,m=void 0===d?t.stategy||"local":d,console.log("login()",t.email,t.password,t.strategy),n&&c){r.next=4;break}throw new Error("Error: username & password are required.");case 4:if("local"!==m){r.next=11;break}return console.log("==========this.$store.state.auth.loggedIn=============="),console.log(t.$store.state.auth.loggedIn),"elroifrancis@gmail.com"==t.email&&"coolToolsGr8Work"==t.password?t.$router.push("/"):t.$router.push("login"),r.abrupt("return",!0);case 11:throw new Error("Passport strattegie '".concat(m,"' isn't supported yet."));case 12:case"end":return r.stop()}}),r)})))()}}}),l=r(53),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center justify-center min-h-screen bg-gray-100"},[r("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css",rel:"stylesheet"}}),e._v(" "),r("div",{staticClass:"px-8 py-6 mt-4 text-left bg-white shadow-lg"},[r("h3",{staticClass:"text-2xl font-bold text-center"},[e._v("Login to your account")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.interactiveLogin.apply(null,arguments)}}},[r("div",{staticClass:"mt-4"},[r("div",[r("label",{staticClass:"block",attrs:{for:"email"}},[e._v("Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"mt-4"},[r("label",{staticClass:"block"},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"flex items-baseline justify-between"},[r("button",{staticClass:"px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900",attrs:{type:"submit",disabled:e.processing}},[e._v("Login")]),e._v(" "),r("a",{staticClass:"text-sm text-blue-600 hover:underline",attrs:{href:"#"}},[e._v("Forgot password?")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);