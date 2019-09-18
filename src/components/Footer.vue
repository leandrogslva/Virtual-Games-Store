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
                    &copy;2019 — <strong> Leandro Gilberto Silva | leandrogslva@gmail.com | WhatsApp: 97636-6281</strong>
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
            let formatedNameIcon = icon.split('-')
            window.location.assign('http://www.' + formatedNameIcon[1] + '.com')
        }
    }
}
</script>

<style>  
</style>
