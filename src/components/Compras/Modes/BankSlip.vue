<template>
    <div>
        <v-form v-model="formOK">
            <v-card light>
                <v-card-title style="color: white" class="red darken-3; title">Fill your data</v-card-title>
                <v-card-text>
                    <v-text-field
                    label="Name:"
                    placeholder="Enter your full name"
                    v-model="paymentData.fullName"
                    :rules="[rules.required,rules.min]"></v-text-field>

                    <v-text-field
                    label="CPF:"
                    v-mask="cpfMask"
                    v-model="paymentData.cpf"
                    :rules="[rules.required,rules.cpf]"></v-text-field>
                    
                    <purchase-btn-component 
                    style="margin-left: 115px" 
                    :formOK="formOK" 
                    :paymentData="paymentData"
                    :paymentType="paymentType"></purchase-btn-component>
                </v-card-text>
            </v-card>
        </v-form>
    </div>
</template>
<script>
import PurchaseBtn from '../PurchaseBtn.vue'
import  {mask} from 'vue-the-mask'

export default {
    directives: {
        mask
    },

    data(){
        return{
            formOK: false,
            cpfMask: '###.###.###-##',
            paymentData: {
                fullName: '',
                cpf: '',
            },
            paymentType: 'bankSlip',
            rules: {
                min: v => v.length >= 10 || 'Enter your full name',
                required: value => !!value || 'Required',
                cpf: v => v.length == this.cpfMask.length || 'Enter a valid CPF',
            }
        }
    },

    components:{
        'purchase-btn-component': PurchaseBtn
    }
}
</script>
<style>

</style>