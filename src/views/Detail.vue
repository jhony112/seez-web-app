<template>
    <Layout>
        <div class="home" slot="body">

            <div class="container">

                <div class="row pt-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><router-link :to="{name:'home'}">Home</router-link></li>
                            <li class="breadcrumb-item"><a href="#">Listings</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{this.entry.slug}}</li>
                        </ol>
                    </nav>
                    <div class="col-12 col-md-7 detail__thumb">

                        <thumb-carousel v-if="this.entry"  :images="this.entry.image_uris"></thumb-carousel>

                    </div>
                    <div class="col-12 col-md-5 detail__info ">
                        <div class="text-left card">
                            <div class="text-sm ">First seen a month ago</div>
                            <div class="flex-sb m-t-10 ">
                                <div class="name text-xl text-bold w-93">{{carName}}</div>
                                <div class="like__box">
                                    <i v-if="isLiked" class="far fa-heart"></i>
                                    <i v-else class="fas fa-heart"></i>
                                </div>
                            </div>
                            <div class="text-sm dealer" v-if="entry.is_certified"> Certified Dealer</div>
                            <div class="flex-sb flex-m m-t-10">
                                <div class="stat"><i class="fas fa-map-marker"></i> {{this.entry.city}}</div>
                                <div class="price text-xl text-bold">{{carPrice}}<span class="tail">{{ this.entry.currency}}</span>
                                </div>

                            </div>


                            <div class="stats">
                                <!--<div class="stat"><i class="fa fa-map-marker"></i> {{this.entry.city}}</div>-->
                            </div>

                        </div>
                        <div class=" m-t-20">
                            <button @click="yello" class="btn btn-primary btn-block text-bold" type="button"
                                    data-toggle="collapse" data-target="#contact" aria-expanded="false"
                                    aria-controls="collapseExample">
                                {{colapseTag}}
                            </button>
                            <div class="collapse m-t-10" id="contact">
                                <div class="card card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                           <i class="fas fa-phone"></i>
                                            <span>676567</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="card m-t-20">
                            <div class="row">
                                <info-box class="col-12 col-md-6" title="Body Type" font="fas fa-car" :desc="entry.body_type"></info-box>
                                <info-box class="col-12 col-md-6" title="Color" font="fas fa-tint" :desc="entry.exterior_color"></info-box>
                                <info-box class="col-12 col-md-6" title="Regional Spec" font="fas fa-bolt" :desc="entry.regional_spec"></info-box>
                                <info-box class="col-12 col-md-6" title="Transmission" font="fas fa-sitemap" :desc="entry.transmission"></info-box>
                                <info-box class="col-12 col-md-6" title="Engine Size" font="fas fa-bolt" :desc="entry.engine_displacement"></info-box>
                                <info-box class="col-12 col-md-6" title="Fuel Type" font="fas fa-gas-pump" :desc="entry.fuel_type"></info-box>
                                <info-box class="col-12 col-md-6" title="No. Cylinders" font="fas fa-cogs" :desc="entry.num_cylinders"></info-box>
                                <info-box class="col-12 col-md-6" title="No. Doors" font="fas fa-door-open" :desc="entry.num_doors"></info-box>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
</template>

