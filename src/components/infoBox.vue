<template>
    <span class="d-flex flex-m">
        <i class="col-2 pr-2 fa " v-bind:class="this.font"></i>
        <p class="col mb-0 text-left" style="line-height: 18px;">
            <small class="text-muted">{{this.title}}</small><br>
            <strong class="text-up text-sm">{{getDesc}}</strong>
        </p>
    </span>
</template>

<script>
    export default {
        name: "infoBox",
        props:{
            font:{
                type:String
            },
            title:{
                type:String
            },
            desc:{
                type:String,
                default:"-"
            }
        },
        computed:{
            getDesc(){
               return (this.desc!=null)?this.desc:"—"
            }
        }

    }
</script>

<style scoped>
.flex-m{
margin-top: 10px;
}
</style>
