<template>
    <div>
        <v-form v-model="formOK">
            <v-card light>
                <v-card-title style="color: white" class="red darken-3; title">Confirm your data</v-card-title>
                <v-card-text>

                    <v-text-field
                    label="Username:"
                    v-model="paymentData.name"
                    :rules="[rules.required]"></v-text-field>

                    <v-text-field
                    label="E-mail:"
                    v-model="paymentData.email"
                    :rules="[rules.required,rules.email]"></v-text-field>

                    <v-text-field
                    label="Password:"
                    v-model="paymentData.password"
                    :rules="[rules.required]"
                    type="password"></v-text-field>
                    
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
import PurchasenBtn from '../PurchaseBtn.vue'

export default {
    data(){
        return{
            formOK: false,
            paymentData: {
                name: '',
                email: '',
                password: ''
            },
            paymentType: 'virtual',
            rules: {
                required: value => !!value || 'Required',
                email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Input a valid e-mail'
                }
            }
        }
    },

    components:{
        'purchase-btn-component': PurchasenBtn
    }
}
</script>
<style>

</style>