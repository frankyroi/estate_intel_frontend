exports.ids = [3];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("9d2b0784", content, true, context)
};

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tutorial_vue_vue_type_style_index_0_id_8d1ce114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tutorial_vue_vue_type_style_index_0_id_8d1ce114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tutorial_vue_vue_type_style_index_0_id_8d1ce114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tutorial_vue_vue_type_style_index_0_id_8d1ce114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tutorial_vue_vue_type_style_index_0_id_8d1ce114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cat[data-v-8d1ce114]{margin:2px;background-color:transparent;border-radius:14px;border:1px solid #000;overflow:hidden;float:left}.cat label[data-v-8d1ce114]{float:left;line-height:3em;width:6em;height:3em}.cat label span[data-v-8d1ce114]{text-align:center;padding:1px 0;display:block}.cat label input[data-v-8d1ce114]{position:absolute;display:none;color:#000!important}.cat input:checked+span[data-v-8d1ce114],.cat label input+span[data-v-8d1ce114]{color:#000}.action input:checked+span[data-v-8d1ce114]{background-color:#56def6}.colors[data-v-8d1ce114]{margin:2px;background-color:transparent;border-radius:50%;border:1px solid #000;overflow:hidden;float:left}.colors label[data-v-8d1ce114]{float:left;line-height:3em;width:2em;height:2em}.colors label span[data-v-8d1ce114]{text-align:center;padding:1px 0;display:block}.colors label input[data-v-8d1ce114]{position:absolute;display:none;color:#000!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tutorial.vue?vue&type=template&id=8d1ce114&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"},[_vm._ssrNode("<link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css\" rel=\"stylesheet\" data-v-8d1ce114> <div class=\"columns-12 w-auto\" data-v-8d1ce114><h1 data-v-8d1ce114>Filters</h1> <div class=\"filter\" data-v-8d1ce114><h1 data-v-8d1ce114>Shapes</h1> "+(_vm._ssrList((_vm.tags),function(tag,index){return ("<div class=\"cat action\" data-v-8d1ce114><label data-v-8d1ce114><input type=\"checkbox\""+(_vm._ssrAttr("id",tag))+(_vm._ssrAttr("true-value",1))+(_vm._ssrAttr("value",tag))+(_vm._ssrAttr("checked",Array.isArray(_vm.selectedTags)?_vm._i(_vm.selectedTags,tag)>-1:_vm._q(_vm.selectedTags,1)))+" data-v-8d1ce114> <span"+(_vm._ssrAttr("for",tag))+" data-v-8d1ce114>"+_vm._ssrEscape(_vm._s(tag))+"</span></label></div>")}))+"</div> <br data-v-8d1ce114><br data-v-8d1ce114><br data-v-8d1ce114> <h1 data-v-8d1ce114>Colors</h1> "+(_vm._ssrList((_vm.filterColors),function(color,index){return ("<div class=\"colors\""+(_vm._ssrStyle(null,{ backgroundColor: color}, null))+" data-v-8d1ce114><label data-v-8d1ce114><input type=\"checkbox\""+(_vm._ssrAttr("id",color))+(_vm._ssrAttr("value",color))+(_vm._ssrAttr("checked",Array.isArray(_vm.selectedColors)?_vm._i(_vm.selectedColors,color)>-1:(_vm.selectedColors)))+" data-v-8d1ce114></label></div>")}))+" <br data-v-8d1ce114><br data-v-8d1ce114><br data-v-8d1ce114> <div class=\"mt-8  overflow-hidden shadow sm:rounded-lg\" data-v-8d1ce114><h2 class=\"text-2xl leading-7 font-semibold\" data-v-8d1ce114>"+_vm._ssrEscape("\n        "+_vm._s(_vm.title)+" ("+_vm._s(_vm.activeCards.length)+")\n      ")+"</h2> <div class=\"grid grid-cols-4 gap-4\" data-v-8d1ce114>"+(_vm._ssrList((_vm.activeCards),function(size,index){return ("<div class=\"bg-white flex justify-center text-6l border-2 border-gray-300 rounded-xl p-6\" data-v-8d1ce114>"+_vm._ssrEscape("\n          "+_vm._s(size.name)+" \n          "+_vm._s(size.color)+" \n        ")+"</div>")}))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tutorial.vue?vue&type=template&id=8d1ce114&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tutorial.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tutorialvue_type_script_lang_js_ = ({
  name: 'NuxtTutorial',
  data: function () {
    return {
      tags: ['Oval', 'Round', 'Triangle', 'Square', 'Rectangle'],
      filterColors: ['Red', 'Green', 'Blue', 'Yellow', 'Black'],
      shapes: [{
        "name": "Oval",
        "shape": "Oval",
        "color": "Red"
      }, {
        "name": "Round",
        "shape": "Round",
        "color": "Blue"
      }, {
        "name": "Triangle",
        "shape": "Triangle",
        "color": "Green"
      }, {
        "name": "Square",
        "shape": "Square",
        "color": "Yellow"
      }, {
        "name": "Rectangle",
        "shape": "Rectangle",
        "color": "Black"
      }, {
        "name": "Rectangle",
        "shape": "Rectangle",
        "color": "Red"
      }],
      selectedTags: ['Oval', 'Round', 'Triangle', 'Square', 'Rectangle'],
      selectedColors: ['Red', 'Green', 'Blue', 'Yellow', 'Black'],
      title: "" // middleware: ['auth']

    };
  },
  computed: {
    activeCards: function () {
      var selected = ['Oval', 'Round', 'Triangle', 'Square', 'Rectangle'];
      var allColors = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];

      if (this.selectedTags.length == 0) {
        this.selectedTags = selected;
        return this.shapes;
      }

      var activeCards = []; // this.count = this.shapes.length

      this.title = "All Items: ";
      var filters = this.selectedTags;
      var colorFilters = this.selectedColors;

      if (this.selectedTags.length != selected.length || this.selectedColors.length != allColors.length) {
        this.title = "Multiple Items: ";
      }

      if (this.selectedTags.length == selected.length && this.selectedColors.length == 1) {
        this.title = "All " + this.selectedColors[0] + " Items: ";
      }

      if (this.selectedTags.length == 1 && this.selectedColors.length == allColors.length) {
        this.title = "All " + this.selectedTags[0] + " Items: ";
      }

      if (this.selectedTags.length > 1 && this.selectedColors.length == 1) {
        this.title = "Multiple " + this.selectedColors[0] + " Items: ";
      }

      if (this.selectedTags.length == 1 && this.selectedColors.length > 1) {
        this.title = "Multiple " + this.selectedTags[0] + " Items: ";
      }

      if (this.selectedTags.length == 1 && this.selectedColors.length == 1) {
        this.title = this.selectedColors[0] + " " + this.selectedTags[0] + " Items: ";
      }

      this.shapes.forEach(function (card) {
        function cardContainsFilter(filter) {
          return card.name.indexOf(filter) != -1;
        }

        function cardContainsColorFilter(filter) {
          return card.color.indexOf(filter) != -1;
        }

        if (filters.some(cardContainsFilter)) {
          if (colorFilters.some(cardContainsColorFilter)) {
            activeCards.push(card);
          }
        }
      });
      this.count = activeCards.length - 1;
      return activeCards;
    }
  }
});
// CONCATENATED MODULE: ./components/Tutorial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tutorialvue_type_script_lang_js_ = (Tutorialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Tutorial.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tutorialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8d1ce114",
  "6defba1d"
  
)

/* harmony default export */ var Tutorial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=tutorial.js.map