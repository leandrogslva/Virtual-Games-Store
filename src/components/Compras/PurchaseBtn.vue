<template>
    <div>
        <v-btn
        flat
        :loading="loadingBtn"    
        :disabled="!formOK"
        color="red darken-3"
        style="color:white"
        @click="finishPurchase()">Finish Purchase</v-btn>

        <v-snackbar 
        top
        v-model="snackbarErrorPurchase"
        color="error"
        :timeout="3000">
            You don't have enough Virtual Points to realize this purchase. <br> 
            Currently Virtual Points: {{userData.virtualPoints}}  
        </v-snackbar>

        <v-snackbar 
        top 
        v-model="snackbarErrorUserData"
        color="error"
        :timeout="3000">
            The entered data doesn't match with your user. Please check your data and try again
        </v-snackbar>

        <v-snackbar
        v-model="successPurchase"
        top
        color="success"
        :timeout="1500">
            Successful purchase. A email was send to you about the purchase information
        </v-snackbar>

        <p>{{ successPurchase }}</p>
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
            successPurchase: false,
            snackbarErrorUserData: false,
            loadingBtn: false,
            convertedVirtualPoinst: 0,
            totalInVirtualPoints: 0,
            dadosDaCompra: []
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

        finishPurchase(){   
            this.convertCashToVirtualPoinst()
            this.calcValueOfGamesInVirtualPoints()
            this.formatPurchaseData()
            this.loadingBtn = true
            if(this.paymentType == 'virtual'){
                this.virtualPointsPayment()
            }else{   
                this.otherPaymentTypes()
            }
        },

        formatPurchaseData(){
            this.dadosDaCompra = []
            for(let i = 0; i < this.gamesToPurchase.length; i++){
                this.dadosDaCompra.push(
                    {   
                        id: this.gamesToPurchase[i].id,
                        titulo: this.gamesToPurchase[i].titulo,
                        preco: this.gamesToPurchase[i].preco,
                        link: this.gamesToPurchase[i].link
                })
            }
        },

        async otherPaymentTypes(){
            await axios.post('https://virtual-games-store.firebaseio.com/accounts/' + this.userData.id + '/myShopping.json', this.dadosDaCompra)
                .then(
                    this.successPurchase = true,
                    setTimeout(() =>{
                        this.loadingBtn = false,
                        this.removeFromCart(),
                        this.addVirtualPoinst()
                        this.$router.push({path:'/myGames'})
                    }, 1500)
                    ).catch(erro => {
                        console.log(erro)
                        this.loadingBtn = false    
                }) 
        },

        async virtualPointsPayment(){
            if(this.userData.virtualPoints > this.totalInVirtualPoints){
                if(this.paymentData.name == this.userData.user && 
                this.paymentData.email == this.userData.email &&
                this.paymentData.password == this.userData.password){
                    await axios.post('https://virtual-games-store.firebaseio.com/accounts/' + this.userData.id + '/myShopping.json', this.dadosDaCompra)
                    .then(
                        this.successPurchase = true,
                        setTimeout(() =>{
                            this.loadingBtn = false,
                            this.removeFromCart(),
                            this.subtractVirtualPoints()
                            this.$router.push({path:'/myGames'})
                        }, 1500)
                    ).catch(erro => {
                        console.log(erro)
                        this.loadingBtn = false    
                    })
                }else{
                    this.snackbarErrorUserData = true
                    this.loadingBtn = false
                }
            }else{
                this.snackbarErrorPurchase = true
                this.loadingBtn = false
            }
        },

        convertCashToVirtualPoinst(){
            let valorDaCompra = 0.00
            for(let i = 0; i < this.gamesToPurchase.length; i++){
                valorDaCompra = valorDaCompra + this.gamesToPurchase[i].preco
            }
            let genetaringPoinst = valorDaCompra / 2
            this.convertedVirtualPoinst = Math.trunc(genetaringPoinst) 
        },

        calcValueOfGamesInVirtualPoints(){
            this.totalInVirtualPoints = this.gamesToPurchase.length * 150
        },

        addVirtualPoinst(){
            axios.patch("https://virtual-games-store.firebaseio.com/accounts/" + this.userData.id + ".json", 
            {   
                virtualPoints: this.convertedVirtualPoinst + this.userData.virtualPoints
            }).then(response => (
                this.$store.dispatch('updateVirtualPoints', response.data.virtualPoints)
            )).catch(erro => console.log(erro))
        },

        subtractVirtualPoints(){
             axios.patch("https://virtual-games-store.firebaseio.com/accounts/" + this.userData.id + ".json", 
            {   
                virtualPoints: this.userData.virtualPoints - this.totalInVirtualPoints
            }).then(response => (
                this.$store.dispatch('updateVirtualPoints', response.data.virtualPoints)
            )).catch(erro => console.log(erro))
        },

        removeFromCart(){
            for(let i = 0; i < this.gamesToPurchase.length; i++){
                axios.delete('https://virtual-games-store.firebaseio.com/accounts/' + this.userData.id + '/cart/' + this.gamesToPurchase[i].id + '.json')
            .catch(error => console.log(error))
            }
        },
    },

    created(){
        this.convertCashToVirtualPoinst()
        this.calcValueOfGamesInVirtualPoints()
    }
}
</script>
<style>

</style>