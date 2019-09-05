<template>
    <div>
        <v-btn
        flat
        :loading="loadingBtn"    
        :disabled="!formOK"
        color="red darken-3"
        style="color:white"
        @click="finishPurchase(paymentData)">Finish Purchase</v-btn>

        <v-snackbar 
        top
        v-model="snackbarErrorPurchase"
        color="error"
        :timeout="2000">
            You don't have enough Virtual Points to realize this purchase. <br> 
            Currently Virtual Points: {{userData.virtualPoints}}  
        </v-snackbar>

        <v-snackbar 
        top 
        v-model="snackbarPurchase"
        color="success"
        :timeout="2000">
            Successful Purchase. An e-mail was sended to your with the purchase data 
        </v-snackbar>
    </div>    
</template>
<script>
import { setTimeout } from 'timers';
import axios from 'axios'
export default {
    props: ['formOK', 'paymentData', 'paymentType'],

    data(){
        return{
            snackbarErrorPurchase: false,
            snackbarPurchase: false,
            loadingBtn: false,
        }
    },

    computed: {
        userData(){
            return this.$store.getters.userLogged
        },
        
        gamesToPurchase(){
            return this.$store.getters.gamesToPurchase
        }
    },

    methods:{
        finishPurchase(paymentData){
            this.loadingBtn = true
            let dadosDaCompra = []
            for(let i = 0; i < this.gamesToPurchase.length; i++){
                dadosDaCompra.push(
                    { 
                        id: this.gamesToPurchase[i].id,
                        titulo: this.gamesToPurchase[i].titulo,
                        preco: this.gamesToPurchase[i].preco,
                        link: this.gamesToPurchase[i].link
                })
            }
           if(this.paymentType == 'credit/debit'){   
                axios.post('https://virtual-games-store.firebaseio.com/accounts/' + this.userData.id + '/myShopping.json', dadosDaCompra)
                .then(response => {
                    console.log(response)
                    this.snackbarPurchase = true
                    this.loadingBtn = false
                    this.removeFromCart()
                    this.$router.push({path:'/myGames'})
                })
                .catch(erro => {
                    console.log(erro)
                    this.loadingBtn = false    
                })
            }else if(this.paymentType == 'virtual'){
                if(this.userData.virtualPoints > 10){
                     axios.post('https://virtual-games-store.firebaseio.com/accounts/' + this.userData.id + '/myShopping.json', dadosDaCompra)
                    .then(response => {
                        console.log(response)
                        this.snackbarPurchase = true
                        this.loadingBtn = false
                        this.removeFromCart()
                        this.$router.push({path:'/myGames'})
                    })
                    .catch(erro => {
                        console.log(erro)
                        this.loadingBtn = false    
                    })
                }else{
                    this.snackbarErrorPurchase = true
                    this.loadingBtn = false
                }
                
            }else if(this.paymentType == 'bankSlip'){
                 axios.post('https://virtual-games-store.firebaseio.com/accounts/' + this.userData.id + '/myShopping.json', dadosDaCompra)
                .then(response => {
                    console.log(response)
                    this.snackbarPurchase = true
                    this.loadingBtn = false
                    this.removeFromCart()
                    this.$router.push({path:'/myGames'})
                })
                .catch(erro => {
                    console.log(erro)
                    this.loadingBtn = false    
                }) 
            }
        },

        calcVirtualPoinst(){

        },

        removeFromCart(){
            for(let i = 0; i < this.gamesToPurchase.length; i++){
                axios.delete('https://virtual-games-store.firebaseio.com/accounts/' + this.userData.id + '/cart/' + this.gamesToPurchase[i].id + '.json')
            .then(res => console.log(res))
            .catch(error => console.log(error))
            }
        },
    }
}
</script>
<style>

</style>