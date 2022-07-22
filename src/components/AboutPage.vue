<template>
  <div class="wrapper-about">
    <b-container>
      <b-row>
        <b-col cols="12" lg="6">
          <h1 class="titles about-title"> {{ TEXTS.about_title[lang] }} </h1>

          <ContactButton class="mt-5"/>
        </b-col>

        <b-col class="mt-5 mt-lg-0 d-flex align-items-center justify-content-center flex-column" cols="12" lg="6">
          <p class="texts"> {{ TEXTS.about_first_text[lang] }} </p>
          <p class="texts"> {{ TEXTS.about_second_text[lang] }} </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TEXTS from '../static/texts/about.json'
import ContactButton from './ContactButton.vue'
import StoreMixin from './StoreMixin'
export default {
  name: "AboutUs",
  mixins: [StoreMixin],
  components: {
    ContactButton
  },
  data: () => ({
    TEXTS: TEXTS
  }),
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