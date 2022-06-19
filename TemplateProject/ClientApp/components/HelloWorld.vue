<template>
    <b-container>
        <b-row>
            <b-input-group class="mt-3">
                <b-form-input></b-form-input>
                <b-input-group-append>
                    <b-button @click="doSomethingElse" variant="info">Button</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-row>>

        <div class="row">
            <h1>{{message}}</h1>{{atestvalue}}
        </div>

        <button @click="doSomething">Say hello.</button>
        
    </b-container>
</template>

<script>
    export default {
        name: "HelloWorld",

        data() {
            return {
                message: 'Welcome to Vue 3!',
                atestvalue: 1111
            };
        },
        methods: {
            doSomething() {
                this.atestvalue = 8766;
            },
            doSomethingElse() {
                console.debug('hello, the button has been clicked');
            }
        },
        created() {

        }
    };
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
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