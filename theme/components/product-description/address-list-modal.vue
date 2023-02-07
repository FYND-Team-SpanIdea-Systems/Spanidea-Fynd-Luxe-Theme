<template>
  <!-- <modal :isOpen="isOpen" v-on:closedialog="closeDailog" title="Select delivery location"> -->
    <fdk-addresses>
      <template slot-scope="addressAct">
        <fdk-pincode ref="pdp-pincode">
          <template slot-scope="pincodeAct">
            <div class="main">
              <div class="helper light-xs">
                Select delivery location
              </div>
              <!-- <div class="title bold-sm ">CHECK PINCODE</div> -->
              <div class="pincode-container">
                <input
                  autocomplete="off"
                  v-model="pincode_value"
                  placeholder="Enter Pincode"
                  class="common-input pincode-input"
                  type="tel"
                  maxlength="6"
                  onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                  :input="checkPincode(pincodeAct)"
                />
                <button 
                  class="check-button"
                  @click="resetInput"
                  >
                  Reset
                </button>
                <!-- <div v-if="pincode_value.length < 6">
                  <button v-if="on_check"
                  class="button bold-sm"
                >
                  Enter Pincode
                </button>
                </div> -->
                <!-- <div v-else>
                  <button
                  class="button1 bold-sm"
                  @click="checkPincode(pincodeAct)"
                >
                  CHECK
                </button>
                </div> -->
                <fdk-loader v-if="inProgress"></fdk-loader>
              </div>
              <div v-if="pincode_value.length > 0"
                v-bind:class="[{ visible: showError }, 'error']"
                class="regular-xxxxs"
                >
                {{ error }}
              </div>
              <!-- <div v-if="pincode_value.length < 1"
                v-bind:class="[{ hidden: hiddenError }, 'error']"
                class="regular-xxxxs"
                >
                {{ error }}
              </div> -->
              <div v-if="addressAct.addresses && addressAct.addresses">
                <div class="address-container">
                  <label
                    v-for="(item, index) in addressAct.addresses.address"
                    :key="index"
                  >
                    <input
                      type="radio"
                      name="address"
                      :value="item"
                      v-model="selectedAddress"
                      @click="selectAddress(item, pincodeAct)"
                    />
                    <div class="address-item">
                      <div class="address-left">
                        <svg-wrapper
                          v-if="selectedAddress.uid !== item.uid"
                          :svg_src="'regular'"
                        ></svg-wrapper>
                        <svg-wrapper
                          :svg_src="'radio-selected'"
                          v-if="selectedAddress.uid === item.uid"
                        ></svg-wrapper>
                      </div>
                      <div class="address-right">
                        <div class="user-meta">
                          {{ item.name }} | {{ item.phone }}
                        </div>
                        <div class="address-meta regular-xxs">
                          <span class="address-type">{{
                            item.address_type
                          }}</span>
                          <span class="address">
                            - {{ item.address }}, {{ item.landmark }},
                            {{ item.area }}, {{ item.city }}</span
                          >
                          <span> - {{ item.pincode }}</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </template>
        </fdk-pincode>
      </template>
    </fdk-addresses>
  <!-- </modal> -->
</template>

<script>
// import modal from "./../../global/components/modal.vue";
import SvgWrapper from '../common/svg-wrapper.vue';

