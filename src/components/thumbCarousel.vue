<template>
    <div class="thumb_carousel">
        <carousel id="sync1" ref="slider-for"
                  class="slider-for"
                  :options="configOne">
            <div :key="index" v-for="(image,index) in images"><img :src="image" alt=""></div>


        </carousel>
        <div class="card"></div>

        <carousel id="sync2" ref="slider-nav"
                  class="slider-nav"
                  :options="configTwo">
            <div :key="index" v-for="(image,index) in images"><img :src="image" alt=""></div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-slick'

    export default {
        name: "thumbCarousel",
        components: {carousel},
        props: {
            slidesToShow: {
                type: Number,
                default: 3
            },
            images: {
                type: Array
            }
        },
        data() {
            return {
                slidesPerPage: 4,
                syncedSecondary: true,
                configOne: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    fade: true,
                    asNavFor: '.slider-nav'
                },
                configTwo: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    dots: true,
                    centerMode: true,
                    focusOnSelect: true
                }
            }
        },
        methods: {
            onChanged() {
                alert('changed')
            }
        },

    }
</script>

<style scoped lang="scss">
    .thumb_carousel {
        width: 100%;
        height: auto;

    }

    #sync1 {
        .slick-slide {
            div {
                max-width: 800px;
                width: 100%;
                height: 400px;

                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }
        }

    }

    #sync2 {
        margin-top: 10px;

        .slick-slide {

            div {
                max-width: 300px;
                width: 300px;
                height: 120px;

                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }
        }

    }
</style>
