((typeof self !== 'undefined' ? self : this)["webpackJsonpthemeBundle"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpthemeBundle"] || []).push([[1],{

/***/ "1d1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24914475-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/review-media-list.vue?vue&type=template&id=45a053bc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "review__media"
  }, [_vm._l(_vm.media.slice(0, _vm.max_limit), function (item, index) {
    return _c('div', {
      key: index + '-media',
      on: {
        "click": function ($event) {
          return _vm.click(index);
        }
      }
    }, [item.type === 'image' ? _c('img', {
      staticClass: "review__media--image",
      attrs: {
        "src": item.url.main,
        "alt": "review_image"
      }
    }) : item.type === 'video' ? _c('div', {
      staticStyle: {
        "pointer-events": "none"
      }
    }, [_vm.isYoutube(item.url.main) ? _c('iframe', {
      attrs: {
        "width": "50px",
        "height": "80px",
        "src": _vm.getEmbedURL(item.url.main)
      }
    }) : _c('video', {
      attrs: {
        "controls": ""
      }
    }, [_c('source', {
      attrs: {
        "src": item.url.main,
        "type": "video/mp4"
      }
    })])]) : _vm._e()]);
  }), _vm.media.length > _vm.max_limit ? _c('div', {
    staticClass: "overlay",
    on: {
      "click": function ($event) {
        return _vm.click(_vm.max_limit);
      }
    }
  }, [_c('p', {
    staticClass: "more"
  }, [_vm._v("MORE")]), _vm.media[_vm.max_limit + 1].type === 'image' ? _c('img', {
    staticClass: "review__media--image",
    attrs: {
      "src": _vm.media[_vm.max_limit + 1].url.main,
      "alt": "review_image"
    }
  }) : _vm.media[_vm.max_limit + 1].type === 'video' ? _c('div', {
    staticStyle: {
      "pointer-events": "none"
    }
  }, [_vm.isYoutube(_vm.media[_vm.max_limit + 1].url.main) ? _c('iframe', {
    attrs: {
      "width": "50px",
      "height": "80px",
      "src": _vm.getEmbedURL(_vm.media[_vm.max_limit + 1].url.main)
    }
  }) : _c('video', {
    attrs: {
      "controls": ""
    }
  }, [_c('source', {
    attrs: {
      "src": _vm.media[_vm.max_limit + 1].url.main,
      "type": "video/mp4"
    }
  })])]) : _vm._e()]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./theme/global/components/reviews/review-media-list.vue?vue&type=template&id=45a053bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/review-media-list.vue?vue&type=script&lang=js&
/* harmony default export */ var review_media_listvue_type_script_lang_js_ = ({
  name: "review-media-list",
  props: {
    media: {
      type: Array,
      default: []
    },
    max_limit: {
      type: Number,
      default: 5
    }
  },
  methods: {
    getEmbedURL(url) {
      if (url.indexOf("youtu.be")) {
        return url.replace("youtu.be", "youtube.com/embed");
      } else if (url.indexOf("youtube.com/watch")) {
        return url.replace("youtube.com/watch", "youtube.com/embed");
      }
    },
    isYoutube(url) {
      return url.indexOf("youtu.be") || url.indexOf("youtube.com/watch");
    },
    click(index) {
      this.$emit("click", index);
    }
  }
});
// CONCATENATED MODULE: ./theme/global/components/reviews/review-media-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var reviews_review_media_listvue_type_script_lang_js_ = (review_media_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./theme/global/components/reviews/review-media-list.vue?vue&type=style&index=0&id=45a053bc&prod&lang=less&scoped=true&
var review_media_listvue_type_style_index_0_id_45a053bc_prod_lang_less_scoped_true_ = __webpack_require__("58f8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./theme/global/components/reviews/review-media-list.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reviews_review_media_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "45a053bc",
  null
  
)

/* harmony default export */ var review_media_list = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "24e3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4c45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24914475-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/rating-star.vue?vue&type=template&id=1fb64647&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "rating-box",
    class: {
      large: _vm.size === 'large',
      medium: _vm.size === 'medium',
      small: _vm.size === 'small'
    }
  }, [_c('span', [_vm._v(" " + _vm._s(_vm.stars) + " ")]), _c('img', {
    attrs: {
      "src": _vm.STAR_IMG
    }
  })]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./theme/global/components/reviews/rating-star.vue?vue&type=template&id=1fb64647&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/rating-star.vue?vue&type=script&lang=js&
/* harmony default export */ var rating_starvue_type_script_lang_js_ = ({
  name: "rating-star",
  props: {
    stars: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: "large"
    }
  },
  data() {
    return {
      STAR_IMG: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
    };
  }
});
// CONCATENATED MODULE: ./theme/global/components/reviews/rating-star.vue?vue&type=script&lang=js&
 /* harmony default export */ var reviews_rating_starvue_type_script_lang_js_ = (rating_starvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./theme/global/components/reviews/rating-star.vue?vue&type=style&index=0&id=1fb64647&prod&lang=less&scoped=true&
var rating_starvue_type_style_index_0_id_1fb64647_prod_lang_less_scoped_true_ = __webpack_require__("7594");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./theme/global/components/reviews/rating-star.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reviews_rating_starvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1fb64647",
  null
  
)

/* harmony default export */ var rating_star = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "58f8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_media_list_vue_vue_type_style_index_0_id_45a053bc_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ed53");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_media_list_vue_vue_type_style_index_0_id_45a053bc_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_media_list_vue_vue_type_style_index_0_id_45a053bc_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7594":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rating_star_vue_vue_type_style_index_0_id_1fb64647_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("24e3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rating_star_vue_vue_type_style_index_0_id_1fb64647_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_rating_star_vue_vue_type_style_index_0_id_1fb64647_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8274":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8b11":
/***/ (function(module, exports) {

module.exports = "https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyndnp/wrkr/addsale/company/13778/applications/638451fa8810294d0d628f8b/theme/pictures/free/original/like.472f2391b76fe67533d6ae15e09b49b8.png";

/***/ }),

