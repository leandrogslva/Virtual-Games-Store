<template>
    <div>
        <v-navigation-drawer
        width=130px
        fixed
        clipped
        dark
        v-model="categoriesMenu"
        app>
            <v-list>
                <v-list-tile v-for="games in categories"
                :key="games.title"
                :to="games.link">  
                    <v-list-tile-content>
                        <v-list-tile-title>{{games.title}} </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer> 
    </div>
</template>

<script>

export default {
    name: 'Drawer',
    props: {
        categoriesMenu: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            categories: [         
                {title: 'Adventure', link:'/aventura'},
                {title: 'Fight', link:'/luta'},
                {title: 'FPS', link:'/fps'},
                {title: 'Horror', link:'/Terror'},
                {title: 'RPG', link:'/rpg'},
                {title: 'Mais Vendidos', link:'/'},
            ] 
        }
    }
}
</script>
    
<style>
    
</style>
