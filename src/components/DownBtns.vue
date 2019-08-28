<template>
    <div>
        <v-layout row wrap>
            <v-flex xs2>
                <v-btn class="blue darken-3" 
                @click="$emit('openDescription',showDescription = !showDescription)">
                    <v-icon left>mdi-equal-box</v-icon>
                    Show Games Details 
                </v-btn>
            </v-flex> 

        </v-layout> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            showDescription: false,
            page: 1
        }
    },
}
</script>

<style>

</style>
