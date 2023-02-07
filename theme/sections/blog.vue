<template>
  <div>
    <template v-if="settings.props.styleV.value === 'style1'">
      <section :class='["media-with-text" ,"full-width-section"]' >
      <div :class='["media-with-text__content"] '>
        <div class="media-with-text__content--main">
          {{ settings.props.text.value }} amresh
        </div>
      </div>
      <div class="media-with-text__mainBlock">
        <fdk-link :link= "`/blog/${this.slug_val0}`" :title=this.title0>
          <div class="media-with-text__mainBlock--firstBlock">
            <div class="photo">
              <img :src=this.image_url0 />
            </div>
            <div class="media-with-text__mainBlock--firstBlock--text">{{this.title0}}</div>
          </div>
        </fdk-link>
        <fdk-link :link= "`/blog/${this.slug_val1}`" :title=this.title1>
          <div class="media-with-text__mainBlock--secondBlock">
            <div class="photo">
              <img :src=this.image_url1 />
            </div>
            <div class="media-with-text__mainBlock--secondBlock--text">{{this.title1}}</div>
          </div>
        </fdk-link>
        <fdk-link :link= "`/blog/${this.slug_val2}`" :title=this.title2>
          <div class="media-with-text__mainBlock--thirdBlock">
            <div class="photo">
              <img :src=this.image_url2 />
            </div>
            <div class="media-with-text__mainBlock--thirdBlock--text">{{this.title2}}</div>
          </div>
        </fdk-link>
      </div>
      <div class="media-with-text__btn">   
        <fdk-link :link= "`/blog/`">
          <sm-button
            :backgroundcolortype="'primary'"
            :colortype="'primary'"
            :bordertype="'primary'"
            :padding="'primary'"
            :global_config="global_config"
            v-if="settings.props.button_text.value"
          >
            {{ settings.props.button_text.value }}
            </sm-button>
        </fdk-link>
      </div>
      </section>
      <div class="whites100"></div>
    </template> 

    <template v-if="settings.props.styleV.value === 'style2'">
      <section :class='["media-with-text2" ,"full-width-section"]'>
        <div :class='["media-with-text2__content"] '>
          <div class="media-with-text2__content--main">
            {{ settings.props.text.value }}
          </div>
        </div>
        <div class="media-with-text2__mainBlock">
          <fdk-link :link= "`/blog/${this.slug_val0}`" :title=this.title0>
            <div class="media-with-text2__mainBlock--firstBlock">
              <div class="photo">
                <img :src=this.image_url0 />
              </div> 
              <div class="media-with-text2__mainBlock--secondBlock--text">{{this.title0}}</div>
          </div>
          </fdk-link>
          <fdk-link :link= "`/blog/${this.slug_val1}`" :title=this.title1>
            <div class="media-with-text2__mainBlock--secondBlock">
              <div class="photo">
                <img :src=this.image_url1 />
              </div>
              <div class="media-with-text2__mainBlock--secondBlock--text">{{this.title1}}</div>
            </div>
          </fdk-link>
        </div>
        <div class="media-with-text2__secondBlock">
          <fdk-link :link= "`/blog/${this.slug_val2}`" :title=this.title2>
            <div class="media-with-text2__secondBlock--firstBlock">
              <div class="photo">
                <img :src=this.image_url2 />
              </div>
              <div class="media-with-text2__secondBlock--firstBlock--text">{{this.title2}}</div>
            </div>
          </fdk-link>
          <fdk-link :link= "`/blog/${this.slug_val3}`" :title=this.title3>
            <div class="media-with-text2__secondBlock--secondBlock">
              <div class="photo">
                <img :src=this.image_url3 />
              </div>
              <div class="media-with-text2__secondBlock--secondBlock--text">{{this.title3}}</div>
            </div>
          </fdk-link>
          <fdk-link :link= "`/blog/${this.slug_val4}`" :title=this.title4>
            <div class="media-with-text2__secondBlock--thirdBlock">
              <div class="photo">
                <img :src=this.image_url4 />
              </div>
              <div class="media-with-text2__secondBlock--thirdBlock--text">{{this.title4}}</div>
            </div>
          </fdk-link>
        </div>
        <div class="media-with-text2__btn">   
          <fdk-link :link= "`/blog/`">
            <sm-button
              :backgroundcolortype="'primary'"
              :colortype="'primary'"
              :bordertype="'primary'"
              :padding="'primary'"
              :global_config="global_config"
              v-if="settings.props.button_text.value"
            >
              {{ settings.props.button_text.value }}
              </sm-button>
          </fdk-link>
        </div>
      </section>
      <div class="whites100"></div>
    </template>

    <template v-if="settings.props.styleV.value === 'style3'">
      <section :class='["media-with-text3" ,"full-width-section"]'>
        <div :class='["media-with-text3__content"] '>
          <div class="media-with-text3__content--main">
            {{ settings.props.text.value }}
          </div>
        </div>
        <div class="media-with-text3__mainBlock">
          <fdk-link :link= "`/blog/${this.slug_val0}`" :title=this.title0>
            <div class="media-with-text3__mainBlock--firstBlock">
              <div class="photo">
                <img :src=this.image_url0 />
              </div>
              <div class="media-with-text3__mainBlock--firstBlock--text">{{this.title0}}</div>
            </div>
          </fdk-link>
        </div>
        <div class="media-with-text3__secondBlock">
          <fdk-link :link= "`/blog/${this.slug_val1}`" :title=this.title1>
            <div class="media-with-text3__secondBlock--firstBlock">
              <div class="photo">
                <img :src=this.image_url1 />
              </div>
              <div class="media-with-text3__secondBlock--firstBlock--text">{{this.title1}}</div>
            </div>
          </fdk-link>
          <fdk-link :link= "`/blog/${this.slug_val2}`" :title=this.title2>
            <div class="media-with-text3__secondBlock--secondBlock">
              <div class="photo">
                <img :src=this.image_url2 />
              </div>
              <div class="media-with-text3__secondBlock--secondBlock--text">{{this.title2}}</div>
            </div>
          </fdk-link>
        </div>
        <div class="media-with-text3__btn">  
          <fdk-link :link= "`/blog/`">
            <sm-button
              :backgroundcolortype="'primary'"
              :colortype="'primary'"
              :bordertype="'primary'"
              :padding="'primary'"
              :global_config="global_config"
              v-if="settings.props.button_text.value"
            >
              {{ settings.props.button_text.value }}
              </sm-button>
          </fdk-link> 
        </div>
      </section>
      <div class="whites100"></div>
    </template>
  </div>
