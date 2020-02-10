<template>
    <div>
        <template>
            <h1>PAYMENT</h1>
            <p>To sign up for our service please click the subscribe button below to begin.</p>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="MEK4MUV962238">
                <button type="submit">Subscribe</button>
            </form>

            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=H7FYRUKVPQHTQ">
            <button type="submit" class="unsub">Unsubscribe</button>
            </a>
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
button {
    padding: 20px;
    color: #ffffff;
    background-color: #2196F3;
    font-size: 24px;
    border: 1px solid #2196F3;
    border-radius: 4px;
}
button:hover {
    background-color: #ffffff;
    color: #2196F3;
    border: 1px solid #2196F3;
    border-radius: 4px;
}
.unsub {
    padding: 20px;
    color: #ffffff;
    background-color: #F44336;
    font-size: 24px;
    border: 1px solid #F44336;
    border-radius: 4px;
}
.unsub:hover {
    background-color: #ffffff;
    color: #F44336;
    border: 1px solid #F44336;
    border-radius: 4px;
}
</style>
