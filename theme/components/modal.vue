<template>
  <transition name="modal" v-if="isOpen">
    <div
      class="modal"
      ref="modal"
      tabindex="0"
      @keydown.esc="closeDialog"
      v-bind:class="modalClass"
    >
      <div class="modal-container" v-click-outside="closeDialog">
        <div class="modal-header">
          <div class="modal-title">{{ title }}</div>
          <div class="cross" @click="closeDialog" v-if="isCancelable">
            <IosCloseIcon w="2rem" h="2rem" />
          </div>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.modal {
  position: fixed;
  top: 0;
  height: 125%;
  left: 0;
  right: 0;
  z-index: 16;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(20,19,14,0.6);
  transition: opacity 0.25s ease;
  display: flex;
  justify-content: flex-end;
  // align-items: center;
  @media @mobile {
    background-color: @color-white;
    height: 100%;
  }

  .modal-container {
    background-color: #f9f7f4;
    border: 1px solid #ffffff;
    border-radius: 4px;
    min-height: 100px;
    position: relative;
    overflow: auto;
    width: 816px;
    @media @tablet {
      // padding: 0 24px !important;
      max-width: 100% !important;
      max-height: 87% !important;
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background-color: #ffffff;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
      background-color: #ffffff;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      border-radius: 2.5px;
      background-color: #6b6b6b;
    }

    .modal-header {
      display: flex;
      @media @mobile {
        padding: 30px 0 10px 0;
      }
    }
    .modal-body {
      margin-top: 20px;
      font-size: 1.4rem;
      @media @tablet {
        margin-top: 17px;
        font-size: 1.4rem;
      }
      @media @mobile {
        margin-top: 0px;
      }
    }
    .cross {
      cursor: pointer;
      img {
        width: 17px;
      }
    }
    .modal-title {
      margin: auto;
      text-align: center;
      width: 460px;
      height: 20px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      letter-spacing: -0.02em;
      color: #26201A;
      @media @tablet {
        height: 0;
      }
    }
  }
}

@media @mobile {
  .modal {
    .modal-container {
      height: 98vh;
      width: 100%;
    }
  }
}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
</style>

<script>
import IosCloseIcon from "vue-ionicons/dist/ios-close.vue";
export default {
  name: "modal",
  components: {
    IosCloseIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    modalClass: {
      type: String,
      default: null,
      required: false,
    },
    isCancelable: {
      type: Boolean,
      default: true,
    },
    childHandleFocus: {
      type: Boolean,
      default: false,
    },
  },
  updated() {
    if (this.isOpen && !this.childHandleFocus) {
      if (this.$refs.modal) {
        this.$refs.modal.focus();
      }
    }
  },
  methods: {
    closeDialog() {
      if (this.isCancelable) {
        this.$emit("closedialog");
      }
    },
  },
  mounted() {
    this.$root.$el.append(this.$el);
  },

  destroyed() {
    if (this.$el && this.$el.parentNode && this.$el.nodeName !== "#comment") {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
};
</script>
