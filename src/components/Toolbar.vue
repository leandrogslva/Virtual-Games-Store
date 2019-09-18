<template>
    <div>
        <v-toolbar 
        class="red darken-3" 
        dense
        fixed
        app
        clipped-left>
            <v-toolbar-side-icon @click="$emit('abreMenu', categoriesMenu = !categoriesMenu)"></v-toolbar-side-icon>
                <v-toolbar-title>Virtual Games Store
                    <v-icon>mdi-gamepad-variant</v-icon>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-chip 
                class="red darken-3" 
                v-if="this.loggedStatus == true"
                disabled>Virtual Poinst: {{this.userData.virtualPoints}}
                </v-chip>

                <v-btn 
                flat
                :disabled="this.loggedStatus"      
                @click="goToLogin()">{{this.userData.user || 'Login / Register'}}
                </v-btn>

                <v-menu
                bottom offset-y
                attach
                transition="scale-transition">
                    <template v-slot:activator="{on}">
                        <v-btn depressed v-on="on" class="red darken-3">
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                    </template>
                    <v-list class="red darken-3">
                        <v-list-tile
                        v-for="list in menuList"
                        :key="list.title"
                        :to="list.link">   
                            <v-list-tile-title 
                            @click="logOut(list.title)" 
                            style="font-size: 12px">{{ list.title }}
                            </v-list-tile-title>
                        </v-list-tile>
                    </v-list>                     
                </v-menu>     
        </v-toolbar>
    </div>  
</template>

<script>
import { setTimeout } from 'timers';
export default {

    name: 'Toolbar',

    data(){
        return{
            categoriesMenu: false,
            menuList:[
                {title:'My Cart', link:'/cart'},
                {title:'My Games', link:'/myGames'},
                {title:'Purchase Manual', link:'/manual' },
                {title:'LogOut'},
            ],
            defaultData: {
                id: '',
                user: ''
            }
        }
    },

    computed:{
        userData(){
            return this.$store.getters.userLogged
        },
        loggedStatus(){
            return this.$store.getters.logged
        }
    },

    methods:{
       goToLogin(){
           this.$router.push({path: '/login|register'})
       },

       logOut(title){
            if(title == 'LogOut'){
                setTimeout(() =>{
                    this.$store.dispatch('resetUserLogged', this.defaultData)  
                    this.$store.commit('resetStatusLogged', false) 
                    this.$router.push({path: '/login|register'})
                }, 1000)
            } 
       }
    }
}
</script>

<style>
   
</style>
