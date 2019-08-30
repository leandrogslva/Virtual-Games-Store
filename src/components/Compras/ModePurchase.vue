<template>
    <div>
        <v-container v-if="$route.params.selected == 'Credit Card'">
            <credit-component></credit-component>
        </v-container>

        <v-container v-else-if="$route.params.selected == 'Debit Card'">
            <debit-component></debit-component>
        </v-container>

        <v-container v-else-if="$route.params.selected == 'Bank Slip'">
            <bankslip-component></bankslip-component>
        </v-container>
        
        <v-container v-else>
            <virtual-component></virtual-component>
        </v-container>
    </div>
</template>

<script>
import Credit from './Modes/Credit.vue'
import Debit from './Modes/Debit.vue'
import BankSlip from './Modes/BankSlip.vue'
import Virtual from './Modes/Virtual.vue'

export default {
    components:{
        'credit-component': Credit,
        'debit-component': Debit,
        'bankslip-component': BankSlip,
        'virtual-component': Virtual,
    }
}
</script>

<style>

</style>