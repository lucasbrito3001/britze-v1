<template>
  <div :class="`header-comp ${active ? 'extended' : 'collapsed'}`">
    <main class="header-comp-main">
      <img
        class="logo-full-img"
        :src="require('../assets/logo-full2.png')"
        alt="logo da britze com uma imagem de 3 gotas juntas na diagonal e o nome da empresa"
      />
      <span
        :class="`menu-sdw ${active ? 'active' : ''}`"
        @click="active = !active"
      ></span>
    </main>

    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-list-items">Sobre</li>
        <li class="navbar-list-items">Serviços</li>
        <li class="navbar-list-items">Tecnologias</li>
        <li class="navbar-list-items">Contato</li>
        <li class="navbar-list-social-networks">
          <ul class="navbar-list-social-networks-items">
            <li class="navbar-list-items"><b-icon-instagram /></li>
            <li class="navbar-list-items"><b-icon-linkedin /></li>
            <li class="navbar-list-items"><b-icon-whatsapp /></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    this.active = window.innerWidth > 768;
  },
  data: () => ({
    active: false,
  }),
};
</script>

<style scoped lang="scss">
@import "../static/sass.scss";

.menu-sdw {
  display: none;

  @include md {
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

.header-comp {
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  width: 100vw;
  z-index: 10;
  padding: 15px 50px;
  background-color: rgba(0, 0, 0, 0.055);
  transition: 0.4s;

  @include md {
    display: block;
    overflow-y: hidden;
    height: 6vh;
    padding: 5px 20px;
    flex-direction: column;
    align-content: center;
  }
}

.header-comp.extended {
  @include md {
    height: 100vh;
    background-color: var(--dark-primary);
  }
}

/* Header logo and hamburguer */

.header-comp-main {
  display: flex;
  align-items: center;
  height: 100%;

  @include md {
    height: calc(6vh - 10px);
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
}

.logo-full-img {
  height: 100%;
  max-width: 140px;

  @include md {
    max-width: 110px;
  }
}

.navbar {
  display: block;
  height: 100%;

  @include md {
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

  @include md {
    flex-direction: column;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }
}

.navbar-list-items {
  padding: 2px 8px;
  transition: .3s;
  border: 2px solid transparent;
}

.navbar-list-items:hover {
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

.navbar-list-social-networks {
  display: none;

  @include md {
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
</style>