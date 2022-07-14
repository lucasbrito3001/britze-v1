<template>
  <div class="wrapper-about">
    <b-container>
      <b-row>
        <b-col class="mb-3 mb-lg-0 py-lg-5" cols="12" lg="6">
          <h1 class="titles" v-html="TEXTS_JSON[idiom].about_title"></h1>
        </b-col>

        <b-col class="py-lg-5" cols="12" lg="6">
          <img
            class="about-img mb-5"
            :src="require('../assets/about-img.svg')"
            alt="
                Na imagem tem um celular com um site aberto e um imã puxando pessoas, 
                simbolizando a atração de pessoas que a um portfolio web fornece
            "
          />
          <p class="texts">
            Trabalhamos com base na tecnologia, boas práticas, comunicação e empatia,
            para alcançar resultados incríveis com nossos clientes.
          </p>
          <p class="texts">

          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TEXTS_JSON from "../static/texts/about.json"
export default {
  data: () => ({
    TEXTS_JSON: TEXTS_JSON,
    idiom: "br"
  })
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
</style>