<template>
  <div class="experience">
    <div class="container">
      <div class="row">
        <h2 class="h2">with 30+ years of experience<br>we build systems to last<br></h2>
        <div class="_3-feat-wrap">
          <div class="_3-feat-col" v-for="(number, index) in numbers" :key="index">
            <div class="w-embed">
              <svg xmlns="http://www.w3.org/2000/svg" width="149" height="107" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2a1 1 0 00-1 1v101a1 1 0 001 1h143a1 1 0 001-1V3a1 1 0 00-1-1H3zM0 3a3 3 0 013-3h143a3 3 0 013 3v101a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm7 7a3 3 0 013-3h50a3 3 0 013 3v53a3 3 0 01-3 3H10a3 3 0 01-3-3V10zm3-1a1 1 0 00-1 1v53a1 1 0 001 1h50a1 1 0 001-1V10a1 1 0 00-1-1H10zm58 1a3 3 0 013-3h68a3 3 0 013 3v87a3 3 0 01-3 3H71a3 3 0 01-3-3V10zm3-1a1 1 0 00-1 1v87a1 1 0 001 1h68a1 1 0 001-1V10a1 1 0 00-1-1H71zm-35.224 7a1 1 0 011 1v6H44.9a1 1 0 110 2h-8.124v9.375H42.9a3 3 0 013 3v7.375a3 3 0 01-3 3h-6.124v6a1 1 0 01-2 0v-6H26a1 1 0 110-2h8.776v-9.375H28a3 3 0 01-3-3V26a3 3 0 013-3h6.776v-6a1 1 0 011-1zm-1 9H28a1 1 0 00-1 1v7.375a1 1 0 001 1h6.776V25zm2 11.375v9.375H42.9a1 1 0 001-1v-7.375a1 1 0 00-1-1h-6.124zM85 20a1 1 0 011 1v25.03a8.29 8.29 0 010 16.518V89a1 1 0 11-2 0V62.479a8.291 8.291 0 010-16.38V21a1 1 0 011-1zm20 0a1 1 0 011 1v43.03a8.29 8.29 0 010 16.519V89a1 1 0 01-2 0v-8.521a8.291 8.291 0 010-16.38V21a1 1 0 011-1zm20 0a1 1 0 011 1v6.03a8.29 8.29 0 010 16.518V89a1 1 0 01-2 0V43.479a8.291 8.291 0 010-16.38V21a1 1 0 011-1zm.289 9a6.29 6.29 0 00-.25 12.574l-.039.999.039-1a6.29 6.29 0 10.25-12.574zm-40 19c-.084 0-.167.002-.25.005l-.039-1 .039 1a6.29 6.29 0 000 12.569l-.039.999.039-1A6.29 6.29 0 1085.289 48zm20 18a6.29 6.29 0 100 12.579 6.29 6.29 0 000-12.579zM7 74a3 3 0 013-3h50a3 3 0 013 3v6a3 3 0 01-3 3H10a3 3 0 01-3-3v-6zm3-1a1 1 0 00-1 1v6a1 1 0 001 1h50a1 1 0 001-1v-6a1 1 0 00-1-1H10zM7 91a3 3 0 013-3h50a3 3 0 013 3v6a3 3 0 01-3 3H10a3 3 0 01-3-3v-6zm3-1a1 1 0 00-1 1v6a1 1 0 001 1h50a1 1 0 001-1v-6a1 1 0 00-1-1H10z" fill="#0F1010"></path></svg>
            </div>
            <h3>Flexible</h3>
            <div class="_6opac">We create and adapt modular solutions to very specific market needs</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'experience',
  setup() {
    const numbers = ref([1, 2, 3]);
    return {
      numbers
    }
  }
}
</script>

<style lang="scss">
  .experience {
    padding-top: 53px;
    padding-bottom: 120px;

    ._3-feat-wrap {
      display: flex;
      padding-top: 130px;
      justify-content: flex-end;

      @media screen and (max-width: 991px) {
        display: grid;
        padding-top: 82px;
        grid-auto-columns: 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 60px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
      }

      @media screen and (max-width: 767px) {
        padding-top: 46px;
        grid-row-gap: 48px;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
      }

      ._3-feat-col {
        max-width: 21.1vw;
        margin-left: 1.4vw;

        @media screen and (max-width: 991px) {
          max-width: none;
          margin-left: 0px;
        }
      }
    }
  }
</style>