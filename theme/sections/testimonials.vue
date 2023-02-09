<template>
  <div class="testimonial-cont section-main section-main-container">
    <template v-if="getSectionValue(settings,'style_layout') === 'style1'">
    <div class="fadeInUp" style="display:flex" :class='["quotes-slider","mirror_layout-" + settings.props.mirror_layout.value]'>
      <div class="outer-wrapper">
        <div class="inner-wrapper">
          <div class="front-image-wrapper">
            <img id="image-front" />
          </div>
          <div class="back-image-wrapper">
            <img id="image-left" />
            <img id="image-right" />
          </div>
        </div>
      </div>       
      <div class="glide-cont ayu" :class="'glide'+ _uid" ref="glide">
        <div data-glide-el="track" class="glide__track">
          <div class="glide__slides" :class="{ 'ssr-slides-box': !checkisBrowser() && !isMounted }">         
            <div class="glide__slide" :class='["quotes-slider"]' v-for="(block, i) in blocks" :key="i">
              <div v-if="getSectionValue(settings,'font_layout') === 'small'">
                <div class="testimonial">
                  <p class="test1 font-header">
                    {{ block.props && block.props.testimonialText.value
                    ? block.props.testimonialText.value
                    : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                    }} 
                  </p>
                  <cite>
                    <section>
                      <div class="font-body">{{ block.props && block.props.author_name.value ? block.props.author_name.value : "Author's name"}}</div>
                      <div class="font-body">{{ block.props && block.props.author_description.value ? block.props.author_description.value : "Author's Description" }}</div>
                    </section>
                  </cite>
                  <div class="arrows" :class='["quotes--slider","mirror_layout-" + settings.props.mirror_layout.value]' v-if="
                    blocks.length > 1
                  ">
                    <section>
                      <div class="prev-btn btn-nav-testimonial" ref="prevArrow" @click="prevSlide">
                        <div id="left-btn" class="icon icon-prev">
                          <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                        </div>
                      </div>
                      <div class="next-btn btn-nav-testimonial" ref="nextArrow" @click="nextSlide">
                        <div id="right-btn" class="icon icon-next">
                          <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div v-if="getSectionValue(settings,'font_layout') === 'inter'">
                <div :class='["testimonial","mirror_layout-" + settings.props.mirror_layout.value]'>
                  <p class="test2 font-header">
                    {{ block.props && block.props.testimonialText.value
                    ? block.props.testimonialText.value
                    : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                    }}
                  </p>
                  <cite>
                    <section>
                      <div class="font-body">{{ block.props && block.props.author_name.value ? block.props.author_name.value : "Author's name"}}</div>
                      <div class="font-body">{{ block.props && block.props.author_description.value ? block.props.author_description.value : "Author's Description" }}</div>
                    </section>
                  </cite>
                  <div class="arrows" :class='["quotes--slider","mirror_layout-" + settings.props.mirror_layout.value]' v-if="
                    blocks.length > 1
                  ">
                    <section>
                      <div class="prev-btn btn-nav-testimonial" ref="prevArrow" @click="prevSlide">
                        <div id="left-btn" class="icon icon-prev">
                          <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                        </div>
                      </div>
                      <div class="next-btn btn-nav-testimonial" ref="nextArrow" @click="nextSlide">
                        <div id="right-btn" class="icon icon-next">
                          <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div v-if="getSectionValue(settings,'font_layout') === 'large'">
                <div class="testimonial">
                  <p class="test3 font-header">
                    {{ block.props && block.props.testimonialText.value
                    ? block.props.testimonialText.value
                    : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                    }}
                  </p>
                  <cite>
                    <section>
                      <div class="font-body">{{ block.props && block.props.author_name.value ? block.props.author_name.value : "Author's name"}}</div>
                      <div class="font-body">{{ block.props && block.props.author_description.value ? block.props.author_description.value : "Author's Description" }}</div>
                    </section>
                  </cite>
                  <div class="arrows" :class='["quotes--slider","mirror_layout-" + settings.props.mirror_layout.value]' v-if="
                    blocks.length > 1
                  ">
                    <section>
                      <div class="prev-btn btn-nav-testimonial" ref="prevArrow" @click="prevSlide">
                        <div id="left-btn" class="icon icon-prev">
                          <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                        </div>
                      </div>
                      <div class="next-btn btn-nav-testimonial" ref="nextArrow" @click="nextSlide">
                        <div id="right-btn" class="icon icon-next">
                          <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>    
            </div>
          </div>  
        </div>
      </div>      
      </div> 
    </template>  
        
      <template v-if="getSectionValue(settings,'style_layout') === 'style2'"> 
        <div class="glide-cont1" :class="'glide'+ _uid" ref="glide">
          <div data-glide-el="track" class="glide__track">
            <div class="glide__slides" :class="{ 'ssr-slides-box': !checkisBrowser() && !isMounted }">    
              <div class="glide__slide quotes-slider2" v-for="(block, i) in blocks" :key="i">
                <div class="author-image2">
                  <emerge-image
                    v-if="block.props && block.props.author_image.value"
                    :src="block.props.author_image.value"
                  />
                </div>
                <div v-if="getSectionValue(settings,'font_layout') === 'small'">
                  <div class="testimonial2">
                    <p class="test1 font-header">
                      {{ block.props && block.props.testimonialText.value
                      ? block.props.testimonialText.value
                      : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                      }}
                    </p>
                    <cite>
                      <section>
                        <div class="font-body">{{ block.props && block.props.author_name.value ? block.props.author_name.value : "Author's name"}}</div>
                        <div class="font-body">{{ block.props && block.props.author_description.value ? block.props.author_description.value : "Author's Description" }}</div>
                      </section>
                    </cite>
                  </div>
                </div>
                <div v-if="getSectionValue(settings,'font_layout') === 'inter'">
                  <div class="testimonial2">
                    <p class="test2 font-header">
                      {{ block.props && block.props.testimonialText.value
                      ? block.props.testimonialText.value
                      : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                      }}
                    </p>
                    <cite>
                      <section>
                        <div class="font-body">{{ block.props && block.props.author_name.value ? block.props.author_name.value : "Author's name"}}</div>
                        <div class="font-body">{{ block.props && block.props.author_description.value ? block.props.author_description.value : "Author's Description" }}</div>
                      </section>
                    </cite>
                  </div>
                </div>
                <div v-if="getSectionValue(settings,'font_layout') === 'large'">
                  <div class="testimonial2">
                    <p class="test3 font-header">
                      {{ block.props && block.props.testimonialText.value
                      ? block.props.testimonialText.value
                      : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                      }}
                    </p>
                    <cite>
                      <section>
                        <div class="font-body">{{ block.props && block.props.author_name.value ? block.props.author_name.value : "Author's name"}}</div>
                        <div class="font-body">{{ block.props && block.props.author_description.value ? block.props.author_description.value : "Author's Description" }}</div>
                      </section>
                    </cite>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="div2">
          <div class="glide__bullets" data-glide-el="controls[nav]" v-if="blocks.length > 1">
              <button
                class="glide__bullet"
                :data-glide-dir="'=' + entry"
                v-for="(entry, index) in glidePaginate(blocks.length, 1)"
                :key="index"
              ></button>
            </div>
          </div>
        </div>
            <div class="arrows2" v-if="
                  blocks.length > 1
                ">
                  <section>
                    <div class="prev-btn btn-nav-testimonial" ref="prevArrow" @click="prevSlide">
                      <div class="icon icon-prev">
                        <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                      </div>
                    </div>
                    <div class="next-btn btn-nav-testimonial" ref="nextArrow" @click="nextSlide">
                      <div class="icon icon-next">
                        <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                      </div>
                    </div>
                  </section>
            </div>
      </template>

      <template v-if="getSectionValue(settings,'style_layout') === 'style3'"> 
        <div class="glide-cont" :class="'glide'+ _uid" ref="glide">
          <div data-glide-el="track" class="glide__track">
            <div class="glide__slides" :class="{ 'ssr-slides-box': !checkisBrowser() && !isMounted }">    
              <div class="glide__slide quotes-slider3" v-for="(block, i) in blocks" :key="i">
                <div v-if="getSectionValue(settings,'font_layout') === 'small'">
                  <div class="testimonial3">
                    <p class="test1 font-header">
                      {{ block.props && block.props.testimonialText.value
                      ? block.props.testimonialText.value
                      : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                      }}
                    </p>
                  </div>
                </div>
                <div v-if="getSectionValue(settings,'font_layout') === 'inter'">
                  <div class="testimonial3">
                    <p class="test2 font-header">
                      {{ block.props && block.props.testimonialText.value
                      ? block.props.testimonialText.value
                      : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                      }}
                    </p>
                  </div>
                </div>
                <div v-if="getSectionValue(settings,'font_layout') === 'large'">
                  <div class="testimonial3">
                    <p class="test3 font-header">
                      {{ block.props && block.props.testimonialText.value
                      ? block.props.testimonialText.value
                      : 'Add customer reviews and testimonials to showcase your store’s happy customers.'
                      }}
                    </p>
                  </div>
                </div>
                <div class="author-image3">
                  <emerge-image
                    v-if="block.props && block.props.author_image.value"
                    :src="block.props.author_image.value"
                  />
                </div>  
                  <cite>
                    <section>
                      <div class="font-body">{{ block.props && block.props.author_name.value ? block.props.author_name.value : "Author's name"}}</div>
                      <div class="font-body">{{ block.props && block.props.author_description.value ? block.props.author_description.value : "Author's Description" }}</div>
                    </section>
                  </cite>                
            </div>
          </div>
        </div>
        </div>
            <div class="arrows3" v-if="
                  blocks.length > 1
                ">
                  <section>
                    <div class="prev-btn btn-nav-testimonial" ref="prevArrow" @click="prevSlide">
                      <div class="icon icon-prev">
                        <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                      </div>
                    </div>
                    <div class="next-btn btn-nav-testimonial" ref="nextArrow" @click="nextSlide">
                      <div class="icon icon-next">
                        <svg-wrapper :svg_src="'nav-arrow'"></svg-wrapper>
                      </div>
                    </div>
                  </section>
                </div>
      </template>
  </div>
