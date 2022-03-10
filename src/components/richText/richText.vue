<template>
  <div class="rich-text">
        <div class="container">
            <div class="p_row2">
                <div class="p_col2 _1">
                    <h2 class="h2">{{title}}</h2>
                </div>
                <div class="p_col2 _2">
                    <div class="case-about mb64 w-richtext">
                        <p class="text-black-50">{{subTitle}}</p>
                        <h4 class="mb-5" v-if="h4Heading">{{h4Heading}}</h4>
                        <div v-if="requestDemoText">
                            <a href="#" class="btn">{{requestDemoText}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
      title: String,
      subTitle: String,
      h4Heading: String,
      requestDemoText: String,
      requestDemoUrl: String
  },
}
</script>

<style lang="scss">
.rich-text {
    padding-top: 90px;
    padding-bottom: 162px;

    .case-about {
        color: #000;
        font-size: 18px;
        line-height: 29px;
        text-align: justify;
    }
}
</style>