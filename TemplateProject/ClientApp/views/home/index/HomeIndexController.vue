<template>
    <div>
        <search-bar v-on:notify="onClickChild()" v-on:searchtextupdated="onSearchTextUpdated"></search-bar>
        <filter-text :msg="filtertext"></filter-text>
        <school-table :schoollist="schooldata" :filtertext="filtertext"></school-table>
    </div>
</template>

<script>
    export default {
        name: "HomeIndexController",
        data() {
            return {
                filtertext: '',
                schooldata:[]
            }
        },
        methods: {
            onClickChild() {
                this.filtertext = '';
            },
            onSearchTextUpdated(e) {
                this.filtertext = e;
            }
        },
        mounted() {
            fetch("https://localhost:7269/School")
                .then(response => response.json())
                .then(data => (this.schooldata = data));
        }
    }
</script>
<style scoped lang="scss">
    $fontColor: #FFF;

    .test-scoped-css {
        color: $fontColor;
    }
</style>