</template>
<!-- #region  -->
<settings>
{
    "name": "testimonials",
    "label": "Testimonial",
    "props": [
        {
          "id": "style_layout",
          "type": "select",
          "options": [
              {
                  "value": "style1",
                  "text": "style 1"
              },
              {
                  "value": "style2",
                  "text": "style 2"
              },
              {
                  "value": "style3",
                  "text": "style 3"
              }
          ],
          "default": "style1",
          "label": "Layout",
          "info": "Alignment of overlay content"
        },
        {
          "id": "mirror_layout",
          "type": "select",
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
          "label": "MIRROR Layout",
          "info": "Alignment of mirror content"
        },
        {
            "type": "checkbox",
            "id": "autoplay",
            "default": false,
            "label": "AutoPlay Slides"
        },
        {
            "type": "range",
            "id": "slide_interval",
            "min": 6,
            "max": 24,
            "step": 6,
            "unit": "sec",
            "label": "Change slides every",
            "default": 2
        },
        {
          "id": "font_layout",
          "type": "select",
          "options": [
              {
                  "value": "small",
                  "text": "small"
              },
              {
                  "value": "inter",
                  "text": "inter"
              },
              {
                  "value": "large",
                  "text": "large"
              }
          ],
          "default": "inter",
          "label": "Select font for review",
          "info": "Alignment of font content"
        }
    ],
    "blocks": [
        {
            "type": "testimonial",
            "name": "Testimonial",
            "props": [
                {
                  "type": "image_picker",
                  "id": "author_image",
                  "default": "",
                  "label": "Image"
                },
                {
                    "type": "textarea",
                    "id": "testimonialText",
                    "label": "Testimonial",
                    "default": "",
                    "info": "Text for testimonial",
                    "placeholder": "Text"
                },
                {
                    "type": "text",
                    "id": "author_name",
                    "label": "Author name"
                },
                {
                    "type": "text",
                    "id": "author_description",
                    "default": "",
                    "label": "Author Description"
                }               
            ]
        }
    ],
   "preset":{
    "blocks": [
      {
        "name": "Testimonial"
      },
      {
        "name": "Testimonial"
      },
      {
        "name": "Testimonial"
      }
    ]
  }

}
</settings>

