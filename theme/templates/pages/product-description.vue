<template>
  <div
    class="main-container"
    :style="`--text_heading_link_color: ${global_config.props.text_heading_link_color};y
    --button_tertiary_hover_color: ${global_config.props.button_tertiary_hover_color};--button_tertiary_hover_text_color:${global_config.props.button_tertiary_hover_text_color};--button_tertiary_color:${global_config.props.button_tertiary_color};--button_tertiary_label_color:${global_config.props.button_tertiary_label_color}; color: ${global_config.props.text_body_color}`"
  >
    <div
      class="product-desc-container"
      v-if="context && context.product && context.product.medias"
    >
      <div class="left">
        <!-- Extension Slot (Above Image Component) -->
        <!-- <fdk-extension
          v-if="getTemplates('above_image_component').length"
          :templates="getTemplates('above_image_component')"
        /> -->
          <image-gallery  
          :images="getMedias"
          :product="context.product"
          v-on:paint-canvas="showPreview"
        />
        <!-- Extension Slot (Below Image Component) -->
        <!-- <fdk-extension
          v-if="getTemplates('below_image_component').length"
          :templates="getTemplates('below_image_component')"
        /> -->
      </div>
      <div class="right">
       <fdk-extension
          v-if="getTemplates('above_product_info').length"
          :templates="getTemplates('above_product_info')"
        />
        <div class="share-like-box">
          <div
            class="mark-fav"
            v-if="page_config && page_config.props.wishlist"
          >
            <favourite :item="context.product"></favourite>
          </div>
          <fdk-share
            v-click-outside="hideShare"
            v-if="page_config && page_config.props.share"
          >
            <template slot-scope="share">
              <div class="share-button" @click="getShareLink(share)">
                <div class="svg-wrapper">
                  <svg-wrapper
                    :svg_src="'share'"
                    class="share-img"
                  ></svg-wrapper>
                </div>
                <transition name="fade">
                  <share
                    :title="`Spread the shopping delight! Scan QR & share this ${context.product.brand.name} product with
                              your loved ones`"
                    :shareLoading="shareLoading"
                    :qr_code="qr_code"
                    @close-share="showShare = false"
                    v-if="showShare"
                    :share_link="share_link"
                  />
                </transition>
              </div>
            </template>
          </fdk-share>
        </div>
        <div class="product">
          <h1
            class="product__title"
            :style="'color:' + global_config.props.text_heading_link_color"
          >
            {{ context.product.name }}
          </h1>
          <div class="product__price">
            <span
              v-if="activeLadderIndex || activeLadderIndex == 0"
              class="product__price--effective"
              :style="
                activeLadder.price.offer_price !== getProductPrice('marked')
                  ? 'color:' + global_config.props.text_sale_price_color
                  : 'color:' + global_config.props.text_price_color
              "
              >{{ activeLadder.price.offer_price | currencyformat }}
            </span>
            <span
              v-else
              class="product__price--effective"
              :style="
                getProductPrice('effective') !== getProductPrice('marked')
                  ? 'color:' + global_config.props.text_sale_price_color
                  : 'color:' + global_config.props.text_price_color
              "
              >{{ getProductPrice("effective") | currencyformat }}</span
            >
            <div class="pricetag">
              <span class="mrp-label" v-if="page_config.props.mrp_label"
                >MRP:</span
              >
              <span
                class="product__price--marked"
                :style="
                  'color:' + global_config.props.text_strikethrough_price_color
                "
                v-if="getProductPrice('effective') !== getProductPrice('marked')"
                >{{ getProductPrice("marked") | currencyformat }}
              </span>
            </div>
            <div
              class="tax-label"
              :style="'color:' + global_config.props.tax_label_color"
            >
              {{ page_config.props.tax_label }}
            </div>
          </div>
          <fdk-extension
            v-if="getTemplates('below_price_component').length"
            :templates="getTemplates('below_price_component')"
          />
          <div
            v-if="
              context &&
              context.product &&
              context.product.rating &&
              context.product.rating_count &&
              page_config &&
              page_config.props.ratings
            "
            class="product-rating-count"
          >
            <span>
              <rating-star :stars="context.product.rating" :size="'small'" />
            </span>
            <span style="font-size: 14px">
              {{ context.product.rating_count }} ratings
            </span>
          </div>
          <store-coupon
            :bulkPrices="context.bulk_prices"
            v-if="!context.bulk_prices.loading && page_config.props.bulk_prices"
            :global_config="global_config"
          ></store-coupon>
          <product-variants
            class="spaces"
            v-if="
              context.product_variants &&
              context.product_variants.variants &&
              context.product_variants.variants.variants &&
              page_config.props.variants
            "
            :product="context.product"
            :variants="context.product_variants.variants.variants"
          ></product-variants>
          <fdk-pdp-size-stores class="product__size" ref="sizeContainer">
            <template slot-scope="sellerData">
              <div class="sizes">
                <div style="display:flex;width: 150px;">
                  <p class="product__size--text">Size {{ selectedSize }}</p> 
                  <p class="selectsize" v-if="selectedSize">(Selected)</p>
                </div>
                <div class="sizeguidehover">
                  <p
                  @click="showSizeGuide = true"
                  class="product__size--guide"  
                  >
                    Size Guide
                  </p>
                </div>                             
              </div>
              <ul class="size-list">
                <li
                  v-for="(size, index) in context.product_meta.sizes"
                  :key="index"
                  class="size-list__item"
                  :class="{
                    'size-list__item--selected': selectedSize === size.display,
                    inactive: !size.is_available,
                  }"
                  @click="
                    selectedSize = size.display;
                    onSizeClicked(sellerData);
                    sizeError = false;
                  "
                >
                  <p>{{ size.display }}</p>
                </li>
              </ul>
              <div
                class="spacing regular-xxs"
                v-if="
                  isProductRequestEnabled && page_config.props.product_request
                "
              >
                Couldn't find your size?
                <a
                  class="ukt-links regular-xxs"
                  @click="showProductRequestModal = true"
                  >Product Request</a
                >
              </div>
              <p class="u-error" v-if="sizeError">Select a size first</p>
              <size-guide
                class="size-guide"
                v-if="context.product_meta"
                :isOpen="showSizeGuide"
                :product_meta="context.product_meta"
                @closedialog="showSizeGuide = false"
              ></size-guide>

              <!-- <div
                class="seller-info"
                v-if="
                  storeInfoSelected &&
                  storeInfoSelected.store &&
                  storeInfoSelected.store.name
                "
              >
                <div class="seller-name regular-xxs" v-if="showSellers">
                  <div class="store-seller">
                    Sold By:
                    {{ storeInfoSelected.store.name + "," }}
                    {{ storeInfoSelected.seller.name }}
                    <span
                      class="ukt-links bold-xs"
                      style="color: var(--text_heading_link_color)"
                      v-if="
                        store_count > 1 &&
                        page_config &&
                        page_config.props &&
                        page_config.props.store_selection
                      "
                      @click="
                        showStoreModal = true;
                        loadStoreFunction = sellerData.loadStores;
                        getStores(sellerData.loadStores);
                      "
                    >
                      & {{ store_count - 1 }} Others</span
                    >
                  </div>
                  <store-modal
                    :isOpen="showStoreModal"
                    :activeStoreInfo="storeInfo"
                    :all_stores_info="all_stores_info"
                    :sellerData="sellerData"
                    :productName="context.product.name"
                    v-on:closedialog="closedDialog"
                    v-on:store-filter="updateStoreFilter"
                    v-on:store-item-select="setStoreInfo"
                  ></store-modal>
                </div>
              </div> -->
            </template>
          </fdk-pdp-size-stores>
          <!-- Product Request -->
          <product-request-modal
            :isOpen="showProductRequestModal"
            :productInfo="context.product"
            :isPdpPage="true"
            v-on:closedialog="showProductRequestModal = false"
          ></product-request-modal>
          <size-set-info
            v-if="isSizeSet"
            :storeInfo="storeInfo"
          ></size-set-info>
          <fdk-extension
            v-if="getTemplates('below_size_component').length"
            :templates="getTemplates('below_size_component')"
          />
          <ladder-pricing
            v-if="
              ladderPrices &&
              ladderPrices.available_offers &&
              ladderPrices.available_offers.length > 0 &&
              ladderPrices.available_offers[0].offer_prices
            "
            :ladderPrices="ladderPrices"
            :cartItem="cartItem"
            :activeLadderIndex="activeLadderIndex"
            class="ladder-pricing"
          ></ladder-pricing>
          <fdk-cart class="product__actions" ref="cart">
            <template slot-scope="cart">
              <button
                class="button1"
                @click="addToCart(cart, true)"
                v-if="
                  context.product_meta &&
                  context.product_meta.sellable &&
                  !global_config.props.disable_cart &&
                  page_config &&
                  page_config.props &&
                  page_config.props.buynow
                "
                :style="`background-color: ${global_config.props.button_add_to_cart_color};color:${global_config.props.button_add_to_cart_label_color};margin-top:10px;`"
              >
                <p class="but1">Buy Now</p>
              </button>
              <!-- <button
                class="button2"
                @click="addToCart(cart)"
                v-if="
                  context.product_meta &&
                  context.product_meta.sellable &&
                  !global_config.props.disable_cart
                "
              >
                <p class="but2">Add to Bag</p>
              </button> -->
              <button
                class="button2"
                @click="showSizeCarts(cart)"
                v-if="
                  context.product_meta &&
                  context.product_meta.sellable &&
                  !global_config.props.disable_cart
                "
              >
                <p class="but2">Add to Bag</p>
              </button>
              <size-cart
                class="size-cart"
                v-if="context.product_meta"
                :isOpen="showSizeCart"
                :product_meta="context.product_meta"
                @closedialog="showSizeCart = false"
              ></size-cart>
            </template>
          </fdk-cart>
          <div
            class="product__actions"
            v-if="
              checkSelleble &&
              !context.product_meta.sellable &&
              !global_config.props.disable_cart
            "
          >
            <div
              class="button flex-center"
              :style="`background-color: ${global_config.props.button_add_to_cart_color}80;color:${global_config.props.button_add_to_cart_label_color};margin-top:10px; cursor:inherit`"
            >
              <p>PRODUCT NOT AVAILABLE</p>
            </div>
          </div>         
          <fdk-extension
            v-if="getTemplates('below_add_to_cart').length"
            :templates="getTemplates('below_add_to_cart')"
          />
          <delivery-info
            :showUserPincodeModal="showUserPincodeModal"
            :isExplicitelySelectedStore="isExplicitelySelectedStore"
            :storeInfo="storeInfo"
            :productName="context.product.product_name"
            level="l3"
            :id="getCategoryId"
            @dialogClosed="onDialogClosed"
            @pincodeChanged="onPincodeChanged($event)"
            @showTatError="onTatError($event)"
            @hideTatError="onHideTatError"
            :pincode="pincode"
          ></delivery-info>
          <!-- <compare-action-modal
            v-if="showCompareActionModal"
            :compare_slugs="context.compare_slugs"
            :compare_msg="compareMsg"
            :product_uid="context.product.slug"
            :global_config="global_config"
            @hide-compare-action-modal="hideCompareModal"
          ></compare-action-modal> -->
          <!-- <div class="book-appt-n-compare">
            <fdk-compare-action
              v-if="page_config && page_config.props.add_to_compare"
            >
              <template slot-scope="compare">
                <div
                  class="compare-container compare-text"
                  @click="
                    addCompareProducts(compare.addCompare, context.product.slug)
                  "
                >
                  <div class="compare-icon">
                    <svg-wrapper
                      :svg_src="'compare-icon'"
                      class="compare-icon"
                    ></svg-wrapper>
                  </div>
                  <p>Add to Compare</p>
                </div>
              </template>
            </fdk-compare-action>
          </div> -->
          <div class="mt-5" v-if="context.product.grouped_attributes">
            <product-desc
              :product="context.product"
              :storeInfo="storeInfo"
              :global_config="global_config"
            />
            <!-- <ul>
              <li
                class="product__attributes--item"
                :class="{ 'attr-para': attr.type === 'paragraph' }"
                v-for="(attr, index) in context.product.grouped_attributes[0]
                  .details"
                :key="index"
              >
                <span class="atr_key mr-4" v-if="attr.key.length > 1">{{
                  attr.key
                }}</span>
                <span
                  class="html"
                  v-if="attr.type === 'html'"
                  v-html="attr.value"
                ></span>
                <span v-else>{{ attr.value }}</span>
              </li>
            </ul> -->
          </div>

          <fdk-extension
            v-if="getTemplates('below_product_info').length"
            :templates="getTemplates('below_product_info')"
          />
        </div>
        <div class="product-details" v-if="context.product.description">
          <h2
            class="bold-lg title"
            :style="'color:' + global_config.props.text_heading_link_color"
          >
            Product Description
          </h2>
          <button v-if="is_colA" @click="handleClick1" class="collapsible">+</button>
          <button v-if="is_colB" @click="handleClick2" class="collapsible">-</button>
        </div>
        <collapse-transition>
            <div v-show="isOpenA" class="list-reset">
              <fdk-html-content
                class="product-long-description collist"
                :content="context.product.description"
              ></fdk-html-content>
            </div>
        </collapse-transition>
        <hr />
      </div>
    </div>
    <!-- Product Description -->
    
    <div>
      <no-ssr>
        <fdk-accounts class="rate-prod-btn">
          <template slot-scope="accountsData">
            <fdk-add-review
              :product_type="context.product.type"
              :product_uid="context.product.uid"
            >
              <template slot-scope="reviewData">
                <div
                  class="review-container"
                  v-if="
                    checkReview ||
                    (context.is_logged_in &&
                      page_config &&
                      page_config.props.reviews &&
                      reviewData.isEligible)
                  "
                >
                  <div>
                    <p
                      class="review-container__title"
                      :style="
                        'color:' + global_config.props.text_heading_link_color
                      "
                    >
                      Ratings & Reviews
                    </p>

                    <a
                      class="add-review"
                      v-if="reviewData.isEligible && context.is_logged_in"
                      @click="
                        context.is_logged_in
                          ? redirectToAddReview()
                          : accountsData.openLogin()
                      "
                    >
                      Rate Product
                    </a>

                    <review-list
                      v-if="
                        context &&
                        context.reviews &&
                        context.reviews.data &&
                        context.reviews.data.length &&
                        context.reviews.data.length > 0
                      "
                      :reviews="context.reviews.data.slice(0, 3)"
                      :product="context.product"
                      :showtitle="false"
                    />
                    <div v-else-if="reviewData.isEligible" class="no-reviews">
                      No reviews found
                    </div>
                  </div>

                  <div
                    class="view-all-ratings"
                    @click="redirectToReview"
                    v-if="
                      context &&
                      context.reviews &&
                      context.reviews.data &&
                      context.reviews.data.length &&
                      context.reviews.data.length > 3
                    "
                  >
                    <p>View all</p>
                    <span>&#8594; </span>
                  </div>
                </div>
              </template>
            </fdk-add-review>
          </template>
        </fdk-accounts>
      </no-ssr>
    </div>

    <fdk-extension
      v-if="getTemplates('product_description_bottom').length"
      :templates="getTemplates('product_description_bottom')"
    />

    <div
      class="similar"
      v-if="
        context.similar_products &&
        page_config &&
        page_config.props.similar_products
      "
    >
      <div v-for="(similar, index) in context.similar_products" :key="index">
        <h1
          class="similar__title"
          :style="'color:' + global_config.props.text_heading_link_color"
        >
          {{ similar.title }}
        </h1>
        <div class="similar__products" v-if="similar.items">
          <group-list
            :cardlist="similar.items"
            :cardtype="'PRODUCT'"
            :itemcount="4"
            :global_config="global_config"
            :listing_price_config="listingPriceConfig"
          ></group-list>
        </div>
      </div>
    </div>
    <div
      v-if="
        context.frequently_compared_products &&
        context.frequently_compared_products.products &&
        context.frequently_compared_products.products.length > 0 &&
        page_config.props.compare_products
      "
    >
      <compare-products
        :compare="context.frequently_compared_products"
        :global_config="global_config"
      ></compare-products>
    </div>
    <toast :id="'pdp'" ref="pdpToast" :content="toast_message"></toast>
  </div>
</template>
<!-- #region  -->

<settings>
  {
  "props": [

      {
        "type": "checkbox",
        "id": "mrp_label",
        "label": "Display MRP label text",
        "default": true
      },
      {
        "type": "text",
        "id": "tax_label",
        "default": "Price inclusive of all taxes",
        "label": "Price tax label text"
      },
      {
        "type": "checkbox",
        "id": "show_sellers",
        "label": "Show Sellers",
        "default": true,
        "info": "Show sellers"
      },
      {
        "type": "extension",
        "id": "extension",
        "label": "Extension Positions",
        "info": "Handle extension in these positions",
        "positions": [
          {
            "value": "above_image_component",
            "text": "Above Image Component"
          },
          {
            "value": "below_image_component",
            "text": "Below Image Component"
          },
          {
            "value": "above_product_info",
            "text": "Above Product Info"
          },
          {
            "value": "below_price_component",
            "text": "Below Price Component"
          },
          {
            "value": "below_size_component",
            "text": "Below Size Component"
          },
          {
            "value": "below_add_to_cart",
            "text" : "Below Add To Cart"
          },
          {
            "value": "below_product_info",
            "text": "Below Product Info"
          },
          {
            "value": "product_description_bottom",
            "text": "Bottom Of Product Description"
          }
        ],
        "default": {}
      }
  ]
  }
  </settings>
<!-- #endregion -->
<script>
import sizecart from "../../components/size-cart.vue";
import sizeguide from "../../components/size-guide.vue";
import toast from "../../components/common/toast.vue";
import productRequestModal from "../../components/product-description/product-request/product-request-modal.vue";
import storeCoupon from "../../components/product-description/store/coupon.vue";
import storemodal from "../../components/product-description/store/store-modal.vue";
import productVariants from "../../components/product-description/product-variants.vue";
import imageGallery from "../../components/product-description/image-gallery.vue";
import sizeSetInfo from "../../components/product-description/size/size-set-info.vue";
import deliveryInfo from "../../components/product-description/delivery-info.vue";
import ratingstar from "./../../global/components/reviews/rating-star.vue";
import compareActionModalVue from "./../../global/components/compare-action-modal.vue";
import Favourite from "../components/product-description/favourite.vue";
import share from "./../../global/components/share.vue";
import productDesc from "../../templates/components/product-description/product-desc.vue";
import groupList from "./../../global/components/group-list.vue";
import NoSSR from "vue-no-ssr";
import reviewList from "./../../global/components/reviews/review-list.vue";
import compareproducts from "../../components/product-description/compare-products.vue";
import SvgWrapper from "../../components/common/svg-wrapper.vue";
import LadderPricing from "../components/product-description/ladder-price.vue";
import AddressList from "./../../components/product-description/address-list-modal.vue";

export default {
  components: {
    "size-cart": sizecart,
    "size-guide": sizeguide,
    "product-request-modal": productRequestModal,
    "product-variants": productVariants,
    "store-coupon": storeCoupon,
    "image-gallery": imageGallery,
    "size-set-info": sizeSetInfo,
    "delivery-info": deliveryInfo,
    "rating-star": ratingstar,
    "compare-action-modal": compareActionModalVue,
    "product-desc": productDesc,
    "group-list": groupList,
    favourite: Favourite,
    "no-ssr": NoSSR,
    "review-list": reviewList,
    toast,
    share,
    "store-modal": storemodal,
    "compare-products": compareproducts,
    "svg-wrapper": SvgWrapper,
    "ladder-pricing": LadderPricing,
    "address-list-modal": AddressList
  },
  props: {
    context: {},
    pincode: ""
  },
  mounted() {
    this.isMounted = true;
    console.log("=====",this.context);
    console.log("+++++",this.page_config);
    console.log("-----",this.activeLadder);
  },
  watch: {
    showSizeGuide(newValue) {
      if (newValue) {
        document.querySelector("body").style.overflow = "hidden";
      }
    },
    showSizeCart(newValue) {
      if (newValue) {
        document.querySelector("body").style.overflow = "hidden";
      }
    },
    storeInfo() {
      this.storeInfoSelected = Object.assign(
        {},
        this.storeInfoSelected,
        this.storeInfo
      );
    },
    context(newValue) {
      if (
        !this.selectedSize &&
        !newValue.product?.loading &&
        !newValue.product_meta?.loading
      ) {
        this.preSizeSelect();
      }
    },
    $route(to, from) {
      if (to.path != from.path) {
        (this.ladderPrices = null),
          (this.storeInfoSelected = {}),
          (this.storeInfo = null),
          (this.selectedSize = "");
      }
    },
  },
  data() {
    return {
      selectedSize: "",
      shippable: false,
      showSizeGuide: false,
      showSizeCart: false,
      pincodeError: false,
      sizeError: false,
      pincodeSuccess: false,
      pincode: this.context.user_pincode || "",
      isMounted: false,
      fromPincode: null,
      toast_message: "",
      storeInfo: null,
      sizePrice: null,
      showProductRequestModal: false,
      showUserPincodeModal: "",
      message: "",
      showMessage: false,
      showCompareActionModal: false,
      shareLoading: false,
      qr_code: "",
      share_link: "",
      showShare: false,
      compareMsg: {
        title: "",
      },
      checkingPin: false,
      isExplicitelySelectedStore: false,
      loadSpinner: false,
      storeInfoSelected: {},
      all_stores_info: null,
      notifMsg: "Saved, We'll notify you when this product is back in Stock",
      store_count: null,
      showStoreModal: false,
      showSoldByModal: false,
      ladderPrices: null,
      activeLadderIndex: null,
      activeLadder: null,
      isOpenA: false,
      is_colA: true,
      is_colB: false,
    };
  },
  computed: {
    cartItem() {
      return this.cartObj[this.context.product.uid]?.item;
    },
    cartObj() {
      let cartData = {};
      for (let ele = 0; ele < this.context?.bag_data?.items?.length; ele++) {
        cartData[this.context?.bag_data?.items[ele].product.uid] = {
          item: this.context?.bag_data?.items[ele],
        };
      }
      return cartData;
    },
    ladderOffers() {
      return this.ladderPrices?.available_offers[0]?.offer_prices;
    },
    listingPriceConfig() {
      return this.context.app_features?.feature?.common?.listing_price?.value;
    },
    showSellers() {
      return this.page_config?.props?.show_sellers;
    },
    checkSelleble() {
      return this.context?.product_meta?.hasOwnProperty("sellable");
    },
    checkReview() {
      if (
        this.page_config &&
        this.page_config.props.reviews &&
        this.context &&
        this.context.reviews &&
        this.context.reviews.data &&
        this.context.reviews.data.length &&
        this.context.reviews.data.length > 0
      ) {
        return true;
      }
      return false;
    },
    getMedias() {
      let images = [];
      if (this.context?.product?.medias.length > 0) {
        return this.context?.product?.medias;
      } else {
        images.push({
          type: "image",
          url: require("../../assets/images/image-gallery-placeholder.png"),
        });
        return images;
      }
    },

    isSizeSet() {
      return this.storeInfo && this.storeInfo.is_set;
    },
    isProductRequestEnabled() {
      if (
        this.isMounted &&
        this.context.is_logged_in &&
        this.context.app_features &&
        this.context.app_features.feature &&
        this.context.app_features.feature.product_detail &&
        this.context.app_features.feature.product_detail.request_product
      ) {
        return true;
      }
      return false;
    },
    getCategoryId() {
      let product = this.context.product;
      if (product.categories && product.categories.length) {
        return product.categories[0].id;
      }
      return "";
    },
  },
  methods: {
    handleClick1() {
      this.is_colA= false;
      this.is_colB=true;
      this.isOpenA= true;
    },
    handleClick2() {
      this.is_colA= true;
      this.is_colB=false;
      this.isOpenA=false;
    },
    getLadderOffers() {
      this.$refs.cart
        .getLadderOffers({
          slug: this.context.product.slug,
          storeId: this.storeInfo?.store?.uid.toString()
            ? this.storeInfo?.store?.uid.toString()
            : "",
        })
        .then((data) => {
          this.ladderPrices = data;
          this.isAplliedLadderPrice();
        })
        .catch((err) => {
          this.ladderPrices = null;
          console.log(err);
        });
    },
    isAplliedLadderPrice() {
      if (!this.cartItem?.quantity || !this.ladderOffers) {
        this.activeLadderIndex = null;
        this.activeLadder = null;
        return false;
      }
      let isFoundInLadder = false;

      for (let i = 0; i < this.ladderOffers.length; i++) {
        let isLastIndex = this.ladderOffers.length - 1 == i;
        if (isLastIndex) {
          isFoundInLadder =
            this.cartItem.quantity >= this.ladderOffers[i].min_quantity;
        } else {
          isFoundInLadder =
            this.cartItem.quantity >= this.ladderOffers[i].min_quantity &&
            this.cartItem.quantity <= this.ladderOffers[i].max_quantity;
        }
        if (isFoundInLadder) {
          this.activeLadderIndex = i;
          this.activeLadder = this.ladderOffers[i];
          break;
        }
      }
      if (!isFoundInLadder) {
        this.activeLadderIndex = null;
        this.activeLadder = null;
      }
    },
    getTemplates(position) {
      return this.page_config.props?.extension?.[position] || [];
    },
    preSizeSelect() {
      if (
        this.context?.product_meta?.sizes?.length === 1 &&
        this.context?.product_meta?.sizes[0]?.is_available
      ) {
        if (this.context?.user_pincode) {
          this.selectedSize = this.context?.product_meta?.sizes[0]?.display;
          this.sizeClicked(this.$refs?.sizeContainer?.loadSellers);
        }
        this.sizeError = false;
      }
    },
    getShareLink(share) {
      this.shareLoading = true;
      this.showShare = true;
      share.getShareLink(window.location.href).then((res) => {
        share.generateQRCode(res).then((data) => {
          this.qr_code = `
                <div style="width: 250px;">
                  ${data.svg}
                </div>
                `;
          this.share_link = res;
          this.shareLoading = false;
        });
      });
    },
    formatAttr(key) {
      return key.split("_").join(" ");
    },
    getAttributes() {
      let keys = Object.keys(this.context.product.attributes) || [];
      if (keys && keys.length) {
        keys = keys.filter((entry) => {
          return !(
            entry === "style_note" ||
            entry === "product_details" ||
            entry === "description"
          );
        });
      }
      return keys.sort();
    },
    getProductPrice(key) {
      if (this.storeInfo && this.storeInfo.price) {
        const { is_set } = this.storeInfo;
        if (is_set) {
          return this.storeInfo.price_per_piece[key];
        }
        return this.storeInfo.price[key];
      }
      if (this.context.product_meta?.price) {
        return this.context.product_meta.price[key].min !==
          this.context.product_meta.price[key].max
          ? this.$options.filters.currencyformat(
              this.context.product_meta.price[key].min
            ) +
              " - " +
              this.$options.filters.currencyformat(
                this.context.product_meta.price[key].max
              )
          : this.context.product_meta.price[key].max;
      }
      
    },
    getPrice(price) {
      if (price.min === price.max) {
        return this.$options.filters.currencyformat(price.min);
      }
      return (
        this.$options.filters.currencyformat(price.min) +
        " - " +
        this.$options.filters.currencyformat(price.max)
      );
    },

    checkLength() {
      if (`${this.pincode}`.length > 6) this.pincode = this.pincode.slice(0, 6);
    },
    updateStoreFilter(filtertype) {
      this.storeCompanyFilter = filtertype;
      this.getStores(this.loadStoreFunction);
    },
    setStoreInfo(store) {
      this.storeInfoSelected = Object.assign({}, this.storeInfoSelected, store);
      this.storeInfo = this.storeInfoSelected;
      this.showStoreModal = false;
      this.isExplicitelySelectedStore = true;
      this.getLadderOffers();
    },
    getStores(loadStores) {
      let options = {
        strategy: this.storeCompanyFilter || "",
        page: 1,
      };
      loadStores(options)
        .then((res) => {
          this.all_stores_info = res;
        })
        .catch((err) => {});
    },
    onSizeClicked(sellerData) {
      this.isExplicitelySelectedStore = false;
      if (!this.pincode) {
        this.showUserPincodeModal = false;
      } else {
        this.sizeClicked(sellerData.loadSellers);
      }

    },
    sizeClicked(loadSellers) {
      let promises = [];
      console.log("object",this.selectedSize);

      let options = {
        size: this.selectedSize,
        slug: this.context.product.slug,
        pincode: this.pincode,
      };

      this.loadSpinner = true;

      loadSellers(options)
        .then((res) => {
          this.storeInfo = res;
          this.store_count = res.store.count;
          this.showSoldByModal = true;
          this.loadSpinner = false;
          this.getLadderOffers();
        })
        .catch((err) => {
          this.loadSpinner = false;
        });
    },
    redirectToReview() {
      this.$router.push({
        path: `${this.$route.path}/reviews`,
        query: { type: "product", uid: this.context.product.uid },
      });
    },
    redirectToAddReview() {
      this.$router.push({
        path: `${this.$route.path}/add-review`,
        query: { type: "product", uid: this.context.product.uid },
      });
    },
    addToCart(cart, buyNow = false) {
      if (this.product_meta?.sizes?.length == 0) {
        this.message = "No sizes available. Product Out of Stock";
        this.showMessage = true;
        return;
      } else if (!this.selectedSize) {
        this.sizeError = true;
        if (window.innerWidth < 780) {
          var top = this.$refs.sizeContainer.offsetTop;
          window.scrollTo(0, 0);
        }
        return;
      }

      let data = {
        slug: this.context.product.slug,
        size: this.selectedSize,
        pincode: this.pincode,
      };
      let addItemData = {
        items: [
          {
            item_id: this.context.product.uid,
            item_size: this.selectedSize,
            quantity: 1,
            article_assignment: this.storeInfo.article_assignment,
            seller_id: this.storeInfo.seller.uid,
            store_id: this.storeInfo.store.uid,
          },
        ],
        buy_now: buyNow,
      };
      cart.addToCart(addItemData).then((data) => {
        if (data.success) {
          if (this.$refs.carousel) {
            this.$refs.carousel.$el.style.visibility = "hidden";
          }
          this.$router.push("/cart/bag");
        } else {
          this.toast_message = data?.message;
          this.$refs.pdpToast.showToast();
        }
      });
      // })
      // .catch(console.error);
    },
    showSizeCarts(cart, buyNow = false) {
      if (this.product_meta?.sizes?.length == 0) {
        this.message = "No sizes available. Product Out of Stock";
        this.showMessage = true;
        return;
      } else if (!this.selectedSize) {
        this.sizeError = true;
        console.log("sizeerror", this.sizeError);
        if (window.innerWidth < 780) {
          var top = this.$refs.sizeContainer.offsetTop;
          window.scrollTo(0, 0);
        }
        return;
      }
      else {
        this.showSizeCart =true;
      }

      let data = {
        slug: this.context.product.slug,
        size: this.selectedSize,
        pincode: this.pincode,
      };
      let addItemData = {
        items: [
          {
            item_id: this.context.product.uid,
            item_size: this.selectedSize,
            quantity: 1,
            article_assignment: this.storeInfo.article_assignment,
            seller_id: this.storeInfo.seller.uid,
            store_id: this.storeInfo.store.uid,
          },
        ],
        buy_now: buyNow,
      };
      cart.showSizeCarts(addItemData).then((data) => {
        if (data.success) {
          if (this.$refs.carousel) {
            this.$refs.carousel.$el.style.visibility = "visible";
          }
        } 
      });
    },
    onDialogClosed() {
      this.showUserPincodeModal = false;
      if (this.pincode && this.selectedSize) {
        this.sizeClicked(this.$refs?.sizeContainer?.loadSellers);
      } else if (!this.pincode) {
        this.selectedSize = "";
      }
    },
    onPincodeChanged(event) {
      this.pincode = event;
    },
    hideShare() {
      this.showShare = false;
    },
    onTatError(err) {
      this.message = err;
      this.showMessage = true;
    },
    onHideTatError() {
      this.message = "";
      this.showMessage = false;
    },
    addCompareProducts(promiseFn, productUid) {
      if (this.context.compare_slugs.length < 3) {
        promiseFn(productUid)
          .then((res) => {
            //todo
          })
          .catch((err) => {
            //show error
            this.compareMsg.title = err.message || "Something went wrong";
            this.showCompareActionModal = true;
          });
      } else {
        //show popup max upto 3
        this.compareMsg.title = "You can only compare 3 products at a time";
        this.showCompareActionModal = true;
      }
    },
    closedDialog() {
      this.showStoreModal = false;
    },
    hideCompareModal() {
      this.showCompareActionModal = false;
      this.compareMsg.title = "";
    },
    setCanvasDimension() {
      let canvas = this.$refs["preview"];
      canvas.style.top = window.scrollY + "px";
    },
    showPreview(data) {
      let canvas = this.$refs["preview"];
      if (canvas) {
        if (data.show) {
          this.setCanvasDimension();
          canvas.style.display = "block";
        } else {
          canvas.style.display = "none";
          return;
        }

        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(
          data.image,
          (data.image.naturalWidth * data.gridRect.left) /
            data.imageInGrid.width,
          (data.image.naturalHeight * data.gridRect.top) /
            data.imageInGrid.height,
          (data.image.naturalWidth * data.gridRect.width) /
            data.imageInGrid.width,
          (data.image.naturalHeight * data.gridRect.height) /
            data.imageInGrid.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }
    },
  },
};
</script>

<style lang="less" scoped>
.svg-wrapper {
  position: relative;
  width: 24px;
  height: 24px;
}
.notify-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 10px;
  }
}
.inactive {
  opacity: 0.4;
  cursor: auto;
  pointer-events: none;
}
.share-like-box {
  position: absolute;
  right: 30px;
  display: none;

  .mark-fav {
    cursor: pointer;
    margin-bottom: 10px;
    margin-left: 2px;
  }
  .share-button {
    cursor: pointer;
    .share-img {
      position: relative;
      height: 24px;
      width: 24px;
    }
  }
}
.review-container {
  background-color: @White;
  padding: 20px 20px 20px 0;
  margin-top: 20px;
  .rate-prod-btn {
    display: block;
    text-align: center;
    margin: 10px 0 0 0;
  }
  &__title {
    font-size: 1.5625rem;
    font-weight: 600;
    margin: 10px 0 0 0;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    color: @color-black;
    @media @mobile {
      font-size: 1.2rem;
    }
    a {
      padding: 0 0 0 20px;
      text-transform: capitalize;
    }
  }
  .add-review {
    // text-transform: uppercase;
    font-size: 14px;
    text-decoration: underline;
    // color: @Black;
    cursor: pointer;
    text-align: center;
    margin: 10px 0 0 0;
    display: block;
  }

  .no-reviews {
    margin: 20px 0;
    text-align: center;
  }

  .view-all-ratings {
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    border-bottom: 1px solid;
    cursor: pointer;
    p {
      margin-right: 10px;
    }
  }
}
.product-rating-count {
  // margin-bottom: 20px;
  margin-bottom: 0.78125rem;
}
.book-appt-n-compare {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0 0 0;
  @media @tablet {
    flex-direction: column;
  }
  > :first-child {
    flex: 0 0 51%;
    @media @tablet {
      width: 100%;
    }
  }
  > :nth-child(2) {
    flex: 0 0 43%;
    @media @tablet {
      width: 100%;
      margin-top: 20px;
    }
  }
}
.seller-info {
  margin-bottom: 5px;
  line-height: 20px;
  .seller-name {
    // color: #41434c;
    padding: 5px 0;
    .store-seller {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
.compare-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--button_tertiary_label_color);
  border: 1px solid var(--button_tertiary_color);
  font-size: 14px;
  padding: 12.5px 0;
  cursor: pointer;
  .compare-icon {
    padding: 0 5px;
    .a,
    .d {
      fill: none;
    }
    .a {
      stroke: var(--button_tertiary_label_color);
      stroke-width: 0.8px;
    }
    .b {
      fill: var(--button_tertiary_label_color);
    }
    .c {
      stroke: none;
    }
    img {
      width: 18px;
    }
  }
}

.product-details-right {
  -webkit-column-count: 1; /* Chrome, Safari, Opera */
  -moz-column-count: 1; /* Firefox */
  column-count: 1;
  @media @mobile {
    -webkit-column-count: 12; /* Chrome, Safari, Opera */
    -moz-column-count: 1; /* Firefox */
    column-count: 1;
  }
  &.columns1 {
    -webkit-column-count: 12; /* Chrome, Safari, Opera */
    -moz-column-count: 1; /* Firefox */
    column-count: 1;
  }
  .product-attr-table {
    min-width: 320px;
    box-sizing: border-box;
    tr {
      // border-bottom: 1px solid #e4e4e4;
      text-align: left;
      font-size: 14px;
      -webkit-column-break-inside: avoid;
      page-break-inside: avoid;
      break-inside: avoid;
      td {
        height: 40px;
        text-align: left;
        vertical-align: middle;
        padding: 5px 10px 10px 0;
        line-height: 20px;
        word-wrap: break-word;
        word-break: break-word;
        text-transform: capitalize;
      }
      .key {
        font-weight: 700;
        // background-color: #f3f3f3;
        width: 40%;
      }
    }
  }
}

/deep/.product-details {
  margin-top: 16px;
  padding: 0;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  h2 {
    font-family: 'Marcellus';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.02em;
    @media @tablet {
      font-size: 20px;
      line-height: 24px;
    }
  }

  .collapsible {
  font-size: 15px;
  border: 0;
  background-color: white;
  font-size: 24px;
  }
  .collist {
    margin-top:16px;
    @media @tablet {
      font-size: 12px;
      line-height: 16px;
    }
  }
  .product-long-description {
    line-height: 20px;
    font-size: 14px;
    overflow-wrap: break-word;
    b {
      font-weight: 700;
      margin-top: 25px;
      display: block;
    }
    br {
      content: "";
      display: block;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
      line-height: 20px;
      img {
        margin: 10px 0;
      }
    }
    video {
      max-width: 100% !important;
    }
  }
}
.product__attributes--item {
  display: flex;
  align-items: center;
}
.main-container {
  background-color: @color-white;
  padding: 56px 72px 0;
  margin-top: 0px;
  @media @tablet {
    padding: 0px;
  }
  @media @mobile {
    padding: 0;
    margin-top: 0;
  }
  .product-desc-container {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    flex-direction: row;
    @media @tablet {
      flex-direction: column;
    }
    .left {
      flex: 0 0 58%;
      // overflow: hidden;
    }
    .right {
      flex: 1 0 42%;
      padding: 0px 0 0 56px;
      box-sizing: border-box;
      overflow: hidden;
      position: sticky;
      top: 0;
      font-size: 20px;
      height: 1100px;
      @media @tablet {
        padding: 16px 40px;
      }
      @media @mobile {
        width: 100%;
        padding: 0 16px 16px;
        box-sizing: border-box;
      }
      .preview {
        display: none;
        position: absolute;
        z-index: 1;
        margin-top: 15px;
        width: 100%;
      }
      .product {
        &__title {
          font-size: 32px;
          margin-bottom: 0px;
          padding-right: 60px;
          font-family: 'Marcellus';
          font-style: normal;
          font-weight: 400;
          font-size: 32px;
          line-height: 36px;
          letter-spacing: -0.02em;
          @media @tablet {
            padding-right: 45px;
            font-size: 32px;
          }
          @media @mobile {
            padding-right: 0px;
            font-size: 28px;
            line-height: 32px;
            letter-spacing: -0.02em;
          }
        }
        .tax-label {
          line-height: 16px;
          margin-top: 0px;
          width: 127px;
          height: 16px;
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
        }
        &__price {
          margin-top: 24px;
          margin-bottom: 0px;
          display: flex;
          flex-direction: column;
          @media @tablet {
            margin-top: 32px;
          }
          &--marked {
            margin-right: 0;
            text-decoration: line-through;
            opacity: 0.8;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #8E8C8A;
          }
          &__effective {
            width: 150px;
            height: 32px;
            font-family: 'Marcellus';
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 32px;
            letter-spacing: -0.02em;
            color: #26201a;
          }
          .mrp-label {
            margin-right: 2px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.02em;
            color: #8E8C8A;
            @media @tablet {
              font-size: 12px;
              line-height: 16px;
            }
          }
          .pricetag {
            margin-top: 8px;
            @media @tablet {
              margin-top: 14px;
            }
            @media @mobile{
              margin-top: 0px;
            }
          }
        }
        &__size {
          // margin-bottom: 0.625rem;
          &--text {
            font-size: 12px;
            line-height: 16px;
            width: 45px;
            color: #26201A;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
          }
          .selectsize {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #26201A;
            width: 100px;
          }
          .sizes {
            display:flex;
            margin-top:28px;
            @media @tablet {
              margin-top: 32px;
              justify-content: space-between;
            }
            @media @mobile {
              margin-top: 26px;
              justify-content: space-between;
            }
          }
          &--guide {
            cursor: pointer;
            margin-top: 0px;
            font-weight: 500;
            width: 110px;
            font-family: 'Inter';
            font-style: normal;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.02em;
            text-transform: uppercase;
            color: #777676;
            @media @tablet {
              width: 80px;
            }
            @media @mobile {
              font-size: 12px;
            }
          }
          .sizeguidehover {
            display: flex;
	          justify-content: center;
	          align-items: center;
          }
          .sizeguidehover p {
            position: relative;
          }
          .sizeguidehover p::after {
          	content: '';
          	position: absolute;
          	bottom: 0;
          	left: 0;
          	width: 69%;
          	height: 0.15em;
          	background-color: #777676;
          	opacity: 0;
          	transition: opacity 300ms, transform 300ms;
          }

          .sizeguidehover p:hover::after,
          .sizeguidehover p:focus::after {
          	opacity: 1;
          	transform: translate3d(0, 0.2em, 0);
          }

          .sizeguidehover p {
          	overflow: hidden;
          }

          .sizeguidehover p::after {
          	opacity: 1;
          	transform: translate3d(-100%, 0, 0);
          }

          .sizeguidehover p:hover::before,
          .sizeguidehover p:focus::before{
          	transform: translate3d(0, 0, 0);
          }
          .sizeguidehover p:hover::after{
          	transform: translate3d(0, 0, 0);
          }
          .size-list {
            display: flex;
            font-size: 1rem;
            margin-top: 12px;
            flex-wrap: wrap;
            @media @tablet {
              margin-top: 14px;
            }
            @media @mobile {
              margin-top: 4px;
            }
            &__item {
              padding: 0px;
              margin-right: 8px;
              cursor: pointer;
              border: 1px solid #e1e1e1;
              color: #999;
              text-align: center;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: 10px;
              width: 80px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              @media @tablet {
                width: 64px;
              }
              &--selected {
                background-color: #B4ABA0;
                color: @color-white;
                border-color: transparent;
              }
            }
          }
        }
        &__actions {
          margin-top: 48px;
          @media @tablet {
            margin-top: 32px;
          }

          .button1 {
            width: 100%;
            text-transform: uppercase;
            text-align: center;
            cursor: pointer;
            border: 1px solid transparent;
            transition: all 0.4s;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 12px 32px;
            gap: 4px;
            height: 48px;
          }
          .but1 {
            width: 66px;
            height: 20px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: -0.02em;
            text-transform: uppercase;
            color: #F9F7F4;
          }
          .button2 {
            width: 100%;
            text-transform: uppercase;
            text-align: center;
            height: 3rem;
            cursor: pointer;
            transition: all 0.4s;
            margin-top: 12px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 12px 32px;
            gap: 4px;
            height: 48px;
            background: #ffffff;
            border: 1px solid black;
          }
          .but2 {
            width: 84px;
            height: 20px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: -0.02em;
            text-transform: uppercase;
            color: #26201A;
          }
        }
        &__pincode {
          margin-top: 2.1875rem;
          .delivery-options {
            color: #1d1d1d;
            font-size: 0.75rem;
            letter-spacing: 0.78px;
            line-height: 18px;
            text-transform: uppercase;
          }
          .input-wrapper {
            position: relative;
            display: flex;
            margin-top: 1em;
          }
          .pincode-input {
            width: 35%;
            @media @mobile {
              width: 100%;
              box-sizing: border-box;
            }
            height: 40px;
            padding: 0 1em;
            font-size: 14px;
            border: 1px solid #000000;
            color: #000000;
          }
          .check-btn {
            font-size: 14px;
            letter-spacing: 0.06px;
            cursor: pointer;
            background: #fff;
            position: absolute;
            left: 29%;
            top: 10px;
          }
          .spinner {
            width: 48px;
            height: 40px;
            margin-top: -3px;
            padding-left: 10px;
          }
        }
        &__attributes {
          font-size: 0.875rem;
          color: @color-gray;
          h3 {
            color: @color-black;
          }
          &--item {
            @media @mobile {
              display: flex;
              width: 100%;
            }
            span {
              display: inline-block;
              min-width: 9.375rem;
              @media @mobile {
                width: 100%;
              }
              white-space: pre-wrap;
            }
            span.html {
              display: inline-block;
              min-width: 9.375rem;
              white-space: nowrap;
              @media @mobile {
                width: 100%;
              }
            }
          }
          .attr-para {
            margin-bottom: 0.9375rem;
            display: flex;
            @media @mobile {
              // flex-direction: column;
            }
          }
        }
      }
    }
  }
  .similar {
    &__title {
      margin-top: 3.125rem;
      font-size: 1.5625rem;
      text-align: center;
      //   text-transform: uppercase;
      font-weight: 600;
      @media @mobile {
        font-size: 1.2rem;
      }
    }
    &__products {
      display: flex;
      flex-wrap: wrap;
      margin-top: 3.125rem;
      @media @mobile {
        padding: 1.5625rem;
        box-sizing: border-box;
        margin-top: 0;
      }
      &--item {
        &:not(:last-child) {
          margin-right: 20px;
          @media @mobile {
            margin-right: 0;
          }
        }
      }
    }
  }
}
.atr_key {
  &::after {
    content: ":";
    @media @mobile {
      content: "";
    }
  }
}
.ladder-pricing {
  margin-top: 10px;
}
</style>
