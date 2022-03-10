<template>
  <div class="services">
      <div class="container">
          <div class="p_row2">
              <div class="p_col2 _1">
                  <h2 class="h2">services</h2>
              </div>
              <div class="p_col2 _2">
                  <div class="p_row3">
                      <div class="p_col3" v-for="(number, index) in numbers" :key="index">
                          <a class="prod-card">
                              <div class="pc-block">
                                    <h4 class="h4 fix-h">Test Title & Design</h4>
                                    <div class="v_col mt-3">
                                        <div class="pc-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </div>
                                    </div>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const numbers = ref([1, 2, 3, 4, 5, 6]);
        return {
            numbers
        }
    }
}
</script>

<style lang="scss">
    .services {
        padding-top: 90px;
        padding-bottom: 162px;

        .prod-card {
            position: relative;
            display: flex;
            overflow: hidden;
            flex-direction: column;
            align-self: stretch;
            flex: 1;
            border-radius: 6px;
            box-shadow: inset 0 0 0 2px #e9e8e8;
            color: #0f1010;
            text-decoration: none;

            .pc-block {
                position: relative;
                z-index: 3;
                display: flex;
                padding: 85px 24px 36px;
                flex-direction: column;
                align-items: flex-start;
                align-self: stretch;
                flex: 1 0 420px;

                .h4.fix-h {
                    height: 2.8em;

                    @media screen and (min-width: 1440px) {
                        height: 60px;
                    }
                }

                .pc-text {
                    opacity: 0.6;
                    text-align: left;
                }
            }
        }
    }
</style>