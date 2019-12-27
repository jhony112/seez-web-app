<template>
    <div class="container-scroller">
        <header-nav></header-nav>
        <main role="main" class="_container">
            <slot name="body" class="body__area"></slot>
        </main>
    </div>
</template>

<script>


    import HeaderNav from "./Navigation/HeaderNav";

    export default {
        name: "Layout",
        components: {HeaderNav},
        async mounted() {

        }
    }
</script>

<style scoped>
    ._container {
        margin-top: 55px;
    }
</style>
