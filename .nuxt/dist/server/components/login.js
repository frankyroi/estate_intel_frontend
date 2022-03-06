exports.ids = [1];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=3cd78d7c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex items-center justify-center min-h-screen bg-gray-100"},[_vm._ssrNode("<link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css\" rel=\"stylesheet\"> <div class=\"px-8 py-6 mt-4 text-left bg-white shadow-lg\"><h3 class=\"text-2xl font-bold text-center\">Login to your account</h3> <form><div class=\"mt-4\"><div><label for=\"email\" class=\"block\">Email</label> <input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600\"></div> <div class=\"mt-4\"><label class=\"block\">Password</label> <input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600\"></div> <div class=\"flex items-baseline justify-between\"><button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.processing))+" class=\"px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900\">Login</button> <a href=\"#\" class=\"text-sm text-blue-600 hover:underline\">Forgot password?</a></div></div></form></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=3cd78d7c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  data() {
    return {
      processing: false,
      password: "coolToolsGr8Work",
      email: "elroifrancis@gmail.com",
      strategy: "local"
    };
  },

  methods: {
    interactiveLogin() {
      this.processing = true;
      this.login({
        username: this.email,
        password: this.password,
        strategy: this.stategy || "local"
      }).catch(e => {
        console.error("Error:login() e.response", e.response);
      }).finally(() => {
        this.processing = false;
      });
    },

    async login({
      username = this.email,
      password = this.password,
      strategy = this.stategy || "local"
    }) {
      console.log("login()", this.email, this.password, this.strategy);

      if (!username || !password) {
        throw new Error("Error: username & password are required.");
      } // console.debug('store login: %s:%s', email, password)


      if (strategy === "local") {
        console.log('==========this.$store.state.auth.loggedIn==============');
        console.log(this.$store.state.auth.loggedIn);

        if (this.email == 'elroifrancis@gmail.com' && this.password == 'coolToolsGr8Work') {
          this.$router.push("/");
        } else {
          this.$router.push("login");
        } // on local strategy we only handle email as username
        // const succesfulLogin = await this.$auth.loginWith('local', {
        // data: {
        //     email: this.email,
        //     password: this.password,
        // },
        // })
        // this.$router.push("/");


        return true;
      } else {
        throw new Error(`Passport strattegie '${strategy}' isn't supported yet.`);
      }
    } // async login() {
    //   try {
    //     let response = await this.$auth.loginWith("local", {
    //       data: this.loginData
    //     });
    //     this.$router.push("/");
    //     console.log(response);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }


  }
});
// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "381b33ba"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map