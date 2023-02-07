<template>
  <section :class="['media-with-text','full-width-section','mirror-' + settings.props.mirror.value,]">
    <div :class="['image-section-first']">
      <emerge-img :src=this.img1 />
    </div>

    <div :class="['image-section-second-M']">
      <ul>
        <li v-for="items in this.img" :key="items">
          <emerge-img :src="items.url" />
        </li>
      </ul>
    </div>

    <div :class="['media-with-text__content']">
      <div :class="['image-section-first-M']">
        <emerge-img :src=this.img1 />
      </div>

      <div :class="['image-section-second']">
          <ul>
            <li v-for="items in this.img" :key="items">
              <emerge-img :src="items.url" />
            </li>
          </ul>
      </div>
      <div class="media-with-text__content--main">
        {{ settings.props.productName.value }}
      </div>
      <div class="media-with-text__content--sub">
        {{ settings.props.productDescription.value }}
      </div>
      <div class="media-with-text__content--btn">
        <fdk-link :link= "`/product/${slug_val}`">
          <sm-button
          :backgroundcolortype="'primary'"
          :colortype="'primary'"
          :bordertype="'primary'"
          :padding="'primary'"
          :global_config="global_config"
          v-if="settings.props.button_text.value"
          >
            {{ settings.props.button_text.value }}
          </sm-button>
        </fdk-link>
      </div>
    </div>
  </section>
</template>

<!-- #region  -->

<settings>
{
  "name": "product-showcase",
  "label": "Product Showcase",
  "props": [
    {
      "type": "select",
      "id": "mirror",
      "options": [
          {
              "value": "on",
              "text": "ON"
          },
          {
              "value": "off",
              "text": "OFF"
          }
      ],
      "default": "off",
      "label": "Mirror layout"
    },
    {
      "type": "product",
      "id": "Product", 
      "default": "",
      "label": "Select Product"
    },
    {
      "type": "range",
      "id": "slide_interval",
      "min": 1,
      "max": 10,
      "step": 1,
      "unit": "sec",
      "label": "Product image slidshow speed",
      "default": 2,
      "info": "Autoplay slide duration"
    },
    {
      "type": "textarea",
      "id": "productName",
      "default": "",
      "label": "Product Name"
    },
    {
      "type": "textarea",
      "id": "productDescription",
      "default": "",
      "label": "Product Description"
    },
    {
      "type": "text",
      "id": "button_text",
      "default": "Shop Now",
      "label": "Button Text"
    }
  ]
}
</settings>

