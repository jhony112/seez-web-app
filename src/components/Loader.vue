<template>
    <div class="loader-scr">
        <div class="align-content-center">
            <div class="logo_loading">
                <svg id="logoSeez" width="141px" height="101px" viewBox="0 0 141 101" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="o" transform="translate(-40.000000, -112.000000)">
                            <g id="Group-2" transform="translate(40.000000, 112.000000)">
                                <g id="seez">
                                    <path d="M71,101 C104.137085,101 131,76.5105697 131,46.3013265 C131,16.0920833 103.852725,19.0816075 70.7156398,19.0816075 C37.5785548,19.0816075 11,16.0920833 11,46.3013265 C11,76.5105697 37.862915,101 71,101 Z"
                                          id="Oval" fill="#FFFFFF"></path>
                                    <circle id="Oval" fill="#FFFFFF" cx="112" cy="29" r="29"></circle>
                                    <circle id="Oval-Copy" fill="#FFFFFF" cx="29" cy="29" r="29"></circle>
                                    <g id="eye-right" transform="translate(98.000000, 9.000000)">
                                        <circle id="Oval" fill="#090909" cx="15" cy="15" r="15"></circle>
                                        <circle id="blinkRight" fill="#FFFFFF" cx="20.7954545" cy="9.20454545"
                                                r="4.43181818"></circle>
                                    </g>
                                    <g id="eye-left" transform="translate(13.000000, 11.000000)">
                                        <circle id="Oval" fill="#090909" cx="15" cy="15" r="15"></circle>
                                        <circle id="Oval-Copy-3" fill="#090909" cx="15" cy="15" r="15"></circle>
                                        <circle id="blinkLeft" fill="#FFFFFF" cx="20.7954545" cy="9.20454545"
                                                r="4.43181818"></circle>
                                    </g>
                                    <path d="M74.7903272,69.5621827 L79.4127866,72.5503302 C81.7318487,74.0494672 82.3965294,77.1447292 80.8973923,79.4637914 C80.7790865,79.6468024 80.6489426,79.8218833 80.5077934,79.9879141 L60.2672239,103.796444 L69.5036509,79.6660659 C69.8615183,78.7311292 69.4730058,77.675616 68.5943974,77.1958003 L62.1971473,73.7022063 C60.7430024,72.9080851 60.2079474,71.0855053 61.0020686,69.6313604 C61.0909342,69.4686353 61.1946937,69.3144988 61.3120154,69.1709293 L80.4686162,45.7285135 L73.9612871,67.3050766 C73.7040156,68.1581198 74.042064,69.0784746 74.7903272,69.5621827 Z"
                                          id="Path" fill="#000000" fill-rule="nonzero"
                                          transform="translate(71.612391, 74.762479) scale(1, -1) rotate(84.000000) translate(-71.612391, -74.762479) "></path>
                                    <ellipse id="Oval" fill="#FFFFFF" cx="123.5" cy="57.5" rx="10.5"
                                             ry="11.5"></ellipse>
                                    <ellipse id="Oval-Copy-2" fill="#FFFFFF" cx="19.5" cy="57.5" rx="10.5"
                                             ry="11.5"></ellipse>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="loading_msg">{{getMessage}}{{dots}}</div>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'Loader',
        props: {
            showFull: Boolean,
            message: {
                type: String,
                default: 'Please Wait..'
            },
        },

        computed: {
            getMessage() {
                return this.message;
            },

        },
        data() {
            return {
                isLoading: true,
                width: 55,
                dots: '..',
                timer: null,
                height: 55,
                fullPage: false
            }
        },
        mounted() {
            let vm = this;
            this.timer = setInterval(function () {
                vm.dots += ".";
                if (vm.dots.length > 2) {
                    vm.dots = "."
                }
            }, 1500)
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>

<style scoped lang="scss">
    .loader-scr {
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: 100000;
        margin: auto;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        right: 0;
        background: #0093ff;

        svg {
            width: 100%;
        }
        .logo_loading {
            width: 10em;
            height: 10em;
        }
        #logoSeez {
            animation: flickerAnimation 2s infinite;;
        }
        .loading_msg {
            margin-top: 20px;
            font-size: 1.5em;
            color: white;
            font-weight: 900;
        }
    }

    .align-content-center {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }


    @keyframes flickerAnimation {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    #blinkLeft {
        animation: blink 5s ease-in-out infinite;
    }
</style>
