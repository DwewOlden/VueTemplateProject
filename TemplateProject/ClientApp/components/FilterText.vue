<template>
    <div>
        <b-container>
            <b-row>
                <div class="mt-3">
                    <h3>The following filter is being applied:{{msg}}</h3>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "FilterText",
        props: {
            msg: String,
        },
        data() {
            return {
               
            };
        },
    }
</script>

<style scoped>
    p {
        color: red;
    }

    h3 {
        color: darkslategray;
    }
</style>