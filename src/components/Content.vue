<template>
    <div>
        <v-content>
            <v-container>
                <v-layout row wrap >
                    <v-flex xs2 
                    v-for="games in allGames"
                    :key="games.titulo">

                        <p id="organizeText">{{games.titulo}} <br>for only <br><b>R$ {{games.preco}} or <br> 150 Virtual Points</b></p>
                        <img :src="games.link" id="organizeGames"/>
                        
                        <v-btn small class="blue darken-3" @click="buy(games)">Buy</v-btn>
                
                        <v-tooltip bottom
                        color="black">
                            <v-icon 
                            style="margin-right: 20px"
                            class="darken-3"
                            slot="activator"
                            @click="addOrRemoveOnCar(games); snackbarCar = true">mdi-car</v-icon>
                            <span>Add At Cart</span>
                        </v-tooltip>

                        <br><br> 

                        <v-snackbar 
                        top 
                        v-model="snackbarCar" 
                        color="success"
                        :timeout= 2000>
                        {{carGameTitle}} Was Added at the cart
                            <v-icon color="white">mdi-car</v-icon>
                        </v-snackbar>

                        <template v-if="showDescription == true">
                            <p style="font-size: 12px">{{games.descricao}}</p>
                        </template>
                        <br>
                    </v-flex>
                </v-layout>
                <btns-component @openDescription="showDescription = $event"></btns-component> 
            </v-container>
        </v-content>  
    </div>
</template>

<script>
import DownBtns from '../components/DownBtns'
import axios from 'axios'

export default {
    props:['showDescription', 'allGames'],

    components: {
        'btns-component': DownBtns,
    },

    computed: {
        userData(){
            return this.$store.getters.userLogged
        }
    },
    
    data(){
        return{
            favorite: false,
            carGameTitle: '',
            favoriteGameTitle: '',
            snackbarCar: false,
            snackbarFavorite: false,
        }
    },

     methods:{
        addOrRemoveOnCar(games){
            this.carGameTitle = games.titulo
            axios.post('https://virtual-games-store.firebaseio.com/accounts/' + this.userData.id +'/cart.json', games)
            .catch(error => console.log(error))
        },
        
        buy(game){
            this.$store.dispatch('cleanGamesToPurchase')
            this.$store.dispatch('listGamesToPurchase', game)
            this.$router.push({path: '/payment'}) 
        }
    },

}
</script>

<style>
    #organizeGames{
        height: 200px;
        width: 200px;
        padding-right: 30px; 
    }
    #main{
        height: auto;
        color:white;
        text-align:center;
    }
    #organizeText{
        padding-right: 17px;
    }
</style>
