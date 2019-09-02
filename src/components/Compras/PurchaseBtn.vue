<template>
    <div>
        <v-btn
        flat
        :loading="loadingBtn"    
        :disabled="!formOK"
        color="red darken-3"
        style="color:white"
        @click="finishPurchase(paymentData)">Finalizar Compra</v-btn>
    </div>    
</template>
<script>
export default {
    props: ['formOK', 'paymentData', 'paymentType'],

    data(){
        return{
            loadingBtn: false,
        }
    },

    methods:{
        finishPurchase(paymentData){
            this.loadingBtn = true
            if(this.paymentType == 'credit/debit'){
                
            }else if(this.paymentType == 'virtual'){
                
            }else{
                
            }
        }
    }
}
</script>
<style>

</style>