<template>
    <div>
        <v-form v-model="formOK">
            <v-card light>
                <v-card-title style="color: white" class="red darken-3; title"> Fill your card details</v-card-title>
                <v-card-text>
                    <v-text-field
                    label="Cardholder name:"
                    :rules="[rules.required, rules.min]"
                    v-model='paymentData.fullName'></v-text-field>

                    <v-text-field
                    label="CPF:"
                    :rules="[rules.required, rules.cpf]"
                    v-model="paymentData.cpf"
                    v-mask="cpfMask"></v-text-field>

                    <v-text-field
                    label="Card Number:"
                    :rules="[rules.required, rules.cardNumber]"
                    v-model="paymentData.cardNumber"
                    v-mask="numberCardMask"></v-text-field>

                    <v-text-field
                    label="Due Date:"
                    :rules="[rules.required, rules.date]"
                    v-model="paymentData.dueDate"
                    placeholder="mm/yy"
                    v-mask="dataMask"></v-text-field>

                    <v-text-field
                    v-mask="cvvMask"
                    :rules="[rules.required, rules.cvv]"
                    v-model="paymentData.cvv"
                    label="CVV:"></v-text-field>

                    <purchase-btn-component 
                    style="margin-left: 115px" 
                    :paymentData="paymentData" 
                    :formOK="formOK"
                    :paymentType="paymentType"></purchase-btn-component>

                </v-card-text>
            </v-card>
        </v-form>
    </div>
</template>
<script>
import { mask } from 'vue-the-mask'; 
import PurchaseBtn from '../PurchaseBtn.vue'

export default {
    directives:{
        mask
    },
    
    data(){
        return{
            formOK: false,
            cpfMask: '###.###.###-##',
            numberCardMask: '####-####-####-####',
            dataMask: '##/##',
            cvvMask: '###',
            paymentData:{
                fullName: '',
                cpf: '',
                cardNumber: '',
                dueDate: '',
                cvv: '',
            },
            rules:{
                min: v => v.length >= 10 || 'Enter your full name',
                required: value => !!value || 'Required',
                cpf: v => v.length == this.cpfMask.length || 'Enter a valid CPF',
                cardNumber: v => v.length == this.numberCardMask.length || 'Enter a valid number card',
                cvv: v => v.length == this.cvvMask.length || 'Enter a valid cvv',
                date: v => v.length == this.dataMask.length || 'Enter the month and year'
            },
            paymentType: 'credit/debit'
        }
    },

    components:{
        'purchase-btn-component': PurchaseBtn
    }
}
</script>
<style>

</style>