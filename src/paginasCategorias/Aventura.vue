<template>
    <div id="main">
        <content-component :allGames="allGames"></content-component>
    </div>
</template>

<script>
import Content from '../components/Content'

export default {
    data(){
        return{
            allGames:[
                {titulo: 'Sekiro',
                link:'https://observer.case.edu/wp-content/uploads/2019/03/SekiroLaunchPoster.jpg',
                descricao:' Jogo Sekiro',
                preco: 129.99},

                {titulo: 'Far Cry New Dawn',
                link:'https://ubistatic19-a.akamaihd.net/marketingresource/en-us/far-cry/far-cry-new-dawn/assets/images/fcb_keyart-logo-1080.jpg',
                descricao:' Jogo Far',
                preco: 119.99},

                {titulo: 'Life is Strange 2',
                link:'https://i.pinimg.com/originals/da/ea/0e/daea0e0b9076a36c4f75b4047152a2fb.jpg',
                descricao:' Jogo Life',
                preco: 89.99},

                {titulo: 'Dying Light 2',
                link:'https://images2.alphacoders.com/926/thumb-1920-926738.jpg',
                descricao:' Jogo Light',
                preco: 159.99},

                {titulo: 'Metro Exodus',
                link:'https://images3.alphacoders.com/991/991929.jpg',
                descricao:' Jogo Metro',
                preco: 119.99},

                {titulo: 'Devil May Cry 5',
                link:'https://images6.alphacoders.com/926/thumb-1920-926723.jpg',
                descricao:' Jogo Devil',
                preco: 139.99},

                {titulo: 'Skull And Bones',
                link:'https://gamesavvy.net/wp-content/uploads/2019/02/SB2.jpg',
                descricao:' Jogo Skull',
                preco: 109.99},

                {titulo: 'Days Gone',
                link:'https://m.media-amazon.com/images/M/MV5BMzdhNThjYzEtMDRmNi00MmY2LWJkMWItZWUzY2ZjOTcwOTQyXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
                descricao:' Jogo Days',
                preco: 179.99},

                {titulo: 'Middle-Earth:Shadow of War',
                link:'https://a.allegroimg.com/original/0c6a01/a1e94c5b406c91a1ece3be94dd64',
                descricao:' Jogo Middle',
                preco: 89.99},

                {titulo: 'Rise Of The Tom Raider',
                link:'http://7wallpapers.net/wp-content/uploads/7_Rise-of-the-Tomb-Raider.jpg',
                descricao:' Jogo Tomb',
                preco: 49.94},

                {titulo: 'Uncharted 4',
                link:'https://wallpapersite.com/images/wallpapers/nathan-drake-3410x1918-uncharted-4-a-thiefs-end-ps4-851.jpg',
                descricao:' Jogo Uncharted',
                preco: 59.99},

                {titulo: 'The Witcher 3',
                link:'https://i0.wp.com/mentalmars.com/wp-content/uploads/2015/05/The_Witcher_3_Wallpaper_-_Preview.jpg?fit=800%2C450&ssl=1',
                descricao:' Jogo Witcher',
                preco: 99.89},
            ]
        }
    },

    components:{
        'content-component': Content
    }
}
</script>

<style>
   
</style>
