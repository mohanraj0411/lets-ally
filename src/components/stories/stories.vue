<template>
  <div class="stories">
      <div class="container">
          <div class="row">
                <div class="_2s-menu-2 left">
                    <h2 class="h2">Success stories</h2>
                    <h4 class="h41">Take a look at these institutions all over the world and how we had helped them solve their unique challenges</h4>
                </div>
                <div class="right-b">
                    <a href="/success-stories" class="linebtn-2">Show all stories</a>
                </div>
                <div class="div-block-2">
                    <div class="cases-row" role="list">
                        <div class="it_case" role="listitem" :class="{'w_full': true}">
                            <div class="story-col pd20">
                                <div class="story-card">
                                    <div class="tag-code _2">
                                        <div class="multi-ref-target-btn">
                                            <div class="collection-item-2">
                                                <a href="/payments/rts-x" class="nw-tag pr" style="background-color:#456dfb">RTS/X</a>
                                            </div>
                                            <div class="collection-item-2">
                                                <a href="/depository/depo-x" class="nw-tag pr" style="background-color:#8250f5">DEPO/X</a>
                                            </div>
                                        </div>
                                        <div class="text-of-tags-list">rts/x, depo/x</div>
                                    </div>
                                    <div :style="`background-image:url(${this.backgroundUrl})`" class="img-bg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="it_case" role="listitem">
                            <div class="story-col pd20">
                                <div class="story-card">
                                    <div class="tag-code _2">
                                        <div class="multi-ref-target-btn">
                                            <div class="collection-item-2">
                                                <a href="/payments/rts-x" class="nw-tag pr" style="background-color:#456dfb">RTS/X</a>
                                            </div>
                                            <div class="collection-item-2">
                                                <a href="/depository/depo-x" class="nw-tag pr" style="background-color:#8250f5">DEPO/X</a>
                                            </div>
                                        </div>
                                        <div class="text-of-tags-list">rts/x, depo/x</div>
                                    </div>
                                    <div :style="`background-image:url(${this.backgroundUrl})`" class="img-bg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="it_case" role="listitem">
                            <div class="story-col pd20">
                                <div class="story-card">
                                    <div class="tag-code _2">
                                        <div class="multi-ref-target-btn">
                                            <div class="collection-item-2">
                                                <a href="/payments/rts-x" class="nw-tag pr" style="background-color:#456dfb">RTS/X</a>
                                            </div>
                                            <div class="collection-item-2">
                                                <a href="/depository/depo-x" class="nw-tag pr" style="background-color:#8250f5">DEPO/X</a>
                                            </div>
                                        </div>
                                        <div class="text-of-tags-list">rts/x, depo/x</div>
                                    </div>
                                    <div :style="`background-image:url(${this.backgroundUrl})`" class="img-bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import bgIndia from "../../assets/images/Case_India_g.png";

export default {
  data() {
    return {
      backgroundUrl: bgIndia,
    };
  },
};
</script>

<style lang="scss">
    .stories {
        padding-bottom: 160px;
        padding-top: 68px;

        ._2s-menu-2 {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            &.left {
                justify-content: flex-start;
                align-items: flex-start;

                @media screen and (max-width: 767px) {
                    flex-direction: column;
                    justify-content: space-between;
                }

                .h41 {
                    max-width: 650px;
                    margin-left: 140px;
                    font-size: 32px;
                    line-height: 38px;

                    @media screen and (max-width: 767px) {
                        max-width: 350px;
                        margin-left: 0px;
                        font-size: 24px;
                        line-height: 131%;
                    }
                }
            }
        }

        .right-b {
            display: flex;
            padding-top: 82px;
            justify-content: flex-end;
        }

        .div-block-2 {
            margin-top: 100px;

            .cases-row {
                display: flex;
                margin-right: -20px;
                flex-wrap: wrap;

                .it_case {
                    width: 50%;

                    &.w_full {
                        width: 100%;
                    }

                    .story-col {
                        position: relative;
                        padding-right: 20px;

                        &.pd20 {
                            padding-bottom: 20px;
                        }

                        .story-card {
                            position: relative;
                            display: flex;
                            overflow: hidden;
                            height: 450px;
                            border-radius: 6px;
                            background-color: #f3f5f4;
                            color: #0f1010;
                            text-decoration: none;

                            .tag-code {
                                position: absolute;
                                left: 0%;
                                top: 0%;
                                right: auto;
                                bottom: auto;
                                z-index: 10;

                                &._2 {
                                    left: 24px;
                                    top: 24px;
                                }

                                .multi-ref-target-btn {
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: flex-start;
                                    flex-wrap: wrap;
                                    align-items: stretch;

                                    .collection-item-2 {
                                        position: relative;
                                        display: flex;
                                        padding-right: 10px;
                                        align-items: center;
                                        flex: 0 0 auto;

                                        .nw-tag {
                                            display: inline-block;
                                            padding: 8px 15px;
                                            align-self: flex-start;
                                            border-radius: 100px;
                                            color: #fff;
                                            font-size: 14px;
                                            line-height: 120%;
                                            font-weight: 400;
                                            letter-spacing: 0.01em;
                                            text-decoration: none;
                                            text-transform: uppercase;

                                            &.pr {
                                                display: inline-block;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>