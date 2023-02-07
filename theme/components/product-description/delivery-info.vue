<template>
  <fdk-pincode ref="pdpPincode">
    <template slot-scope="">
      <div class="delivery-info">
        <div class="delivery" v-if="isMounted && getPincode()">
          <!-- <span class="darker-xs location">Select delivery location</span> -->
          <!-- <span>
            <a
              class="ukt-links"
              style="color: var(--text_heading_link_color)"
              @click="addressModal = true"
              > Edit pincode &nbsp;{{ getPincode() }} </a
            >
          </span> -->
            <p class="error light-xxs" v-if="pincodeError">
              {{ errMsg }}
            </p>
        </div>
        <address-list-modal
        :isOpen="showUserPincodeModal || addressModal"
        :tatInfo="tatInfo"
        :isExplicitelySelectedStore="isExplicitelySelectedStore"
        :id="id"
        :context="context"
        :errMsg="errMsg"
        :pincodeError="pincodeError"
        @closedialog="onCloseDialog"
        @newPincodeReceived="onNewPincodeReceived"
        @showTatError="onTatError($event)"
        @hideTatError="onHideTatError"
        @onTatSuccess="getTatInfo($event)"
        @pincodeReset = "resetToPincode()"
        :pincode="pincode"
      ></address-list-modal>
        <template
          v-if="
            storeInfo && deliveryInfo && deliveryInfo.minDeliveryDate && !error && !pincodeError
          "
        >
          <div
            v-if="deliveryInfo.minDeliveryDate === deliveryInfo.maxDeliveryDate"
          >
            <div class="delivery-date light-xxs">
              Expected delivery on
              {{ deliveryInfo.minDeliveryDate }}
            </div>
          </div>
          <div v-else>
            <div v-if="toPincode.length === 6" class="delivery-date light-xxs">
              Will be delivered
              {{ deliveryInfo.minDeliveryDate }}
              -
              {{ deliveryInfo.maxDeliveryDate }}
            </div>
          </div>
        </template>
      </div>
    </template>
  </fdk-pincode>
</template>

<style lang="less" scoped>
.delivery {
  margin-bottom: 12px;
}
.location {
  width: 496px;
  height: 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #26201A;
}
.delivery-info {
  margin: 48px 0px 24px 0px;
  @media @tablet {
    margin: 32px 0px 24px 0px;
  }
  .ukt-links {
    .user-select-none();
    font-size:15px;
  }
}
.delivery-date {
  width: 270px; 
  height: 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6FC888;
}
.visible {
    visibility: visible;
  }
.error {
    color: @Required;
  }
</style>

<script>
import AddressList from "./address-list-modal.vue";
import isEmpty from "lodash/isEmpty";

export default {
  name: "delivery-info",
  props: {
    storeInfo: {},
    productName: "",
    level: "",
    id: {
      type: Number,
    },
    context: {},
    showUserPincodeModal: "",
    isExplicitelySelectedStore: "",
    pincode: ""
  },
  watch: {
    storeInfo() {
      if (this.storeInfo) {
        this.fromPincode = `${this.storeInfo.pincode}`;
        this.toPincode = this.pincode;
        this.getTatInfo();
      }
    },
    deliveryInfo(newValue) {
      this.deliveryInfo = newValue;
    },
  },
  data() {
    return {
      toPincode: this.pincode || "",
      fromPincode: "",
      errMsg:null,
      addressModal: false,
      tatInfo: {},
      pincodeError: false,
      deliveryInfo: {},
      error: false,
      isMounted: false,
      pincodeFunction: null,
    };
  },
  components: {
    "address-list-modal": AddressList,
  },
  mounted() {
    this.isMounted = true;
    if (!this.showUserPincodeModal && !isEmpty(this.storeInfo))
      this.getTatInfo();
  },
  methods: {
    onCloseDialog() {

      this.pincodeError =false;
      this.addressModal = false;
      this.$emit("dialogClosed");
    },
    getPincode() {
      console.log("topincode",this.toPincode.length);
        return this.toPincode;
    },
    resetToPincode() {
      this.toPincode = ""
    },
    showTatError(err) {
      this.$emit("showTatError", err.message);
    },
    onTatError(err) {
      this.showTatError(err);
    },
    onHideTatError() {
      this.$emit("hideTatError");
    },
    onNewPincodeReceived(obj) {
      let newPincode = obj.pincode_value;
      this.pincodeFunction = obj.pincode_act;
      this.toPincode = newPincode;
      this.$emit("pincodeChanged", newPincode);
    },
    getTatInfo() {
      if (this.storeInfo && this.$refs["pdpPincode"]) {
        this.tatInfo = {
          toPincode: this.toPincode,
          fromPincode: `${this.storeInfo.pincode}`,
          categoryId: this.id,
          store_id: this.storeInfo.store.uid,
        };
        this.$refs["pdpPincode"]?.getTat(this.tatInfo).then((res) => {
          this.deliveryInfo = res;
        })
        .catch((err) => {
          this.pincodeError=true;
            this.$emit("showTatError", err.message);
             this.errMsg = err.message;
            this.isPinCodeValid = false;
          });
      }
    },
  },
};
</script>
