<script>
import HomeJson from '../static/texts/home.json'
import AboutJson from '../static/texts/about.json'
export default {
  name: "StoreMixins",
  data: () => ({
    HOME_TEXTS: HomeJson,
    ABOUT_TEXTS: AboutJson 
  }),
  computed: {
    lang: function () { return this.$store.state.lang }
  },
};
</script>