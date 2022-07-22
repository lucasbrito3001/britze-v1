<template>
  <b-button
    href="#contacts"
    variant="dark"
    size="sm"
    class="py-2 px-5 texts contact-button btn-dark"
  >
    {{ texts_button[lang] }}
  </b-button>
</template>

<script>
import StoreMixin from './StoreMixin'
export default {
  name: "ContactButton",
  mixins: [StoreMixin],
  data: () => ({
    texts_button: {
      "pt": "Fale com a gente",
      "en": "Talk with us",
      "es": "Hable con nosotros"
    }
  }),
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