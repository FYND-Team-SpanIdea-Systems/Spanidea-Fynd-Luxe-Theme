<template>
  <div class="gallery-box">
    <div class="image-gallery desktop">
      <div
        class="image-box"
        ref="itemwrapper"
        v-on:mousemove="onmousemove"
        v-on:mouseleave="onmouseleave"
      > 
        <!-- <pic-zoom
          class="image-item"
          :source="src"
          :type="type"
          :alt="alt"
          :key="currentImageIndex"
          v-on:clickimage="openGallery"
          @onVideoHover="onmouseleave"
          :isFrameLoading="isFrameLoading"
        ></pic-zoom> -->
        <pic-zoom
          :class="['image-item' + item.type]"
          :source="item.url"
          :type="item.type"
          :alt="item.alt || `${product.brand.name} | ${product.name} ${index}`"
          v-for="(item,index) in images"
          :product="product"
          :key="index"
          v-on:clickimage="openGallery"
          @onVideoHover="onmouseleave"
          :isFrameLoading="isFrameLoading"
        ></pic-zoom>
        <div class="mouse-cover" ref="grid"></div>
        <div class="clearfix"></div>
      </div>     
    </div>
    <div class="thumb-slider">
        <ul class="image-gallery__list scrollbar-hidden" ref="scrollCont">
          <li
            v-for="(item, index) in images"
            :key="index"
            @click="setMainImage(index)"
            :class="{ flexAlign: item.type === 'video' }"
          >
            <img
              v-if="item.type === 'image'"
              :ref="'imageItem' + index"
              class="image-gallery__list--item animated faadeIn"
              :src="item.url | imagetransform({ width: 75 })"
              :class="{ active: currentImageIndex === index }"
            />
            <video
              v-else-if="item.type === 'video' && !item.url.includes('youtube')"
              :ref="'imageItem' + index"
              class="image-gallery__list--item animated faadeIn"
              :src="item.url"
              :class="{ active: currentImageIndex === index }"
            ></video>
            <img
              v-else-if="item.type === 'video' && item.url.includes('youtube')"
              :ref="'imageItem' + index"
              class="image-gallery__list--item animated faadeIn"
              :src="getImageURL(item.url)"
              :class="{ active: currentImageIndex === index }"
            />

            <div
              v-if="item.type === '3d_model'"
              :ref="'imageItem' + index"
              class="image-gallery__list--item animated faadeIn type-3d_model"
            >
              <svg-wrapper :svg_src="'3D'"></svg-wrapper>
            </div>
          </li>
        </ul>
        <!-- <div class="arrows">
          <div
            class="prev-btn btn-nav-gallery"
            ref="prevArrow"
            @click="prevSlide"
          >
            <img src="../../assets/images/arrow-left.png" />
          </div>
          <div
            class="next-btn btn-nav-gallery"
            ref="nextArrow"
            @click="nextSlide"
          >
            <img src="../../assets/images/arrow-right.png" />
          </div>
        </div> -->
    </div>
    <div class="mobile">
      <mobile-carousel
        ref="carousel"
        :images="images"
        v-on:clickimage="openGallery"
      ></mobile-carousel>
    </div>
    <div class="tablet">
      <mobile-carousel
        ref="carousel"
        :images="images"
        v-on:clickimage="openGallery"
      ></mobile-carousel>
    </div>
    <LightBox
      :images="images"
      ref="lightbox"
      :show-caption="false"
      :show-light-box="false"
    ></LightBox>
  </div>
