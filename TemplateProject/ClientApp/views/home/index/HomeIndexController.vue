<template>
    <div>
        Hello {{ name }} from Vue!
        <hello-world></hello-world>
        <search-bar></search-bar>
    </div>
</template>

<script>
export default {
  name: "HomeIndexController",
  data() {
    return {
      name: "world",
    }
  },
}
</script>
<style scoped lang="scss">
$fontColor: #FFF;
.test-scoped-css {
  color: $fontColor;
}
</style>