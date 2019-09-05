<template>
    <div>
        <v-content>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs8>
                        <v-layout v-for="games in toPurchase" :key='games.id' row wrap>
                            <v-flex xs4 mt-2>
                                <img :src="games.link" id="organizeGamesToBuy">
                            </v-flex>

                            <v-flex xs6 class="text-center" mt-5>
                                <p> {{games.descricao}} </p>

                                <v-btn
                                    class="red darken-3"
                                    @click="removeGame(games)">remove game
                                </v-btn>

                                <p>R$: {{games.preco}}</p>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    
                    <v-flex xs4>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-card light>
                                    <v-card-title style="color: white" class="red darken-3 title">Payment Modes</v-card-title>
                                    <v-card-text>
                                        <v-radio-group :rules="[rules.required]" v-for="types in paymentTypes" :key="types" v-model="selectedPayment" >
                                            <v-radio color="red darken-3" :label="types" :value="types"></v-radio>
                                        </v-radio-group>
                                        <v-text-field v-if="selectedPayment != 'Virtual Points'"
                                            label="Total:"
                                            prefix="R$ "
                                            disabled
                                            :value="total">
                                        </v-text-field>

                                        <v-text-field v-if="selectedPayment == 'Virtual Points'"
                                            label="Total in VPs:"
                                            disabled
                                            :value="totalInVirtualPoints">
                                        </v-text-field>
                                    </v-card-text>
                                </v-card>
                            </v-flex>

                            <v-layout v-if="toPurchase != ''">
                                <v-flex mt-3 xs12 v-if="selectedPayment == 'Credit/Debit Card'" >
                                    <credit-debit-component></credit-debit-component>
                                </v-flex>

                                <v-flex mt-3 xs12 v-else-if="selectedPayment == 'Bank Slip'">
                                    <bankslip-component></bankslip-component>
                                </v-flex>

                                <v-flex mt-3 xs12 v-else-if="selectedPayment == 'Virtual Points'">
                                    <virtual-component></virtual-component>
                                </v-flex>
                            </v-layout>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>    
</template>
<script>
import CreditDebit from './Modes/CreditDebit.vue'
import BankSlip from './Modes/BankSlip.vue'
import Virtual from './Modes/Virtual.vue'

export default {

    data(){
        return{
            paymentTypes: ['Credit/Debit Card', 'Bank Slip', 'Virtual Points'],
            selectedPayment: '',
            total: 0.00,
            totalInVirtualPoints: 0,
            rules: {
                required: value => !!value || 'Required'
            }
        }
    },

    computed:{
        toPurchase(){
            return this.$store.getters.gamesToPurchase
        },
        userData(){
            return this.$store.getters.userLogged
        }
    }, 
    
    components: {
        'credit-debit-component': CreditDebit,
        'virtual-component': Virtual,
        'bankslip-component': BankSlip,
    },

    methods: {
        calcTotalValue(){
            this.total = 0.00
            for(let i = 0; i < this.toPurchase.length; i++){
                this.total = this.total + this.toPurchase[i].preco
            }
        },

        caclTotalValueInVirtualPoints(){
            this.totalInVirtualPoints = this.toPurchase.length * 150
        },

        removeGame(game){
            let indexGame = this.toPurchase.indexOf(game)
            this.$store.dispatch('removeGameFromPurchaseList', indexGame)
            this.calcTotalValue()
            this.caclTotalValueInVirtualPoints()
        }
    },   

    created(){
        this.calcTotalValue()
        this.caclTotalValueInVirtualPoints()
    }
}
</script>

<style>
    #organizeGamesToBuy{
        height: 250px;
        width: 250px;
        padding-right: 30px; 
        position:relative;
    }
</style>