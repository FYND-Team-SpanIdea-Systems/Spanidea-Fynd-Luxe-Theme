<template>
  <div class="desc-container">
    <div
      class="pdp-section"
      v-for="(item, index) in product.grouped_attributes"
      :key="index"
    >
      <div style="display:flex;flex-direction:row;justify-content:space-between;">
        <div
        class="ukt-title title"
        :style="`color: ${global_config.props.text_heading_link_color}`"
      >
        {{ item.title }}
      </div>
      <button v-if="is_colA" @click="handleClick1" class="collapsible">+</button>
      <button v-if="is_colB" @click="handleClick2" class="collapsible">-</button>
      </div>
      <collapse-transition>
        <div v-show="isOpenA" class="list-reset">
          <div class="pdp-detail" v-if="item.details.length > 0">
            <div
              class="pdp-table"
              v-for="(property, val) in item.details"
              :key="val + index"
            >
              <div class="prop regular-xs">{{ property.key }} :</div>
              <div class="val regular-xxs" v-html="property.value"></div>
            </div>
          </div>
          <div v-if="storeInfo !== null">
            <template
              v-if="storeInfo.return_config && storeInfo.return_config.returnable"
            >
              <div class="return">
                Returnable within {{ storeInfo.return_config.time }}
                {{ storeInfo.return_config.unit }}
              </div>
            </template>
            <template v-else>
              <div class="return">
                Item is not returnable
              </div>
            </template>
          </div>
          <template v-if="storeInfo !== null && storeInfo.marketplace_attributes">
          <div
            class="pdp-section"
            v-for="(item, index) in storeInfo.marketplace_attributes"
            :key="index + 'mr'"
          >
            <div
              class="ukt-title title"
              :style="`color: ${global_config.props.text_heading_link_color}`"
            >
              {{ item.title }}
            </div>
            <div class="pdp-detail" v-if="item.details.length > 0">
              <div
                class="pdp-table"
                v-for="(property, val) in item.details"
                :key="val + index + 'mr'"
              >
                <div class="prop regular-xs">{{ property.key }} :</div>
                <div class="val regular-xxs" v-html="property.value"></div>
              </div>
            </div>
          </div>
        </template>  
        </div>
      </collapse-transition>
      <hr />
    </div>
  </div>
</template>

<style lang="less" scoped>
.ukt-title {
  font-size: 24px;
}
.collapsible {
  font-size: 15px;
  border: 0;
  background-color: white;
  font-size: 24px;
  }
.ukt-links {
  font-weight: 500;
}
.return {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
}
.desc-container {
  width: inherit;
  margin: 0px 0px;
  margin-bottom: 0px;
  background: @White;
  border-radius: @border-radius;
  line-height: 20px;
  .section-text {
    margin: 10px 0px;
  }

  .pdp-section {
    width: 100%;
    padding-bottom: 10px;
    overflow: hidden;
    @media @tablet {
      width: 100%;
    }
    .title {
      margin-bottom: 5px;
      font-family: 'Marcellus';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: -0.02em;
      color: #26201A;
      @media @tablet {
        font-size: 20px;
        line-height: 24px;
      }
    }
    .pdp-detail {
      display: table;
      width: 100%;
      margin-top: 16px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      // display: flex;
      // align-items: center;
      letter-spacing: -0.02em;
      color: #504A42;
      @media @tablet {
        font-size: 12px;
      }
      
      .pdp-table {
        width: 100%;
        position: relative;
        display: inherit;
        table-layout: fixed;
        font-weight: 300;
        box-sizing: border-box;

        &:last-child {
          .prop {
            border-bottom: none;
          }
          .val {
            border-bottom: none;
          }
        }
        .prop {
          display: table-cell;
          width: 30%;
          padding: 0px;
          font-size: 14px;
        }
        .val {
          display: table-cell;
          width: 70%;
          padding: 3px;
          font-size: 14px;
          /deep/img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "product_desc",
  props: {
    product: {
      type: Object,
    },
    storeInfo: null,
    global_config: {},
  },
  data() {
    return {
      isOpenA: false,
      is_colA: true,
      is_colB: false,
    }
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
  }
};
</script>