</template>

<!-- #region  -->

<settings>
{
  "name": "blog",
  "label": "Blog",
  "props": [
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
          },
          {
              "value": "style3",
              "text": "Style 3"
          }
      ],
      "default": "style1",
      "label": "Layout"
    },
    {
      "type": "text",
      "id": "text",
      "default": "",
      "label": "Heading"
    },
    {
      "type": "text",
      "id": "button_text",
      "default": "View all",
      "label": "Button Text"
    }
  ]
}
</settings>

<!-- #endregion -->
<style lang="less" scoped>
.full-width-section {
  padding: 0px;
}
.media-with-text {
  width: 1440px;
  height: 542px;
  @media screen and (max-width: 768px) {
    width: 744px;
    height: 304px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 787px;
  }

  &__btn {
    padding-top: 30px;
    text-align-last: center;
    @media screen and (max-width: 768px) {
      padding-top: 32px;
    }
    @media screen and (max-width: 480px) {
      padding-top: 32px;
    }
  }

  &__mainBlock {
    display: flex;
    padding-top: 100px;
    padding-left: 72px;
    padding-right: 72px; 
    gap: 40px; 
    &--firstBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          font-size: 12px;
          padding-top: 16px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        &--text {
          font-size: 12px;
          padding-top: 8px;
          text-decoration-line: underline;
        }
      }
    }
    &--secondBlock {
      .photo {
        overflow: hidden;
        flex: 50%;
        width: 100%;
        height: auto;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          font-size: 12px;
          padding-top: 16px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        padding-left: 0px;
        padding-top: 40px;
        &--text {
          font-size: 12px;
          padding-top: 8px;
          text-decoration-line: underline;
        }
      }
    }
    &--thirdBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
        &--text {
          padding-top: 16px;
          font-style: Inter;
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          text-decoration-line: underline;
          color: @TextBody;
        }
        @media screen and (max-width: 768px) {
          &--text {
            font-size: 12px;
            padding-top: 16px;
            text-decoration-line: underline;
          }
        }
        @media screen and (max-width: 480px) {
          padding-left: 0px;
          padding-top: 40px;
          &--text {
            font-size: 12px;
            padding-top: 8px;
            text-decoration-line: underline;
          }
        }
    }
    @media screen and (max-width: 768px) {
      padding-top: 50px;  
      padding-left: 40px;
      padding-right: 40px;
      gap: 14px;
    }
    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      padding-left: 16px;
      padding-right: 16px;
      gap: 0px;
    }
  }

  &__content {
    padding-top: 40px;
    text-align-last: center;
    box-sizing: border-box;
    width: 62px;
    height: 36px;
    padding-left: 689px;
    &--main {
      font-size: 32px;
      font-family: Marcellus;
      font-weight: 300;
      line-height: 36px;
      color: @TextHeading;
    }
    @media screen and (max-width: 768px) {
      padding-top: 25px;
      padding-left: 345px;
      width: 54px;
      height: 32px;
      &--main {
        font-size: 28px;
        line-height: 32px;
      }
    }
    @media screen and (max-width: 480px) {
      padding-left: 0px;
      width: 197px;
      height: 32px;
      text-align-last: right;
      &--main {
        font-size: 28px;
        line-height: 32px;
      }
    }
  }
}

