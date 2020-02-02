<template>
    <div>
        <ul class="collection with-header">
            <li class="collection-header">
                <h2>Farm</h2>
            </li>
            <li>
                <div class="row">
                    <form @submit.prevent="addFarm" class="col s12">
                        <div class="row">
                            <label for="farm_name">Farm or Business Name</label>
                            <div class="input-field col s12">
                                <input type="text" v-model="farm_name" id="farm_name">
                            </div>
                        </div>
                        <button type="submit" class="btn-floating btn-large green">
                            <i class="fa fa-check"></i>
                        </button>
                    </form>
                </div>
            </li>
        </ul>
        <div class="fixed-action-btn">
            <router-link to="/landing" class="btn-floating btn-large grey">
                <i class="fa fa-arrow-left"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from "./firebaseInit";
export default {
    name: 'farm',
    data: function() {
        return {
            farm_id: 'farm_id' + '_' + Math.round(new Date().getTime() / 1000), 
            farm_name: null
        }
    },
    methods: {
        addFarm() {
        db.collection("farms")
            .add({
                farm_name: this.farm_name
            })
            .then(docRef => this.$router.push('/payment'))
            .catch(error => console.log(error));
            console.log(this.farm_id)
            console.log(this.farm_name)
        }
    }
}
</script>

<style scoped>
</style>
