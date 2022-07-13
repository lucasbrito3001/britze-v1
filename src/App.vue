<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <section class="home-page">
      <HomePage />
    </section>
  </div>
</template>

<script>
import HomePage from "./pages/HomePage.vue";
import Header from "./components/HeaderNavbar.vue";
export default {
  name: "App",
  components: {
    HomePage,
    Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:wght@100;300;400;500;600&display=swap");

:root {
  --primary: rgb(0, 225, 255);
  --light-primary: rgb(209, 253, 255);
  --dark-primary: rgb(0, 61, 70);

  --secondary: rgb(255, 0, 149);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.home-page {
  width: 100vw;
  height: 95vh;
}

.titles {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

.texts {
  font-family: "Comfortaa", sans-serif;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