export default {
  name: "address-modal",
  components: {
    // modal: modal,
    'svg-wrapper': SvgWrapper
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
     pincodeError:{
        type:Boolean,
      },
     errMsg:'', 
    storeInfo: Object,
    tatInfo: Object,
    isExplicitelySelectedStore: {
      type: Boolean,
    },
    pincode: ""
  },
  data() {
    return {
      pincode_value:
        this.pincode || "",
      error: "-",
      showError: false,
      selectedAddress: {},
      inProgress: false,
      deliveryInfo: {},
      pincodeFunction: null,
      is_check:false,
      on_check:true,
    };
  },
  methods: {
    selectAddress(item, pincodeAct) {
      this.showError = false;
      this.pincode_value = `${item.area_code}`;
      this.checkPincode(pincodeAct);
    },
    showTatError(err) {
      this.$emit("showTatError", err);
    },

    checkPincode(pincodeAct) {
      this.pincodeFunction = pincodeAct;
      if (this.pincode_value.length === 6) {
        console.log("inside");
        pincodeAct
          .validatePincode(this.pincode_value)
          .then((valid) => {
            console.log("valid",valid);
            if (valid) {
              this.showError = false;
              this.error = '';
              this.pincodeReceived(pincodeAct);
              this.$emit("hideTatError");
              
            }
          })
          .catch((err) => {
            this.showTatError(err);
            
            this.errMsg=err.message;
            this.pincodeError=true;
            this.error = err.message;
            this.showErr(this.error);
          });
      } else {
        this.error = "Invalid pincode";
        this.pincodeError = true;
        this.showErr(this.error);
      }
    },
    pincodeReceived(pincodeAct) {
      let obj = {
        pincode_value: this.pincode_value,
        pincode_act: pincodeAct,
      };
      this.$emit("newPincodeReceived", obj);
      this.$emit("closedialog");
      this.inProgress = false;
    },
    showErr(errorMsg) {
      this.error = errorMsg;
      this.showError = true;
      this.inProgress = false;
    },
    closeDailog() {
      this.$emit("closedialog");
      this.showError = false;
    },
    resetInput() {
      this.pincode_value = ''
      this.$emit("pincodeReset")
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  .helper {
    padding: 0px 0px 12px 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #26201A;
  }
  .title {
    margin-top: 10px;
    margin-bottom: 15px;
    color: @Mako;
  }
  .pincode-container {
    display: flex;
    flex-direction: row;
    @media @tablet {
      justify-content: space-between;
    }
    
    .check-button {
      width: 60px;
      border: 0;
      background-color: #f5f2ed;
    }
    .pincode-input {
      border: none;
      padding: 0px 0px 0px 10px;
      border-radius: 4px;
      background-color: #f5f2ed;
      height: 48px;
      width: 496px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #8E8C8A;
      @media @tablet {
        width: 635px;
      }
    }
    .pincode-input::placeholder{
      padding-left: 10px;
      }
    .button {
      line-height: 25px;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 32px;
      gap: 4px;
      width: 496px;
      height: 48px;
      background: #BAB9B9;
    }
    .button1 {
      line-height: 25px;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 32px;
      gap: 4px;
      width: 496px;
      height: 48px;
      background: #000000;
      
    }
  }
  .error {
    padding: 5px 0px 0px;
    visibility: hidden;
    color: @Required;
  }
  .visible {
    visibility: visible;
  }
  .hidden {
    visibility: hidden;
  }
  .address-container {
    max-height: 250px;
    overflow-y: auto;
    // border-top: 1px solid @LightGray;
    @media @mobile {
      max-height: calc(100vh - 210px);
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
      background-color: @White;
    }
    &::-webkit-scrollbar {
      width: 5px;
      background-color: @White;
    }
    &::-webkit-scrollbar-thumb {
      background-color: @Gray;
    }
    .address-item {
      padding: 10px 5px;
      cursor: pointer;
      border-bottom: 1px solid @Iron;
      border-right: none;
      border-left: none;
      font-weight: 300;
      display: table;
      color: @Mako;
      width: calc(100% - 10px);
      &:hover {
        background-color: @LightGray;
      }
      .address-left {
        display: table-cell;
        margin-left: auto;
        vertical-align: middle;
        width: 40px;
        position: relative;
      }
      .address-right {
        display: table-cell;
        align-items: center;
        line-height: 25px;
        vertical-align: middle;
        .user-meta {
          font-weight: 600;
          color: @Mako;
          font-size: 16px;
          text-transform: capitalize;
        }
        .address-meta {
          font-size: 14px;
          font-weight: 300;
          line-height: 20px;
          .address-type {
            text-transform: capitalize;
            font-weight: 700;
          }
        }
      }
    }
  }
  input[type="radio"] {
    display: none;
    &:checked {
      color: green;
    }
  }
  input::-webkit-input-placeholder {
    font-size: 12px;
    font-weight: 500;
  }
}
</style>
