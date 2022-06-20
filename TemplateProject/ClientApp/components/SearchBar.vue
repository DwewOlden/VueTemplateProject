<template>
    <b-container>
        <b-row>
            <b-input-group class="mt-3">
                <b-form-input></b-form-input>
                <b-input-group-append>
                    <b-button @click="clearTextClicked" variant="info">Clear</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "SearchBar",

        data() {
            return {
                filtertext: ''
            };
        },
        methods: {
            clearTextClicked() {
                this.filtertext = '';
                this.$emit('notify');
            }
        },
        created() {

        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    a,
    button {
        color: #4fc08d;
    }

    button {
        background: none;
        border: solid 1px;
        border-radius: 2em;
        font: inherit;
        padding: 0.75em 2em;
    }
</style>