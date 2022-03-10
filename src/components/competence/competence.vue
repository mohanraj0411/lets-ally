<template>
  <div class="competence">
      <div class="container">
          <div class="p_row2">
              <div class="p_col2 _1"></div>
              <div class="p_col2 _2">
                    <div class="w-75">
                        <h2 class="mb-3">Competence</h2>
                        <p class="text-black-50 mb-5">Lets Ally develops solutions tailored solutions based on its own innovative technology.</p>
                    </div>
                    <div class="serv-logos-row wrap" v-for="(number, index) in numbers" :key="index">
                        <div class="serv-logos-col _2">
                            <div class="logo-block">
                                <img src="../../assets/images/ISO9001-BW.png" loading="lazy" width="233" alt="" class="serv-logo">
                            </div>
                        </div>
                        <div class="serv-logos-col _2"></div>
                        <div class="serv-logos-col _2">
                            <div class="logo-block">
                                <img src="../../assets/images/ISO9001-BW.png" loading="lazy" width="233" alt="" class="serv-logo">
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn">contact us</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const numbers = ref([1, 2]);
        return {
            numbers
        }
    }
}
</script>

<style lang="scss">
    .competence {
        padding-top: 60px;
        padding-bottom: 145px;
        background-color: #f8fbfc;

        .serv-logos-row {
            display: flex;
            max-width: 914px;
            margin-top: 48px;
            margin-right: -60px;
            margin-bottom: 15px;
            justify-content: space-between;
            align-items: center;
            &.wrap {
                margin-bottom: 87px;
                flex-wrap: wrap;
            }

            .serv-logos-col {
                max-width: 33.3%;
                padding-right: 60px;
                padding-bottom: 53px;
                &._2 {
                    display: block;
                    width: 33.3%;
                    padding-right: 0px;
                    padding-bottom: 23px;
                    grid-auto-columns: 1fr;
                    grid-template-columns: 1fr 1fr;
                    grid-template-rows: auto auto;
                    text-align: center;

                    .logo-block {
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }
    }
</style>