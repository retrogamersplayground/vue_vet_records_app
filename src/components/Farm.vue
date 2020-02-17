<!--<template>
    <div>
        <ul class="collection with-header">
            <li class="collection-header">
                <h2>Farm</h2>
            </li>
            <li>
                <div class="row">
                    <form @submit.prevent="addFarm" class="col s12">
                        <div class="row">
                            <label for="farmName">Farm or Business Name</label>
                            <div class="input-field col s12">
                                <input type="text" v-model="farmName" id="farmName">
                            </div>
                        </div>
                        <button type="submit" class="btn-floating btn-large green">
                            <i class="fa fa-check"></i>
                        </button>
                    </form>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
/*import db from "./firebaseInit";
export default {
    name: 'farm',
    data: function() {
        return {
            farmId: 'farmId' + '_' + Math.round(new Date().getTime() / 1000), 
            farmName: null
        }
    },
    methods: {
        addFarm() {
        db.collection("farms")
            .add({
                farmId: this.farmId,
                farmName: this.farmName
            })
            .then(() => {
                this.$router.push({
                    name: 'dashboard',
                    params: {farmId: this.farmId}
                })
            })
            .catch(error => console.log(error));
            console.log(this.farmId)
            console.log(this.farmName)
        }
    }
}*/
</script>

<style scoped>
</style>
-->