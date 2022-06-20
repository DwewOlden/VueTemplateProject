<template>
    <div>
        <search-bar v-on:notify="onClickChild()"></search-bar>
    </div>
</template>

<script>
    export default {
        name: "HomeIndexController",
        data() {
            return {
                filtertext:''
            }
        },
        methods: {
            onClickChild() {
                this.filtertext = '';
            }
        }
    }
</script>
<style scoped lang="scss">
    $fontColor: #FFF;

    .test-scoped-css {
        color: $fontColor;
    }
</style>