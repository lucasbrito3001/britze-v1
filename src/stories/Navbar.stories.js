import HeaderNavbar from '../../components/HeaderNavbar.vue'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Navbar',
  component: HeaderNavbar,
};

export const Navbar = () => ({
  components: { HeaderNavbar },
  template: '<HeaderNavbar/>',
});