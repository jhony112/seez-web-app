<template>
    <div class="long_search">
        <div class="row flex-c-m">
            <div class="col-12 col-md-3">
                <model-select :options="car_options"
                              v-model="selectedCar"
                              class="select-car"
                              placeholder="Select Make">
                </model-select>
            </div>
            <div class="col-12 col-md-2">
                <model-select :options="car_models"
                              v-model="selectedModel"
                              class="select-car"
                              placeholder="Select Model">
                </model-select>
            </div>
            <div class="col-12 col-md-2">
                <model-select :options="car_years"
                              v-model="selectedYear"
                              class="select-car"
                              placeholder="Select Year">
                </model-select>
            </div>
            <div class="col-12 col-md-2">
                <model-select :options="car_price"
                              v-model="selectedPrice"
                              class="select-car"
                              placeholder="Price Range">
                </model-select>
            </div>
            <!--<div class="col-12 col-md-2">-->
            <!--<model-select :options="car_mileage"-->
            <!--v-model="selectedPrice"-->
            <!--class="select-car"-->
            <!--placeholder="Select Mileage">-->
            <!--</model-select>-->
            <!--</div>-->
            <div class="col-12 col-md-3">
                <button type="button" class="btn btn-primary  btn-block">
                    <i class="fas fa-search"></i>
                    <span class="m-l-5">
                          <strong>Show <span class="">54</span> results</strong>
                  </span>
                </button>


            </div>

        </div>


    </div>
</template>

