<template>
  <div class="wrapper">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="titles">{{ TEXTS.title[lang] }}</h1>
        </b-col>
      </b-row>

      <b-row class="mt-3 mt-lg-5">
        <b-col class="text-center p-2">
          <VueSlickCarousel v-bind="carouselSettings">
            <div
              v-for="(tech, key) in TEXTS.techs"
              :key="key"
              class="
                d-flex
                flex-column
                align-items-center
                justify-content-center
              "
            >
              <img
                :src="require(`../assets/ourTechs/${tech}.png`)"
                :alt="`${tech} logo`"
                width="48"
                class="imgs-tech"
              />
              <span class="d-block texts"> {{ tech }} </span>
            </div>
          </VueSlickCarousel>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TEXTS from "../static/texts/tech.json";
import StoreMixin from "./mixins/StoreMixin.vue";
import VueSlickCarousel from "vue-slick-carousel";
export default {
  name: "OurTechs",
  mixins: [StoreMixin],
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    TEXTS: TEXTS,
    carouselSettings: {
      arrows: false,
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "ease-in-out",
      pauseOnDotsHover: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    },
  }),
  created() {
    const maxQuantity = parseInt(window.innerWidth / 120)
    this.carouselSettings.slidesToShow = maxQuantity > 8 ? 8 : maxQuantity
  }
};
</script>