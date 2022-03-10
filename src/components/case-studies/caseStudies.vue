<template>
  <div class="case-studies">
      <div class="container">
          <div class="row">
              <div class="cta-wrap">
                  <div>
                    <h3 class="h3-card white">Get access to our variety of international case studies</h3>
                    <a href="/success-stories" class="btn">Show all cases</a>
                  </div>
              </div>
              <div class="img-wrapper">
                <img src="../../assets/images/triang.png" height="316" width="1100" alt="" class="mbm-overlay">
                <img src="../../assets/images/g3.png" height="316" alt="" class="g3">
                <img src="../../assets/images/g2.png" height="316" alt="" class="g2">
                <img src="../../assets/images/g1.png" height="316" alt="" class="g1">
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.case-studies {
    position: relative;
    overflow: hidden;
    height: 316px;
    padding-top: 70px;
    padding-bottom: 93px;
    background-color: #161a2a;

    .cta-wrap {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .h3-card {
            margin-top: 0;
            margin-bottom: 2.1vw;
            font-size: 2.9vw;
            line-height: 1.2em;
            font-weight: 300;

            @media screen and (min-width: 1440px) {
                margin-bottom: 33px;
                font-size: 44px;
                line-height: 131%;
            }

            &.white {
                max-width: 43.4vw;
                color: #f8fbfc;
                line-height: 101%;
            }
        }
    }

    .img-wrapper {
        position: absolute;
        left: -465px;
        top: 0%;
        right: auto;
        bottom: 0%;
        width: 1100px;

        .mbm-overlay {
            opacity: 0.14;
        }
        .g1 {
            position: absolute;
            left: auto;
            top: 23px;
            right: -9px;
            bottom: 0%;
            -webkit-animation: fadeInFromNone 5s ease-in-out;
            animation: fadeInFromNone 5s ease-in-out;
            animation-iteration-count: infinite;
            will-change: opacity;
        }

        .g2 {
            position: absolute;
            left: auto;
            top: auto;
            right: 160px;
            bottom: 0%;
            -webkit-animation: fadeInFromNone 5s ease-in-out;
            animation: fadeInFromNone 5s ease-in-out;
            animation-iteration-count: infinite;
            animation-delay: 5s;
            will-change: opacity;
        }

        .g3 {
            position: absolute;
            left: auto;
            top: auto;
            right: 387px;
            bottom: 0%;
            -webkit-animation: fadeInFromNone 5s ease-in-out;
            animation: fadeInFromNone 5s ease-in-out;
            animation-iteration-count: infinite;
            animation-delay: 10s;
            will-change: opacity;
        }
    }

    @-webkit-keyframes fadeInFromNone {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes fadeInFromNone {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
}
</style>