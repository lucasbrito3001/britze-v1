<template>
  <div class="wrapper-home">
    <b-container class="h-100">
      <b-row class="align-items-center justify-content-center h-100">
        <b-col cols="12" md="6">
          <h1 class="titles home-title">Consultoria e transformação digital</h1>
          <p class="texts home-text">
            Se você está pensando em aderir ao mundo digital, e colocar a sua
            empresa online, você está no lugar certo. Na britze oferecemos
            serviços de desenvolvimento e design de aplicações web, do início ao
            fim, buscando sempre as melhores práticas de trabalho e tecnologias
            atuais.
          </p>
          <p class="texts home-text">Quer saber mais?</p>
          <b-button variant="dark" class="py-2 px-3 texts"
            >Entre em contato com a gente</b-button
          >
        </b-col>
        <b-col cols="12" md="6">
          <img :src="require('../assets/home-img.svg')" alt="" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../static/sass.scss";

.wrapper-home {
  height: 100%;
  width: 100%;
  background-color: var(--primary);
  clip-path: ellipse(93% 60% at 50% 40%);

  @include md {
    clip-path: ellipse(140% 55% at 50% 45%);
  }
}

.home-title {
  color: white;
  font-weight: 700;
  font-size: 52px;

  @include md {
    font-size: 32px;
  }
}

.home-text {
  color: white;
  font-size: 20px;

  @include md {
    font-size: 18px;
  }
}
</style>