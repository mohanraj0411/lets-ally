<template>
  <div class="hor-sect">
    <div class="hsw">
      <div class="container">
        <div class="row">
          <div class="section-title">
            <h2 class="h2 mb-0">Our AREAS&nbsp;of EXPERTISE</h2>
          </div>
          <div class="hsc">
            <div class="hs-card" v-for="(number, index) in numbers" :key="index">
              <div class="preview-project__visual-part">
                <div class="vb">
                  <video class="video mtz-vlc-adahe" preload="yes" muted="" loop="" draggable="false" width="650" height="510" autoplay>
                    <source src="https://assets.website-files.com/602bc7bd0ab4b95850180bc4/6033d847f19e5f27b47429d3_card 1_2-transcode.mp4" type="video/mp4">
                    <source src="https://assets.website-files.com/602bc7bd0ab4b95850180bc4/6033d847f19e5f27b47429d3_card 1_2-transcode.webm" type="video/webm">
                  </video>
                </div>
                <a href="#" class="preview-project__href">
                  <h3 class="h3-card _488">Integration &amp;<br>Processing</h3>
                  <div class="_62ar">
                    <div class="w-embed">
                      <svg width="100%" height="100%" fill="currentColor" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0-613128)">
                          <path d="M5.488 31.66C2.088 28.124 0.387999 23.772 0.387999 18.604C0.387999 13.436 2.088 9.084 5.488 5.548C8.922 2.012 13.376 0.243998 18.85 0.243999C24.324 0.243999 28.761 2.012 32.161 5.548C35.595 9.084 37.312 13.436 37.312 18.604C37.312 23.772 35.595 28.124 32.161 31.66C28.761 35.196 24.324 36.964 18.85 36.964C13.376 36.964 8.922 35.196 5.488 31.66ZM17.677 9.067L17.677 24.418L10.231 17.074L10.231 20.593L18.85 28.804L27.52 20.593L27.52 17.074L20.074 24.367L20.074 9.067L17.677 9.067Z"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0-613128">
                            <rect width="38" height="38" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <img src="../../assets/images/Commercial-banks-img.png" class="img-ovrl" :style="`background-image:url(${this.backgroundUrl})`" alt="image title">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import bgImg from '../../assets/images/Commercial-banks-img.png';
export default {
  name: 'horizontalCarousel',
  setup() {
    const numbers = ref([1, 2, 3, 4]);
    return {
      numbers
    }
  },
  data() {
    return {
      backgroundUrl: bgImg
    }
  }
}
</script>

<style lang="scss">
.hor-sect {
  position: relative;
  height: 200vh;
  padding-top: 120px;
  padding-bottom: 68px;

  .hsw {
    position: sticky;
    top: 15vh;
    overflow: hidden;
    width: 100%;

    .section-title {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .hsc {
      display: flex;
      padding-top: 68px;

      @media screen and (min-width: 993px) {
        width: 2680px;
      }

      @media screen and (max-width: 992px) {
        
      }

      .hs-card {
        position: relative;
        display: inline-block;
        width: 650px;
        height: 510px;
        max-height: 510px;
        max-width: 650px;
        min-height: 510px;
        min-width: 650px;
        margin-right: 20px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 6px;
        background-color: transparent;

        .img-ovrl {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          width: 650px;
          height: 510px;
          background-color: #eaf4f6;
          background-position: 0 100%;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .preview-project__visual-part {
          height: 100%;

          .vb {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }

          .preview-project__href {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            display: flex;
            padding: 30px;
            flex-direction: column;
            justify-content: space-between;
            color: #0f1010;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>