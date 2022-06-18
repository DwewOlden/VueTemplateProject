<template>
    <div id="app">
        <h1>{{message}}</h1>{{atestvalue}}

        <p>
            Learn more with the
            <a href="https://v3.vuejs.org/"
               target="_blank"
               rel="noopener">Vue Docs &amp; Resources</a>.
        </p>

        <button @click="doSomething">Say hello.</button>
    </div>
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