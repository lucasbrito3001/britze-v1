<template>
  <b-button
    href="#contacts"
    variant="dark"
    size="sm"
    class="py-2 px-5 texts contact-button btn-dark"
  >
    Fale com a gente
  </b-button>
</template>

<script>
export default {
  name: "ContactButton",
};
</script>

<style scoped>
.contact-button:hover {
  background-color: transparent;
  color: var(--dark);
}
.btn-dark {
  background-color: var(--dark);
  border: 2px solid var(--dark);
  outline: none;
  font-weight: 700;
}
</style>