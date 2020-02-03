<template>
    <div>
        <template>
            <h1>PAYMENT</h1>
        </template>
    </div>
</template>

<script>
import db from "./firebaseInit";
export default {
    name: 'payment',
    data: function() {
        return {
            farmId: this.$route.params.farmId,
            paid: false
        }
    },
    methods: {
        addPaymentStatus() {
        db.collection("farms")
            .add({
                paid: this.paid
            })
            .then(() => {
                this.$router.push({
                    name: 'login',
                    params: {farmId: this.farmId},
                    params: {paid: this.paid}
                })
            })
            .catch(error => console.log(error));
            console.log(this.farmId)
            console.log(this.farmName)
            console.log('Paid?' + ' ' + this.paid)
        }
    }
}
</script>

<style scoped>
</style>