/***/ "9300":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ac51":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dfda":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24914475-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/review-list.vue?vue&type=template&id=11f680fc&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "review-list"
  }, [_vm.showtitle ? _c('h2', {
    staticClass: "review-list__title"
  }, [_vm._v(" " + _vm._s(_vm.title) + " ")]) : _vm._e(), _vm.product.rating ? _c('div', {
    staticClass: "review-list__overall-rating"
  }, [_vm._v(" Overall "), _c('span', [_c('rating-star', {
    attrs: {
      "size": 'medium',
      "stars": _vm.product.rating
    }
  })], 1), _c('span', [_vm._v(" " + _vm._s(_vm.product.rating_count) + " ratings ")])]) : _vm._e(), _c('div', {
    staticClass: "review-list__list"
  }, _vm._l(_vm.reviews, function (review, index) {
    return _c('div', {
      key: index + '-review',
      staticClass: "review-list__item"
    }, [_c('review-item', {
      attrs: {
        "reviewitem": review,
        "reviewspage": _vm.reviewspage
      }
    })], 1);
  }), 0)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./theme/global/components/reviews/review-list.vue?vue&type=template&id=11f680fc&scoped=true&

// EXTERNAL MODULE: ./theme/global/components/reviews/rating-star.vue + 4 modules
var rating_star = __webpack_require__("4c45");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24914475-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/review-item.vue?vue&type=template&id=7bffe130&scoped=true&
var review_itemvue_type_template_id_7bffe130_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.reviewitem && _vm.reviewitem.rating && _vm.reviewitem.review ? _c('div', {
    staticClass: "review"
  }, [_c('div', {
    staticClass: "review__title"
  }, [_vm.reviewitem.rating ? _c('rating-star', {
    attrs: {
      "size": "small",
      "stars": _vm.reviewitem.rating.value
    }
  }) : _vm._e(), _c('p', [_vm._v(_vm._s(_vm.reviewitem.review.title))])], 1), _c('div', {
    staticClass: "review__desc"
  }, [!_vm.showMore ? _c('p', {
    staticClass: "show-less"
  }, [_vm._v(" " + _vm._s(_vm.reviewitem.review.description.slice(0, _vm.trimLength)) + " "), _vm.reviewitem.review.description.length > _vm.trimLength || _vm.hasMedia ? _c('span', {
    on: {
      "click": function ($event) {
        _vm.showMore = true;
      }
    }
  }, [_vm._v(" more... ")]) : _vm._e()]) : _c('div', {
    staticClass: "show-more"
  }, [_vm._v(" " + _vm._s(_vm.reviewitem.review.description) + " "), _vm.hasMedia ? _c('review-media-list', {
    attrs: {
      "media": _vm.reviewitem.review.media_meta
    },
    on: {
      "click": function ($event) {
        return _vm.showImageModal($event);
      }
    }
  }) : _vm._e(), _vm.showMore ? _c('review-modal', {
    attrs: {
      "reviewitem": _vm.reviewitem,
      "activeImageIndex": _vm.activeImageIndex,
      "isOpen": _vm.showModal
    },
    on: {
      "closereviewdialog": function ($event) {
        _vm.showModal = false;
      }
    }
  }) : _vm._e(), !_vm.reviewspage ? _c('span', {
    on: {
      "click": function ($event) {
        _vm.showMore = false;
      }
    }
  }, [_vm._v(" less... ")]) : _vm._e()], 1)]), _c('div', {
    staticClass: "review__footer"
  }, [_c('div', {
    staticClass: "review__footer__info"
  }, [_c('div', {
    staticClass: "review__footer__created"
  }, [_vm._v(" Created by "), _c('span', [_vm._v(_vm._s(_vm.reviewitem.created_by.name))]), _vm._v(" " + _vm._s(_vm.differenceInDays(_vm.reviewitem.date_meta.created_on, new Date())) + " ago ")])]), _c('fdk-vote-review', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (voteReviewData) {
        return [_c('div', {
          staticClass: "review__footer__vote"
        }, [_c('div', {
          staticClass: "review__footer__upvote",
          on: {
            "click": function ($event) {
              return _vm.voteReview('upvote', voteReviewData);
            }
          }
        }, [_c('img', {
          attrs: {
            "src": __webpack_require__("8b11")
          }
        }), _vm._v(" " + _vm._s(_vm.reviewitem.vote_count.upvote) + " ")]), _c('div', {
          staticClass: "review__footer__downvote",
          on: {
            "click": function ($event) {
              return _vm.voteReview('downvote', voteReviewData);
            }
          }
        }, [_c('img', {
          staticClass: "reverse",
          attrs: {
            "src": __webpack_require__("8b11")
          }
        }), _vm._v(" " + _vm._s(_vm.reviewitem.vote_count.downvote) + " ")])])];
      }
    }], null, false, 2892301430)
  })], 1)]) : _vm._e();
};
var review_itemvue_type_template_id_7bffe130_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./theme/global/components/reviews/review-item.vue?vue&type=template&id=7bffe130&scoped=true&