.media-with-text2 {
  width: 1440px;
  height: 970px;
  @media screen and (max-width: 768px) {
    width: 744px;
    height: 490px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 751px;
  }

  &__btn {
    padding-top: 40px;
    text-align-last: center;
    @media screen and (max-width: 768px) {
      padding-top: 45px;
    }
  }
  &__content {
    padding-top: 52px;
    padding-left: 689px;
    width: 62px;
    height: 36px;
    box-sizing: border-box;
    
    &--main {
      font-size: 32px;
      font-family: Marcellus;
      font-weight: 400;
      line-height: 36px;
      color: @TextHeading;
    }
    @media screen and (max-width: 768px) {
      padding-top: 32px;
      padding-left: 345px;
      width: 54px;
      height: 32px;
      &--main {
        font-size: 28px;
        line-height: 32px;
      }
    }
    @media screen and (max-width: 480px) {
      padding-left: 0px;
      width: 197px;
      height: 32px;
      text-align-last: right;
      &--main {
        font-size: 28px;
        line-height: 32px;
      }
    }
  }
  &__mainBlock {
    display: flex;
    padding-top: 90px;
    padding-left: 72px;
    padding-right: 72px;
    gap: 40px;
    &--firstBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          padding-top: 16px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        &--text {
          padding-top: 8px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
    }
    &--secondBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          padding-top: 16px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        padding-top: 16px;
        padding-left: 0px;
        &--text {
          padding-top: 8px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
    }
    @media screen and (max-width: 768px) {
      padding-top: 70px;
      padding-left: 40px;
      padding-right: 40px;
      gap: 14px;
    }
    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      padding-top: 60px;
      padding-left: 16px;
      padding-right: 16px;
      gap: 0px;
    }
  }
  &__secondBlock::-webkit-scrollbar {
    display: none;
  }
  &__secondBlock {
    display: flex;
    overflow: auto;
    padding-top: 60px;
    padding-right: 72px;
    padding-left: 72px;
    gap: 40px;
    &--firstBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          padding-top: 16px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        .photo {
          img {
            width: 212px;
            height: 120px;
          }
        }
        &--text {
          padding-top: 8px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
    }
    &--secondBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          padding-top: 16px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        .photo {
          img {
            width: 212px;
            height: 120px;
          }
        }
        &--text {
          padding-top: 8px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
    }
    &--thirdBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          padding-top: 16px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        .photo {
          img {
            width: 212px;
            height: 120px;
          }
        }
        &--text {
          padding-top: 8px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
    }
    @media screen and (max-width: 768px) {
      padding-top: 32px;
      padding-right: 40px;
      padding-left: 40px;
      gap: 14px;
    }
    @media screen and (max-width: 480px) {
      padding-left: 16px;
      gap: 14px;
    }
  }
}

