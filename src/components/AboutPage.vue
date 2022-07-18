<template>
  <div class="wrapper-about">
    <b-container>
      <b-row>
        <b-col cols="12" lg="6">
          <h1 class="titles about-title"> {{ TEXTS_JSON[idiom].about_title }} </h1>

          <ContactButton class="mt-5"/>
        </b-col>

        <b-col class="mt-5 mt-lg-0 d-flex align-items-center justify-content-center flex-column" cols="12" lg="6">
          <p class="texts"> {{ TEXTS_JSON[idiom].about_first_text }} </p>
          <p class="texts"> {{ TEXTS_JSON[idiom].about_second_text }} </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TEXTS_JSON from "../static/texts/about.json"
import Store from './StoreMixins.vue'
import ContactButton from './ContactButton.vue'
export default {
  mixins: [Store],
  components: {
    ContactButton
  },
  data: () => ({
    TEXTS_JSON: TEXTS_JSON,
    idiom: "br"
  }),
  mounted() {
    console.log(this.$store)
  }
};
</script>

<style scoped lang="scss">
@import '../static/sass.scss';

.wrapper-about {
  width: 100%;
}

.about-img {
    display: block;
    margin: auto;

    width: 280px;

    @include lg {
        width: 260px;
    }
}

.about-title {
  line-height: 2;
}
</style>