<!-- #endregion -->
<style lang="less" scoped>
.media-with-text {
  width: 1440px;
  height: 808px;
  gap: 56px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  box-sizing: border-box;
  @media @large-1280 {
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
  }
  .image-section-first {
    padding-top: 40px;
    padding-left: 218px;
    width: 480px;
    height: auto;
    align-self: baseline;
  }
  .image-section-first-M {
    display: none;
  }
  .image-section-second-M {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 685px;
    height: 808px;
    gap: 32px;
    flex-direction: row-reverse;
    .image-section-first-M {
      display: flex;
      width: 326px;
    }
    .image-section-first {
      display: none;
    }
    .image-section-second-M {
      display: flex;
      width: 261px;
      align-self: baseline;
      // padding-bottom: 379px;
    }
    // animation part
    .image-section-second-M {
      width: 261px;
      height: 415px;
      padding-top: 75px;
      overflow: hidden;
      position: relative;
      float: left;
      box-sizing: border-box;
    }
    .image-section-second-M picture {
        width: 100%;
      }
    .image-section-second-M ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
        float: left;
      }
    .image-section-second-M ul li {
        display: inline-block;
        width: 25%;
        height: 340px;
        opacity: 0;
        // -webkit-transition: 300ms;
        transition: 600ms;
      }
    .image-section-second-M ul li:before {
        content: "";
        width: 0%;
        height: 2px;
        background: #000;
        position: absolute;
        bottom: 0;
        margin-left: 12.5%;
        -webkit-transition: 300ms;
        transition: 300ms;
        z-index: 2;
      }
    .image-section-second-M ul li:first-child {
        opacity: 1;
      }
    .image-section-second-M ul li:hover {
        opacity: 1;
      }
    .image-section-second-M ul li:hover:before {
        width: 25%;
        margin-left: 0%;
      }
    .image-section-second-M ul li picture {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
        pointer-events: none;
      }
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 764px;
    flex-direction: column;
    .image-section-first-M {
      display: none;
    }
    .image-section-second-M {
      display: flex;
      width: 320px;
    }
    // animation part
    .image-section-second-M {
      overflow: hidden;
      position: relative;
      float: left;
      width: 100%;
      height: auto;
      box-sizing: border-box;
    }
    .image-section-second-M picture {
        width: 100%;
      }
    .image-section-second-M ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
        float: left;
      }
    .image-section-second-M ul li {
        display: inline-block;
        width: 25%;
        height: 365px;
        opacity: 0;
        // -webkit-transition: 300ms;
        transition: 600ms;
      }
    .image-section-second-M ul li:before {
        content: "";
        width: 0%;
        height: 2px;
        background: #000;
        position: absolute;
        bottom: 0;
        margin-left: 12.5%;
        -webkit-transition: 300ms;
        transition: 300ms;
        z-index: 2;
      }
    .image-section-second-M ul li:first-child {
        opacity: 1;
      }
    .image-section-second-M ul li:hover {
        opacity: 1;
      }
    .image-section-second-M ul li:hover:before {
        width: 25%;
        margin-left: 0%;
      }
    .image-section-second-M ul li picture {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
        pointer-events: none;
      }
  }
  &__content {
    padding-top: 40px;
    align-self: flex-start;
    text-align: left;
    display: flex;
    flex-direction: column;
    line-height: 35px;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
      padding-top: 32px;
      padding-left: 61px;
      .image-section-second {
        display: none;
      }
    }
    @media screen and (max-width: 480px) {
      padding-left: 0px;
      padding-top: 0px; 
    }
    .image-section-second {
          width: 320px;
          height: 418px;
          overflow: hidden;
          position: relative;
          float: left;
          // margin: 25px;
          box-sizing: border-box;
      }
    .image-section-second picture {
        width: 100%;
      }
    .image-section-second ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
        float: left;
      }
    .image-section-second ul li {
        display: inline-block;
        width: 25%;
        height: 420px;
        opacity: 0;
        // -webkit-transition: 300ms;
        transition: 600ms;
      }
    .image-section-second ul li:before {
        content: "";
        width: 0%;
        height: 2px;
        background: #000;
        position: absolute;
        bottom: 0;
        margin-left: 12.5%;
        -webkit-transition: 300ms;
        transition: 300ms;
        z-index: 2;
      }
    .image-section-second ul li:first-child {
        opacity: 1;
      }
    .image-section-second ul li:hover {
        opacity: 1;
      }
    .image-section-second ul li:hover:before {
        width: 25%;
        margin-left: 0%;
      }
    .image-section-second ul li picture {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
        pointer-events: none;
      }
    .image-section-second-M {
      display: none;
    }
    &--main {
      font-size: 32px;
      font-family: Marcellus;
      font-weight: 400;
      line-height: 36px;
      width: 488px;
      padding-top: 48px;
      @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 32px;
        width: 330px;
      }
      @media screen and (max-width: 480px) {
        padding-top: 0px;
        font-size: 28px;
        line-height: 32px;
        width: 287px;
      }
    }
    &--sub {
      padding-top: 16px;
      font-size: 14px;
      font-family: Inter;
      font-weight: 400;
      line-height: 20px;
      width: 488px;
      @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 20px;
        width: 330px;
      }
      @media screen and (max-width: 480px) {
        padding-top: 8px;
        font-size: 12px;
        line-height: 20px;
        width: 287px;
      }
    }
    &--btn {
      padding-top: 40px;
      @media screen and (max-width: 480px) {
        padding-top: 32px;
      }
    }
  }
}
.mirror-on {
  flex-direction: row-reverse;
  padding-right: 198px;
  height: auto;
  .image-section-first-M {
    display: flex;
    width: 426px;
  }
  .image-section-first {
    display: none;
  }
  .image-section-second {
    display: none;
  }
  // animation part for mirror on
    .image-section-second-M {
      display: flex;
      width: 550px;
      align-self: baseline;
      overflow: hidden;
      position: relative;
      float: left;
      box-sizing: border-box;
      padding-top: 40px;
    }
    .image-section-second-M picture {
        width: 100%;
      }
    .image-section-second-M ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
        float: left;
      }
    .image-section-second-M ul li {
        display: inline-block;
        width: 16.5%;
        height: 690px;
        opacity: 0;
        // -webkit-transition: 300ms;
        transition: 600ms;
      }
    .image-section-second-M ul li:before {
        content: "";
        width: 0%;
        height: 2px;
        background: #000;
        position: absolute;
        bottom: 0;
        margin-left: 12.5%;
        -webkit-transition: 300ms;
        transition: 300ms;
        z-index: 2;
      }
    .image-section-second-M ul li:first-child {
        opacity: 1;
      }
    .image-section-second-M ul li:hover {
        opacity: 1;
      }
    .image-section-second-M ul li:hover:before {
        width: 25%;
        margin-left: 0%;
      }
    .image-section-second-M ul li picture {
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
        pointer-events: none;
      }
  .media-with-text__content--main {
    width: 369px;
  }
  .media-with-text__content--sub {
    width: 437px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    padding-right: 0px;
    padding-left: 61px;
    .image-section-first-M {
      display: flex;
      width: 326px;
    }
    .image-section-first {
      display: none;
    }
    .image-section-second {
      display: none;
    }
    .image-section-second-M {
      display: flex;
      width: 261px;
      align-self: baseline;
      padding-top: 75px;
    }
    .image-section-second-M ul li {
        display: inline-block;
        width: 25%;
        height: 359px;
        opacity: 0;
        // -webkit-transition: 300ms;
        transition: 600ms;
      }
    .media-with-text__content {
      padding-left: 0px;
    }
    .media-with-text__content--main {
      width: 330px;
    }
    .media-with-text__content--sub {
      width: 330px;
    }
  }
  
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    padding-left: 0px;
    gap: 24px;
    .image-section-first-M {
      display: none;
    }
    .image-section-second-M {
      display: flex;
      width: 320px;
      height: 420px;
      padding-top: 0px;
    }
    .media-with-text__content--main {
      width: 287px;
    }
    .media-with-text__content--sub {
      padding-top: 8px;
      width: 287px;
    }
  }
}
</style>

