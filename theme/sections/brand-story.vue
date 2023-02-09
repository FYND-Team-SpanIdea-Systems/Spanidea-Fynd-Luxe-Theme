<template>
  <section :class='["media-with-text" ,"full-width-section", "mirror-" + settings.props.mirror.value, "style-" + settings.props.styleV.value]' >
    <div :class='["image-section"]'>
      <img :src="settings.props.image.value" />
    </div>
    <div  :class='["media-with-text__content"] '>
      <div class="media-with-text__content--main font-header">
        {{ settings.props.text.value }}
      </div>
      <div class="media-with-text__content--sub font-body">
        {{ settings.props.heading.value }}
      </div>
    </div>
    <div class="whites100"></div>
  </section>
</template>

<!-- #region  -->

<settings>
{
  "name": "brand-story-section",
  "label": "Brand Story",
  "props": [
    {
      "type": "image_picker",
      "id": "image",
      "default": "",
      "label": "Image"
    },
    {
      "type": "select",
      "id": "styleV",
      "options": [
          {
              "value": "style1",
              "text": "Style 1"
          },
          {
              "value": "style2",
              "text": "Style 2"
          }
      ],
      "default": "style1",
      "label": "Layout"
    },
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
      "type": "text",
      "id": "text",
      "default": "",
      "label": "Heading"
    },
    {
      "type": "textarea",
      "id": "heading",
      "default": "",
      "label": "Description"
    }
  ]
}
</settings>

<!-- #endregion -->
<style lang="less" scoped>

.media-with-text {
  display: flex;
  width: 1440px;
  // height: 990px;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 744px;
    // height: 525px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    // height: 850px;
    flex-direction: column;
  }

  .image-section {
    flex: 50%;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 72px;
    img {
      width: 100%;
      height: auto;
      aspect-ratio: 3/4;
      object-fit: cover;
    }
    @media screen and (max-width: 768px) {
      padding-top: 32px;
      padding-bottom: 32px;
      padding-left: 32px;
    }
    @media screen and (max-width: 480px) {
      padding-top: 16px;
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  &__content {
    text-align: left;
    padding-top: 40px;
    padding-right: 72px;
    padding-left: 56px;
    flex: 50%;
    box-sizing: border-box;
    
    @media screen and (max-width: 768px) {
      padding-left: 24px;
      padding-top: 32px;
      padding-right: 32px;
    }
    @media screen and (max-width: 480px) {
      padding-left: 0px;
      padding-top: 0px;
      padding-right: 0px;
    }
    
    &--main {
      font-size: 32px;
      font-weight: 400;
      line-height: 36px;
      width: 488px;
      height: 108px;
      color: @TextHeading;

      @media screen and (max-width: 768px) {
        font-size: 28px;
        line-height: 32px;
        width: 330px;
        height: 128px;
      }
      @media screen and (max-width: 480px) {
        font-size: 28px;
        line-height: 32px;
        width: 287px;
        height: 160px;
      }
    }
    &--sub {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      width: 488px;
      height: 140px;
      padding-top: 16px;
      color: @TextBody;

      @media screen and (max-width: 768px) {
        padding-top: 45px;
        font-size: 12px;    
        line-height: 20px;
        width: 330px;
        height: 180px;
      }
      @media screen and (max-width: 480px) {
      padding-top: 8px;
      font-size: 12px;    
      line-height: 20px;
      width: 287px;
      height: 200px;
    }
    }
  }
}

.mirror-on {
  flex-direction: row-reverse;
  .image-section {
    padding-right: 72px;
    padding-left: 0px;
    flex: 55%;
    @media screen and (max-width: 768px) {
      flex: 46%;
      padding-right: 32px;
      padding-left: 0px;
    }
  }
  .media-with-text {
    &__content {
      padding-left: 72px;
      padding-right: 0px;
      @media screen and (max-width: 768px) {
      padding-left: 32px;
      padding-right: 0px;
    }
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    .image-section {
      padding-right: 0px;
    }
    .media-with-text {
      &__content {
        padding-left: 0px;
        padding-right: 0px;
      }
    }
  }
}

.style-style2 {
  height: 664px;
  @media screen and (max-width: 768px) {
    height: 380px;
  }
  @media screen and (max-width: 480px) {
    height: 664px;
  }
  .image-section {
    img {
      aspect-ratio: 4/3;
    }
  }
}
.media-with-text {
    position: relative;
}
.whites100{
  position: absolute;
  top:0px;
  left:0px;
  width: 100%;
  height: 100%;
  background-color: @PageBackground;
  animation-name: example100;
  animation-duration: 1.5s;
  animation-direction:reverse;
  animation-fill-mode: forwards;
}
@keyframes example100 {
  0%   {height:0%;}
  100% {height:100%;}
}

</style>

<script>
import NoSSR from "vue-no-ssr";
import { isBrowser, isNode } from "browser-or-node";
import "video.js/dist/video-js.min.css";

export default {
  data() {
    return {
     
    };
  },
  props: ["settings"],
  computed: {
   
  },
  components: {
    "no-ssr": NoSSR,
    videoPlayer: () => {
      return isBrowser
        ? Promise.resolve(require("vue-video-player/src/player"))
        : Promise.resolve({})
    },
  },
  directives: {},
  mounted() {},
  beforeDestroy() {
    
  },
};
</script>
