<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <section id="home" class="sections" v-scroll-reveal.reset>
      <HomePage />
    </section>
    <section id="about" class="sections py-5" v-scroll-reveal.reset>
      <AboutPage />
    </section>
    <section id="services" class="sections py-5" v-scroll-reveal.reset>
      <OurServices />
    </section>
    <section id="techs" class="sections py-5" v-scroll-reveal.reset>
      <OurTechs />
    </section>
    <section id="contacts" class="sections py-5" v-scroll-reveal.reset>
      <OurContacts />
    </section>
    <section id="footer" class="sections py-5 bg-black">
      <Footer />
    </section>
  </div>
</template>

<script>
import Header from "./components/HeaderNavbar.vue";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import OurServices from "./components/OurServices.vue";
import OurTechs from "./components/OurTechs.vue";
import OurContacts from "./components/OurContacts.vue";
import Footer from "./components/FooterSection.vue"
export default {
  name: "App",
  components: {
    Header,
    HomePage,
    AboutPage,
    OurServices,
    OurTechs,
    OurContacts,
    Footer
  }
};
</script>

<style lang="scss">
@import './static/sass.scss';
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:wght@100;300;400;500;600&display=swap");
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300;500;700&display=swap');

:root {
  --primary: rgb(39, 183, 240);
  --light-primary: rgb(228, 247, 255);
  --dark-primary: rgb(0, 102, 161);

  --secondary: #F7365C;
  --light-secondary: #ffcdd7;
  --dark-secondary: #180105;


  --tertiary: #F7EB05;
  --dark: #161616;
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

.sections {
  max-width: 100vw;
}

#home {
  height: 95vh;

  @include lg {
    height: 65vh;
  }

  @include md {
    height: 80vh;
  }
}

#services {
  background-color: var(--light-primary);
}

#contacts {
  background-color: var(--dark);
  color: white;
}

.titles, .secondary-titles, .tertiary-titles {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  line-height: 1.5;
}

.titles {
  font-size: 46px;

  @include lg {
    font-size: 38px;
  }

  @include md {
    font-size: 32px;
  }
}

.secondary-titles {
  font-size: 36px;

  @include lg {
    font-size: 30px;
  }

  @include md {
    font-size: 24px;
  }
}

.tertiary-titles {
  font-size: 28px;

  @include lg {
    font-size: 25px;
  }

  @include md {
    font-size: 22px;
  }
}

.texts {
  font-family: "Comfortaa", sans-serif;
  font-size: 22px;
  font-weight: 300;
  line-height: 2;

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

.btn-secondary {
  background-color: var(--secondary) !important;
  border: 1px solid var(--secondary) !important;
  color: white;
}

.btn-secondary:hover {
  background-color: white !important;
  border: 1px solid white !important;
  color: var(--secondary) !important;
}

.general-hr {
  background-color: rgba(192, 192, 192, 0.89);
}
</style>