// EXTERNAL MODULE: ./theme/global/components/reviews/review-modal.vue + 4 modules
var review_modal = __webpack_require__("e8f9");

// EXTERNAL MODULE: ./theme/global/components/reviews/review-media-list.vue + 4 modules
var review_media_list = __webpack_require__("1d1e");

// EXTERNAL MODULE: ./theme/helper/utils.js
var utils = __webpack_require__("1be1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/review-item.vue?vue&type=script&lang=js&




/* harmony default export */ var review_itemvue_type_script_lang_js_ = ({
  name: "review-item",
  components: {
    "rating-star": rating_star["a" /* default */],
    "review-modal": review_modal["a" /* default */],
    "review-media-list": review_media_list["a" /* default */]
  },
  props: {
    reviewitem: {
      type: Object,
      default: {}
    },
    reviewspage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      trimLength: 60,
      showMore: false,
      showModal: false,
      activeImageIndex: 0
    };
  },
  mounted() {
    if (this.reviewspage) {
      this.showMore = true;
    }
  },
  watch: {
    reviewspage(n) {
      if (n) {
        this.showMore = true;
      }
    }
  },
  computed: {
    hasMedia() {
      return this.reviewitem.review.media_meta && this.reviewitem.review.media_meta.length;
    }
  },
  methods: {
    differenceInDays: utils["e" /* differenceInDays */],
    showImageModal(index) {
      this.activeImageIndex = index || 0;
      this.showModal = true;
    },
    voteReview(type, vote) {
      const obj = this.getVoteReviewData(type);
      vote.voteReview(obj).then(res => {
        if (res.success) {
          type == "upvote" ? this.reviewitem.vote_count.upvote++ : this.reviewitem.vote_count.downvote++;
        }
      }).catch(err => {});
    },
    getVoteReviewData(type) {
      const obj = {
        entity_id: this.reviewitem.entity.id,
        entity_type: this.reviewitem.entity.type,
        ref_id: this.reviewitem.id,
        //review id
        ref_type: "review",
        action: type
      };
      return obj;
    }
  }
});
// CONCATENATED MODULE: ./theme/global/components/reviews/review-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var reviews_review_itemvue_type_script_lang_js_ = (review_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./theme/global/components/reviews/review-item.vue?vue&type=style&index=0&id=7bffe130&prod&lang=less&scoped=true&
var review_itemvue_type_style_index_0_id_7bffe130_prod_lang_less_scoped_true_ = __webpack_require__("e68e");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./theme/global/components/reviews/review-item.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reviews_review_itemvue_type_script_lang_js_,
  review_itemvue_type_template_id_7bffe130_scoped_true_render,
  review_itemvue_type_template_id_7bffe130_scoped_true_staticRenderFns,
  false,
  null,
  "7bffe130",
  null
  
)

