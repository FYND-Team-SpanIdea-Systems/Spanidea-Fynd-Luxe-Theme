<template>
  <transition
    name="modal"
    mode="out-in"
    v-if="product_meta && product_meta.size_chart"
  >
    <modal
      :isOpen="isOpen"
      v-on:closedialog="closeDailog"
      :modalClass="'sizeGuideModal'"
    >
      <div
        class="size-container"
        v-if="product_meta && product_meta.size_chart"
      >
        <div v-if="showM"
          class="left-container"
          v-bind:class="{ 'cst-lw': !product_meta.size_chart.image }"
        > 
          <div v-if="product_meta && product_meta.size_chart && product_meta.size_chart.sizes">
            <div
            class="size-title"
            v-if="product_meta && product_meta.size_chart"
          >
            {{
              product_meta.size_chart.title
                ? product_meta.size_chart.title
                : "SIZE GUIDE"
            }}
            </div>
            <div class="size-tip" v-if="product_meta && product_meta.size_chart">
            {{ product_meta.size_chart.size_tip }}
            </div>
            <div class="btn-group">
            <button
              type="button"
              v-for="(key, val) in values"
              :key="key"
              @click="changeSelectedMetric(key)"
              :class="[
                'btn',
                `btn-${key}`,
                {
                  'btn-danger': previewSelectedMetric === key,
                  'btn-default': previewSelectedMetric !== key,
                },
              ]"
            >
              {{ val }}
            </button>
            </div>
            <div class="size-info" v-if="product_meta && product_meta.size_chart">
            <table class="size-table">
              <thead>
                <tr>
                  <th
                    class="size-header dark-sm"
                    v-for="(item, index) in product_meta.size_chart.headers"
                    :key="'column' + index"
                  >
                    {{ item.value }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, index) in product_meta.size_chart.sizes"
                  :key="'row_' + index"
                  class="size-row"
                >
                  <td
                    v-for="(cell, i, objIndex) in product_meta.size_chart
                      .headers"
                    :key="'cell_' + objIndex"
                    class="size-cell"
                  >
                    {{ cell.convertable ? convertMetrics(row[i]) : row[i] }}
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div> 
          <div class="guide" v-else>
            <p>Not available, contact us for more information</p>
          </div>          
        </div>

        <div v-if="show">
          <div
            class="right-container"
            v-if="
              product_meta &&
              product_meta.size_chart &&
              product_meta.size_chart.image
            "
          >
            <div class="sizeguide_image">
              <img
                :src="product_meta.size_chart.image"
                alt="product_meta.size_chart.title"
              />
            </div>
          </div>
          <div class="guide" v-else>
            <p>Not available, contact us for more information</p>
          </div> 
        </div>
        <div class="size-desc">
          <div v-if="showM">
            <button class="but1" 
              @click="handleClick"
            >
            How To Measure
            </button>
          </div>
        </div>
        <div class="size-desc">
          <div v-if="show">
            <button class="but1"
              @click="handleClick2"
            >
              Size Guide
            </button>
          </div>  
        </div>
      </div>
    </modal>
  </transition>
</template>

<style lang="less" scoped>
.modal {
  @media @mobile {
    padding-top: 40px;
  }
}
/deep/ .modal-container {
  padding: 0 24px !important;
  max-width: 70% !important;
  max-height: 80% !important;
  @media @mobile {
    max-width: 100% !important;
    padding: 0 24px 24px 24px !important;
    max-height: none !important;
  }
  .modal-body {
    margin-top: 24 !important;
    @media @mobile{
      margin-top: 30px !important;
    }
  }
  .modal-header {
    padding: 0 !important;
    justify-content: flex-end !important;
    align-items: inherit !important;
    @media @mobile {
      top: 0;
      position: fixed;
      left: 0;
      right: 0;
      height: 36px;
      background-color: #fff;
    }
    .cross {
      position: fixed;
      padding: 10px 0;

      @media @tablet {
        margin-right: 0px !important;
      }
      @media @mobile {
        margin-right: 12px !important;
      }
      @media only screen and (max-width: 320px) {
        margin-right: 6px !important;
      }
    }
  }
}
.dark-sm {
  font-size: 12px;
  line-height: 15px;
}
.cst-lw {
  width: 100% !important;
}
.size-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media @tablet {
    flex-direction: column;
    padding-bottom: 24px;
  }
  @media @mobile {
    flex-direction: column;
    padding-bottom: 24px;
  }

  .left-container {
    width: 100%;
    @media @tablet {
      width: 100%;
    }
    @media @mobile {
      width: 100%;
    }
  }

  .size-desc {
      text-align: center;
      // margin-top: -50px;
      /deep/ .inline-html {
        p {
          font-size: 12px;
          line-height: 20px;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #ffffff;
          text-align: center;
        }
      }
    }
    .but1 {
      padding: 12px 32px;
      width: 256px;
      height: 48px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #F9F7F4;
      background: #26201A;
      border: 1px solid #26201A;
    }
  .right-container {
    padding: 0 0 10px;
    margin: 0;
    max-width: 100%;
    @media @tablet {
      border-left: none;
      margin: 0 0 24px 0;
      max-width: 100%;
      padding: 0;
    }
    @media @mobile {
      border-left: none;
      margin: 0;
      margin-top: 0;
      max-width: 100%;
      padding: 0 0 10px;
    }

    .sizeguide_image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media @tablet {
          justify-content: center;
        }
      img {
        width: 534px;
        height: 615px;
        @media @tablet {
          width: 600px;
          height: 740px;
        }
        @media @mobile {
          width: 325px;
          height: 500px;
        }
      }
      /deep/.fy__image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .guide {
    border: 1px solid black;
    width: 550px;
    height: 600px;
    text-align: center;
    margin: auto;
    margin-bottom: 10px;
    p {
      width: 550px;
      margin-top: 250px;
    }
  }
}

