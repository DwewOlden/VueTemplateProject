<template>
    <div>
        <search-bar v-on:notify="onClickChild()" v-on:searchtextupdated="onSearchTextUpdated"></search-bar>
        <filter-text :msg="filtertext"></filter-text>
    </div>
</template>

<script>
    export default {
        name: "HomeIndexController",
        data() {
            return {
                filtertext: ''
            }
        },
        methods: {
            onClickChild() {
                this.filtertext = '';
            },
            onSearchTextUpdated(e) {
                this.filtertext = e;
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