<!-- #endregion -->
<style scoped lang="less">
.section-main {
  max-width: 1440px;
}
.testimonial-cont {
  padding: 40px 0 0 0;
  @media @tablet {
    padding: 32px 0 0 0;
  }
  @media @mobile {
    padding: 24px 0 0 0;
  }
  .fadeInUp {
  animation: fadeInUp 1s linear forwards;
  }
  @keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
  .ayu {
    width: 45%;
    @media @tablet {
      width: 100%;
    }
    @media @mobile {
      width: 100%;
    }
  }
  .glide__bullets {
    position: relative;
    z-index: 2;
    margin-top: 52px;
    bottom: 15px;
    left: 50%;
    align-items: center;
    list-style: none;
    transform: translateX(-53%);
    @media @mobile {
      margin-top: 20px; 
      display: none; 
    }
  }
  .glide__bullet {
    background-color: unset;
    border: 1px solid @color-black;
    box-shadow: unset;
    &:hover {
      background-color: @color-black;
    }
    &.glide__bullet--active {
      background-color: @color-black;
    }
  }
  .glide__bullet {
    background-color: lightgrey;
    width: 100%;
    height: 1%;
    padding: 0;
    border-radius: 0%;
    border: 2px solid transparent;
    transition: all .3s ease-in-out;
    cursor: pointer;
    line-height: 0;
    margin: 0 0;
  }

  .glide__slides.ssr-slides-box {
    touch-action: unset;
    overflow-x: auto;
    .glide__slide {
      margin-right: 30px;
      width: 100%;
      display: flex;
     
    }
  }
  .glide__slides {
    align-items: stretch;
    .glide__slide {
      height: auto;
      display: flex;
      flex-direction: column;
    }
  }
  
  .div2 {
    display: grid;
    grid-template-columns: auto 110px;
    padding: 1% 3%;
  }
    .arrows {
    display: flex;
    justify-content: center;
    top: 85%;
    width: 100%;
    section {
      display: flex;
      box-sizing: border-box;
    }
  }
  .arrows2 {
    display: flex;
    justify-content: flex-end;
    top: 85%;
    width: 100%;
    @media @mobile {
      display: none;
    }
    section {
      display: flex;
      padding: 0 60px;
      box-sizing: border-box;
      margin-top: -55px;
      @media @tablet {
        padding: 0px 30px;
        margin-top: -50px;
      }
    }
  }
  .arrows3 {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 55%;
    width: 100%;
    @media @mobile {
      top: 70%;
    }
    section {
        position: relative;
        width: 100%;
        margin: 0 auto;
        display: flex;
        padding: 0 90px 0 70px;
        box-sizing: border-box;
        @media @tablet {
          padding: 0 60px 0 70px;
        }
        @media @mobile {
          padding: 0 0px 0 0px;
        }
      }
  }
  
  .btn-nav-testimonial {
    z-index: @layer;
    background-color: transparent;
    padding: unset;
    cursor: pointer;
    width: 50px;
    display: flex;
    justify-content: center;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.04);
    }
  }
  .next-btn {
    margin-left: auto;
  }

  .icon {
    display: inline-block;
    width: 45px;
    height: 45px;
    background-size: cover;
  }
  .icon-next {
    transform: rotate(180deg);
  }

  .quotes-slider {
    font-style: normal;
    text-align: center;
    display: flex;
    flex-direction: row;
    &.mirror_layout-on {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      margin-top: 78px;
      margin-bottom: 43px;
      gap: 50px;
      @media @tablet {
        display: flex;
        flex-direction: column;
        margin-top: 0px;
        align-items: center;
      }
      @media @mobile {
        margin-left: 0px;
        margin-top: 0px;
      }
    }
    &.mirror_layout-off {
      display: flex;
      flex-direction: row;
      margin-top: 78px;
      margin-left: 72px;
      margin-bottom: 43px;
      justify-content: space-around;
      @media @tablet {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 0px;
        margin-left: 0px;
      }
      @media @mobile {
        margin-left: 0px;
      }
    }
    cite {
      font-weight: 400;
      section {
        font-stretch: normal;
        letter-spacing: -0.02em;
        color: @TextHeading;
        flex-direction: column;
        // font-family: "Inter";
        margin-top: 24px;
        @media @mobile {
          margin-left: -200px;
        }
        > :first-child {
          font-size: 16px;
          height: 22px;
          @media @tablet {
            font-size: 14px;
            height: 20px;
          }
          @media @mobile {
            font-size: 14px;
            height: 20px;
            line-height: 20px;
          }
        }
        > :nth-child(2) {
          font-size: 14px;
          height: 20px;
          color: @TextHeading;
          padding: 8px 0 0px 0;
          @media @tablet {
            font-size: 12px;
            height: 20px;
            padding: 4px 0 0 0;
          }
          @media @mobile {
            font-size: 12px;
            height: 20px;
            padding: 4px 0 0 0;
          }
        }
      }
    }
  }
  .quotes--slider {
    font-style: normal;
    text-align: center;
    display: flex;
    flex-direction: row;
    &.mirror_layout-on {
      display: flex;
      flex-direction: row-reverse;
      margin-top: 79px;
      @media @tablet {
        display: flex;
        margin: 79px 0px 0px 0px;
      }
      @media @mobile {
        display: flex;
        margin: -20px -200px 0 0px;
        position: absolute;
      }
    }
    &.mirror_layout-off {
      display: flex;
      flex-direction: row;
      margin-top: 64px;
      @media @tablet {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media @mobile {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: -50px;
      }
    }
    
  }
  .quotes-slider2 {
    font-style: normal;
    text-align: center;
    cite {
      font-weight: 400;
      section {
        font-stretch: normal;
        text-align: normal;
        letter-spacing: -0.02em;
        color: @TextHeading;
        flex-direction: column;
        // font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        @media @mobile {
          margin-top: 24px;
        }
        > :first-child {
          font-size: 16px;
          height: 22px;
          line-height: 22px;
          @media @mobile {
            font-size: 14px;
            height: 20px;
            line-height: 20px;
          }
        }
        > :nth-child(2) {
          height: 20px;
          padding: 4px 0 0 0;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          @media @mobile {
            font-size: 12px;
            padding: 4px 0 0 0;
          }
        }
      }
    }
  }
  .quotes-slider3 {
    font-style: normal;
    text-align: center;
    display: flex;
    flex-direction: column;
    cite {
      display: block;
      font-weight: 300;
      margin-top: 24px;
      margin-bottom: 40px;
      @media @tablet {
        margin-top: 20px;
        margin-bottom: 36px;
      }
      @media @mobile {
        margin-top: 20px;
        margin-bottom: 28px;
      }
      section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        >:first-child {
          width: 375.79px;
          height: 22px;
          // font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          letter-spacing: -0.02em;
          color: @TextHeading;
          @media @tablet {
            width: 242px;
            height: 20px;
            font-size: 14px;
            line-height: 20px;
          }
          @media @mobile {
            width: 187px;
            height: 20px;
            font-size: 14px;
            line-height: 20px;
          }
        }
        >:nth-child(2) {
          padding: 4px 0 0;
          width: 375.79px;
          height: 20px;
          // font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          letter-spacing: -0.02em;
          color: @TextHeading;
          @media @tablet {
            width: 242px;
            font-size: 12px;
          }
          @media @mobile {
            font-size: 12px;
            width: 187px;
            height: 20px;
          }
        }
      }
    }
  }
  .quotes-slider2 p {
    line-height: 28px;
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    @media @tablet {
      line-height: 28px;
      font-size: 25px;
    }
    @media @mobile {
      width: 100%;
    }
  }
  .quotes-slider3 p {
    line-height: 52px;
    font-size: 30px;
    font-weight: lighter;
    font-style: italic;
    padding: 0 80px;
    @media @tablet {
      line-height: 42px;
      font-size: 25px;
      padding: 0 20px;
    }
    @media @mobile {
      line-height: 36px;
      font-size: 16px;
    }
  }
  .author-image {
    align-items: center;
    width: 450px;
    height: 560px;
    /deep/ .fy__img {
      border-radius: 0px;
    }
  }
  .author-image2 {
    align-items: center;
    height: auto;
    aspect-ratio: 3/4;
    overflow: hidden;
    /deep/ .fy__img {
      border-radius: 0px;
    }
  }
  .author-image3 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: 64px 0px 0px;
    @media @tablet {
      margin: 72px 0px 0px;
    }
    @media @mobile {
      margin: 32px 0px 0px;
    }
    /deep/ .fy__img {
      border-radius: 50%;
      height: 72px;
      width: 72px;
      @media @mobile {
        height: 44px;
        width: 44px;
      }
    }
  }
  .quote-icon {
    display: flex;
    align-items: center;
    &.left {
      margin: 20px 0 0px 0;
      justify-content: flex-start;
    }
    &.right {
      margin: 0px 0 20px 0;
      justify-content: flex-end;
      img {
        transform: rotate(180deg);
      }
    }
  }
  .testimonial {
    height: auto;
    width: 100%;
    margin: 158px 0px 0px 0px;
    box-sizing: border-box;
    // font-family: 'Galvji';
    font-style: normal;
    font-weight: 400;
    text-align: center;
    letter-spacing: -0.03em;
    color: @TextHeading;

    &.mirror_layout-off {
      // margin: 54px 0px 0px 0px;
      @media @tablet {
        margin: 0px 0px 67px 0px;
      }
      @media @mobile {
        margin: 0 0 28px 0;
      }
    }
    @media @tablet {
      width: 100%;
      height: auto;
      margin: 54px 0px 0px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 78px;
    }
    @media @mobile {
      width: 100%;
      height: auto;
      margin: 0px 0 0 0px;
      padding: 0px 32px;
      letter-spacing: -0.03em;
      // font-family: 'Marcellus';
    }
    .test1 {
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      color: @TextHeading;
      @media @tablet {
        font-size: 28px;
        line-height: 44px;
      }
      @media @mobile {
        font-size: 16px;
        line-height: 28px;
      }
    }
    .test2 {
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      color: @TextHeading;
      @media @tablet {
        font-size: 32px;
        line-height: 48px;
      }
      @media @mobile {
        font-size: 18px;
        line-height: 32px;
      }
    }
    .test3 {
      font-size: 44px;
      line-height: 50px;
      text-align: center;
      color: @TextHeading;
      @media @tablet {
        font-size: 36px;
        line-height: 52px;
      }
      @media @mobile {
        font-size: 20px;
        line-height: 36px;
      }
    }
  }
  .testimonial2 {
    margin-top: 24px;
    box-sizing: border-box;
    @media @tablet {
      width: 100%;
      line-height: 10px;
    }
    @media @mobile {
      height: auto;    
    }
    .test1 {
      // font-family: 'Marcellus';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.03em;
      color: @TextHeading;
      height: 120px;
    }
    .test2 {
      // font-family: 'Marcellus';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      letter-spacing: -0.03em;
      color: @TextHeading;
    }
    .test3 {
      // font-family: 'Marcellus';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      letter-spacing: -0.03em;
      color: @TextHeading;
      height: 160px;
    }
  }
  .testimonial3 {
    height: auto;
    padding: 0 27px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    @media @tablet {
      padding: 0 80px;
    }
    @media @mobile {
      padding: 0px;
    }
    .test1 {
      // font-family: 'Marcellus';
      font-style: normal;
      color: @TextHeading;
      font-weight: 400;
      font-size: 30px;
      line-height: 44px;
      text-align: center;
      letter-spacing: -0.02em;
      @media @tablet {
        font-size: 26px;
        line-height: 40px;
      }
      @media @mobile {
        font-size: 24px;
        line-height: 30px;
      }
    }
    .test2 {
      // font-family: 'Marcellus';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 52px;
      text-align: center;
      color: @TextHeading;
      letter-spacing: -0.03em;
      @media @tablet {
        font-size: 36px;
        line-height: 48px;
      }
      @media @mobile {
        font-size: 28px;
        line-height: 35px;
      }
    }
    .test3 {
      // font-family: 'Marcellus';
      font-style: normal;
      font-weight: 400;
      font-size: 43px;
      line-height: 55px;
      text-align: center;
      color: @TextHeading;
      letter-spacing: -0.04em;
      @media @tablet {
        font-size: 38px;
        line-height: 50px;
      }
      @media @mobile {
        font-size: 30px;
        line-height: 38px;
      }
    }
  }
  .outer-wrapper {
  display: flex;
  }
  .front-image-wrapper {
    margin-left: 20px;
    position: absolute;
    z-index: 1;
    @media @mobile {
      margin-left: 42px;
    }
  }
  #image-front {
    width: 468px;
    height: 624px;
    display: block;
    z-index: 99;
    @media @tablet {
      width: 445px;
      height: 593px;
    }
    @media @mobile {
      width: 228px;
      height: 304px;
    }
  }
  #image-left {
    width: 415px;
    height: 553px;
    margin-left: 101px;
    animation: left 1s linear 1.5s forwards;
    @media @tablet {
      width: 394px;
      height: 525px;
    }
    @media @mobile {
      width: 202px;
      height: 258px;
    }
  }
  @keyframes left {
    to {
      transform-origin: bottom left;
      transform: rotate(-4.09deg);
      z-index: -1;
      margin-left: 78px;
    }
  }
  .image-leftR {
    animation: left_R 0.3s linear forwards;
  }
  @keyframes left_R {
    from {
      transform-origin: bottom left;
      transform: rotate(-4.09deg);
      z-index: -2;
    }
    to {
      z-index: 0;
      transform: rotate(0deg);
      width: 468px;
      height: 624px;
    }
  }
  @media @tablet{
    @keyframes left_R {
      from {
      transform-origin: bottom left;
      transform: rotate(-4.09deg);
      z-index: -2;
    }
    to {
      z-index: 0;
      transform: rotate(0deg);
      width: 445px;
      height: 593px;
      }
    }
  }
  @media @mobile{
    @keyframes left_R {
      from {
      transform-origin: bottom left;
      transform: rotate(-4.09deg);
      z-index: -2;
    }
    to {
      z-index: 0;
      transform: rotate(0deg);
      width: 228px;
      height: 304px;
      }
    }
  }
  
  #image-right {
    width: 415px;
    height: 553px;
    left: 154px;
    position: absolute;
    animation: right 1s linear 1.5s forwards;
    @media @tablet {
      width: 394px;
      height: 525px;
    }
    @media @mobile {
      width: 202px;
      height: 258px;
      margin-left: -63px;
    }
  }
  @keyframes right {
    to {
      transform-origin: bottom right;
      transform: rotate(4.09deg);
      left: 175px;
    }
  }
  .image-rightR {
    animation: rR 0.3s linear forwards;
  }
  @keyframes rR {
    from {
      transform-origin: bottom right;
      transform: rotate(4.09deg);
      z-index: -1;
    }
    to {
      z-index: 0;
      transform: rotate(0deg);
      width: 468px;
      height: 624px;
    }
  }
  @media @tablet{
    @keyframes rR {
      from {
      transform-origin: bottom right;
      transform: rotate(4.09deg);
      z-index: -2;
    }
    to {
      z-index: 0;
      transform: rotate(0deg);
      width: 445px;
      height: 593px;
      }
    }
  }
  @media @mobile{
    @keyframes rR {
      from {
      transform-origin: bottom right;
      transform: rotate(4.09deg);
      z-index: -1;
    }
    to {
      z-index: 0;
      transform: rotate(0deg);
      width: 228px;
      height: 304px;
    }
    }
  }
  
  .back-image-wrapper {
    margin-top: 50px;
    display: inline-flex;
    align-items: center;
    transform: translateX(-83px);
    @media @mobile {
      margin-top: 30px;
      transform: translateX(-70px);
      margin-left: 30px;
    }
  }
  .filled {
    background-color: #FFF;
  }
}