.size-title {
  text-align: center;
  margin: 0 auto;
  height: 32px;
  width: 138px;
  font-family: 'Marcellus';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #26201A;
  @media @mobile {
    height: 24px;
    font-family: 'Marcellus';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #26201A;
    margin: 0px;
  }
}

.size-tip {
  max-width: 400px;
  text-align: center;
  margin: 35px auto 0 215px;
  width: 128px;
  height: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  @media @tablet {
    padding: 50px 0 0 0px;
    margin: 0px auto 0 215px;
  }
  @media @mobile {
    padding: 50px 0 0 0px;
    margin: 0px;
  }
}
.size-info {
  overflow-y: auto;
  overflow-x: auto;
  margin: 60px 31.5px;

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

  @media @tablet {
    max-height: max-content;
    overflow-x: auto;
    margin: 32px 0;
  }
  @media @mobile {
    max-height: max-content;
    overflow-x: auto;
    margin: 42px 0;
  }
}
.size-table {
  width: 100%;
  padding: 20px;
  border: 1px solid #e4e5e6;
  .size-header {
    border: 1px solid #e4e5e6;
    margin: 5px;
    text-transform: capitalize;
    color: #41434c;
    padding: 16px 8px;
    background: #FFFFFF;
    font-weight: 400;
    font-style: normal;
    font-family: 'Inter';
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    @media @tablet {
      padding: 25px 8px 7px 8px;
      height: 37px;
      text-align: center;
    }
    @media @mobile {
      height: 56px;
      text-align: center;
      margin: 0px;
      padding: 0px;
    }
  }
  .size-row {
    border-top: 1px solid #e4e5e6;
    .size-cell {
      text-align: center;
      min-width: 100px;
      padding: 16px 8px;
      background: #FFFFFF;
      border: 1px solid #F1EBE5;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #504A42;
      @media @tablet {
      // padding: 25px 8px 7px 8px;
      // width: 142.5px;
      height: 72px;
      text-align: center;
      }
      @media @mobile {
        padding: 0;
        // width: 57.5px;
        height: 56px;
        align-items: center;
      }
    }
  }
}
//button css
.btn-group {
  display: flex;
  justify-content: center;
  margin-top: -20px;
  margin-left: 80px;
  @media @tablet {
    margin-left: 130px; 
    margin-top: -30px;
  }
  @media @mobile {
    margin-left: 90px;
    margin-top: -20px;
  }
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-cm {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-in {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-default {
  color: #000000;
  width: 72px;
  height: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  background-color: #f5f2ec;
  @media @tablet {
    font-size: 12px;
  }
}
.btn-danger {
  color: rgb(0, 0, 0);
  width: 72px;
  height: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  background-color: #f5f2ec;
  @media @tablet {
    font-size: 12px;
  }
}
</style>

<script>
import modal from "./modal.vue";

export default {
  name: "size-guide",
  extends: modal,
  components: {
    modal: modal,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    product_meta: {
      type: Object,
    },
  },
  mounted() {
    this.product_meta.size_chart && (this.previewSelectedMetric = this.product_meta.size_chart.unit);
    this.product_meta.size_chart && (this.selectedMetric = this.product_meta.size_chart.unit);
    console.log("ayush+++",this.product_meta);
  },
  watch: {
    product_meta(newValue) {
      newValue.size_chart && (this.previewSelectedMetric = newValue.size_chart.unit);
      newValue.size_chart && (this.selectedMetric = newValue.size_chart.unit);
    },
  },
  methods: {
    handleClick() {
      this.show= true;
      this.showM=false;
    },
    handleClick2() {
      this.show= false;
      this.showM=true;
    },
    closeDailog() {
      document.querySelector("body").style.overflow = "auto";
      this.$emit("closedialog");
    },
    changeSelectedMetric(val) {
      this.previewSelectedMetric = val;
      if (this.selectedMetric === this.previewSelectedMetric) {
        this.touched = false;
      } else {
        this.touched = true;
      }
    },
    changeSelectedMetricc(image) {
      this.previewSelectedMetricc = image;
      if (this.selectedMetricc === this.previewSelectedMetricc) {
        this.touched = false;
      } else {
        this.touched = true;
      }
    },
    convertMetrics(val) {
      if (this.previewSelectedMetric == "cm" && this.touched) {
        let finalVal = "";
        val = val.split("-");
        for (let i = 0; i < val.length; i++) {
          if (i != 0 && i < val.length) {
            finalVal += "-";
          }
          if (!isNaN(Number(val[i]))) {
            finalVal += (Number(val[i]) * 2.54).toFixed(2); //cm to inches
          } else {
            finalVal += val[i];
          }
        }
        return finalVal;
      }
      if (this.previewSelectedMetric == "in" && this.touched) {
        let finalVal = "";
        val = val.split("-");
        for (let i = 0; i < val.length; i++) {
          if (i != 0 && i < val.length) {
            finalVal += "-";
          }
          if (!isNaN(Number(val[i]))) {
            finalVal += (Number(val[i]) * 2.54).toFixed(2); //cm to inches
          } else {
            finalVal += val[i];
          }
        }
        return finalVal;
      }
      return val;
    },
  },
  data() {
    return {
      values: {
        cm: "cm",
        inches: "in",
      },
      previewSelectedMetric: "cm",
      selectedMetric: "cm",
      touched: false,
      show:false,
      showM:true,
    };
  },
};
</script>
