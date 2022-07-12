<template>
  <div class="header-comp">
    <nav class="navbar p-0">
      <ul class="navbar-list">
        <li>
          <img
            class="logo-full-img"
            :src="require('../assets/logo-full2.png')"
            alt="logo da britze com uma imagem de 3 gotas juntas na diagonal e o nome da empresa"
          />
        </li>
        <li>
          <ul class="navbar-list-links texts">
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Tecnologias</li>
            <li>Contato</li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-comp {
    height: 10vh;
    width: 100vw;
    z-index: 2;
    position: absolute;
    padding: 15px 50px;
    /* background-color: rgba(0, 0, 0, 0.267); */
}

.logo-full-img {
    height: 100%;
    width: 140px;
}

.navbar {
    height: 100%;
}

.navbar-list, .navbar-list-links {
    height: 100%;
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 20px;
    color: white;
    font-weight: 500;
}

.navbar-list {
    justify-content: space-between;
    align-items: center;
}
</style>