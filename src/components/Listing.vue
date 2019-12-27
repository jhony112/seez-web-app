<template>
    <div class="col-md-3 col-12 listing__card hvr hvr-float ">
        <pre-loader v-if="loading"></pre-loader>
        <transition v-else name="zoomIn">
            <router-link :to="{ name: 'detail', params: {id: listing.id,country:listing.country_code,slug:listing.slug } }">
                <div class="card">
                    <div class="power-ribbon power-ribbon-top-left text-warning">
                        <span class="bg-warning"><i class="fa fa-bolt"></i></span>
                    </div>

                    <div class="like__box">
                        <i v-if="isLiked" class="fa fa-heart-o"></i>
                        <i v-else class="fa fa-heart"></i>
                    </div>
                    <div class="card__poster">
                        <img id="poster" :src="loadedImage"/>
                    </div>
                    <div class="card__info">

                        <div class="title ">{{carName}}</div>
                        <div class="flex-sb flex-m m-t-5">
                            <div class=" text-sm"><i class="fas fa-map-marker"></i> {{listing.city}} {{listing.country_code}}</div>
                            <div class="price">{{carPrice}}<span class="tail">{{carCurrency}}</span></div>
                        </div>


                    </div>
                    <div class="card__footer">
                        <div class=" stats flex-r">
                            <!--<div class="price text-sm"><i class="fas fa-gas-pump"></i> {{listing.fuel_type}}</div>-->
                            <div class="metric text-sm text-right  "><i class="fas fa-car"></i> {{carModelMileage}}</div>
                        </div>

                        <div class="text-sm dealer" v-if="listing.is_certified"> Certified Dealer <i class="fas fa-check-circle"></i> </div>
                    </div>
                </div>
            </router-link>

        </transition>

    </div>

</template>

<script>
    import preLoader from './preLoader';

    export default {
        name: "Listing",
        props: {
            listing: {
                type: Object,
                default: function () {
                    return {
                        image: '',
                        make: '',
                        model: '',
                        submodel: '',
                        price: 0,
                        city: '',
                        country_code: '',
                        id: '',
                        slug: '',
                        currency: '',
                        year: 0, mileage: '', image_uris: [], is_featured: false, is_certified: false
                    }
                }
            }
        },
        components: {
            preLoader,
        },
        computed: {
            carName() {

                return `${this.listing.make} ${this.listing.model} ${(this.listing.submodel) ? this.listing.submodel : ""}`
            },
            isLiked() {
                return !!(this.listing.is_featured);
            },
            carPrice() {
                //  return this.listing.price +" "+ this.listing.currency;
                return this.moneyFormat(this.listing.price) ;
            },
            carCurrency(){
                return this.listing.currency;
            },
            carModelMileage() {
                return `${this.listing.year} • ${this.listing.mileage}km `
            },
            carPoster() {
                if (this.listing.image_uris.length > 0) {
                    return this.listing.image_uris[0]
                }
                return null
            }
        },
        data() {
            return {
                loading: true,
                loadedImage: null,

            }
        },
        methods: {
            onLoad() {
                this.loading = false;
            },
            moneyFormat(m, dec = false,) {
                if (dec) {
                    return parseFloat(m).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }

                return parseFloat(m).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            },
        },
        mounted() {

            let vm = this;
            var tmpImg = new Image();
            tmpImg.src = this.carPoster;

            tmpImg.onload = function () {
                // Run onload code.
                vm.loadedImage = tmpImg.src;
                vm.loading = false;
            };


        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/variables";

    a {
        color: inherit !important;
        text-decoration: none !important;
        background-color: transparent !important;
    }

    .listing__card {

        height: 350px;
        width: 100%;
        margin-bottom: 30px;
        padding: 5px 7px;
        position: relative;
        border-radius: 10px;
        cursor: grab;

        .col {

        }
        .card {
            background: #f7f7f7;
            height: 100%;
            position: relative;
            width: 100%;
            border: unset;
            border-radius: 10px;
            padding: unset;
            overflow: hidden;

            .card__poster {
                height: 60%;
            }
            img {
                width: 100%;
                height: 100%;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                object-fit: cover;
                transition: all ease-in-out .6s;
            }

            .card__info {
                padding: 5px 10px;
                margin-top: 5px;
                text-align: left;
                position: relative;

                .title {
                    font-weight: bold;
                    line-height: 1em;

                }
                .price {

                    font-weight: bold;
                    font-size: 1.2em;

                }

                .location {
                    position: absolute;
                    right: 10px;
                    top: -1px;
                }
            }
            .card__footer {
                position: absolute;
                bottom: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                width: 100%;

                &:before {

                    position: absolute;
                    height: 1px;
                    top: -2px;
                    background: rgba(211, 211, 211, 0.42);
                    width: 100%;
                    margin: auto;
                    left: 0;
                    right: 0;
                }
                .stats {
                    width: 100%;
                    padding: 5px 10px;
                }
                .metric i {

                }

            }
            .like__box {
                position: absolute;
                width: 2.5em;
                right: 10px;
                top: 5px;
                height: 2.5em;
                border-radius: 50%;
                text-align: center;
                line-height: 2.5em;
                background: $like-color;

                i {
                    color: white;
                }
                /*.like .fa-heart:before {*/
                /*content: "\f004";*/
                /*}*/
                .like .fa-heart-o:before {
                    content: "\f004" !important;
                }
            }
            .power-ribbon {
                width: 56px;
                height: 56px;
                overflow: hidden;
                position: absolute;
                z-index: 10;
            }
            .power-ribbon span {
                position: absolute;
                display: block;
                width: 82px;
                padding: 8px 0;
                color: #fff;
                font: 500 16px/1 Lato, sans-serif;
                text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
                text-transform: capitalize;
                text-align: center;
            }
            .power-ribbon-top-left span {
                right: -5px;
                top: 1px;
                transform: rotate(-45deg);
            }
            .power-ribbon-top-left span i {
                transform: rotate(45deg);
                padding-top: 2px;
                padding-left: 7px;
            }
            .power-ribbon-top-left {
                top: -4px;
                left: -6px;
            }
            .dealer {
                padding: 5px 3px;
                background: #2dcd75;
                border-radius: 3px;
                font-size: .6em;

                width: 100%;
                font-weight: bold;
                color: white;
            }
        }
    }
</style>
