<template>
  <div :class="`wrapper ${isScrolled ? 'scrolled' : ''}`">
    <div :class="`header-comp ${active ? 'extended' : ''}`">
      <main class="header-comp-main">
        <span class="texts header-brand">britze</span>

        <span
          :class="`menu-sdw ${active ? 'active' : ''}`"
          @click="active = !active"
        ></span>
      </main>
      <nav class="navbar">
        <ul class="navbar-list">
          <a
            class="navbar-list-items-link"
            :href="item.target"
            v-for="(item, idx) in itemsNavbar"
            :key="idx"
          >
            <li class="navbar-list-items">
              {{ item.text }}
            </li>
          </a>

          <li @mouseenter="showLangsOptions = true" @mouseleave="showLangsOptions = false">
            <span class="navbar-list-items-lang">
              <img
                :src="require(`../assets/flags/${$store.state.lang}.png`)"
                class="me-2"
                width="32"
                alt="bandeira referente ao idioma selecionado"
              >
              <span> {{ $store.state.lang.toUpperCase() }} </span>
            </span>

            <ul v-if="showLangsOptions" class="list-langs">
              <li
                class="list-langs-items"
                v-for="(lang, idx) in langs" 
                :key="idx" 
                @click="changeLang(lang)"
              > 
                <img 
                  :src="require(`../assets/flags/${lang}.png`)" 
                  class="me-2" 
                  width="32"
                  alt="bandeira referente ao idioma selecionado"
                >
                {{ lang.toUpperCase() }} 
              </li>
            </ul>
          </li>

          <li class="navbar-list-social-networks">
            <ul class="navbar-list-social-networks-items">
              <a href="https://instagram.com/lucasdebrito12/" target="_blank" class="navbar-list-items-link">
                <li class="navbar-list-items"><b-icon-instagram /></li>
              </a>

              <a href="https://linkedin.com/in/webdevbrito" target="_blank" class="navbar-list-items-link">
                <li class="navbar-list-items"><b-icon-linkedin /></li>
              </a>

              <a href="https://wa.me/+5518997351747" target="_blank" class="navbar-list-items-link">
                <li class="navbar-list-items"><b-icon-whatsapp /></li>
              </a>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Texts from './TextsMixins.vue';
export default {
  mixins: [Texts],
  mounted() {
    this.active = window.innerWidth > 992;

    document.addEventListener("scroll", () => {
      this.isScrolled = window.scrollY > 200;
    });
  },
  data: () => ({
    active: false,
    isScrolled: false,
    currentLang: 'pt',
    showLangsOptions: false,
    langs: [
      "pt",
      "en",
      "es"
    ]
  }),
  computed: {
    itemsNavbar: function () {
      return [
        { text: this.NAVBAR_TEXTS.about[this.lang], target: "#about" },
        { text: this.NAVBAR_TEXTS.services[this.lang], target: "#services" },
        { text: this.NAVBAR_TEXTS.techs[this.lang], target: "#techs" },
        { text: this.NAVBAR_TEXTS.contacts[this.lang], target: "#contacts" },
      ]
    }
  },
  methods: {
    changeLang(lang) {
      this.$store.commit('changeLang', lang)
      this.showLangsOptions = false
    }
  }
};
</script>

<style scoped lang="scss">
@import "../static/sass.scss";

.header-brand {
  font-size: 32px;
  color: white;

  @include lg {
    font-size: 28px;
  }

  @include md {
    font-size: 24px;
  }
}

.menu-sdw {
  display: none;

  @include lg {
    display: block;
    width: 30px;
    border-top: 2px solid;
    color: white;
  }
}

.menu-sdw::before,
.menu-sdw::after {
  content: "";
  display: block;
  height: 2px;
  width: 30px;
  margin-top: 5px;
  background-color: currentColor;
  transition: 0.3s;
  position: relative;
}

.active.menu-sdw {
  border-top-color: transparent;
}

.active.menu-sdw::before {
  transform: rotate(135deg);
}

.active.menu-sdw::after {
  transform: rotate(-135deg);
  top: -7px;
}

/* Header wrapper */
.wrapper {
  position: fixed;
  width: 100vw;
  height: 10vh;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.055);
  transition: 0.4s;

  @include lg {
    height: 8vh;
  }
}

.wrapper.scrolled {
  height: 7.5vh;
  background-color: rgba(0, 0, 0, 0.747);

  @include lg {
    height: 6.5vh;
  }
}

.header-comp {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 15px 0px;
  transition: 0.4s;

  @include lg {
    display: block;
    overflow-y: hidden;
    padding: 5px 20px;
    flex-direction: column;
    align-content: center;
  }
}

.wrapper.scrolled .header-comp-main {
  @include lg {
    height: calc(6.5vh - 10px);
  }
}

.header-comp.extended {
  @include lg {
    height: 100vh;
    background-color: var(--dark-primary);
    overflow-y: hidden;
  }
}

/* Header logo and hamburguer */

.header-comp-main {
  display: flex;
  align-items: center;
  height: 100%;
  transition: 0.4s;

  @include lg {
    height: calc(8vh - 10px);
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
  }

  @include md {
    padding: 0;
  }
}

.logo-full-img {
  height: 100%;
  max-width: 140px;

  @include lg {
    max-width: 110px;
  }
}

.navbar {
  display: block;
  height: 100%;

  @include lg {
    display: flex;
    flex-direction: column;
    height: 93vh;
    width: 100%;
  }
}

.navbar-list {
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  font-weight: 500;
  gap: 20px;
  color: white;
  align-items: center;

  @include lg {
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }
}

.navbar-list-items-link {
  color: white;
  text-decoration: none;
}

.navbar-list-items-link:hover {
  color: var(--secondary);
}

.navbar-list-items {
  padding: 2px 8px;
  transition: 0.3s;
  border: 2px solid transparent;
  font-size: 18px;
  font-weight: 500;

  @include lg {
    font-size: 24px;
  }
}

.navbar-list-social-networks {
  display: none;

  @include lg {
    display: block;
    width: 100%;
    margin-top: 50px;
  }
}

.navbar-list-social-networks-items {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.navbar-list-social-networks-items li {
  font-size: 28px;
}

.list-langs {
  position: absolute;
  background-color: white;
  color: black;
  padding: 0;
  margin: 0;
  z-index: 10;
}

.navbar-list-items-lang {
  border-bottom: 1px solid rgba(255, 255, 255, 0.829);
  padding: 0 8px;
}

.navbar-list-items-lang, .list-langs-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-langs-items {
  padding: 16px 24px;
  text-align: center;
  transition: .3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-langs-items:hover {
  background-color: var(--primary);
  color: white;
}
</style>