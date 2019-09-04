<template>
    <div id="defaultHeight">
        <v-content>
            <div
                v-for="allGames in myGames"
                :key="allGames.id">
                <div v-for="games in allGames"
                    :key="games.id">
                        <v-container grid-list-sm style="width: 500px">
                        <v-card>
                            <v-card-title class="red darken-3">{{games.titulo}} 
                                <v-spacer></v-spacer>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{on}">
                                        <v-btn flat
                                        v-on="on">
                                            <v-icon>mdi-download</v-icon>
                                        </v-btn>
                                    </template>
                                    Download
                                </v-tooltip>
                            </v-card-title>
                            <v-card-text class="text-center">
                                <img :src="games.link" id="myGames">
                            </v-card-text>
                        </v-card>
                    </v-container>
                </div>
            </div>
            
            <v-container v-if="myGames == null">
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
                    No bougth games <br>
                    Come back and see some games we have chosen for you
                    </v-card-text>
                </v-card>
            </v-container>
        </v-content>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            myGames: [],
        }
    },
    
    computed: {
        userData(){
            return this.$store.getters.userLogged
        }
    },
    
    methods: {
        getMyGames(){
            axios.get('https://games-house-c6003.firebaseio.com/accounts/' + this.userData.id + '/myShopping.json')
            .then(response => {
                console.log(response)
                this.myGames = response.data 
            })
            .catch(erro => console.log(erro))
        }
    },
    created(){
        this.getMyGames()
    }
}
</script>
<style>
    #myGames{
        height: 200px;
        width: 200px;
    }
</style>