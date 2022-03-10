<template>
  <div class="section header-banner p_1s">
    <div class="container-fluid p_1s">
      <div class="header-wrap-2">
        <h1 class="h1-wr-2">
          <span class="h1-l-2">Architects of&nbsp;modern</span>
          <span class="h1-r-2">financial solutions</span>
        </h1>
      </div>
    </div>
    <div class="bg-video-first w-background-video w-background-video-atom">
      <video autoplay="" loop="" :style="`background-image:url(${this.backgroundUrl})`" muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover">
        <source src="../../assets/videos/Main_4-transcode.mp4">
        <source src="../../assets/videos/Main_4-transcode.webm">
      </video>
    </div>
  </div>
</template>

<script>
import bgImg from '../../assets/images/Main_poster.jpg';
export default {
  data() {
    return {
      backgroundUrl: bgImg
    }
  }
};
</script>

<style lang="scss">
.header-banner {
  margin-top: -4.5rem;

  &.p_1s {
    position: relative;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .container-fluid {
    &.p_1s {
      display: flex;
      min-height: 700px;
      padding-top: 90px;
      padding-bottom: 58px;
      flex-direction: column;
      justify-content: flex-end;

      @media screen and (max-width: 991px) {
        min-height: 800px;
      }

      @media screen and (max-width: 767px) {
        min-height: 568px;
        padding-bottom: 40px;
      }
    }
  }
  .header-wrap-2 {
    position: relative;
    z-index: 2;
    display: flex;
    padding: 0px;
    justify-content: center;
    align-items: center;
    flex: 1;

    .h1-wr-2 {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      font-size: 7.5vw;
      line-height: 120%;
      font-weight: 400;

      @media screen and (max-width: 767px) {
        font-size: 50px;
      }

      .h1-r-2 {
        align-self: flex-end;
      }
    }
  }

  .w-background-video {
    position: relative;
    overflow: hidden;
    height: 500px;
    color: white;
  }

  .bg-video-first {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 1440px) {
      border: 1px none #000;
    }

    &>video {
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
}
</style>