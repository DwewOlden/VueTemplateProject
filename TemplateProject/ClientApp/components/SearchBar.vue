<template>
    <b-container>
        <b-row>
            <b-input-group class="mt-3">
                <b-form-input typeof="search" v-model="filtertext" @blur="focusOut($event,filtertext)"></b-form-input>
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
            focusOut: function (event,fx1) {
                console.debug('in the focus out method');
                console.debug('cx1:' + fx1);
                this.$emit('searchtextupdated', fx1);
            },

            searchtextchange() {
                console.debug('inthechainmethod');
               /* this.$emit('searchtextupdated', 'hello world' );*/
            },
            clearTextClicked() {
                this.filtertext = '';
                this.$emit('notify');
            },
            onChange() {
                console.debug('onChange')
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