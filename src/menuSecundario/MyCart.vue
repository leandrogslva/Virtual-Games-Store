<template>
    <div id="cartAndFavorites">
        <v-content>
            <v-container v-if="myCart != ''">
                <v-layout row wrap>
                    <v-flex xs2 
                    v-for="cart in myCart"
                    :key="cart.titulo">

                        <p id="organizeText"> {{cart.titulo}} <br><b>R$ {{cart.preco}}</b> </p>
                        
                        <img :src="cart.link" id="organizeGames"/>
                        
                        <v-btn small class="blue darken-3" style="margin-left: 30px">Buy</v-btn>

                        <v-tooltip bottom
                        color="red">
                            <v-icon 
                            color="green"
                            class="darken-3"
                            slot="activator"
                            @click="removeFromCart(cart); snackbarCar = true">mdi-car</v-icon>
                            <span>Remove From Cart</span>
                        </v-tooltip>

                        <br><br>

                        <template v-if="showDescription == true">
                            <p style="font-size: 12px">{{cart.descricao}}</p>
                        </template>

                        <v-snackbar 
                        top 
                        v-model="snackbarCar" 
                        color="success"
                        :timeout= 2000>
                        {{cartGameTitle}} Was Removed From The Cart
                            <v-icon color="white">mdi-car</v-icon>
                        </v-snackbar>       
                    </v-flex>
                </v-layout>

                <v-layout row wrap class="mt-5">
                    <v-flex xs10>
                        <btns-component 
                        @openDescription="showDescription = $event"
                        ></btns-component>    
                    </v-flex>
                    <v-flex xs2>
                        <v-btn class="blue darken-3" @click="buyAll(myCart)">
                            <v-icon left>mdi-shopping</v-icon>
                            Purchase All</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
            
            <v-container v-else>
                <v-card>
                    <v-card-title 
                    class="title 
                    elevation-3 
                    red darken-3"
                    >Hello
                        <v-spacer></v-spacer>
                            <v-icon large>mdi-emoticon-tongue</v-icon>
                    </v-card-title>

                    <v-card-text 
                    id="cartMessage"
                    style="height: 250px"
                    class="text-center"> 
                    No game added to cart <br>
                    Come back and see some games we have chosen for you
                    </v-card-text>
                </v-card>
            </v-container>     
        </v-content>
    </div>
</template>

<script>
import axios from 'axios'
import DownButtons from '../components/DownBtns'

export default {
    props: ['showDescription'],

    data(){
        return{
            myCart: [],
            snackbarCar: false,
            cartGameTitle: '',
        }
    },

    created(){
       this.loadData()
    },
    
    components:{
        'btns-component': DownButtons
    },

    methods: {

        removeFromCart(cart){
            this.cartGameTitle = cart.titulo
            axios.delete('https://games-house-c6003.firebaseio.com/accounts/' + this.$store.state.userLogged.id + '/cart/' + cart.id + '.json')
            .then(res => {
                let index = this.myCart.indexOf(cart)
                this.myCart.splice(index,1) 
                console.log(res)})
            .catch(error => console.log(error))
            this.snackbarCar = false
        },

        loadData(){
            axios.get('https://games-house-c6003.firebaseio.com/accounts/' + this.$store.state.userLogged.id + '/cart.json')
            .then(res => {
                console.log(res)
                let data = res.data
                for(let key in data){
                    let game = data[key]
                    game.id = key
                    this.myCart.push(game)
                }
            }).catch(error => console.log(error))
        },

        buyAll(myCart){
            this.$router.push({path: '/compra'})
        },
    },

    
}
</script>

<style>
    #organizeGames{
        height: 200px;
        width: 200px;
        padding-right: 30px; 
    }

    #organizeText{
        padding-right: 17px;
    }

    #cartMessage{
        background-image: url('../paginasCategorias/images/game-over.jpg');
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        font-size: 18px;
    }

    #cartAndFavorites{
        min-height: 540px;
        height: auto;
        text-align: center
    }
</style>
