<template>
  <div class="page-banner mt-72" :class="{'bg': !video}" :style="[!video ? `background-image:url(${this.backgroundUrl})` : '']">
        <div class="container-fluid banner">
            <h1 class="h1">{{title}}</h1>
            <p class="sub-head">{{subTitle}}</p>
            <div class="p_row1">
                <div class="p_col1">
                    <a :href="linkUrl" class="arrow_link green w-inline-block">
                        <div class="arr-link_row">
                            <div class="link-text">{{linkText}}</div>
                            <div class="link-ic-block">
                                <img src="../../assets/images/arr-card-ini.svg" loading="lazy" alt="" class="link-ic in" :class="{'arrow-down': isdownArrow}">
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-video-first" v-if="video">
            <video autoplay loop :style="`background-image:url(${this.backgroundUrl})`" muted playsinline data-wf-ignore="true" data-object-fit="cover">
                <source src="../../assets/videos/abstract-white-cubes.mp4" data-wf-ignore="true">
                <source src="../../assets/videos/abstract-white-cubes.webm" data-wf-ignore="true">
            </video>
        </div>
  </div>
</template>

<script>
import servicePoster from '../../assets/images/services_poster.jpg';
export default {
  props: {
      video: Boolean,
      title: String,
      subTitle: String,
      linkText: String,
      linkUrl: String,
      isdownArrow: Boolean
  },
  data() {
    return {
      backgroundUrl: servicePoster
    }
  }
}
</script>

<style lang="scss">
    .page-banner {
        position: relative;
        padding-top: 0px;
        padding-bottom: 0px;
        .banner {
            display: flex;
            min-height: 700px;
            padding-top: 90px;
            padding-bottom: 58px;
            flex-direction: column;
            justify-content: flex-end;

            .p_row1 {
                display: flex;
                align-items: flex-start;

                .p_col1 {
                    flex: 1;
                }
            }
        }

        .bg-video-first {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;

            @media screen and (min-width: 1440px) {
                border: 1px none #000;
            }

            video {
                background-size: cover;
                background-position: 50% 50%;
                position: absolute;
                margin: auto;
                width: 100%;
                height: 100%;
                right: -100%;
                bottom: -100%;
                top: -100%;
                left: -100%;
                object-fit: cover;
                z-index: -100;
            }
        }

        &.bg {
            padding-top: 0px;
            padding-bottom: 0px;
            background-position: 50% 50%;
            background-size: cover;
            background-repeat: no-repeat;
        }

        .arrow-down {
            transform: rotate(90deg);
        }
    }
</style>