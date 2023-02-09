<template>
  <div class="mainSection">
    <fdk-link :link="settings.props.button_link.value">
      <emerge-img
        v-if="settings.props.image.value"
        :src="settings.props.image.value"
        :sources="[]"
        class="hero__image"
      />
      <fdk-placeholder v-else type="banner-1" />
      <div class="overlay">
        <div class="overlay__content">
          <img
            v-if="settings.props.overlay_image.value"
            class="overlay__image"
            :src="settings.props.overlay_image.value"
          />
        </div>
      </div>
    </fdk-link>
    <div class="whites100"></div>
  </div>
</template>
<!-- #region  -->

<settings>
{
    "name": "banner",
    "label": "Banner",
    "props": [
        {
            "id": "image",
            "type": "image_picker",
            "label": "Desktop Image",
            "default": ""
        },
        {
            "type": "image_picker",
            "id": "overlay_image",
            "default": "",
            "label": "Mobile Image",
            "info": "Overlay Image"
        },
        {
          "type": "url",
          "id": "button_link",
          "default": "",
          "label": "Redirect Link"
        }
    ]
}
</settings>
<!-- #endregion -->
<style scoped lang="less">
.hero__image {
  padding-bottom: 40px;
  /deep/ .fy__img {
    width: 100%;
    @media @mobile{
      display: none;
    }
  }
}

.overlay {
  top: 30%;
  left: 50%;
  width: 100%;
  &__image {
    display: none;
    max-width: 100%;
    margin-bottom: 10px;
    @media @mobile {
      display: flex;
      // height: 400px;
    }
  }
}
.mainSection {
    position: relative;
}
.whites100{
  position: absolute;
  top:0px;
  left:0px;
  width: 100%;
  height: 100%;
  background-color: white;
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
import btn from "../components/common/button.vue";
import emergeImage from "../global/components/common/emerge-image.vue";

export default {
  components: {
    "emerge-img": emergeImage
  },
  props: ["settings", "global_config"],
  watch: {
    settings: function(newVal, oldVal) {},
  },
  mounted() {},
  data: function() {
    return {
      // url: ""
    };
  },
};
</script>
