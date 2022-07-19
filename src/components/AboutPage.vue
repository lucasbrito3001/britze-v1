<template>
  <div class="wrapper-about">
    <b-container>
      <b-row>
        <b-col cols="12" lg="6">
          <h1 class="titles about-title"> {{ ABOUT_TEXTS[lang].about_title }} </h1>

          <ContactButton class="mt-5"/>
        </b-col>

        <b-col class="mt-5 mt-lg-0 d-flex align-items-center justify-content-center flex-column" cols="12" lg="6">
          <p class="texts"> {{ ABOUT_TEXTS[lang].about_first_text }} </p>
          <p class="texts"> {{ ABOUT_TEXTS[lang].about_second_text }} </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Texts from './TextsMixins.vue'
import ContactButton from './ContactButton.vue'
export default {
  mixins: [Texts],
  components: {
    ContactButton
  },
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