<template>
    <vue-content-loading
            :height="350"
            :width="300"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
    >
        <rect x="6.81" y="416" rx="4" ry="4" width="100" height="9.88" />
        <rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
        <rect x="2" y="1" rx="5" ry="5" width="400" height="300" />
        <rect x="6.59" y="436.64" rx="4" ry="4" width="117" height="10" />
        <rect x="8.59" y="453.62" rx="4" ry="4" width="117" height="20" transform="rotate(359.99, 8.59, 453.62)" />
    </vue-content-loading>
</template>

<script>
    import { VueContentLoading } from "vue-content-loading"

    export default {
        components: {
            VueContentLoading
        }
    }
</script>
