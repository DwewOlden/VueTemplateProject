<template>
    <b-container>
        <b-row>
            <div id="schoolList" class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" class="col-md-2">Code</th>
                            <th scope="col" class="col-md-5">Name</th>
                            <th scope="col" class="col-md-5">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="schoolelement in filteredItems">
                            <td>{{schoolelement.code}}</td>
                            <td>{{schoolelement.name}}</td>
                            <td>{{schoolelement.description}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </b-row>
    </b-container>
    
</template>

<script>

    import('./SchoolRecord.vue');

    export default {
        name: "SchoolTable",
        props: ['schoollist','filtertext'],
        computed: {
            filteredItems() {
                return this.schoollist.filter(item => {
                    return ((item.code.toLowerCase().indexOf(this.filtertext.toLowerCase()) > -1)
                        || (item.name.toLowerCase().indexOf(this.filtertext.toLowerCase()) > -1))

                })
            }
        }
    }
</script>

<style scoped>
    p {
        color: red;
    }

    #schoolList {
        padding-top:1cm;
    }


</style>