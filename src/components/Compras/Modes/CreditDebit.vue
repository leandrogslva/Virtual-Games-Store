<template>
    <div>
        <v-form v-model="formOK">
            <v-card light>
                <v-card-title style="color: white" class="red darken-3; title"> Fill your card details</v-card-title>
                <v-card-text>
                    <v-text-field
                    label="Nome do titular:"
                    :rules="[rules.required, rules.min]"
                    placeholder="Informe seu nome completo"></v-text-field>

                    <v-text-field
                    label="CPF"
                    :rules="[rules.required, rules.cpf]"
                    v-mask="cpfMask"></v-text-field>

                    <v-text-field
                    label="Número do cartão:"
                    :rules="[rules.required, rules.cardNumber]"
                    v-mask="numberCardMask"></v-text-field>

                    <v-text-field
                    label="Data de vencimento:"
                    :rules="[rules.required, rules.date]"
                    v-mask="dataMask"></v-text-field>

                    <v-text-field
                    v-mask="cvvMask"
                    :rules="[rules.required, rules.cvv]"
                    label="Código CVV:"></v-text-field>
                </v-card-text>
            </v-card>
        </v-form>
    </div>
</template>
<script>
import { mask } from 'vue-the-mask'; 

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
            rules:{
                min: v => v.length >= 10 || 'Enter your full name',
                required: value => !!value || 'Required',
                cpf: v => v.length == this.cpfMask.length || 'Enter a valid CPF',
                cardNumber: v => v.length == this.numberCardMask.length || 'Enter a valid number card',
                cvv: v => v.length == this.cvvMask.length || 'Enter a valid cvv',
                date: v => v.length == this.dataMask.length || 'Enter the month and year'
            }
        }
    }
}
</script>
<style>

</style>