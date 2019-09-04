<template>
    <div>
        <v-content 
        style="min-height: 540px" 
        v-if="register == false">
            <v-container style="width: 600px; margin-top: 80px">
                <v-card class="elevation-3">
                    <v-card-title 
                    class="red darken-3 title">Login
                    </v-card-title>

                    <v-card-text class="white">
                        <v-text-field
                        v-model="login.user"
                        light
                        label="Username:"
                        placeholder="Enter your user">
                        </v-text-field>  

                        <v-text-field
                        v-model="login.password"
                        light
                        style="width: 300px"
                        label="Password:"
                        placeholder="Enter your password"
                        :append-icon="showPassWord? 'visibility' : 'visibility_off'"
                        @click:append="showPassWord = !showPassWord"
                        :type="showPassWord ? 'text' : 'password'">
                        </v-text-field>
                        
                        <v-layout>
                            <v-flex>
                                <v-btn
                                flat
                                color="red"
                                :loading="loadingBtns.register"                     
                                @click="createAnAccount()">Create account</v-btn>
                            </v-flex>

                            <v-flex xs3>
                                <v-btn 
                                class="red darken-3"
                                :loading="loadingBtns.next"
                                @click="next()">Next
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>  

                <v-snackbar
                v-model="snackbarLogin"
                color="error"
                :timeout="2000"
                top>User or Password incorrect
                    <v-icon>error</v-icon>
                </v-snackbar>
                
            </v-container>
        </v-content>

        <v-content v-else>
            <v-container style="width: 600px; margin-top: 5px">
                <v-form v-model="formularioPreenchido"
                ref='formAccount'>
                    <v-card class="elevation-3">
                        <v-card-title class="red darken-3 title ">New Account</v-card-title>
                        <v-card-text class="white">
                            <v-text-field
                            light
                            v-model="newAccount.user"
                            :rules="[() => !!newAccount.user || 'Required']"
                            label="User *"
                            placeholder="Enter a user">
                            </v-text-field>

                            <v-text-field
                            light
                            v-model="newAccount.email"
                            label="E-mail *"
                            :rules="[rules.email]"
                            placeholder="Enter a e-mail">
                            </v-text-field>

                            <v-text-field
                            light
                            v-model="newAccount.birth"
                            type="date"
                            label="Birth Date *"
                            placeholder="Enter your birth date">
                            </v-text-field>

                            <v-text-field
                            light
                            v-model="newAccount.password"
                            :rules="[rules.min]"
                            label="Password *"
                            placeholder="Enter a password"
                            :append-icon="showPassWord? 'visibility' : 'visibility_off'"
                            @click:append="showPassWord = !showPassWord"
                            :type="showPassWord ? 'text' : 'password'">
                            </v-text-field>

                            <v-text-field 
                            light
                            v-model="confirmPassword"
                            label="Confirm Password *"
                            :rules="[confirmPassword == newAccount.password || 'The passwords must be the same']"
                            placeholder="Confirm the password"
                            :type="showPassWord ? 'text' : 'password'">
                            </v-text-field>

                            <v-layout>
                                <v-flex>
                                    <v-btn 
                                    class="red darken-3"
                                    :loading="loadingBtns.back"
                                    @click="backToLogin()">Back</v-btn>
                                </v-flex>

                                <v-flex xs3>
                                    <v-btn 
                                    class="red darken-3; ml-4"
                                    :loading="loadingBtns.save"
                                    :disabled="!formularioPreenchido"
                                    @click="saveAccount()">Finish</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-form>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import axios from 'axios';
import { setTimeout } from 'timers';

export default {

    created(){
        this.getCreatedAccounts()
    },

    computed: {
       allUsers(){
           return this.$store.getters.allUsers
       }
    },

    data(){
        return{
            formularioPreenchido: false,    
            snackbarLogin: false,
            showPassWord: false,
            register: false,
            confirmPassword: '',
            loadingBtns:{
                register: false,
                save: false,
                back: false,
                next: false,
            },
            defaultData:{
                user: '',
                email: '',
                birth: '',
                password: '',
                virtualPoints: 0,
            },
            newAccount:{
                user: '',
                email: '',
                birth: '',
                password: '',
                virtualPoints: 0,
            },
            defaultLogin: {
                user: '',
                password: '',
            },
            login: {
                user: '',
                password: '',
            },
            rules:{
                required: value => !value || 'Required',
                min: v => v.length >= 8 || 'Min 8 characters', 
                email: value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Input a valid e-mail'
                },
            },
        }
    },

    methods:{
        next(){
            this.loadingBtns.next = true
            for(let i = 0; i < this.allUsers.length; i++){
                if(this.login.user == this.allUsers[i].user && 
                this.login.password == this.allUsers[i].password){
                    this.$store.commit('setStatusLogged', true)
                    let userLogged = {
                        id: this.allUsers[i].id,
                        user:this.login.user,
                        virtualPoints:this.allUsers[i].virtualPoints,
                    }
                    setTimeout(() => {
                        this.$router.push({path:'/'})   
                        this.$store.dispatch('addUserLogged', userLogged)
                        this.loadingBtns.next = false
                    }, 1000) 
                }else{
                    this.snackbarLogin = false
                    setTimeout(() =>{
                        this.loadingBtns.next = false
                        this.snackbarLogin = true
                    },1000)
                }
            }   
        },

        createAnAccount(){
            this.loadingBtns.register = true
            setTimeout(() =>{
                this.showPassWord = false
                this.loadingBtns.register = false
                this.register = true
            }, 1000)
        },

        getCreatedAccounts(){
            axios.get('https://games-house-c6003.firebaseio.com/accounts.json')
            .then(res => {
            console.log(res)
            const data = res.data
            for (let key in data){
                const account =  data[key]
                account.id = key
                this.$store.dispatch('addAllUsersAccounts', account)
                }
            })
            .catch(error => console.log(error))
        },

        backToLogin(){
            this.loadingBtns.back = true
            setTimeout(() =>{
                this.showPassWord = false
                this.$refs.formAccount.reset()
                this.loadingBtns.back = false
                this.register = false
                this.newAccount = Object.assign({}, this.defaultData)
                this.confirmPassword = '' 
            }, 1000) 
             
        },

        saveAccount(){ 
            axios.post('https://games-house-c6003.firebaseio.com/accounts.json', this.newAccount)
            .then(res => console.log(res))
            .catch(error => console.log(error))
            this.loadingBtns.save = true
            setTimeout(()=>{
                this.loadingBtns.save = false
                this.register = false
                this.newAccount = Object.assign({}, this.defaultData)
                this.$refs.formAccount.reset()
                this.confirmPassword = ''
                this.getCreatedAccounts()
            }, 1500)
        },
    }
}

</script>

<style>

</style>
