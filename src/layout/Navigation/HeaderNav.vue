<template>
    <header>
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-primary fixed-top bg-dark">
            <div class="container">
                <router-link :to="{name:'home'}" class="navbar-brand">
                    <img src="../../assets/images/seez_logo.svg"/>
                </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Search <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hot Deals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Leasing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Valuation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fab fa-google-play"></i> <i class="fab fa-app-store"></i> Get the App</a>
                        </li>

                    </ul>
                    <form class="form-inline mt-2 mt-md-0">

                        <button class="btn btn-default my-2 my-sm-0">Login</button>
                    </form>
                </div>
            </div>

        </nav>
    </header>


</template>

<script>

    export default {
        name: "HeaderNav",
    }

</script>

<style lang="scss" scoped>
    @import "../../assets/css/variables";
    .btn-default{
        background: white;

    }
    .navbar {
        a {
            color: white;
            font-weight: 700;
            text-decoration: none;
            background-color: transparent;
        }
        &:hover {

        }
        .navbar-brand img {
            width: 6em;
        }


    }
    .navbar-primary {
        color: white;
        background: $primary-color !important;
    }
</style>