.media-with-text3 {
  width: 1440px;
  height: 1454px;
  @media screen and (max-width: 768px) {
    width: 744px;
    height: 800px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 518px;
  }

  &__btn {
    padding-top: 56px;
    text-align-last: center;
    @media screen and (max-width: 768px) {
      padding-top: 30px;
    }
    @media screen and (max-width: 480px) {
      padding-top: 30px;
    }
  }
  &__content {
    padding-top: 40px;
    padding-left: 689px;
    width: 62px;
    height: 36px;
    box-sizing: border-box;
    
    &--main {
      padding: 10px;
      font-size: 32px;
      font-family: Marcellus;
      font-weight: 400;
      line-height: 36px;
      color: @TextHeading;
    }
    @media screen and (max-width: 768px) {
      padding-top: 32px;
      padding-left: 345px;
      width: 54px;
      height: 32px;
      &--main {
        font-size: 28px;
        line-height: 32px;
      }
    }
    @media screen and (max-width: 480px) {
      padding-left: 0px;
      width: 197px;
      height: 32px;
      text-align-last: right;
      &--main {
        font-size: 28px;
        line-height: 32px;
      }
    }
  }
  &__mainBlock {
    padding-top: 90px;
    padding-left: 72px;
    padding-right: 72px;
    &--firstBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          padding-top: 16px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        &--text {
          padding-top: 8px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
    }
    @media screen and (max-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 65px;
    }
    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      padding-left: 16px;
      padding-right: 16px;
      padding-top: 65px;
    }
  }
  &__secondBlock::-webkit-scrollbar {
    display: none;
  }
  &__secondBlock {
    display: flex;
    overflow: auto;
    padding-top: 50px;
    padding-left: 72px;
    padding-right: 72px;
    gap: 40px;
    &--firstBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          padding-top: 16px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        .photo {
          img {
          width: 212px;
          height: 144px;
        }
        }
        &--text {
          padding-top: 8px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
    }
    &--secondBlock {
      .photo {
        overflow: hidden;
        width: 100%;
        height: auto;
        flex: 50%;
        img {
          transition: transform 0.35s;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          object-fit: cover;
        }
      }
      .photo:hover img {
        transform: scale(1.1);
      }
      &--text {
        padding-top: 16px;
        font-style: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        color: @TextBody;
      }
      @media screen and (max-width: 768px) {
        &--text {
          padding-top: 16x;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
      @media screen and (max-width: 480px) {
        .photo {
          img {
            width: 212px;
            height: 144px;
          }
        }
        &--text {
          padding-top: 8px;
          font-size: 12px;
          text-decoration-line: underline;
        }
      }
    }
    @media screen and (max-width: 768px) {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 30px;
      gap: 14px;
    }
    @media screen and (max-width: 480px) {
      padding-left: 16px;
      padding-right: 16px;
      gap: 14px;
    }
  }
}

.media-with-text3 ,.media-with-text2 ,.media-with-text {
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
import "video.js/dist/video-js.min.css";
import btn from "./../components/common/button.vue";

export default {
  data() {
    return {
     items: [],
     slug_val0:"",
     slug_val1:"",
     slug_val2:"",
     slug_val3:"",
     slug_val4:"",
     title0:"",
     title1:"",
     title2:"",
     title3:"",
     title4:"",
     image_url0: "",
     image_url1: "",
     image_url2: "",
     image_url3: "",
     image_url4: "",
    };
  },
  props: ["settings", "context", "global_config"],
  computed: {
   
  },
  methods: {
    fetchData() {
        console.log("Inside func");
        this.$apiSDK.content.getBlogs({pageNo : 1 ,pageSize : 5}).then((data) => {
        console.log("Data from Blog API", data);
        this.items = data.items;
        this.slug_val0 = this.items[0].slug;
        this.slug_val1 = this.items[1].slug;
        this.slug_val2 = this.items[2].slug;
        this.slug_val3 = this.items[3].slug;
        this.slug_val4 = this.items[4].slug;
        this.title0 = this.items[0].title;
        this.title1 = this.items[1].title;
        this.title2 = this.items[2].title;
        this.title3 = this.items[3].title;
        this.title4 = this.items[4].title;
        this.image_url0 = this.items[0].feature_image.secure_url;
        this.image_url1 = this.items[1].feature_image.secure_url;
        this.image_url2 = this.items[2].feature_image.secure_url;
        this.image_url3 = this.items[3].feature_image.secure_url;
        this.image_url4 = this.items[4].feature_image.secure_url;
      });
    }
  },
  components: {
    "sm-button": btn,
    "no-ssr": NoSSR
  },
  mounted() {
    this.fetchData();
    console.log("Setting Data from Blog", this.settings);
  }
};
</script>
