<script>
import HomeJson from '../static/texts/home.json'
import AboutJson from '../static/texts/about.json'
import ContactJson from '../static/texts/contact.json'
export default {
  name: "StoreMixins",
  data: () => ({
    HOME_TEXTS: HomeJson,
    ABOUT_TEXTS: AboutJson,
    CONTACT_TEXTS: ContactJson,
    default_phone_number: '+55 (18) 99735-1747',
    default_email: 'britze@gmail.com'
  }),
  computed: {
    lang: function () { return this.$store.state.lang }
  },
};
</script>