</template>
<style lang="less" scoped>
.gallery-box {
  // display: flex;
  // flex-direction: row;
  @media @desktop {
    display: flex;
  }
  @media @mobile {
    height: auto;
    width: 100%;
  }
  .image-box {
    min-height: 45%;
    max-height: 100%;
    overflow: hidden;
  }
  .image-item {
    text-align: center;
    height: 100%;
    scroll-behavior: smooth;
  }
  .loader {
    min-height: 100%;
  }
  .flexAlign {
    display: flex;
  }
  .mouse-cover {
    width: 100px;
    height: 100px;
    display: none;
  }

  .image-gallery {
    display: flex;
    margin-right: 24px;
    height: auto;
    position: relative;
    @media @tablet {
      // margin-right: 0;
      display: none;
    }
    @media @mobile {
      display: none;  
    }
    &__main {
      max-width: 100%;
      cursor: pointer;
    }
    .thumb-slider {
      max-width: 500px;
      position: relative;
      bottom: 0;
      // margin:auto;
      @media @tablet {
        max-width: 400px;
      }
      .btn-nav-gallery {
        position: absolute;
        top: 50%;
        z-index: @layer;
        transform: translate(0%, -50%);
        background-color: transparent;
        padding: unset;
        width: 50px;
        cursor: pointer;
      }
      .next-btn {
        right: 0;
        @media @mobile {
          right: 15px;
        }
      }
      .prev-btn {
        left: 0;
        @media @mobile {
          left: 15px;
        }
      }
    }
    &__list {
      display: flex;
      margin: 0px 0px 0px 0px;
      // overflow-x: scroll;
      flex-direction: column;
      gap: 16px;
      @media @tablet {
        display: none;
      }
      &--item {
        background-color: @color-gray;
        width: auto;
        margin-right: 0px;
        // min-width: 65px;
        // max-width: 65px;
        height: 64px;
        cursor: pointer;
        &.active {
          border: 0px solid @color-gray;
          aspect-ratio: 3/4;
        }
        &.type-3d_model {
          display: flex;
          align-items: center;
          justify-content: center;
          .model-label {
            width: 70px;
            font-size: 10px;
            text-align: center;
          }
        }
      }
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .scrollbar-hidden::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge add Firefox */
    .scrollbar-hidden {
      -ms-overflow-style: none;
      scrollbar-width: none; /* Firefox */
    }
  }
  .mobile {
    display: none;
    @media @mobile {
      display: block;
    }
  }
  .tablet {
    display: none;
    @media @tablet {
      display: block;
    }
    @media @mobile {
      display: none;
    }
  }
}
</style>
<script>
import mobilecarousel from "../../components/mobile-pdp-carousel.vue";
import piczoom from "./pic-zoom.vue";
import { isBrowser, isNode } from "browser-or-node";
import LightBox from "./lightbox-image.vue";
import { detectMobileWidth } from "../../helper/utils";
import SvgWrapper from '../common/svg-wrapper.vue';
import NoSSR from "vue-no-ssr";

export default {
  name: "pdp-image-gallery",
  components: {
    "mobile-carousel": mobilecarousel,
    "pic-zoom": piczoom,
    LightBox,
    "no-ssr": NoSSR,
    "svg-wrapper": SvgWrapper,
    "viewer-3d": () =>
      isNode ? Promise.resolve(null) : Promise.resolve(require("./viewer-3d")),
  },
  props: {
    images: {
      type: Array,
    },
    product: {
      type: Object,
    }
  },
  data() {
    return {
      isMounted: false,
      imageLoading: false,
      currentImageIndex: 0,
      src: this.images[0].url.replace("resize-w:540", "original"),
      type: this.images[0].type,
      alt: this.images?.[0]?.alt || `${this.product?.brand?.name} | ${this.product?.name} ${this.currentImageIndex}`,
      isFrameLoading: true,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  watch: {
    images(newVal) {
      this.src = newVal[0] && newVal[0].url;
      this.type = newVal[0] && newVal[0].type;
      this.alt = newVal?.[0]?.alt || `${this.product?.brand?.name} | ${this.product?.name} ${this.currentImageIndex}`;
    },
  },
  methods: {
      setMainImage(index) {
      // this.imageLoading = true;
      // this.src = this.images[index].url;
      // this.type = this.images[index].type;
      // this.alt = this.images?.[index]?.alt || `${this.product?.brand?.name} | ${this.product?.name} ${this.currentImageIndex}`;
      // this.imageLoading = false;
      this.$refs["element"].scrollIntoView({ behavior: "smooth" });
    },
    getImageURL(src){
      return `http://img.youtube.com/vi/${src?.substr(src?.lastIndexOf("/")+1)}/0.jpg`
    },
    prevSlide() {
      if (this.currentImageIndex === 0) {
        return;
      } // cannot move backward
      this.$refs.scrollCont.scrollLeft -= 70;
      this.imageLoading = true;
      this.currentImageIndex--;
      this.src = this.images[this.currentImageIndex].url;
      this.type = this.images[this.currentImageIndex].type;
      this.alt = this.images?.[this.currentImageIndex]?.alt || `${this.product?.brand?.name} | ${this.product?.name} ${this.currentImageIndex}`;
      setTimeout(() => {
        this.imageLoading = false;
      }, 300);
    },
    nextSlide() {
      if (this.currentImageIndex === this.images.length - 1) {
        return;
      } // cannot move forward
      this.$refs.scrollCont.scrollLeft += 70;
      this.imageLoading = true;
      this.currentImageIndex++;
      this.src = this.images[this.currentImageIndex].url;
      this.type = this.images[this.currentImageIndex].type;
      this.alt = this.images?.[this.currentImageIndex]?.alt || `${this.product?.brand?.name} | ${this.product?.name} ${this.currentImageIndex}`;
      setTimeout(() => {
        this.imageLoading = false;
      }, 300);
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(Number(index));
    },
    onmousemove(event) {
      if (detectMobileWidth()) {
        return;
      }
      let gridElm = this.$refs["grid"];
      let imageElm = event.srcElement;
      let containerElm = this.$refs["itemwrapper"];

      if (
        gridElm &&
        imageElm &&
        imageElm instanceof HTMLImageElement &&
        imageElm.classList.contains("pdp-image")
      ) {
        gridElm.style.display = "block";
        function offset(curEle) {
          var totalLeft = null,
            totalTop = null,
            par = curEle.offsetParent;
          totalLeft += curEle.offsetLeft;
          totalTop += curEle.offsetTop;
          while (par) {
            if (isBrowser && navigator.userAgent.indexOf("MSIE 8.0") === -1) {
              totalLeft += par.clientLeft;
              totalTop += par.clientTop;
            }
            totalLeft += par.offsetLeft;
            totalTop += par.offsetTop;
            par = par.offsetParent;
          }
          return {
            left: totalLeft,
            top: totalTop,
          };
        }

        function getXY(eve) {
          return {
            x: eve.clientX - gridElm.offsetWidth / 2,
            y: eve.clientY - gridElm.offsetHeight / 2,
          };
        }

        let pos = getXY(event);

        let imgwrap = offset(containerElm);

        let range = {
          minX: imgwrap.left,
          maxX: imgwrap.left + containerElm.offsetWidth - gridElm.offsetWidth,
          minY: imgwrap.top - document.documentElement.scrollTop,
          maxY:
            imgwrap.top -
            document.documentElement.scrollTop +
            containerElm.offsetHeight -
            gridElm.offsetHeight,
        };
        if (pos.x > range.maxX) {
          pos.x = range.maxX;
        }
        if (pos.x < range.minX) {
          pos.x = range.minX;
        }
        if (pos.y > range.maxY) {
          pos.y = range.maxY;
        }
        if (pos.y < range.minY) {
          pos.y = range.minY;
        }
        gridElm.style.left = pos.x + "px";
        gridElm.style.top = pos.y + "px";

        let gridRectInImage = {
          left:
            gridElm?.getBoundingClientRect().x -
            imageElm?.getBoundingClientRect().x,
          top:
            gridElm?.getBoundingClientRect().y -
            imageElm?.getBoundingClientRect().y,
          height: 100,
          width: 100,
        };

        this.$emit("paint-canvas", {
          image:
            imageElm.nextElementSibling instanceof HTMLImageElement &&
            imageElm.nextElementSibling["data-loaded"]
              ? imageElm.nextElementSibling
              : imageElm,
          imageInGrid: imageElm,
          gridRect: gridRectInImage,
          show: true,
        });
      }
    },
    onmouseleave(event) {
      let elm = this.$refs["grid"];
      if (elm) {
        elm.style.display = "none";
        this.$emit("paint-canvas", { show: false });
      }
    },
  },
};
</script>
