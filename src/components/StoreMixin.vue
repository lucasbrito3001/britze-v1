<script>
export default {
  name: "StoreMixins",
  data: () => ({
    default_phone_number: '+55 (18) 99735-1747',
    default_email: 'britze@gmail.com'
  }),
  computed: {
    lang: function () { return this.$store.state.lang }
  },
  methods: {
    changeLang(lang) {
      this.$store.commit('changeLang', lang)
    }
  }
};
</script>