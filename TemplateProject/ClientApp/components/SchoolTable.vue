<template>
    <div id="schoolList">
    <li v-for="school in schoollist">
        {{school}}
    </li>
    </div>

</template>

<script>
    export default {
        name: "SchoolTable",
        props: ['schoollist'],
    }
</script>

<style scoped>
    p {
        color: red;
    }
</style>