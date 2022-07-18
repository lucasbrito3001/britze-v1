<script>
import { mapState } from 'vuex'
export default {
    mounted() {
        console.log(mapState({
            lang: state => state.lang
        }))
    }
}
</script>