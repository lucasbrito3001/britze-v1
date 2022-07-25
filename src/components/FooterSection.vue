<template>
  <b-container>
    <b-row>
      <b-col>
        <div class="titles text-white logo">britze</div>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12" md="6" lg="4">
        <h1 class="secondary-titles text-white">
          {{ CONTACTS[lang] }}
        </h1>

        <h2 class="tertiary-titles">email</h2>
        <p class="texts text-white">{{ $store.state.default_email }}</p>

        <h2 class="tertiary-titles">whatsapp</h2>
        <p class="texts text-white">{{ $store.state.default_phone_number }}</p>

        <h2 class="tertiary-titles">
          {{ SOCIAL_NETWORKS[lang] }}
        </h2>
        <p class="texts text-white">{{ $store.state.default_email }}</p>
      </b-col>

      <b-col cols="12" md="6" lg="4" class="mt-5 mt-md-0">
        <h1 class="secondary-titles text-white">
          {{ REFERENCES[lang] }}
        </h1>

        <h2 class="tertiary-titles">
            {{ IMAGES[lang] }}
        </h2>
        <a :href="$store.state.reference_images" target="_blank" class="texts references-links">
          {{ $store.state.reference_images }}
        </a>

        <h2 class="tertiary-titles">
            {{ ICONS[lang] }}
        </h2>
        <a :href="$store.state.reference_icons" target="_blank" class="texts references-links">
          {{ $store.state.reference_icons }}
        </a>
      </b-col>

      <b-col cols="12" md="6" lg="4" class="menu mt-lg-0 mt-md-5">
        <h1 class="secondary-titles text-white">Menu</h1>

        <ul class="menu-list">
            <li class="texts menu-list-items">
                <a href="#about" class="menu-list-links">{{ NAVBAR_TEXTS.about[lang] }}</a>
            </li>
            <li class="texts menu-list-items">
                <a href="#services" class="menu-list-links">{{ NAVBAR_TEXTS.services[lang] }}</a>
            </li>
            <li class="texts menu-list-items">
                <a href="#techs" class="menu-list-links">{{ NAVBAR_TEXTS.techs[lang] }}</a>
            </li>
            <li class="texts menu-list-items">
                <a href="#contacts" class="menu-list-links">{{ NAVBAR_TEXTS.contacts[lang] }}</a>
            </li>
            <li class="texts menu-list-items">
                <a href="#" class="menu-list-links">&uarr;</a>
            </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TEXTS from "../static/texts/footer.json";
import NAVBAR_TEXTS from "../static/texts/navbar.json";
import StoreMixin from "./mixins/StoreMixin.vue";
export default {
  name: "FooterSection",
  mixins: [StoreMixin],
  data: () => ({
    TEXTS: TEXTS,
    CONTACTS: TEXTS.contacts.title,
    SOCIAL_NETWORKS: TEXTS.contacts.content.social_networks,
    REFERENCES: TEXTS.references.title,
    IMAGES: TEXTS.references.content.images,
    ICONS: TEXTS.references.content.icons,
    NAVBAR_TEXTS: NAVBAR_TEXTS,
  }),
};
</script>

<style scoped lang="scss">
@import '../static/sass.scss';

.titles {
  font-family: "Comfortaa", sans-serif;
}
.references-links {
    color: white;
    transition: .3s;
}
.references-links:hover {
    color: var(--secondary) !important;
}
.menu {
    @include md {
        display: none;
    }
}
.menu-list {
    padding: 0;
}
.menu-list-links {
    color: white;
    text-decoration: none;
    transition: .3s;
}
.menu-list-items:not(:last-child) > .menu-list-links:hover {
    color: var(--secondary);
    text-decoration: underline;
}
.menu-list-items:last-child > .menu-list-links {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.menu-list-items:last-child > .menu-list-links:hover {
    background-color: white;
    color: black;
}
</style>