<script>
import btn from "./../components/common/button.vue";
import NoSSR from "vue-no-ssr";
import { isBrowser, isNode } from "browser-or-node";
import "video.js/dist/video-js.min.css";
import emergeImage from "../global/components/common/emerge-image.vue";
export default {
  data() {
    return {
      img: [],
      slug_val:"",
      img1:""
    };
  },
  methods: {
    fetchData(option) {
      this.$apiSDK.catalog.getProductDetailBySlug(option).then((data) => {
        console.log("data from getProductDetailBySlug api", data);
        this.slug_val = data.slug;
        this.img = [...data.medias];
        this.img1 = this.img[0].url;
        console.log("img++++++++++++", this.img1);
      });
    }
  },
  props: ["settings", "apiSDK", "global_config"],
  computed: {},
  components: {
    "sm-button": btn,
    "emerge-img": emergeImage,
    "no-ssr": NoSSR,
    videoPlayer: () => {
      return isBrowser
        ? Promise.resolve(require("vue-video-player/src/player"))
        : Promise.resolve({});
    },
  },
  directives: {},
  mounted() {
    let option = {
      slug: this.settings.props.Product.value,
    };
    this.fetchData(option);
    console.log("Setting Data", this.settings);
  },
  beforeDestroy() {},
};
</script>