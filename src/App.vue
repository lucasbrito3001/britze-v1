<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <section id="home-page" class="pages">
      <HomePage />
    </section>
    <section class="pages">
      <AboutPage />
    </section>
    <section id="our-services" class="pages">
      <OurServices />
    </section>
  </div>
</template>

<script>
import Header from "./components/HeaderNavbar.vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import OurServices from "./components/OurServices.vue";
export default {
  name: "App",
  components: {
    Header,
    HomePage,
    AboutPage,
    OurServices
  },
};
</script>

<style lang="scss">
@import './static/sass.scss';
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:wght@100;300;400;500;600&display=swap");

:root {
  --primary: rgb(39, 183, 240);
  --light-primary: rgb(228, 247, 255);
  --dark-primary: rgb(0, 102, 161);

  --secondary: #F7365C;
  --tertiary: #F7EB05;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pages {
  max-width: 100vw;
}

#home-page {
  height: 95vh;

  @include lg {
    height: 65vh;
  }

  @include md {
    height: 80vh;
  }
}

#our-services {
  background-color: var(--light-primary);
}

.titles {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 46px;
  line-height: 1.5;

  @include lg {
    font-size: 38px;
  }

  @include md {
    font-size: 32px;
  }
}

.texts {
  font-family: "Comfortaa", sans-serif;
  font-size: 22px;
  font-weight: 300;
  line-height: 1.75;

  @include lg {
    font-size: 20px;
  }

  @include md {
    font-size: 18px;
  }
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
