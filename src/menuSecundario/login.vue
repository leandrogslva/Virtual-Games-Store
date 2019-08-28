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
                        label="User"
                        placeholder="Enter your user">
                        </v-text-field>  

                        <v-text-field
                        v-model="login.password"
                        light
                        style="width: 300px"
                        label="Password"
                        placeholder="Enter your password"
                        :append-icon="showPassWordLogin? 'visibility' : 'visibility_off'"
                        @click:append="showPassWordLogin = !showPassWordLogin"
                        :type="showPassWordLogin ? 'text' : 'password'">
                        </v-text-field>
                        
                        <v-layout>
                            <v-flex>
                                <v-btn
                                flat
                                color="red"
                                :loading="registerLoading"                     
                                @click="createAnAccount()">Create account</v-btn>
                            </v-flex>

                            <v-flex xs3>
                                <v-btn 
                                class="red darken-3"
                                :loading="nextLoading"
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
                            :append-icon="showPassWordRegister? 'visibility' : 'visibility_off'"
                            @click:append="showPassWordRegister = !showPassWordRegister"
                            :type="showPassWordRegister ? 'text' : 'password'">
                            </v-text-field>

                            <v-text-field 
                            light
                            v-model="confirmPassword"
                            label="Confirm Password *"
                            :rules="[confirmPassword == newAccount.password || 'The passwords must be the same']"
                            placeholder="Confirm the password"
                            :type="showPassWordRegister ? 'text' : 'password'">
                            </v-text-field>

                            <v-layout>
                                <v-flex>
                                    <v-btn 
                                    class="red darken-3"
                                    :loading="backLoading"
                                    @click="backToLogin()">Cancel</v-btn>
                                </v-flex>

                                <v-flex xs3>
                                    <v-btn 
                                    class="red darken-3; ml-4"
                                    :loading="saveLoading"
                                    :disabled="!formularioPreenchido"
                                    @click="saveAccount()">Finish</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-form>
                <v-snackbar
                v-model="snackbarPassValid"
                :timeout="2000"
                color="error" 
                top>The passwords must be the same
                </v-snackbar>

                <v-snackbar 
                v-model="snackbarFields"
                :timeout="3000"
                color="error"
                top> The fields bellow must be completed
                    <v-icon>error</v-icon>
                </v-snackbar>
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

    data(){
        return{
            formularioPreenchido: false,
            animation: 'fade',
            passwordOK: false,
            fieldsOk: false,

            snackbarFields: false,
            snackbarPassValid: false,
            snackbarLogin: false,

            registerLoading: false,
            saveLoading: false,
            backLoading: false,
            nextLoading: false,
            
            showPassWordLogin: false,
            showPassWordRegister: false,
            register: false,
            confirmPassword: '',

            defaultData:{
                user: '',
                email: '',
                birth: '',
                password: '',
                confirmPassword: '',
            },
            login: {
                user: '',
                password: '',
            },
            newAccount:{
                user: '',
                email: '',
                birth: '',
                password: '',
                cart: [],
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
            for(let i = 0; i < this.$store.state.usersAccounts.length; i++){
                if(this.login.user == this.$store.state.usersAccounts[i].user && 
                this.login.password == this.$store.state.usersAccounts[i].password){
                    this.nextLoading = true
                    this.$store.state.logged = true
                    setTimeout(() => {
                        this.$router.push({path:'/'})
                        this.$store.state.userLogged.user = this.$store.state.usersAccounts[i].user 
                        this.$store.state.userLogged.id = this.$store.state.usersAccounts[i].id
                        this.nextLoading = false
                        this.login =  Object.assign({}, this.defaultData)
                    }, 1000)          
                }
            }
            if(this.$store.state.logged == false){
                this.snackbarLogin = true
            }else{
                this.snackbarLogin = false
            } 
                    
        },

        createAnAccount(){
            this.registerLoading = true
            setTimeout(() =>{
                this.registerLoading = false
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
                this.$store.state.usersAccounts.push(account)
            }
            })
            .catch(error => console.log(error))
        },

        backToLogin(){
            this.backLoading = true
            setTimeout(() =>{
                this.backLoading = false
                this.register = false
                this.newAccount = Object.assign({}, this.defaultData) 
                this.login = Object.assign({}, this.defaultData)
               
            }, 1000) 
             
        },

        saveAccount(){
            this.filledFieldsValidation()
            this.passwordValidation()
            if(this.passwordOK == true && this.fieldsOk == true){    
                axios.post('https://games-house-c6003.firebaseio.com/accounts.json', this.newAccount)
                .then(res => console.log(res))
                .catch(error => console.log(error))
                this.saveLoading = true
                setTimeout(()=>{
                    this.saveLoading = false
                    this.register = false
                    this.newAccount = Object.assign({}, this.defaultData)
                    this.$refs.formAccount.reset()
                    this.confirmPassword = ''
                    this.getCreatedAccounts()
                }, 1500)
            }    
        },

        passwordValidation(){
            if(this.newAccount.password != this.confirmPassword){
                this.snackbarPassValid = true
                this.passwordOK = false
            }else{
                this.passwordOK = true
            }
        },

        filledFieldsValidation(){
            if(this.newAccount.user == '' || this.newAccount.email == '' || this.newAccount.birth == '' 
            || this.newAccount.password == '' || this.confirmPassword == ''){
                this.fieldsOk = false
                this.snackbarFields = true
            }else{
                this.snackbarFields = false
                this.fieldsOk = true
            }
        }
    }
}

</script>

<style>

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
        transform: translateY(20px);
        }
        to {
        transform: translateY(0);
        }
    }

    @keyframes slide-out {
      from {
        transform: translateY(0);
      }
      to{
        transform: translateY(20px);
      }
    }
</style>
