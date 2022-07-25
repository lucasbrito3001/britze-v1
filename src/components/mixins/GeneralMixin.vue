<script>
export default {
    methods: {
        showToast(
            message,
            options = {
                type: 'info', 
                duration: 5000, 
                position: 'top-left'
            }
        ) {
            this.$toast(message, options);
        }
    }
}
</script>