/* harmony default export */ var review_item = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/review-list.vue?vue&type=script&lang=js&


/* harmony default export */ var review_listvue_type_script_lang_js_ = ({
  name: "review-list",
  components: {
    "rating-star": rating_star["a" /* default */],
    "review-item": review_item
  },
  props: {
    reviews: {
      type: Array,
      default: []
    },
    product: {
      type: Object,
      default: {}
    },
    reviewspage: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Ratings and Review"
    },
    showtitle: {
      type: Boolean,
      default: true
    }
  }
});
// CONCATENATED MODULE: ./theme/global/components/reviews/review-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var reviews_review_listvue_type_script_lang_js_ = (review_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./theme/global/components/reviews/review-list.vue?vue&type=style&index=0&id=11f680fc&prod&lang=less&scoped=true&
var review_listvue_type_style_index_0_id_11f680fc_prod_lang_less_scoped_true_ = __webpack_require__("fb42");

// CONCATENATED MODULE: ./theme/global/components/reviews/review-list.vue






/* normalize component */

var review_list_component = Object(componentNormalizer["a" /* default */])(
  reviews_review_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "11f680fc",
  null
  
)

/* harmony default export */ var review_list = __webpack_exports__["a"] = (review_list_component.exports);

/***/ }),

/***/ "e68e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_item_vue_vue_type_style_index_0_id_7bffe130_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9300");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_item_vue_vue_type_style_index_0_id_7bffe130_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_item_vue_vue_type_style_index_0_id_7bffe130_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e8f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24914475-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/review-modal.vue?vue&type=template&id=a52fd218&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('modal', {
    attrs: {
      "isOpen": _vm.isOpen,
      "showHeader": false,
      "enableOutsideClick": _vm.enableOutsideClick
    },
    on: {
      "closedialog": _vm.closeDialog
    }
  }, [_c('div', {
    staticClass: "cross",
    on: {
      "click": _vm.closeDialog
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__("a5fd"),
      "alt": "Close"
    }
  })]), _c('div', {
    staticClass: "review-modal-body"
  }, [_vm.hasMedia ? _c('div', {
    staticClass: "review__media"
  }, [_vm.selectedIndex !== 0 ? _c('span', {
    staticClass: "chevron left",
    on: {
      "click": function ($event) {
        $event.stopPropagation();
        return _vm.prev.apply(null, arguments);
      }
    }
  }) : _vm._e(), _vm.selectedIndex !== this.reviewitem.review.media_meta.length - 1 ? _c('span', {
    staticClass: "chevron right",
    on: {
      "click": function ($event) {
        $event.stopPropagation();
        return _vm.next.apply(null, arguments);
      }
    }
  }) : _vm._e(), _vm.selectedMedia.type === 'image' ? _c('img', {
    staticClass: "review__media--image",
    attrs: {
      "src": _vm.selectedMedia.url.main,
      "alt": "review_image"
    }
  }) : _vm.selectedMedia.type === 'video' ? _c('div', {
    staticClass: "review__media--video"
  }, [_vm.isYoutube(_vm.selectedMedia.url.main) ? _c('iframe', {
    attrs: {
      "width": "100%",
      "height": "100%",
      "src": _vm.getEmbedURL(_vm.selectedMedia.url.main)
    }
  }) : _c('video', {
    attrs: {
      "controls": ""
    }
  }, [_c('source', {
    attrs: {
      "src": _vm.selectedMedia.url.main,
      "type": "video/mp4"
    }
  })])]) : _vm._e()]) : _vm._e(), _c('div', {
    staticClass: "review__data",
    style: {
      width: _vm.hasMedia ? '40%' : '100%'
    }
  }, [_c('div', {
    staticClass: "review__title"
  }, [_c('rating-star', {
    attrs: {
      "size": "small",
      "stars": _vm.reviewitem.rating.value
    }
  }), _c('p', [_vm._v(_vm._s(_vm.reviewitem.review.title))])], 1), _c('div', {
    staticClass: "review__desc"
  }, [_vm._v(" " + _vm._s(_vm.reviewitem.review.description) + " ")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./theme/global/components/reviews/review-modal.vue?vue&type=template&id=a52fd218&scoped=true&

// EXTERNAL MODULE: ./theme/global/components/modal.vue + 4 modules
var modal = __webpack_require__("2463");

// EXTERNAL MODULE: ./theme/global/components/reviews/rating-star.vue + 4 modules
var rating_star = __webpack_require__("4c45");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./theme/global/components/reviews/review-modal.vue?vue&type=script&lang=js&


/* harmony default export */ var review_modalvue_type_script_lang_js_ = ({
  name: "review-modal",
  components: {
    "rating-star": rating_star["a" /* default */],
    modal: modal["a" /* default */]
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    reviewitem: {
      type: Object,
      default: {}
    },
    enableOutsideClick: {
      type: Boolean,
      default: true
    },
    activeImageIndex: {
      type: Number,
      default: null
    }
  },
  watch: {
    activeImageIndex() {
      if (this.activeImageIndex != null) {
        this.selectedIndex = this.activeImageIndex;
        this.selectedMedia = this.reviewitem.review.media_meta ? this.reviewitem.review.media_meta[this.selectedIndex] : {};
      }
    }
  },
  data() {
    return {
      selectedMedia: this.reviewitem.review.media_meta ? this.reviewitem.review.media_meta[0] : {},
      selectedIndex: this.activeImageIndex || 0
    };
  },
  computed: {
    hasMedia() {
      return this.reviewitem.review.media_meta && this.reviewitem.review.media_meta.length;
    }
  },
  mounted() {
    document.addEventListener("backbutton", this.closeDialog, false);
  },
  beforeDestroy() {
    document.removeEventListener("backbutton", this.closeDialog);
  },
  methods: {
    closeDialog() {
      this.$emit("closereviewdialog");
    },
    getEmbedURL(url) {
      if (url.indexOf("youtu.be")) {
        return url.replace("youtu.be", "youtube.com/embed");
      } else if (url.indexOf("youtube.com/watch")) {
        return url.replace("youtube.com/watch", "youtube.com/embed");
      }
    },
    isYoutube(url) {
      return url.indexOf("youtu.be") || url.indexOf("youtube.com/watch");
    },
    next() {
      this.selectedIndex++;
      this.selectedMedia = this.reviewitem.review.media_meta[this.selectedIndex];
    },
    prev() {
      this.selectedIndex--;
      this.selectedMedia = this.reviewitem.review.media_meta[this.selectedIndex];
    }
  }
});
// CONCATENATED MODULE: ./theme/global/components/reviews/review-modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var reviews_review_modalvue_type_script_lang_js_ = (review_modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./theme/global/components/reviews/review-modal.vue?vue&type=style&index=0&id=a52fd218&prod&lang=less&scoped=true&
var review_modalvue_type_style_index_0_id_a52fd218_prod_lang_less_scoped_true_ = __webpack_require__("fc78");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./theme/global/components/reviews/review-modal.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reviews_review_modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "a52fd218",
  null
  
)

/* harmony default export */ var review_modal = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "ed53":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb42":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_list_vue_vue_type_style_index_0_id_11f680fc_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac51");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_list_vue_vue_type_style_index_0_id_11f680fc_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_list_vue_vue_type_style_index_0_id_11f680fc_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fc78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_modal_vue_vue_type_style_index_0_id_a52fd218_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8274");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_modal_vue_vue_type_style_index_0_id_a52fd218_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_vue_loader_lib_index_js_vue_loader_options_review_modal_vue_vue_type_style_index_0_id_a52fd218_prod_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=0pu3YcWQN_themeBundle.umd.extras_products.js.map