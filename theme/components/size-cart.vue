<template>
    <transition
      name="modal"
      mode="out-in"
    >
      <modal
        :isOpen="isOpen"
        v-on:closedialog="closeDailog"
        :modalClass="'sizeCartModal'"
      >
        <div
            class="size-container"
        >
        <fdk-cart
            class="cart"
            >
            <template slot-scope="cart">
                <template v-if="context.bag_data.items.length > 0">
                <div class="cart-heading" style="flex: 0 0 100%">
                    <div class="cart__title">
                    <p>Bag</p>
                    <!-- <span>
                        {{ context.bag_data.items.length }} Item{{
                        context.bag_data.items.length > 1 ? "s" : ""
                        }}
                        | {{ getPiecesTxt() }}</span
                    > -->
                    </div>
                </div>
                <div class="left">
                    <div class="cart__items">
                    <cart-item
                        v-for="(item, index) in cart.getCart()"
                        :key="index"
                        :item="item"
                        :cart="cart"
                        :updateCart="updateCart"
                        v-on:removeCart="removeCart"
                    ></cart-item>
                    </div>
                </div>
                </template>
            </template>
            </fdk-cart>
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
    .cart {
        position: relative;
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        margin-top: 20px;
        box-sizing: border-box;
        background-color: @White;
        padding: 20px;
        flex-wrap: wrap;
        @media @mobile {
            padding: 0;
            margin: 0;
            flex-direction: column;
            justify-content: flex-start;
        }
        .cart-heading {
            flex: 0 0 100%;
            border-bottom: 1px solid @LightGray;
        }
        .share_popup {
        &.topLayer {
        @media @mobile {
            z-index: 10;
        }
        }
        .cart-share {
        position: absolute;
        right: 10px;
        top: 5px;
        padding: 3px;
        z-index: 1;
        cursor: pointer;
        @media @mobile {
            right: 15px;
            top: 15px;
        }
        }
        }

    .left {
        width: 100%;
        border-right: 1px solid @LightGray;
        // border-radius:8px;
        // margin-right:2%;
        @media @mobile {
        width: 100%;
        padding: 0px;
        margin-right: 0;
        border-right: 0;
        }
    }
    &__title {
        /*padding: 20px 0;*/
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bold;

        display: flex;
        align-items: center;
        margin-bottom: 5px;
        border-radius: 4px;
        padding: 10px;
        position: relative;
        @media @mobile {
        flex-direction: column;
        align-items: flex-start;
        }
        span {
        font-size: 14px;
        font-weight: 500;
        text-transform: none;
        margin-left: 10px;
        color: @DustyGray;
        @media @mobile {
            margin-left: 0;
            margin-top: 5px;
        }
        }
    }
    &__items {
        padding: 0px;
        border-radius: 4px;
        @media @mobile {
        padding: 10px;
        }
    }
    .heading {
        font-weight: bold;
    }
    }
  }
  </style>
  
<script>
import modal from "./modal.vue";
import cartitem from "./../global/components/cart/cart-item.vue";
import "vue-select/dist/vue-select.css";

export default {
    name: "size-cart",
    extends: modal,
    components: {
      modal: modal,
      "cart-item": cartitem,
    },
    props:  ["context"],
    
    data() {
        return {
            isLoading: false,
        };
    },
    mounted() {
        console.log("bagdata",this.context);
    },
    methods: {
        getItem() {

        },

      closeDailog() {
        document.querySelector("body").style.overflow = "auto";
        this.$emit("closedialog");
      },
      removeCart(params) {
      this.isLoading = true;
      let item = this.context.bag_data.items[params.item.item_index];
      params
        .func([item])
        .then(({ data }) => {
          this.isLoading = false;
          //   this.validateCart();
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
      },
      updateCart(params) {
        this.isLoading = true;
        let item = this.context.bag_data.items[params.item.item_index];
        if (params.operation === "inc") item.quantity++;
        else if (params.operation === "dec") {
            if (params.item.article.quantity < params.item.quantity) {
            item.quantity = params.item.article.quantity;
            } else {
            item.quantity--;
            }
        } else if (params.operation === "size")
            item.article.size = params.item.item_size;
        else if (params.operation === "qty") item.quantity = params.item.quantity;

        if (item.quantity <= 0) {
            item.quantity = 0;
        }
        params
            .func([item])
            .then(({ data }) => {
            this.isLoading = false;
            //   this.validateCart();
            })
            .catch((err) => {
            console.log(err);
            this.isLoading = false;
            });
        },
        getPiecesTxt() {
            let count = 0;
            let context = this.context;
            if (context.bag_data && context.bag_data.items) {
                for (let i = 0; i < context.bag_data.items.length; i++) {
                count += context.bag_data.items[i].quantity;
                }
            }
            let piecesStr = "";
            if (count > 1) {
                piecesStr = `${count} Pieces`;
            } else {
                piecesStr = `${count} Piece`;
            }
            return piecesStr;
        },
    },
    watch: {
        context: function (newvalue) {
        this.context = newvalue;
        console.log("baggdata",this.context);
        },
    },
};
</script>
  