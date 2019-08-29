<template>
    <div>
        <v-content>
            <v-footer
            dark>
                <v-card
                    class="flex"
                    tile>
                    <v-card-title class="red darken-4">
                    <strong class="subheading">Get connected with us on social networks!</strong>
                    <v-spacer></v-spacer>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-3"
                        dark
                        icon
                        @click="goToOurSocialNetworks(icon)">
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                    </v-card-title>
                    <v-card-actions class="black darken-3 justify-center">
                    &copy;2019 — <strong>Games House</strong>
                    </v-card-actions>
                </v-card>
            </v-footer>
        </v-content>
    </div>
</template>

<script>
export default {
    data () {
        return{
             icons: [
                'fab fa-facebook',
                'fab fa-twitter',
                'fab fa-linkedin',
                'fab fa-instagram'
            ]
        }
    },

    methods:{
        goToOurSocialNetworks(icon){
            if(icon == 'fab fa-facebook'){
                window.location.assign('http://www.facebook.com')
            }else if(icon == 'fab fa-twitter'){
                window.location.assign('http://www.twitter.com')
            }else if(icon == 'fab fa-linkedin'){
                window.location.assign('http://www.linkedin.com')
            }else if(icon == 'fab fa-instagram'){
                window.location.assign('http://www.instagram.com')
            }
        }
    }
}
</script>

<style>  
</style>
