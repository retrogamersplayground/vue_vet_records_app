<template>
    <div>
        <h2>PAYMENT</h2>
        <p>To sign up for our service please click the checkout button below. Your $50 payment will automatically be completed monthly.</p>
        <!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
        <div class="buttonDiv">
            <div>
                <button id="checkout-button-plan_GhtXUAapGzZiKS" role="link">
                    Checkout
                </button>
            </div> 
        </div>
        <div id="error-message"></div>
    </div>
</template>
<script>
export default {
    name: 'payment',
    data() {
        return {
        }
    },
    mounted () {
        (function() {
        var stripe = Stripe('pk_test_rmvxS3TrkGyvqF5nIitvGu8L00PK5JMuRs');

        var checkoutButton = document.getElementById('checkout-button-plan_GhtXUAapGzZiKS');
        checkoutButton.addEventListener('click', function () {
            //When the customer clicks on the button, redirect
            //them to Checkout.
            stripe.redirectToCheckout({
            items: [{plan: 'plan_GhtXUAapGzZiKS', quantity: 1}],

            //Do not rely on the redirect to the successUrl for fulfilling
            //purchases, customers may not always reach the success_url after
            //a successful payment.
            //Instead use one of the strategies described in
            //https://stripe.com/docs/payments/checkout/fulfillment
            successUrl: window.location.protocol + 'https://hopeful-meitner-cb550e.netlify.com/#/',
            cancelUrl: window.location.protocol + 'https://hopeful-meitner-cb550e.netlify.com/landing',
            })
            .then(function (result) {
            if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer.
                var displayError = document.getElementById('error-message');
                displayError.textContent = result.error.message;
            }
            });
        });
        })();
    }
}
</script>
<style scoped>
p {
    text-align: center;
}
.buttonDiv {
    margin-top: 50px;
}
.buttonDiv div {
    text-align: center;
}
button {
    padding: 20px 50px;
    background-color: #ffffff;
    color: #4CAF50;
    font-size: 24px;
    border: 1px solid #4CAF50;
    border-radius: 4px;
}
button:hover {
    color: #ffffff;
    background-color: #4CAF50;
    border: 1px solid #ffffff;
    border-radius: 4px;
}
</style>