</style>
<script>
import { isBrowser, isNode } from "browser-or-node";
import { detectMobileWidth, glidePaginate } from "../helper/utils";
import Glide from "@glidejs/glide";
import emergeImage from "./../global/components/common/emerge-image.vue";
import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";
import SvgWrapper from "../components/common/svg-wrapper.vue";
import { getSectionValue } from "../helper/utils";


export default {
  props: ["settings"],
  data: function() {
    return {
      images:[],
      n: 0,
      leftIndex: 0,
      frontIndex: 0,
      rightIndex: 0,
      isMounted: false,
      glideOptions: {
        type: "carousel",
        startAt: 0,
        gap: 24,
        perView: 1
      },
      carouselHandle: null,     
    };
  },
  components: {
    "emerge-image": emergeImage,
    "SvgWrapper": SvgWrapper,
  },
  watch: {
    settings: function(newVal, oldVal) {
      this.cleanupComponent();
      this.initializeComponent();
    }
  },
  computed: {
    blocks() {
      return this.settings.blocks.length === 0
        ? this.settings.preset.blocks
        : this.settings.blocks;
    },
  },
  beforeMount() {
    if(this.getSectionValue(this.settings,'style_layout') ==='style1') {
      this.glideOptions.breakpoints= {
          1024: { 
            perView: 1
          },
          768: {
            perView: 1
          },
          480: {
            perView: 1
          }
        }
      }
    if(this.getSectionValue(this.settings,'style_layout') ==='style2') {
      this.glideOptions.breakpoints= {
          1920: { 
            perView: 3.40
          },
          768: {
            perView: 1.85
          },
          480: {
            perView: 1.25
          }
        }
      }
    if(this.getSectionValue(this.settings,'style_layout') ==='style3') {
      this.glideOptions.breakpoints= {
          1024: { 
            perView: 1
          }        
        }
      }
   },  
   mounted() {
    this.initializeComponent(); 
    this.ayush();
    this.n = this.images.length - 1;
    this.leftIndex = this.n;
    this.frontIndex = 0;
    this.rightIndex = this.frontIndex + 1;
    document.getElementById("image-left").src = this.images[this.leftIndex];
    document.getElementById("image-front").src = this.images[this.frontIndex];
    document.getElementById("image-right").src = this.images[this.rightIndex];
    },
   methods: {
    ayush: function() {
      for(let i=0; i<this.settings.blocks.length; i++)  {
        this.images.push(this.settings.blocks[i].props.author_image.value)
      }
    },
    slideLeft: function () {     
      let element = document.getElementById('image-front');
      setTimeout(() => {
        element.classList.add('image-leftR');
        console.log("ghjhhhhssssssssssssssssssssssssssssss",element);
        console.log("ghjhhhhssssssssssssssssssssssssssssss", element.style);

        if (this.frontIndex === 0) {
          this.frontIndex = this.n;
        } else {
          //else subtract 1 to index to 'rotate carousel'
          this.frontIndex -= 1;
        }
        this.rotateImage();
        setTimeout(() => {
          element.classList.remove("image-leftR");
        }, 1000);
      }, 500);
    },
      slideRight: function () {
      let element = document.getElementById("image-front");
      setTimeout(() => {
        element.classList.add('image-rightR');
        if (this.frontIndex === this.n) {
          this.frontIndex = 0;
        } else {
          this.frontIndex += 1;
        }     
        this.rotateImage();     
        setTimeout(() => {
          element.classList.remove('image-rightR');
        }, 1000);
      }, 500);
    },
    rotateImage: function () {
      if (this.frontIndex == 0) {
        this.leftIndex = this.n;
        this.rightIndex = 1;
      } else if (this.frontIndex == this.n) {
        this.leftIndex = this.n - 1;
        this.rightIndex = 0;
      } else {
        this.leftIndex = this.frontIndex - 1;
        this.rightIndex = this.frontIndex + 1;
      }
      
      document.getElementById("image-left").src = this.images[this.leftIndex];
      document.getElementById("image-front").src = this.images[this.frontIndex];
      document.getElementById("image-right").src = this.images[this.rightIndex];
    },

    getSectionValue,
    
    checkisBrowser() {
      return isBrowser;
    },
    glidePaginate,
    prevSlide() {
      this.carouselHandle.go(`<`);
      this.slideLeft();
    },
    nextSlide() {
      this.carouselHandle.go(`>`);
      this.slideRight();  
    },
    initCarousel() {
      if (isNode || this.carouselHandle) {
        return;
      }
      if (!this.$refs.glide) {
        setTimeout(() => {
          this.initCarousel();
        }, 1000);
        return;
      }
      // waiting for data to render, hence nextTick
      this.$nextTick(() => {
        try {
          this.carouselHandle = new Glide(this.$refs.glide, this.glideOptions);
          this.carouselHandle.mount();
        } catch (ex) {
        }
      });
    },
    initializeComponent() {
      this.isMounted = true;
      if (this.settings.props.autoplay.value && this.blocks.length > 1) {
        this.glideOptions.autoplay =
          this.settings.props.slide_interval.value * 1000;
      } else {
        this.glideOptions.autoplay = false;
      }
      this.initCarousel();
    },
    cleanupComponent() {
      if (isBrowser && this.carouselHandle) {
        this.carouselHandle.destroy();
        this.carouselHandle = null;
      }
    }
  },
  beforeDestroy() {
    this.cleanupComponent();
  }
};
</script>