<script>
    import Layout from "../layout/Layout";
    import ThumbCarousel from "../components/thumbCarousel";
    import InfoBox from "../components/infoBox";

    export default {
        name: "Listing",
        components: {InfoBox, ThumbCarousel, Layout},
        props: ['country', 'slug', 'id'],
        data() {
            return {
                collapsed: true,
                collapsedText: "Show Contact Options",
                entry:null,
                gentry: {
                    "active": true,
                    "allow_show_images": true,
                    "body_condition": null,
                    "body_type": "SUV",
                    "cesar_conversation_state": null,
                    "cesar_ignore": true,
                    "city": "Abu Dhabi",
                    "contact_options": [{
                        "contact_type": "phone",
                        "meta": {"is_cellphone": true},
                        "value": "+971522556687"
                    }],
                    "country_code": "AE",
                    "created_at": "2019-11-21T17:24:37.573865+01:00",
                    "currency": "AED",
                    "deal_category": null,
                    "engine_displacement": null,
                    "estimated_mileage": null,
                    "exterior_color": "Black",
                    "fuel_type": "Petrol",
                    "gps_coordinates": null,
                    "hot_deal_likelihood": 7.420330309,
                    "hot_deal_show": null,
                    "id": "9f18faade3d8c0fcb9f651ac08c39daa",
                    "image_uris": ["https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/front-tilted.jpg", "https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/rear-tilted.jpg", "https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/full-side.jpg", "https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/front-left-wheel.jpg", "https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/interior-dashboard.jpg", "https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/interior-door.jpg", "https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/interior-passenger.jpg", "https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/front.jpg", "https://s3-eu-west-1.amazonaws.com/images.seez.co/public/mercedes-benz-abu-dhabi/alfahim-preowned/19076_GLE400/rear.jpg"],
                    "is_certified": true,
                    "is_featured": true,
                    "is_new": false,
                    "last_seen_at": null,
                    "make": "Mercedes-Benz",
                    "make_id": "60",
                    "market_estimate": 199000,
                    "mechanical_condition": null,
                    "mileage": 26948,
                    "model": "GLE-Class",
                    "model_id": "602",
                    "negotiated_at": null,
                    "negotiated_price": null,
                    "num_cylinders": null,
                    "num_doors": 5,
                    "origin_link": "http://abu-dhabi.pe-mb.com/?seez_fahim_vsb=19076",
                    "phone_number": "+971522556687",
                    "post_date": null,
                    "price": 199000,
                    "regional_spec": "gcc",
                    "seller_reference": "VSB:19076",
                    "slug": "buy-2017-black-mercedes-benz-gle400-for-sale",
                    "source": {
                        "origin_link": "http://abu-dhabi.pe-mb.com/?seez_fahim_vsb=19076",
                        "scrape_site": "AE_preowned-mercedes-benz",
                        "source_country_code": "AE",
                        "source_name": "preowned-mercedes-benz",
                        "source_type": "dealership"
                    },
                    "submodel": "GLE400",
                    "submodel_id": "524",
                    "tags": null,
                    "transmission": null,
                    "updated_at": "2019-12-11T11:59:25.993191+01:00",
                    "year": 2017
                }
            }
        },
        computed: {
            carName() {
                return `${this.entry.make} ${this.entry.model} ${(this.entry.submodel) ? this.entry.submodel : ""}`
            },
            isLiked() {
                return !!(this.entry.is_featured);
            },
            colapseTag() {
                return ((this.collapsed) ? 'Show' : 'Hide') + ' Contact Options'
            },
            carPrice() {
                //  return this.entry.price +" "+ this.entry.currency;
                return this.moneyFormat(this.entry.price);
            },
            carLocation() {
                //  return this.entry.price +" "+ this.entry.currency;
                return this.moneyFormat(this.entry.price) + " " + this.entry.currency;
            },
            carModelMileage() {
                return `${this.entry.year} • ${this.entry.mileage}km `
            },

        },
        methods: {
            yello() {
                this.collapsed = !this.collapsed;
                //   console.log(this.colapsed)
                // this.colapsedText= (this.colapsed)?'Show':'Hide' +' Contact Options'
            },
            moneyFormat(m, dec = false,) {
                if (dec) {
                    return parseFloat(m).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                }

                return parseFloat(m).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            },
        },
        mounted() {
            let _tmp = this.$store.getters.getByID(this.id);
            if (_tmp.length > 0) {
                this.entry = _tmp[0];
            }
            // console.log(listing);

            console.log(this.entry)
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/variables";

    @media (min-width: 768px) {
        .col-md-5 {
            margin-left: 2%;
            -webkit-box-flex: 0;
            flex: 0 0 39.666667%;
            max-width: 39.666667%;
        }
    }

    .detail__thumb {
        padding: 25px 45px;
        background: white;
    }

    .detail__info {

        .card {
            box-sizing: border-box;
            padding: 20px 25px;
            background: white;
        }
        .name {
            line-height: normal;

        }
        .stats {
            display: flex;
            .stat {
                margin-left: 5px;
            }
        }
    }

    .like__box {
        width: 2.5em;
        right: 25px;
        height: 2.5em;
        top: 10px;
        position: absolute;
        border-radius: 50%;
        text-align: center;
        line-height: 2.5em;
        background: $like-color;

        i {
            color: white;
        }

    }



    .dealer {
        padding: 2px 5px;
        text-align: center;
        background: #2dcd75;
        border-radius: 3px;
        font-size: .8em;
        max-width: 120px;
        margin-top: 5px;
        margin-bottom: 5px;
        font-weight: bold;
        color: white;
    }
    .list-group-item span{
        margin-left: 5px;
    }
</style>