<script>
    import {ModelSelect} from 'vue-search-select'

    export default {
        name: "longSearch",
        components: {ModelSelect},
        data() {
            return {
                car_options: [
                    {value: "", text: "All Makes"},
                    {value: "91", text: "RAM"},
                    {
                        value: "92",
                        text: "Smart"
                    },
                    {value: "1", text: "Abarth"},
                    {value: "2", text: "Acura"}, {
                        value: "3",
                        text: "Alfa Romeo"
                    }, {value: "4", text: "Aston Martin"}, {value: "5", text: "Audi"}, {
                        value: "6",
                        text: "BAIC"
                    }, {value: "7", text: "Bentley"}, {value: "8", text: "BMW"}, {
                        value: "9",
                        text: "Borgward"
                    }, {value: "10", text: "Brilliance"}, {value: "11", text: "Bugatti"}, {
                        value: "12",
                        text: "BYD"
                    }, {value: "13", text: "Cadillac"}, {value: "14", text: "Caterham"}, {
                        value: "15",
                        text: "Changan"
                    }, {value: "16", text: "Chery"}, {value: "17", text: "Chevrolet"}, {
                        value: "18",
                        text: "Chrysler"
                    }, {value: "19", text: "Citroen"}, {value: "20", text: "CMC"}, {
                        value: "21",
                        text: "Daihatsu"
                    }, {value: "22", text: "Dodge"}, {value: "23", text: "Dongfeng"}, {
                        value: "24",
                        text: "Ferrari"
                    }, {value: "25", text: "Fiat"}, {value: "26", text: "Fisker"}, {
                        value: "27",
                        text: "Ford"
                    }, {value: "28", text: "Foton"}, {value: "29", text: "GAC"}, {
                        value: "30",
                        text: "Geely"
                    }, {value: "31", text: "Genesis"}, {value: "32", text: "GMC"}, {
                        value: "33",
                        text: "Great Wall"
                    }, {value: "34", text: "Haval"}, {value: "35", text: "Honda"}, {
                        value: "36",
                        text: "Hummer"
                    }, {value: "37", text: "Hyundai"}, {value: "38", text: "Infiniti"}, {
                        value: "39",
                        text: "International"
                    }, {value: "40", text: "Isuzu"}, {value: "41", text: "JAC"}, {
                        value: "42",
                        text: "Jaguar"
                    }, {value: "43", text: "Jeep"}, {value: "44", text: "Kia"}, {
                        value: "45",
                        text: "King Long"
                    }, {value: "46", text: "Koenigsegg"}, {value: "47", text: "KTM"}, {
                        value: "48",
                        text: "Lamborghini"
                    }, {value: "49", text: "Land Rover"}, {value: "50", text: "Lexus"}, {
                        value: "51",
                        text: "Lincoln"
                    }, {value: "52", text: "Lotus"}, {value: "53", text: "Luxgen"}, {
                        value: "54",
                        text: "Mahindra"
                    }, {value: "55", text: "Maserati"}, {value: "56", text: "Maxus"}, {
                        value: "57",
                        text: "Maybach"
                    }, {value: "58", text: "Mazda"}, {value: "59", text: "McLaren"}, {
                        value: "60",
                        text: "Mercedes-Benz"
                    }, {value: "61", text: "Mercury"}, {value: "62", text: "MG"}, {
                        value: "63",
                        text: "Mini"
                    }, {value: "64", text: "Mitsubishi"}, {value: "65", text: "Morgan"}, {
                        value: "66",
                        text: "Nissan"
                    }, {value: "67", text: "Noble"}, {value: "68", text: "Opel"}, {
                        value: "69",
                        text: "Oullim"
                    }, {value: "70", text: "Pagani"}, {value: "71", text: "Peugeot"}, {
                        value: "72",
                        text: "PGO"
                    }, {value: "73", text: "Porsche"}, {value: "74", text: "Proton"}, {
                        value: "75",
                        text: "Renault"
                    }, {value: "76", text: "Rolls Royce"}, {value: "77", text: "Saab"}, {
                        value: "78",
                        text: "Seat"
                    }, {value: "79", text: "Skoda"}, {value: "80", text: "Spyker"}, {
                        value: "81",
                        text: "SsangYong"
                    }, {value: "82", text: "Subaru"}, {value: "83", text: "Suzuki"}, {
                        value: "84",
                        text: "Tata"
                    }, {value: "85", text: "Tesla"}, {value: "86", text: "Toyota"}, {
                        value: "87",
                        text: "Volkswagen"
                    }, {value: "88", text: "Volvo"}, {value: "89", text: "ZNA"}, {value: "90", text: "Zotye"}
                ],
                car_models: [],
                car_years: [
                    {value: "19-21", text: "1999 - 2001 "},
                    {value: "02-05", text: "2002 - 2005 "},
                    {value: "06-09", text: "2006 - 2009 "},
                    {value: "10-14", text: "2010 - 2014 "},
                    {value: "15-18", text: "2015 - 2018 "},
                    {value: "19", text: "2019 - Present "},
                ],
                car_price: [
                    {value: "19-21", text: "$500 - $1k "},
                    {value: "19-21", text: "$1k - $5k "},
                    {value: "19-21", text: "$6k - $10k "},
                    {value: "19-21", text: "$11k - $18k "},
                    {value: "19-21", text: "$19k - $20k "},
                    {value: "19-21", text: "$21k - $30k "},
                    {value: "19-21", text: "$31k - $40k "},
                    {value: "19-21", text: "$50k - $90k "},
                    {value: "19-21", text: "$100k - Above "},

                ],
                car_mileage: [
                    {value: "19-21", text: "1km - 1000km "},
                    {value: "19-21", text: "1000km - 5000km "},
                    {value: "19-21", text: "5000km - 10,000km "},
                    {value: "19-21", text: "10,000km - 30,000km "},
                    {value: "19-21", text: "30,000km - 50,000km "},
                    {value: "19-21", text: "50,000km - 100,000km "},
                    {value: "19-21", text: "100,000km - 200,000km "},


                ],
                selectedCar: '',
                selectedYear: '',
                selectedPrice: '',
                selectedModel: ''
            }
        },
    }
</script>

<style scoped >


    .long_search {
        width: 100%;
        padding: 10px 20px;
        border: 1px solid rgba(0, 0, 0, .1);
        background: rgba(0, 0, 0, .4);

        margin: 1px 5px 0 0;
        border-radius: 2px;
        display: flex;

    }

    .select-car {
        width: 100%;
    }

    .ui.selection.dropdown, .btn {
        border-radius: unset;
        outline: unset;
        font-weight: 400;
        padding: .98571429em 2.1em .98571429em 1em;
        border-top: unset;
        border-bottom: unset;
    }
    .ui.search.selection.dropdown>input.search, .ui.search.selection.dropdown>span.sizer{
        padding: .98571429em 2.1em .98571429em 1em!important;
    }

    .row {
        width: 100%;
        background: white;
        margin: unset;
    }

    .col-md-3 ,.col-md-2{
        padding: unset !important;

    }

</style>
