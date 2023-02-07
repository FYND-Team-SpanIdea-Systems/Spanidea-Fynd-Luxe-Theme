<template>
  <button
    @click="$emit('click')"
    :style="`
      background-color: ${getBackgroundColor()};
      color: ${getColor()};
      border: ${getBorder()};
      padding: ${getPadding()};
      --button_tertiary_hover_color: ${global_config ? global_config.props.button_tertiary_hover_color : ''};
      --button_tertiary_hover_text_color: ${global_config ? global_config.props.button_tertiary_hover_text_color : ''};
      color:white;
    `"

    type="button"
    class="emerge-btn"
    :data-btntype="btntype"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  data: function data() {
    return {};
  },
  props: {
    context: {
      type: Object
    },
    colortype: {
      type: String
    },
    bordertype: {
      type: String
    },
    backgroundcolortype: {
      type: String
    },
    padding: {
      type: String
    },
    global_config : {
      type: Object
    },
    btntype : {
      type: String
    }
  },
  methods: {
    getBackgroundColor() {
      if (this.backgroundcolortype == "primary") {
        if(this.global_config) {
          return this.global_config.props.button_primary_color;
        }
        return "black";
      }
      if (this.backgroundcolortype == "secondary") {
        if(this.global_config) {
          return this.global_config.props.button_secondary_color;
        }
        return "black";
      }
      if (this.backgroundcolortype == "tertiary") {
        return "transparent";
      }
      return "black";
    },

    getColor() {
      if (this.colortype == "primary") {
        if(this.global_config) {
          return this.global_config.props.button_primary_label_color;
        }
        return "#2B2A28";
      }
      if (this.colortype == "secondary") {
        if(this.global_config) {
          return this.global_config.props.button_secondary_label_color;
        }
        return "#383838";
      }
      if (this.colortype == "tertiary") {
        if(this.global_config) {
          return this.global_config.props.button_tertiary_label_color;
        }
        return "#383838";
      }
      return "#ffffff";
    },
    getBorder() {
      if (this.bordertype == "primary") {
        return "0";
      }
      if (this.bordertype == "secondary") {
        if(this.global_config) {
          return `1px solid ${this.global_config.props.button_secondary_color}`;
        }
      }
      if (this.bordertype == "tertiary") {
        if(this.global_config) {
          return `1px solid ${this.global_config.props.button_tertiary_color}`;
        }
        return "#383838";
      }
      return "none";
    },
    getPadding() {
      if (this.padding == "secondary") {
        return "";
      }
      return "none";
    }
  },
};
</script>

<style lang="less" scoped>
@background-color: black;
// @tablet-screen: ~"(max-width: 1280px)";
@disabled-background-color: #eaeaea;
@font-color: #ffffff;

.emerge-btn {
  width: 140px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid #26201a;
  background-color: #26201a;
  gap: 4px;
  font-size: 14px;
  line-height: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.02em;
  cursor: pointer;
  padding: 12px 32px;
  @media @tablet {
    width: 130px;
    font-size: 12px;
    height: 48px;
  }
  @media @mobile {
    width: 130px;
    font-size: 12px;
    // padding: 12px 30px !important;
    height: 48px;
  }
  &[data-btntype='tertiary']:hover {
    background: var(--button_tertiary_hover_color) !important;
    color: var(--button_tertiary_hover_text_color) !important;
    color: white;
  }
}

.emerge-btn[disabled] {
  background-color: @disabled-background-color !important;
  color: #333333 !important;
}
</style>
