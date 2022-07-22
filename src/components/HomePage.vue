<template>
  <div class="wrapper-home">
    <b-container class="h-100 pt-5 pt-lg-0">
      <b-row
        class="
          align-items-center align-content-center
          justify-content-center
          h-100
        "
      >
        <b-col cols="12" lg="6">
          <h1 class="titles home-title mb-4" v-html="TEXTS.main_title[lang]"></h1>
          <p class="texts home-text mb-4" v-html="TEXTS.main_text[lang]"></p>
          <ContactButton/>
        </b-col>
        <b-col cols="12" lg="6" class="mt-5 mt-md-0">
          <img
            :src="require('../assets/home-img3.svg')"
            class="home-img"
            alt="
              Uma animação de um homem sentado com um notebook no colo,
              na frente de alguns dispositivos mobile e desktop e engrenagens, passando a imagem de que 
              as aplicações estão rodando com sucesso e de maneira responsiva
            "
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ContactButton from "./ContactButton.vue"
import TEXTS from '../static/texts/home.json'
import StoreMixin from './StoreMixin'
export default {
  name: "HomeSectiom",
  mixins: [StoreMixin],
  components: {
    ContactButton
  },
  data: () => ({
    TEXTS: TEXTS
  }),
  computed: {
    lang: function () {
      return this.$store.state.lang
    }
  }
};
</script>

<style scoped lang="scss">
@import "../static/sass.scss";

.wrapper-home {
  height: 95vh;
  background-color: var(--primary);
  clip-path: ellipse(93% 60% at 50% 40%);

  @include lg {
    height: 65vh;
  }

  @include md {
    height: 80vh;
    clip-path: ellipse(140% 55% at 50% 45%);
  }
}

.home-title {
  color: white;
}

.home-text {
  color: white;
}

.home-img {
  margin: auto;
  display: block;

  width: 440px;

  @include lg {
    width: 360px;
  }

  @include md {
    width: 280px;
  }
}

.britze-name {
  color: var(--secondary);
}
</style>